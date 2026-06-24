// Vymova — js/features/deck-filter.tsx
// Range selector: _refreshRangeOptions + sel-range change handler
import { useEffect, type ReactElement } from 'react';
import { t } from './i18n.ts';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { getWordsForPair } from './mode-utils.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck } from '../core/srs.ts';
import { getHardWords } from './game.ts';
import { getBookmarks } from './bookmarks.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

// Returns the filtered word list for the currently active language pair, or
// null when neither side restricts the word set (e.g. plain EN↔UA).
function _getLangDeck(): WordEntry[] | null {
  const all = W as unknown as WordEntry[];
  const filtered = getWordsForPair(all);
  return filtered.length === all.length ? null : filtered;
}

// Word entries carry a compound POS tag for the rare dual-class words
// ('n/v', 'adj/n', ...) — match against any constituent part. 'other'
// buckets the low-frequency tags that don't get their own dropdown entry.
const POS_OTHER_TAGS = new Set(['prep', 'conj', 'det', 'num', 'interj']);

function _matchesPos(w: WordEntry, target: string): boolean {
  const pos = w[5] ?? '';
  if (target === 'other') return POS_OTHER_TAGS.has(pos);
  return pos.split('/').includes(target);
}

// Intersects deck with the current language word set when in a special mode.
// Falls back to all language words if the intersection would be empty.
function _applyLangFilter(deck: WordEntry[]): WordEntry[] {
  const langDeck = _getLangDeck();
  if (!langDeck) return deck;
  const ids = new Set(langDeck.map(w => w[0]));
  const filtered = deck.filter(w => ids.has(w[0]));
  return filtered.length ? filtered : langDeck.slice();
}

function buildStaleDeck(days: number, base: WordEntry[] = W as unknown as WordEntry[]): WordEntry[] {
  const d = new Date();
  d.setDate(d.getDate() - days);
  const cutoff = d.toISOString().slice(0, 10);
  const result = base.filter(function(w) {
    const srs = (state.srsData as any)[w[0]];
    if (!srs || !srs.due) return true;
    const dt = new Date(srs.due);
    dt.setDate(dt.getDate() - (srs.interval || 1));
    return dt.toISOString().slice(0, 10) <= cutoff;
  });
  shuffle(result);
  return result.length ? result : _shuf(base).slice(0, 50);
}

export function _refreshRangeOptions(): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (!sel) return;
  const total = getWordsForPair(W as unknown as WordEntry[]).length;
  const allOpt = sel.querySelector('option[value="0"]') as HTMLOptionElement | null;
  if (allOpt) allOpt.textContent = t('cards.allWords') + ' (' + total + ')';
}

function _showToast(msg: string): void {
  const el = document.getElementById('milestone-toast');
  if (!el) return;
  el.textContent  = msg;
  el.className    = 'milestone-toast';
  void el.offsetWidth;
  el.className    = 'milestone-toast show';
  setTimeout(() => { el.className = 'milestone-toast'; }, 3500);
}

export function DeckFilterInit(): ReactElement | null {
  useEffect(() => {
    const selRange = document.getElementById('sel-range');
    const onChange = function(this: HTMLSelectElement) {
      stopAuto();
      const v        = this.value;
      const selTagEl = document.getElementById('sel-tag') as HTMLSelectElement | null;

      if (v === 'srs' || v === 'unlearned' || v.startsWith('stale')) {
        state._activeTagSet = null;
        if (selTagEl) selTagEl.value = '';
      }

      // Base deck for the current language (null = English, use full W)
      const langDeck = _getLangDeck();
      const langBase: WordEntry[] = langDeck ?? W as unknown as WordEntry[];

      let deck: WordEntry[];

      if (v === 'weak') {
        const _srsAll  = state.srsData as Record<string, { ef?: number; reps?: number; lapses?: number }>;
        const _srsWeak = Object.entries(_srsAll)
          .filter(([, d]) => d && typeof d.ef === 'number' && d.ef < 2.5)
          .sort(([, a], [, b]) => (b.lapses ?? 0) - (a.lapses ?? 0) || (a.ef ?? 2.5) - (b.ef ?? 2.5))
          .slice(0, 50);
        if (_srsWeak.length >= 5) {
          const _weakSet = new Set(_srsWeak.map(([k]) => k));
          deck = langBase.filter(w => _weakSet.has(w[0]));
          if (!deck.length) deck = langBase.slice();
        } else if (getKnownSnapshot('en').size > 0) {
          deck = Array.from(getKnownSnapshot('en')).slice().reverse()
            .map(k => langBase.find(w => w[0] === k))
            .filter(Boolean) as WordEntry[];
          if (!deck.length) deck = buildUnlearnedDeck(langBase);
          _showToast(t('range.weakFallbackKnown'));
        } else {
          deck = buildUnlearnedDeck(langBase);
          _showToast(t('range.weakFallbackNew'));
        }
        state._activeTagSet = null;
        if (selTagEl) selTagEl.value = '';
        (state._baseWords = langBase.slice());
        setDeck(deck);
        setIdx(0);
        render();
        return;
      } else if (v === 'hard') {
        const _hardWords = getHardWords(50);
        const _hardSet   = new Set(_hardWords);
        deck = langBase.filter(w => _hardSet.has(w[0]));
        if (!deck.length) {
          _showToast(t('range.noHardWords'));
          deck = buildUnlearnedDeck(langBase);
        } else {
          deck.sort((a, b) => _hardWords.indexOf(a[0]) - _hardWords.indexOf(b[0]));
        }
        state._activeTagSet = null;
        if (selTagEl) selTagEl.value = '';
        (state._baseWords = langBase.slice());
        setDeck(deck);
        setIdx(0);
        render();
        return;
      } else if (v === 'bookmarks') {
        const _bms = getBookmarks();
        deck = langBase.filter(w => _bms.has(w[0]));
        if (!deck.length) {
          _showToast(t('range.noBookmarks'));
          this.value = '0';
          (state._baseWords = langBase.slice());
          deck = langBase.slice();
          shuffle(deck);
          setDeck(deck);
          setIdx(0);
          render();
          return;
        }
        shuffle(deck);
        (state._baseWords = langBase.slice());
      } else if (v === 'unlearned') {
        (state._baseWords = langBase.slice());
        deck = buildUnlearnedDeck(langBase);
      } else if (v === 'srs') {
        (state._baseWords = langBase.slice());
        deck = buildSRSDeck(langBase);
      } else if (v.startsWith('cefr-')) {
        const cefrTarget = v.replace('cefr-', '') as import('../../data/cefr.ts').CefrLevel;
        deck = langBase.filter(w => getCefrLevel(w[0]) === cefrTarget);
        shuffle(deck);
        if (!deck.length) {
          _showToast(t('range.noCefrWords', { l: cefrTarget }));
          deck = langBase.slice();
          shuffle(deck);
        }
        state._activeTagSet = null;
        if (selTagEl) selTagEl.value = '';
        (state._baseWords = langBase.slice());
        setDeck(deck);
        setIdx(0);
        render();
        return;
      } else if (v.startsWith('pos-')) {
        const posTarget = v.replace('pos-', '');
        deck = langBase.filter(w => _matchesPos(w, posTarget));
        shuffle(deck);
        if (!deck.length) {
          _showToast(t('range.noPosWords'));
          deck = langBase.slice();
          shuffle(deck);
        }
        state._activeTagSet = null;
        if (selTagEl) selTagEl.value = '';
        (state._baseWords = langBase.slice());
        setDeck(deck);
        setIdx(0);
        render();
        return;
      } else if (v.startsWith('stale')) {
        (state._baseWords = langBase.slice());
        deck = buildStaleDeck(v === 'stale7' ? 7 : 30, langBase);
      } else {
        // Default: all words in current language
        (state._baseWords = langBase.slice());
        deck = langBase.slice();
        shuffle(deck);
        const _ats = state._activeTagSet as Set<string> | null;
        if (_ats) {
          deck = deck.filter(w => (_ats as Set<string>).has(w[0]));
          if (!deck.length) deck = langBase.filter(w => (_ats as Set<string>).has(w[0]));
          shuffle(deck);
        }
      }
      setDeck(deck);
      setIdx(0);
      render();
    };
    selRange?.addEventListener('change', onChange as EventListener);

    // Initialize options on load
    try { _refreshRangeOptions(); } catch (e) { console.warn(e); }

    return () => selRange?.removeEventListener('change', onChange as EventListener);
  }, []);

  return null;
}
