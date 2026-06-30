// Vymova — js/core/srs.ts
// SRS / SM-2 + deck builders (TypeScript)

import type { WordEntry, SRSEntry } from '../../src/types.js';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import {
  getSrsDataSnapshot,
  getSrsDirtySnapshot,
  setSrsEntry,
  markSrsStatsClean,
} from '../../src/srs-store.ts';
import { getActiveTagSetSnapshot } from '../../src/deck-filter-store.ts';
import { today } from './today.ts';
import { t } from '../features/i18n.ts';
import { getSrsNewRemaining, recordSrsNewCard } from '../features/game.ts';

// ── Shuffle ───────────────────────────────────────────────────
export function shuffle<T>(a: T[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
export function _shuf<T>(a: T[]): T[] {
  return shuffle(a.slice());
}

// ── Date helpers ──────────────────────────────────────────────
export function addDays(dateStr: string, n: number): string {
  const d = new Date(dateStr);
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
}

// ── SM-2 update ───────────────────────────────────────────────
/** quality: 4 = correct, 1 = wrong */
export function sm2Update(word: string, quality: number): void {
  const srsData = getSrsDataSnapshot();
  const wasNew = !srsData[word]; // first-ever SRS exposure → counts against today's new-card quota
  const d = srsData[word] ?? { ef: 2.5, reps: 0, interval: 0 };
  let ef = d.ef ?? 2.5;
  let reps = d.reps ?? 0;
  let interval = d.interval ?? 0;
  let lapses = d.lapses ?? 0;

  if (quality >= 3) {
    interval = reps === 0 ? 1 : reps === 1 ? 6 : Math.round(interval * ef);
    reps++;
  } else {
    reps = 0;
    interval = 1;
    lapses++;
  }
  ef = Math.max(1.3, ef + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));

  setSrsEntry(word, {
    ef: Math.round(ef * 1000) / 1000,
    reps,
    interval,
    due: addDays(today(), interval),
    lapses,
  } satisfies SRSEntry);
  if (wasNew) recordSrsNewCard();
}

// ── SRS stats cache ───────────────────────────────────────────
let _srsLabelOpt: HTMLOptionElement | null = null;
let _srsDueEl: HTMLElement | null = null;
let _srsNewEl: HTMLElement | null = null;
let _srsStatsEl: HTMLElement | null = null;
let _srsStatsCache = { due: 0, newCards: 0, total: 0 };

export function updateSrsUI(W: readonly WordEntry[]): void {
  const srsData = getSrsDataSnapshot();
  const TODAY = today();
  const known = getKnownSnapshot('en');
  if (!getSrsDirtySnapshot()) {
    _renderSrsUI(_srsStatsCache);
    return;
  }

  let due = 0,
    newCards = 0,
    total = 0;
  W.forEach((w) => {
    const d = srsData[w[0]];
    if (d?.due) {
      total++;
      if (d.due <= TODAY) due++;
    } else if (!known.has(w[0])) newCards++;
  });
  _srsStatsCache = { due, newCards, total };
  markSrsStatsClean();
  _renderSrsUI(_srsStatsCache);
}

function _renderSrsUI({ due, newCards, total }: typeof _srsStatsCache): void {
  if (!_srsLabelOpt) _srsLabelOpt = document.querySelector('#sel-range option[value="srs"]');
  if (_srsLabelOpt) {
    if (total === 0) _srsLabelOpt.textContent = t('range.srs');
    else if (due > 0) _srsLabelOpt.textContent = t('srs.optionDue', { n: due });
    else _srsLabelOpt.textContent = t('srs.optionAllDone');
  }
  if (!_srsStatsEl) _srsStatsEl = document.getElementById('srs-stats');
  if (!_srsDueEl) _srsDueEl = document.getElementById('srs-stat-due');
  if (!_srsNewEl) _srsNewEl = document.getElementById('srs-stat-new');
  if (!_srsStatsEl) return;
  if (total === 0) {
    _srsStatsEl.style.display = 'none';
    return;
  }
  _srsStatsEl.style.display = '';
  if (_srsDueEl) {
    _srsDueEl.textContent = String(due);
    _srsDueEl.className = 'srs-stat-num srs-stat-due' + (due === 0 ? ' zero' : '');
  }
  if (_srsNewEl) {
    _srsNewEl.textContent = String(Math.min(newCards, getSrsNewRemaining()));
    _srsNewEl.className = 'srs-stat-num srs-stat-new';
  }
}

// ── Deck builders ─────────────────────────────────────────────
function _applyTagFilter(words: WordEntry[]): WordEntry[] {
  const ts = getActiveTagSetSnapshot();
  return ts ? words.filter((w) => ts.has(w[0].toLowerCase())) : words;
}

export function buildSRSDeck(words: WordEntry[]): WordEntry[] {
  const filteredWords = _applyTagFilter(words);
  const srsData = getSrsDataSnapshot();
  const TODAY = today();
  const known = getKnownSnapshot('en');
  const dueCards: WordEntry[] = [];
  const newCards: WordEntry[] = [];
  filteredWords.forEach((w) => {
    const d = srsData[w[0]];
    if (d?.due) {
      if (d.due <= TODAY) dueCards.push(w);
    } else if (!known.has(w[0])) {
      newCards.push(w);
    }
  });
  shuffle(dueCards);
  shuffle(newCards);
  let result = dueCards.concat(newCards.slice(0, getSrsNewRemaining()));
  if (!result.length) {
    // Quota exhausted with nothing due (or genuinely nothing to study) — never
    // show a blank deck: fall back to the full new-card pool, then any unlearned word.
    result = newCards.length ? newCards.slice() : filteredWords.filter((w) => !known.has(w[0]));
    if (!result.length) result = filteredWords.slice();
    shuffle(result);
  }
  return result;
}

export function buildUnlearnedDeck(words: WordEntry[]): WordEntry[] {
  const filtered = _applyTagFilter(words);
  const known = getKnownSnapshot('en');
  let result = filtered.filter((w) => !known.has(w[0]));
  if (!result.length) result = filtered.slice();
  return shuffle(result);
}

// ── Speech synthesis ──────────────────────────────────────────
export const synth = window.speechSynthesis;
export const hasSpeech = !!synth;
