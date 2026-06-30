import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const ROUNDS = 5;

// ── Re-declared pure helpers from js/modes/word-letters.tsx ──
const DICT: string[] = (W as unknown as WordEntry[])
  .filter((w) => /^[a-z]+$/i.test(w[0]) && w[0].length >= 3 && w[0].length <= 9)
  .map((w) => w[0].toLowerCase());

interface RoundData {
  base: string;
  possible: string[];
}

function letterCounts(word: string): Record<string, number> {
  const c: Record<string, number> = {};
  for (const ch of word) c[ch] = (c[ch] ?? 0) + 1;
  return c;
}

function canForm(word: string, base: Record<string, number>): boolean {
  const c: Record<string, number> = {};
  for (const ch of word) {
    c[ch] = (c[ch] ?? 0) + 1;
    if (c[ch] > (base[ch] ?? 0)) return false;
  }
  return true;
}

function pickBase(exclude: Set<string>): RoundData {
  const candidates = _shuf(DICT.filter((w) => w.length >= 6 && w.length <= 8 && !exclude.has(w)));
  let best: RoundData | null = null;
  for (let i = 0; i < Math.min(candidates.length, 60); i++) {
    const base = candidates[i];
    const counts = letterCounts(base);
    const possible = DICT.filter((w) => w !== base && w.length < base.length && canForm(w, counts));
    if (possible.length >= 5) return { base, possible };
    if (!best || possible.length > best.possible.length) best = { base, possible };
  }
  return best ?? { base: candidates[0] ?? 'letters', possible: [] };
}

function build(): RoundData[] {
  const rounds: RoundData[] = [];
  const used = new Set<string>();
  for (let i = 0; i < ROUNDS; i++) {
    const r = pickBase(used);
    rounds.push(r);
    used.add(r.base);
  }
  return rounds;
}

function roundDuration(r: RoundData): number {
  return Math.min(90, 20 + r.possible.length * 3);
}

describe('word-letters-logic', () => {
  describe('DICT', () => {
    it('only contains lowercase alphabetic words of length 3-9', () => {
      DICT.forEach((w) => {
        expect(w).toMatch(/^[a-z]+$/);
        expect(w.length).toBeGreaterThanOrEqual(3);
        expect(w.length).toBeLessThanOrEqual(9);
      });
    });
  });

  describe('letterCounts()', () => {
    it('counts letter frequencies', () => {
      expect(letterCounts('apple')).toEqual({ a: 1, p: 2, l: 1, e: 1 });
    });

    it('returns an empty object for an empty string', () => {
      expect(letterCounts('')).toEqual({});
    });
  });

  describe('canForm()', () => {
    it('returns true when word letters are a subset of base counts', () => {
      const base = letterCounts('apple');
      expect(canForm('ape', base)).toBe(true);
      expect(canForm('pa', base)).toBe(true);
    });

    it('returns false when word needs more of a letter than base has', () => {
      const base = letterCounts('apple'); // p:2
      expect(canForm('ppp', base)).toBe(false);
    });

    it('returns false when word contains a letter not in base', () => {
      const base = letterCounts('apple');
      expect(canForm('apex', base)).toBe(false);
    });
  });

  describe('pickBase()', () => {
    it('returns a base word of length 6-8 not in exclude set', () => {
      const r = pickBase(new Set());
      expect(r.base.length).toBeGreaterThanOrEqual(6);
      expect(r.base.length).toBeLessThanOrEqual(8);
    });

    it('every possible word can be formed from the base letters and is shorter', () => {
      const r = pickBase(new Set());
      const counts = letterCounts(r.base);
      r.possible.forEach((w) => {
        expect(canForm(w, counts)).toBe(true);
        expect(w.length).toBeLessThan(r.base.length);
        expect(w).not.toBe(r.base);
      });
    });

    it('respects the exclude set', () => {
      const r1 = pickBase(new Set());
      const r2 = pickBase(new Set([r1.base]));
      expect(r2.base).not.toBe(r1.base);
    });
  });

  describe('build()', () => {
    it('produces ROUNDS rounds with distinct base words', () => {
      const rounds = build();
      expect(rounds.length).toBe(ROUNDS);
      const bases = rounds.map((r) => r.base);
      expect(new Set(bases).size).toBe(bases.length);
    });
  });

  describe('roundDuration()', () => {
    it('is 20 + 3 per possible word, capped at 90', () => {
      expect(roundDuration({ base: 'x', possible: [] })).toBe(20);
      expect(roundDuration({ base: 'x', possible: ['a', 'b', 'c'] })).toBe(29);
      expect(roundDuration({ base: 'x', possible: new Array(50).fill('a') })).toBe(90);
    });
  });
});
