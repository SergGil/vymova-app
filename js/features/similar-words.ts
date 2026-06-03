// English Words App — js/features/similar-words.ts
// Similar word suggestions: translation-token matching + prefix similarity
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const STOP = new Set(['бути','мати','стати','який','яка','яке','свій','своя','цей','ця','той','та','такий','одна','також','дуже','більш','менш','людина','великий','малий','новий','старий','добрий','поганий','перший','другий','інший','різний','можна','треба','або','чи','але','його','її','їх','він','вона','вони','цього','того','собою']);

function _tok(s: string): string[] {
  return s.toLowerCase().replace(/\([^)]*\)/g, '').split(/[\s,;\/]+/)
    .map(t => t.replace(/[^а-яіїєёґ]/gi, '').trim())
    .filter(t => t.length >= 4 && !STOP.has(t));
}

let _synIdx: Record<string, number[]> | null = null;

function _buildSynIdx(): void {
  _synIdx = {};
  for (let i = 0; i < W.length; i++) {
    _tok((W[i] as unknown as WordEntry)[1]).forEach(t => {
      if (!(_synIdx as Record<string, number[]>)[t]) (_synIdx as Record<string, number[]>)[t] = [];
      (_synIdx as Record<string, number[]>)[t].push(i);
    });
  }
}

let _cache: Record<string, WordEntry[]> = {};

export function invalidateSimilarCache(): void {
  _cache = {};
  _synIdx = null;
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
