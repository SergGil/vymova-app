// Vymova — js/features/similar-words.tsx
// Similar word suggestions: translation-token matching + EN-prefix similarity.
// Matching is done against whichever language is on the card front (self-
// matching, mirroring the historical ES/FR-only behaviour generalized to
// any of the 13 target languages, plus EN/UA) — see getSimilarWordsFor.
import type { ReactElement } from 'react';
import { W } from '../../data/words.js';
import { useStateVersion, notifyStateChange } from '../../src/store.ts';
import { getCwSnapshot, getFlippedSnapshot } from '../../src/deck-store.ts';
import { openWordDetail } from './word-detail.tsx';
import type { WordEntry } from '../../src/types.js';
import { getMode as _getMode, parsePair, getActiveKnownSet, headwordFor, type Code } from './mode-utils.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { t } from './i18n.ts';

function _getActiveKnown(): Set<string> {
  return getActiveKnownSet(_getMode(), getKnownSnapshot('en'));
}

const STOP_UA = new Set(['бути','мати','стати','який','яка','яке','свій','своя','цей','ця','той','та','такий','одна','також','дуже','більш','менш','людина','великий','малий','новий','старий','добрий','поганий','перший','другий','інший','різний','можна','треба','або','чи','але','його','її','їх','він','вона','вони','цього','того','собою']);
const STOP_ES = new Set(['ser','estar','tener','hacer','poder','para','como','pero','más','muy','bien','todo','cada','otro','esta','este','también','cuando','entre','sobre','hasta','desde','porque','aunque','donde','algo','alguien','mismo','parte','gran']);
const STOP_FR = new Set(['être','avoir','faire','pouvoir','pour','comme','mais','plus','très','bien','tout','toute','chaque','autre','cette','aussi','quand','entre','sur','dans','depuis','parce','bien','alors','avec','sans','leur','leurs','cela','celui','celle']);
const STOP_BY_CODE: Partial<Record<Code, Set<string>>> = { ua: STOP_UA, es: STOP_ES, fr: STOP_FR };

// Chinese/Japanese words are typically 1-3 characters — the length>=4
// threshold used for space-delimited languages would filter out almost
// every token, so these scripts get a much lower minimum.
const SHORT_TOKEN_CODES = new Set<Code>(['zh', 'ja']);

function _tok(s: string, code: Code): string[] {
  const minLen = SHORT_TOKEN_CODES.has(code) ? 1 : 4;
  const stop = STOP_BY_CODE[code];
  return (s.toLowerCase().replace(/\([^)]*\)/g, '').match(/[\p{L}]+/gu) ?? [])
    .filter(t => t.length >= minLen && !(stop && stop.has(t)));
}

let _synIdxCache: Partial<Record<Code, Record<string, number[]>>> = {};

function _buildSynIdx(code: Code): Record<string, number[]> {
  const idx: Record<string, number[]> = {};
  for (let i = 0; i < W.length; i++) {
    const headword = headwordFor(code, W[i] as unknown as WordEntry);
    if (!headword) continue;
    _tok(headword, code).forEach(t => {
      (idx[t] ??= []).push(i);
    });
  }
  return idx;
}

function _getSynIdx(code: Code): Record<string, number[]> {
  return (_synIdxCache[code] ??= _buildSynIdx(code));
}

let _cache: Record<string, WordEntry[]> = {};

export function invalidateSimilarCache(): void {
  _cache = {};
  _synIdxCache = {};
}

/**
 * Words similar to `enWord`, matched via shared tokens in `code`'s
 * translation text (`displayWord`) plus English-spelling prefix overlap
 * (always against the English headword, since that's the data's shared key).
 */
export function getSimilarWordsFor(code: Code, enWord: string, displayWord: string, maxCount = 5): WordEntry[] {
  const cacheKey = code + ':' + enWord;
  if (_cache[cacheKey]) return _cache[cacheKey];
  const idx = _getSynIdx(code);

  const counts: Record<string, number> = {};
  // 1. Translation token matching (in `code`)
  _tok(displayWord, code).forEach(t => {
    (idx[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== enWord.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity (prefix)
  const wl = enWord.toLowerCase();
  for (let i = 0; i < W.length; i++) {
    const wl2 = (W[i] as unknown as WordEntry)[0].toLowerCase();
    if (wl2 === wl) continue;
    let pLen = 0;
    while (pLen < wl.length && pLen < wl2.length && wl[pLen] === wl2[pLen]) pLen++;
    if (pLen >= 4)             counts[i] = (counts[i] ?? 0) + pLen * 3;
    if (wl.length >= 5  && wl2.includes(wl.substring(0, 4)))  counts[i] = (counts[i] ?? 0) + 8;
    if (wl2.length >= 5 && wl.includes(wl2.substring(0, 4))) counts[i] = (counts[i] ?? 0) + 8;
  }

  const out = Object.entries(counts)
    .filter(([, s]) => s >= 8)
    .sort(([, a], [, b]) => b - a)
    .slice(0, maxCount)
    .map(([i]) => W[Number(i)] as unknown as WordEntry);

  _cache[cacheKey] = out;
  return out;
}

/** @deprecated use getSimilarWordsFor('ua', ...) — kept for existing call sites. */
export function getSimilarWords(word: string, transl: string, maxCount = 5): WordEntry[] {
  return getSimilarWordsFor('ua', word, transl, maxCount);
}

/** @deprecated use getSimilarWordsFor('es', ...) — kept for existing call sites. */
export function getSimilarWordsEs(word: string, esTransl: string, maxCount = 5): WordEntry[] {
  return getSimilarWordsFor('es', word, esTransl, maxCount);
}

/** @deprecated use getSimilarWordsFor('fr', ...) — kept for existing call sites. */
export function getSimilarWordsFr(word: string, frTransl: string, maxCount = 5): WordEntry[] {
  return getSimilarWordsFor('fr', word, frTransl, maxCount);
}

export function SimilarWordsChips(): ReactElement | null {
  useStateVersion();
  const cw = getCwSnapshot() as WordEntry | null;
  if (!cw || !getFlippedSnapshot()) return null;

  const { front, back } = parsePair(_getMode());
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;

  const similar = getSimilarWordsFor(front, cw[0], frontWord, 5);
  if (!similar.length) return null;

  return (
    <div className="similar-section" id="cb-similar">
      <div className="similar-title">{t('cards.similarTitle')}</div>
      <div className="similar-chips" id="cb-chips">
        {similar.map(w => {
          const isKnown = _getActiveKnown().has(w[0]);
          const displayWord = headwordFor(front, w) || w[0];
          const displayTransl = headwordFor(back, w) || w[1];
          return (
            <div key={w[0]} className={'sim-chip' + (isKnown ? ' known-chip' : '')}
              onClick={(e) => { e.stopPropagation(); openWordDetail(w); }}
            >
              <span className="sc-word">{displayWord}</span>
              <span className="sc-transl">{displayTransl}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function updateSimilarWords(): void {
  notifyStateChange();
}
