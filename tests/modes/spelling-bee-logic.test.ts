import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { lev } from '../../js/core/distance.ts';
import { getDeckSnapshot, setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;
const HINTS = 3;

// ── Re-declared pure helpers from js/modes/spelling-bee.tsx ──
function build(): WordEntry[] {
  const pool = _shuf((getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[]);
  const filtered = pool.filter(w => w[0].length >= 4);
  return (filtered.length >= SIZE ? filtered : pool).slice(0, SIZE);
}

function judge(input: string, answer: string): 'ok' | 'almost' | 'wrong' {
  const inp = input.toLowerCase().trim();
  const ans = answer.toLowerCase().trim();
  const isOk = inp === ans || lev(inp, ans) === 0;
  const isClose = inp.length >= 3 && lev(inp, ans) === 1;
  if (isOk) return 'ok';
  if (isClose) return 'almost';
  return 'wrong';
}

function hintReveal(word: string, hintsLeft: number): string {
  const left = hintsLeft - 1;
  const revealCount = Math.ceil(word.length * (HINTS - left) / HINTS);
  return word.slice(0, revealCount) + '_'.repeat(Math.max(0, word.length - revealCount));
}

describe('spelling-bee-logic', () => {
  describe('build()', () => {
    it('returns SIZE words, all at least 4 letters when possible', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBe(SIZE);
      deck.forEach(w => expect(w[0].length).toBeGreaterThanOrEqual(4));
    });
  });

  describe('judge()', () => {
    it('returns "ok" for an exact match', () => {
      expect(judge('hello', 'hello')).toBe('ok');
      expect(judge('  Hello ', 'hello')).toBe('ok');
    });

    it('returns "almost" for a single-letter typo on words >= 3 chars', () => {
      expect(judge('helo', 'hello')).toBe('almost');
    });

    it('returns "wrong" for very short inputs even with distance 1', () => {
      expect(judge('a', 'ab')).toBe('wrong'); // length 1 < 3
    });

    it('returns "wrong" when far from the answer', () => {
      expect(judge('xyz', 'hello')).toBe('wrong');
    });
  });

  describe('hintReveal()', () => {
    it('reveals 1/3 of the word after first hint (hintsLeft passed as 3)', () => {
      // word.length=9, HINTS=3, left=2 -> revealCount = ceil(9*1/3) = 3
      expect(hintReveal('apartment', 3)).toBe('apa' + '_'.repeat(6));
    });

    it('reveals more letters as fewer hints remain', () => {
      // left=1 -> revealCount = ceil(9*2/3) = 6
      expect(hintReveal('apartment', 2)).toBe('apartm' + '_'.repeat(3));
      // left=0 -> revealCount = ceil(9*3/3) = 9 (fully revealed)
      expect(hintReveal('apartment', 1)).toBe('apartment');
    });
  });
});
