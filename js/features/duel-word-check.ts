// Vymova — js/features/duel-word-check.ts
// Pure word/letter helpers for the write/anagram/letters duel modes —
// answer-checking logic with zero dependency on duel room/game state.
import { W } from '../../data/words.js';
import { _shuf } from '../core/srs.ts';
import { lev } from '../core/distance.ts';
import type { WordEntry } from '../../src/types.js';
import type { DuelMode } from './duel-types.ts';

// word-letters.tsx's DICT export is a pure derivation of W (below) with no
// dependency of its own on the rest of that file — but word-letters.tsx
// transitively imports combo.ts, which imports game-bar-level.tsx, and
// game-bar-level.tsx (via sidebar.tsx) statically imports duel.ts. Importing
// DICT from word-letters.tsx here would close that game-bar-level <-> duel
// cycle (rollup's "Circular chunk" warning in production builds), so this
// recomputes the same filter directly from W instead of importing it.
let _dictSet: Set<string> | null = null;
function _getDictSet(): Set<string> {
  if (!_dictSet) {
    _dictSet = new Set(
      (W as unknown as WordEntry[])
        .filter((w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 3 && w[0].length <= 9)
        .map((w) => w[0].toLowerCase()),
    );
  }
  return _dictSet;
}

export function _letterCounts(word: string): Record<string, number> {
  const c: Record<string, number> = {};
  for (const ch of word) c[ch] = (c[ch] ?? 0) + 1;
  return c;
}

export function _canForm(word: string, base: Record<string, number>): boolean {
  const c: Record<string, number> = {};
  for (const ch of word) {
    c[ch] = (c[ch] ?? 0) + 1;
    if (c[ch] > (base[ch] ?? 0)) return false;
  }
  return true;
}

export function _shuffleLetters(word: string): string {
  const orig = word.toUpperCase().split('');
  let shuffled: string[];
  let tries = 0;
  do {
    shuffled = _shuf(orig.slice());
    tries++;
  } while (shuffled.join('') === orig.join('') && orig.length > 1 && tries < 10);
  return shuffled.join(' ');
}

// Pure answer-check for write/anagram/letters modes (item 32 prep, Фаза 5).
// `val`/`ans` мають бути вже trim()+toLowerCase().
export function _checkWriteAnswer(mode: DuelMode, val: string, ans: string): boolean {
  if (mode === 'letters')
    return val.length >= 3 && _canForm(val, _letterCounts(ans)) && _getDictSet().has(val);
  return val === ans || (ans.length > 3 && lev(val, ans) <= 1);
}
