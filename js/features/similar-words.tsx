// Vymova — js/features/similar-words.tsx
// Similar word suggestions: translation-token matching + prefix similarity
import type { ReactElement } from 'react';
import { W } from '../../data/words.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { state } from '../../src/state.ts';
import { useStateVersion, notifyStateChange } from '../../src/store.ts';
import { openWordDetail } from './word-detail.tsx';
import type { WordEntry } from '../../src/types.js';
import { ES_MODES, FR_MODES, IT_MODES, PT_MODES, DE_MODES, HE_MODES, AR_MODES, PL_MODES, ZH_MODES, EL_MODES, JA_MODES, TR_MODES, NL_MODES, getMode as _getMode, esEntry as _esEntry, frEntry as _frEntry } from './mode-utils.ts';

function _getActiveKnown(): Set<string> {
  const mode = _getMode();
  if (ES_MODES.has(mode)) return state.knownEs;
  if (FR_MODES.has(mode)) return state.knownFr;
  if (IT_MODES.has(mode)) return state.knownIt;
  if (PT_MODES.has(mode)) return state.knownPt;
  if (DE_MODES.has(mode)) return state.knownDe;
  if (HE_MODES.has(mode)) return state.knownHe;
  if (AR_MODES.has(mode)) return state.knownAr;
  if (PL_MODES.has(mode)) return state.knownPl;
  if (ZH_MODES.has(mode)) return state.knownZh;
  if (EL_MODES.has(mode)) return state.knownEl;
  if (JA_MODES.has(mode)) return state.knownJa;
  if (TR_MODES.has(mode)) return state.knownTr;
  if (NL_MODES.has(mode)) return state.knownNl;
  return state.known;
}

const STOP = new Set(['бути','мати','стати','який','яка','яке','свій','своя','цей','ця','той','та','такий','одна','також','дуже','більш','менш','людина','великий','малий','новий','старий','добрий','поганий','перший','другий','інший','різний','можна','треба','або','чи','але','його','її','їх','він','вона','вони','цього','того','собою']);
const STOP_ES = new Set(['ser','estar','tener','hacer','poder','para','como','pero','más','muy','bien','todo','cada','otro','esta','este','también','cuando','entre','sobre','hasta','desde','porque','aunque','donde','algo','alguien','mismo','parte','gran']);
const STOP_FR = new Set(['être','avoir','faire','pouvoir','pour','comme','mais','plus','très','bien','tout','toute','chaque','autre','cette','aussi','quand','entre','sur','dans','depuis','parce','bien','alors','avec','sans','leur','leurs','cela','celui','celle']);

function _tok(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^а-яіїєёґ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP.has(t));
}

function _tokEs(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^a-záéíóúüñ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP_ES.has(t));
}

function _tokFr(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^a-zàâçéèêëîïôûùüÿœæ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP_FR.has(t));
}

let _synIdx: Record<string, number[]> | null = null;
let _synIdxEs: Record<string, number[]> | null = null;
let _synIdxFr: Record<string, number[]> | null = null;

function _buildSynIdx(): void {
  _synIdx = {};
  for (let i = 0; i < W.length; i++) {
    _tok((W[i] as unknown as WordEntry)[1]).forEach(t => {
      if (!(_synIdx as Record<string, number[]>)[t]) (_synIdx as Record<string, number[]>)[t] = [];
      (_synIdx as Record<string, number[]>)[t].push(i);
    });
  }
}

function _buildSynIdxEs(): void {
  _synIdxEs = {};
  const esMap = W_ES as unknown as Record<string, [string, string]>;
  for (let i = 0; i < W.length; i++) {
    const esEntry = esMap[(W[i] as unknown as WordEntry)[0]];
    if (!esEntry) continue;
    _tokEs(esEntry[0]).forEach(t => {
      if (!(_synIdxEs as Record<string, number[]>)[t]) (_synIdxEs as Record<string, number[]>)[t] = [];
      (_synIdxEs as Record<string, number[]>)[t].push(i);
    });
  }
}

function _buildSynIdxFr(): void {
  _synIdxFr = {};
  const frMap = W_FR as unknown as Record<string, [string, string]>;
  for (let i = 0; i < W.length; i++) {
    const frEntry = frMap[(W[i] as unknown as WordEntry)[0]];
    if (!frEntry) continue;
    _tokFr(frEntry[0]).forEach(t => {
      if (!(_synIdxFr as Record<string, number[]>)[t]) (_synIdxFr as Record<string, number[]>)[t] = [];
      (_synIdxFr as Record<string, number[]>)[t].push(i);
    });
  }
}

let _cache: Record<string, WordEntry[]> = {};

export function invalidateSimilarCache(): void {
  _cache = {};
  _synIdx = null;
  _synIdxEs = null;
  _synIdxFr = null;
}

export function getSimilarWords(word: string, transl: string, maxCount = 5): WordEntry[] {
  if (_cache[word]) return _cache[word];
  if (!_synIdx) _buildSynIdx();

  const counts: Record<string, number> = {};
  // 1. Translation token matching
  _tok(transl).forEach(t => {
    ((_synIdx as Record<string, number[]>)[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== word.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity
  const wl = word.toLowerCase();
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

  _cache[word] = out;
  return out;
}

export function getSimilarWordsEs(word: string, esTransl: string, maxCount = 5): WordEntry[] {
  const cacheKey = 'es:' + word;
  if (_cache[cacheKey]) return _cache[cacheKey];
  if (!_synIdxEs) _buildSynIdxEs();

  const counts: Record<string, number> = {};
  // 1. Spanish translation token matching
  _tokEs(esTransl).forEach(t => {
    ((_synIdxEs as Record<string, number[]>)[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== word.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity (prefix)
  const wl = word.toLowerCase();
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

export function getSimilarWordsFr(word: string, frTransl: string, maxCount = 5): WordEntry[] {
  const cacheKey = 'fr:' + word;
  if (_cache[cacheKey]) return _cache[cacheKey];
  if (!_synIdxFr) _buildSynIdxFr();

  const counts: Record<string, number> = {};
  // 1. French translation token matching
  _tokFr(frTransl).forEach(t => {
    ((_synIdxFr as Record<string, number[]>)[t] ?? []).forEach(i => {
      if ((W[i] as unknown as WordEntry)[0].toLowerCase() !== word.toLowerCase())
        counts[i] = (counts[i] ?? 0) + t.length * 2;
    });
  });
  // 2. English spelling similarity (prefix)
  const wl = word.toLowerCase();
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

export function SimilarWordsChips(): ReactElement | null {
  useStateVersion();
  const cw = state.cw as WordEntry | null;
  if (!cw || !state.flipped) return null;

  const mode = _getMode();
  const isEsMode = ES_MODES.has(mode);
  const isFrMode = FR_MODES.has(mode);
  const esEntry = isEsMode ? _esEntry(cw[0]) : null;
  const frEntry = isFrMode ? _frEntry(cw[0]) : null;

  let similar = (isEsMode && esEntry)
    ? getSimilarWordsEs(cw[0], esEntry[0], 10).filter(w => !!_esEntry(w[0]))
    : (isFrMode && frEntry)
    ? getSimilarWordsFr(cw[0], frEntry[0], 10).filter(w => !!_frEntry(w[0]))
    : getSimilarWords(cw[0], cw[1], 5);
  if (isEsMode || isFrMode) similar = similar.slice(0, 5);
  if (!similar.length) return null;

  return (
    <div className="similar-section" id="cb-similar">
      <div className="similar-title" data-i18n="cards.similarTitle">Схожі слова</div>
      <div className="similar-chips" id="cb-chips">
        {similar.map(w => {
          const isKnown  = _getActiveKnown().has(w[0]);
          const wEsEntry = isEsMode ? _esEntry(w[0]) : null;
          const wFrEntry = isFrMode ? _frEntry(w[0]) : null;
          const displayWord = wEsEntry ? wEsEntry[0] : wFrEntry ? wFrEntry[0] : w[0];
          return (
            <div key={w[0]} className={'sim-chip' + (isKnown ? ' known-chip' : '')}
              onClick={(e) => { e.stopPropagation(); openWordDetail(w); }}
            >
              <span className="sc-word">{displayWord}</span>
              <span className="sc-transl">{w[1]}</span>
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
