import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { lev } from '../../js/core/distance.ts';
import { getDeckSnapshot, setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;

// ── Re-declared pure helpers from js/modes/write.tsx ──
function isCorrect(inp: string, raw: string): boolean {
  const a = inp.trim().toLowerCase();
  if (!a) return false;
  const variants = raw
    .split(/[;,\/]/)
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  return variants.some((v) => a === v || (v.length > 3 && lev(a, v) <= 1));
}

function build(src?: WordEntry[] | null): WordEntry[] {
  const pool = _shuf(
    (src?.length
      ? src
      : getDeckSnapshot().length
        ? getDeckSnapshot().slice()
        : W.slice()) as unknown as WordEntry[],
  );
  return pool.slice(0, Math.min(SIZE, pool.length));
}

describe('write-logic', () => {
  describe('isCorrect()', () => {
    it('returns false for empty input', () => {
      expect(isCorrect('', 'hello')).toBe(false);
      expect(isCorrect('   ', 'hello')).toBe(false);
    });

    it('matches exactly (case-insensitive, trimmed)', () => {
      expect(isCorrect('Hello', 'hello')).toBe(true);
      expect(isCorrect('  hello  ', 'hello')).toBe(true);
    });

    it('matches any variant split on ; , /', () => {
      expect(isCorrect('world', 'hello; world / planet')).toBe(true);
      expect(isCorrect('planet', 'hello, world, planet')).toBe(true);
    });

    it('allows a Levenshtein distance of 1 for variants longer than 3 chars', () => {
      expect(isCorrect('helo', 'hello')).toBe(true); // distance 1 (deletion), len 5 > 3
      expect(isCorrect('worlld', 'world')).toBe(true); // distance 1 (insertion)
    });

    it('does not allow distance-1 typos for short (<=3 char) variants', () => {
      expect(isCorrect('cot', 'cat')).toBe(false); // distance 1 but len 3, not > 3
    });

    it('rejects words that do not match any variant', () => {
      expect(isCorrect('xyz', 'hello')).toBe(false);
    });
  });

  describe('build()', () => {
    it('returns up to SIZE words from W when getDeckSnapshot() is empty', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBe(SIZE);
    });

    it('uses a provided src list when given', () => {
      const src: WordEntry[] = [
        ['one', 'один', '', '', '', ''] as unknown as WordEntry,
        ['two', 'два', '', '', '', ''] as unknown as WordEntry,
      ];
      const deck = build(src);
      expect(deck.length).toBe(2);
      deck.forEach((w) => expect(src.some((s) => s[0] === w[0])).toBe(true));
    });

    it('falls back to getDeckSnapshot()/W when src is empty', () => {
      setDeckState([]);
      const deck = build([]);
      expect(deck.length).toBe(SIZE);
    });
  });
});
