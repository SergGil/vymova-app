// Vymova — js/features/deck-filter.tsx
// Range selector: _refreshRangeOptions + sel-range change handler
import { useEffect, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { W_IT } from '../../data/words_it.js';
import { W_PT } from '../../data/words_pt.js';
import { W_DE } from '../../data/words_de.js';
import { W_HE } from '../../data/words_he.js';
import { W_AR } from '../../data/words_ar.js';
import { W_PL } from '../../data/words_pl.js';
import { W_ZH } from '../../data/words_zh.js';
import { W_EL } from '../../data/words_el.js';
import { W_JA } from '../../data/words_ja.js';
import { W_TR } from '../../data/words_tr.js';
import { W_NL } from '../../data/words_nl.js';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES, getMode } from './mode-utils.ts';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck } from '../core/srs.ts';
import { getHardWords } from './game.ts';
import { getBookmarks } from './bookmarks.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { t } from './i18n.ts';
import { render, setDeck, setIdx, stopAuto } from '../core/card-engine.ts';
import type { WordEntry } from '../../src/types.js';

// Returns the filtered word list for the currently active language mode, or
// null when in English mode (no language restriction).
function _getLangDeck(): WordEntry[] | null {
  const m = getMode();
  let lookup: Record<string, unknown> | null = null;
  if      (ES_MODES.has(m)) lookup = W_ES as Record<string, unknown>;
  else if (FR_MODES.has(m)) lookup = W_FR as Record<string, unknown>;
  else if (IT_MODES.has(m)) lookup = W_IT as Record<string, unknown>;
  else if (PT_MODES.has(m)) lookup = W_PT as Record<string, unknown>;
  else if (DE_MODES.has(m)) lookup = W_DE as Record<string, unknown>;
  else if (HE_MODES.has(m)) lookup = W_HE as Record<string, unknown>;
  else if (AR_MODES.has(m)) lookup = W_AR as Record<string, unknown>;
  else if (PL_MODES.has(m)) lookup = W_PL as Record<string, unknown>;
  else if (ZH_MODES.has(m)) lookup = W_ZH as Record<string, unknown>;
  else if (EL_MODES.has(m)) lookup = W_EL as Record<string, unknown>;
  else if (JA_MODES.has(m)) lookup = W_JA as Record<string, unknown>;
  else if (TR_MODES.has(m)) lookup = W_TR as Record<string, unknown>;
  else if (NL_MODES.has(m)) lookup = W_NL as Record<string, unknown>;
  if (!lookup) return null;
  return (W as unknown as WordEntry[]).filter(w => Object.prototype.hasOwnProperty.call(lookup!, w[0]));
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
  const mode = (document.getElementById('sel-mode') as HTMLSelectElement | null)?.value ?? '';
  let total: number;
  if (ES_MODES.has(mode) && !new Set(['es-fr','fr-es']).has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_ES, w[0])).length;
  } else if (FR_MODES.has(mode) && !new Set(['es-fr','fr-es']).has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_FR, w[0])).length;
  } else if (IT_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_IT, w[0])).length;
  } else if (PT_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_PT, w[0])).length;
  } else if (DE_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_DE, w[0])).length;
  } else if (HE_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_HE, w[0])).length;
  } else if (AR_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_AR, w[0])).length;
  } else if (PL_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_PL, w[0])).length;
  } else if (ZH_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_ZH, w[0])).length;
  } else if (EL_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_EL, w[0])).length;
  } else if (JA_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_JA, w[0])).length;
  } else if (TR_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_TR, w[0])).length;
  } else if (NL_MODES.has(mode)) {
    total = (W as unknown as {0:string}[]).filter(w => Object.prototype.hasOwnProperty.call(W_NL, w[0])).length;
  } else {
    total = W.length;
  }
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
        } else if (state.known.size > 0) {
          deck = Array.from(state.known).slice().reverse()
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
