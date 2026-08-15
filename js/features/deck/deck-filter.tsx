// Vymova — js/features/deck/deck-filter.tsx
// Range selector: _refreshRangeOptions + sel-range change handler
import { useEffect, type ReactElement } from 'react';
import { t } from '../i18n.ts';
import { W } from '../../../data/words-data/words.js';
import { getWordsForPair, getActiveKnownByLang } from '../mode/mode-utils.ts';
import { getSrsDataSnapshot } from '../../../src/srs-store.ts';
import {
  setBaseWords,
  setActiveTagSet,
  setActiveTagValue,
  setDeckFilter,
  getActiveTagSetSnapshot,
} from '../../../src/deck-filter-store.ts';
import {
  getRangeSnapshot,
  setRange,
  subscribeRange,
  isDeckRebuildSuppressed,
} from '../../../src/range-store.ts';
import { shuffle, _shuf, buildSRSDeck, buildUnlearnedDeck } from '../../core/srs.ts';
import { localDateStr } from '../../core/today.ts';
import { getHardWords } from '../game/game.ts';
import { getBookmarks } from '../bookmarks.ts';
import { getCefrLevel } from '../../../data/cefr.ts';
import { render, setDeck, setIdx, stopAuto } from '../../core/card-engine.ts';
import { MILESTONE_TOAST_HIDDEN_CLASS, MILESTONE_TOAST_SHOW_CLASS } from '../milestones.ts';
import type { WordEntry } from '../../../src/types.js';

// Returns the filtered word list for the currently active language pair, or
// null when neither side restricts the word set (e.g. plain EN↔UA).
function _getLangDeck(): WordEntry[] | null {
  const all = W as unknown as WordEntry[];
  const filtered = getWordsForPair(all);
  return filtered.length === all.length ? null : filtered;
}

// Matches Anki's default "leech" threshold — a word that's been marked
// wrong (SM-2 lapse) this many times is treated as chronically difficult,
// distinct from a plain review miscount.
const LEECH_THRESHOLD = 4;

// Word entries carry a compound POS tag for the rare dual-class words
// ('n/v', 'adj/n', ...) — match against any constituent part. 'other'
// buckets the low-frequency tags that don't get their own dropdown entry.
const POS_OTHER_TAGS = new Set(['prep', 'conj', 'det', 'num', 'interj']);

function _matchesPos(w: WordEntry, target: string): boolean {
  const pos = w[5] ?? '';
  if (target === 'other') return POS_OTHER_TAGS.has(pos);
  return pos.split('/').includes(target);
}

function buildStaleDeck(
  days: number,
  base: WordEntry[] = W as unknown as WordEntry[],
): WordEntry[] {
  const d = new Date();
  d.setDate(d.getDate() - days);
  const cutoff = localDateStr(d);
  const srsData = getSrsDataSnapshot();
  const result = base.filter(function (w) {
    const srs = srsData[w[0]];
    if (!srs || !srs.due) return true;
    // Parse srs.due from local components — `new Date(srs.due)` would parse
    // the bare YYYY-MM-DD as UTC midnight, then mixing that with the local
    // .setDate() below could shift the result by a day depending on timezone.
    const [y, m, day] = (srs.due as string).split('-').map(Number);
    const dt = new Date(y, m - 1, day);
    dt.setDate(dt.getDate() - (srs.interval || 1));
    return localDateStr(dt) <= cutoff;
  });
  shuffle(result);
  return result.length ? result : _shuf(base).slice(0, 50);
}

function _showToast(msg: string): void {
  const el = document.getElementById('milestone-toast');
  if (!el) return;
  el.textContent = msg;
  el.className = MILESTONE_TOAST_HIDDEN_CLASS;
  void el.offsetWidth;
  el.className = MILESTONE_TOAST_SHOW_CLASS;
  setTimeout(() => {
    el.className = MILESTONE_TOAST_HIDDEN_CLASS;
  }, 3500);
}

// Rebuilds the active deck for whatever range-store currently holds. Runs
// on every range-store change (DeckFilterInit's subscribeRange below) and
// also called directly by tag-filter-select.tsx's applyTagFilter() after a
// topic change (replaces the old "re-dispatch a fake 'change' event on
// #sel-range" trick a real <select> needed).
export function rebuildDeckForCurrentRange(): void {
  stopAuto();
  const v = getRangeSnapshot();

  if (v === 'srs' || v === 'unlearned' || v.startsWith('stale')) {
    setActiveTagSet(null);
    setActiveTagValue('');
  }

  // Base deck for the current language (null = English, use full W)
  const langDeck = _getLangDeck();
  const langBase: WordEntry[] = langDeck ?? (W as unknown as WordEntry[]);

  let deck: WordEntry[];

  if (v === 'weak') {
    const _srsAll = getSrsDataSnapshot() as Record<
      string,
      { ef?: number; reps?: number; lapses?: number }
    >;
    const _srsWeak = Object.entries(_srsAll)
      .filter(([, d]) => d && typeof d.ef === 'number' && d.ef < 2.5)
      .sort(([, a], [, b]) => (b.lapses ?? 0) - (a.lapses ?? 0) || (a.ef ?? 2.5) - (b.ef ?? 2.5))
      .slice(0, 50);
    if (_srsWeak.length >= 5) {
      const _weakSet = new Set(_srsWeak.map(([k]) => k));
      deck = langBase.filter((w) => _weakSet.has(w[0]));
      if (!deck.length) deck = langBase.slice();
    } else if (getActiveKnownByLang().size > 0) {
      // getActiveKnownByLang() — not a hardcoded getKnownSnapshot('en') —
      // resolves the known-words bucket for whatever language ew_learn_lang
      // currently holds, the same source _getLangDeck() above already reads
      // (via getWordsForPair) to build langBase. Reading the base English
      // set here regardless of learn language meant this "recently known,
      // reversed" refresher fallback silently never triggered for any
      // target-language learner (their real known set stayed invisible to
      // it), always falling straight through to the plain unlearned-words
      // fallback below instead.
      deck = Array.from(getActiveKnownByLang())
        .slice()
        .reverse()
        .map((k) => langBase.find((w) => w[0] === k))
        .filter(Boolean) as WordEntry[];
      if (!deck.length) deck = buildUnlearnedDeck(langBase);
      _showToast(t('range.weakFallbackKnown'));
    } else {
      deck = buildUnlearnedDeck(langBase);
      _showToast(t('range.weakFallbackNew'));
    }
    setDeckFilter(langBase.slice(), null);
    setActiveTagValue('');
    setDeck(deck);
    setIdx(0);
    render();
    return;
  } else if (v === 'hard') {
    const _hardWords = getHardWords(50);
    const _hardSet = new Set(_hardWords);
    deck = langBase.filter((w) => _hardSet.has(w[0]));
    if (!deck.length) {
      _showToast(t('range.noHardWords'));
      deck = buildUnlearnedDeck(langBase);
    } else {
      deck.sort((a, b) => _hardWords.indexOf(a[0]) - _hardWords.indexOf(b[0]));
    }
    setDeckFilter(langBase.slice(), null);
    setActiveTagValue('');
    setDeck(deck);
    setIdx(0);
    render();
    return;
  } else if (v === 'leech') {
    // "Leech" = a word whose SRS lapse count (permanent, never reset by
    // clearMistake()) has crossed the threshold — it keeps coming back
    // wrong across many review cycles, unlike 'hard' which is a
    // clearable cross-mode mistake tally.
    const _srsAll = getSrsDataSnapshot() as Record<string, { lapses?: number }>;
    const _leechEntries = Object.entries(_srsAll).filter(
      ([, d]) => (d.lapses ?? 0) >= LEECH_THRESHOLD,
    );
    const _leechSet = new Set(_leechEntries.map(([k]) => k));
    deck = langBase.filter((w) => _leechSet.has(w[0]));
    if (!deck.length) {
      _showToast(t('range.noLeechWords'));
      deck = buildUnlearnedDeck(langBase);
    } else {
      deck.sort((a, b) => (_srsAll[b[0]]?.lapses ?? 0) - (_srsAll[a[0]]?.lapses ?? 0));
    }
    setDeckFilter(langBase.slice(), null);
    setActiveTagValue('');
    setDeck(deck);
    setIdx(0);
    render();
    return;
  } else if (v === 'bookmarks') {
    const _bms = getBookmarks();
    deck = langBase.filter((w) => _bms.has(w[0]));
    if (!deck.length) {
      _showToast(t('range.noBookmarks'));
      // setRange('0') synchronously notifies every range-store listener,
      // including this very function (DeckFilterInit's subscribeRange
      // below) — the recursive call rebuilds the deck for '0' before this
      // one resumes, so there's nothing left to do here but return. This
      // relies on setRange('0') actually differing from the current value
      // ('bookmarks'); if range-store ever no-ops equal-value dispatches,
      // this fallback would need its own explicit rebuild again.
      setRange('0');
      return;
    }
    shuffle(deck);
    setBaseWords(langBase.slice());
  } else if (v === 'unlearned') {
    setBaseWords(langBase.slice());
    deck = buildUnlearnedDeck(langBase);
  } else if (v === 'srs') {
    setBaseWords(langBase.slice());
    deck = buildSRSDeck(langBase);
  } else if (v.startsWith('cefr-')) {
    const cefrTarget = v.replace('cefr-', '') as import('../../../data/cefr.ts').CefrLevel;
    deck = langBase.filter((w) => getCefrLevel(w[0]) === cefrTarget);
    shuffle(deck);
    if (!deck.length) {
      _showToast(t('range.noCefrWords', { l: cefrTarget }));
      deck = langBase.slice();
      shuffle(deck);
    }
    setDeckFilter(langBase.slice(), null);
    setActiveTagValue('');
    setDeck(deck);
    setIdx(0);
    render();
    return;
  } else if (v.startsWith('pos-')) {
    const posTarget = v.replace('pos-', '');
    deck = langBase.filter((w) => _matchesPos(w, posTarget));
    shuffle(deck);
    if (!deck.length) {
      _showToast(t('range.noPosWords'));
      deck = langBase.slice();
      shuffle(deck);
    }
    setDeckFilter(langBase.slice(), null);
    setActiveTagValue('');
    setDeck(deck);
    setIdx(0);
    render();
    return;
  } else if (v.startsWith('stale')) {
    setBaseWords(langBase.slice());
    deck = buildStaleDeck(v === 'stale7' ? 7 : 30, langBase);
  } else {
    // Default: all words in current language
    setBaseWords(langBase.slice());
    deck = langBase.slice();
    shuffle(deck);
    const _ats = getActiveTagSetSnapshot();
    if (_ats) {
      deck = deck.filter((w) => (_ats as Set<string>).has(w[0]));
      if (!deck.length) deck = langBase.filter((w) => (_ats as Set<string>).has(w[0]));
      shuffle(deck);
    }
  }
  setDeck(deck);
  setIdx(0);
  render();
}

export function DeckFilterInit(): ReactElement | null {
  useEffect(
    () =>
      subscribeRange(() => {
        if (isDeckRebuildSuppressed()) return;
        rebuildDeckForCurrentRange();
      }),
    [],
  );
  return null;
}
