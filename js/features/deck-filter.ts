// English Words App — js/features/deck-filter.ts
// Range selector: _refreshRangeOptions + sel-range change handler
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck } from '../core/srs.ts';
import { getHardWords } from './game.ts';
import { getBookmarks } from './bookmarks.ts';
import { getCefrLevel } from '../../data/cefr.ts';
import { t } from './i18n.ts';
import type { WordEntry } from '../../src/types.js';

export function buildStaleDeck(days: number): WordEntry[] {
  const d = new Date();
  d.setDate(d.getDate() - days);
  const cutoff = d.toISOString().slice(0, 10);
  const result = (W as unknown as WordEntry[]).filter(function(w) {
    const srs = (state.srsData as any)[w[0]];
    if (!srs || !srs.due) return true;
    const dt = new Date(srs.due);
    dt.setDate(dt.getDate() - (srs.interval || 1));
    return dt.toISOString().slice(0, 10) <= cutoff;
  });
  shuffle(result);
  return result.length ? result : _shuf(W as unknown as WordEntry[]).slice(0, 50);
}

window.buildStaleDeck = buildStaleDeck;

export function _refreshRangeOptions(): void {
  const sel = document.getElementById('sel-range') as HTMLSelectElement | null;
  if (!sel) return;
  const total  = W.length;
  const allOpt = sel.querySelector('option[value="0"]') as HTMLOptionElement | null;
  if (allOpt) allOpt.textContent = t('cards.allWords') + ' (' + total + ')';
  Array.prototype.slice.call(sel.querySelectorAll('option')).forEach(function(opt: HTMLOptionElement) {
    if (opt.value !== '0' && /^\d+$/.test(opt.value)) sel!.removeChild(opt);
  });
  const blocks = Math.ceil(total / 500);
  for (let i = 1; i <= blocks; i++) {
    const start = (i - 1) * 500 + 1;
    const end   = i === blocks ? total : i * 500;
    const opt   = document.createElement('option');
    opt.value       = String(i);
    opt.textContent = start + '–' + end;
    sel.appendChild(opt);
  }
}

window._refreshRangeOptions = _refreshRangeOptions;

function _showToast(msg: string): void {
  const el = document.getElementById('milestone-toast');
  if (!el) return;
  el.textContent  = msg;
  el.className    = 'milestone-toast';
  void el.offsetWidth;
  el.className    = 'milestone-toast show';
  setTimeout(() => { el.className = 'milestone-toast'; }, 3500);
}

document.getElementById('sel-range')!.addEventListener('change', function() {
  (window as any).stopAuto?.();
  const v        = (this as HTMLSelectElement).value;
  const selTagEl = document.getElementById('sel-tag') as HTMLSelectElement | null;

  if (v === 'srs' || v === 'unlearned' || v.startsWith('stale')) {
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
  }

  let deck: WordEntry[];

  if (v === 'weak') {
    const _srsAll  = state.srsData as Record<string, { ef?: number; reps?: number; lapses?: number }>;
    const _srsWeak = Object.entries(_srsAll)
      .filter(([, d]) => d && typeof d.ef === 'number' && d.ef < 2.5)
      .sort(([, a], [, b]) => (b.lapses ?? 0) - (a.lapses ?? 0) || (a.ef ?? 2.5) - (b.ef ?? 2.5))
      .slice(0, 50);
    if (_srsWeak.length >= 5) {
      const _weakSet = new Set(_srsWeak.map(([k]) => k));
      deck = (W as unknown as WordEntry[]).filter(w => _weakSet.has(w[0]));
    } else if (state.known.size > 0) {
      deck = Array.from(state.known).slice().reverse()
        .map(k => (W as unknown as WordEntry[]).find(w => w[0] === k))
        .filter(Boolean) as WordEntry[];
      if (!deck.length) deck = buildUnlearnedDeck(W as unknown as WordEntry[]);
      _showToast(t('range.weakFallbackKnown'));
    } else {
      deck = buildUnlearnedDeck(W as unknown as WordEntry[]);
      _showToast(t('range.weakFallbackNew'));
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    (window as any).setBaseWords(W.slice());
    (window as any).setDeck(deck);
    (window as any).setIdx(0);
    (window as any).render?.();
    return;
  } else if (v === 'hard') {
    const _hardWords = getHardWords(50);
    const _hardSet   = new Set(_hardWords);
    deck = (W as unknown as WordEntry[]).filter(w => _hardSet.has(w[0]));
    if (!deck.length) {
      _showToast(t('range.noHardWords'));
      deck = buildUnlearnedDeck(W as unknown as WordEntry[]);
    } else {
      deck.sort((a, b) => _hardWords.indexOf(a[0]) - _hardWords.indexOf(b[0]));
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    (window as any).setBaseWords(W.slice());
    (window as any).setDeck(deck);
    (window as any).setIdx(0);
    (window as any).render?.();
    return;
  } else if (v === 'bookmarks') {
    const _bms = getBookmarks();
    deck = (W as unknown as WordEntry[]).filter(w => _bms.has(w[0]));
    if (!deck.length) {
      _showToast(t('range.noBookmarks'));
      (this as HTMLSelectElement).value = '0';
      (window as any).setBaseWords(W.slice());
      deck = (W as unknown as WordEntry[]).slice();
      shuffle(deck);
      (window as any).setDeck(deck);
      (window as any).setIdx(0);
      (window as any).render?.();
      return;
    }
    shuffle(deck);
    (window as any).setBaseWords(W.slice());
  } else if (v === 'unlearned') {
    (window as any).setBaseWords(W.slice());
    deck = buildUnlearnedDeck(W as unknown as WordEntry[]);
  } else if (v === 'srs') {
    (window as any).setBaseWords(W.slice());
    deck = buildSRSDeck(W as unknown as WordEntry[]);
  } else if (v.startsWith('cefr-')) {
    const cefrTarget = v.replace('cefr-', '') as import('../../data/cefr.ts').CefrLevel;
    deck = (W as unknown as WordEntry[]).filter(w => getCefrLevel(w[0]) === cefrTarget);
    shuffle(deck);
    if (!deck.length) {
      _showToast(t('range.noCefrWords').replace('{l}', cefrTarget));
      deck = (W as unknown as WordEntry[]).slice();
      shuffle(deck);
    }
    state._activeTagSet = null;
    if (selTagEl) selTagEl.value = '';
    (window as any).setBaseWords(W.slice());
    (window as any).setDeck(deck);
    (window as any).setIdx(0);
    (window as any).render?.();
    return;
  } else if (v.startsWith('stale')) {
    (window as any).setBaseWords(W.slice());
    deck = buildStaleDeck(v === 'stale7' ? 7 : 30);
  } else {
    const n        = parseInt(v);
    const _lastBlk = Math.ceil(W.length / 500);
    const base     = n === 0 ? W.slice() : W.slice((n - 1) * 500, n === _lastBlk ? W.length : n * 500);
    (window as any).setBaseWords(base as unknown as WordEntry[]);
    deck = (base as unknown as WordEntry[]).slice();
    shuffle(deck);
    const _ats = state._activeTagSet as Set<string> | null;
    if (_ats) {
      deck = deck.filter(w => (_ats as Set<string>).has(w[0]));
      if (!deck.length) deck = (base as unknown as WordEntry[]).filter(w => (_ats as Set<string>).has(w[0]));
      shuffle(deck);
    }
  }
  (window as any).setDeck(deck);
  (window as any).setIdx(0);
  (window as any).render?.();
});

// Initialize options on load
try { _refreshRangeOptions(); } catch (e) { console.warn(e); }
