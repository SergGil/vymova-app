import { describe, it, expect, beforeEach } from 'vitest';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const DC_SIZE = 10;

// ── Re-declared pure helper from js/modes/daily-challenge.tsx ──
function todayWords(): WordEntry[] {
  const today = new Date().toISOString().slice(0, 10);
  let seed = today.split('').reduce((a, c) => a * 31 + c.charCodeAt(0), 0);
  let pool = (W as unknown as WordEntry[]).filter(w => !state.known.has(w[0]));
  if (pool.length < DC_SIZE) pool = W.slice(0) as unknown as WordEntry[];
  const arr = pool.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    seed = (seed * 1664525 + 1013904223) & 0xffffffff;
    const j = Math.abs(seed) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, DC_SIZE);
}

describe('daily-challenge-logic', () => {
  beforeEach(() => {
    state.known = new Set();
  });

  describe('todayWords()', () => {
    it('returns DC_SIZE unique words', () => {
      const words = todayWords();
      expect(words.length).toBe(DC_SIZE);
      const texts = words.map(w => w[0]);
      expect(new Set(texts).size).toBe(DC_SIZE);
    });

    it('is deterministic for the same date and known set', () => {
      const a = todayWords();
      const b = todayWords();
      expect(a.map(w => w[0])).toEqual(b.map(w => w[0]));
    });

    it('excludes already-known words when enough unknown words remain', () => {
      const all = W as unknown as WordEntry[];
      // mark all but the first DC_SIZE+5 words as known
      all.slice(DC_SIZE + 5).forEach(w => state.known.add(w[0]));
      const words = todayWords();
      words.forEach(w => expect(state.known.has(w[0])).toBe(false));
    });

    it('falls back to the full word list when too few unknown words remain', () => {
      const all = W as unknown as WordEntry[];
      all.forEach(w => state.known.add(w[0])); // mark everything known
      const words = todayWords();
      expect(words.length).toBe(DC_SIZE);
    });
  });
});
