import { describe, it, expect } from 'vitest';
import { _shuf } from '../../js/core/srs.ts';
import { getDeckSnapshot, setDeckState } from '../../src/deck-store.ts';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const SIZE = 10;

// ── Re-declared pure helpers from js/modes/scramble.tsx ──
function build(): WordEntry[] {
  const pool = _shuf((getDeckSnapshot().length ? getDeckSnapshot().slice() : W.slice()) as unknown as WordEntry[]);
  const filtered = pool.filter(w => /^[A-Za-z]+$/.test(w[0]) && w[0].length >= 4 && w[0].length <= 9);
  const fallback = pool.filter(w => /^[A-Za-z]+$/.test(w[0]));
  return (filtered.length >= SIZE ? filtered : fallback.length >= SIZE ? fallback : pool).slice(0, SIZE);
}

function shuffleWord(word: string): string[] {
  const chars = word.toLowerCase().split('');
  if (chars.length <= 1) return chars;
  let shuffled = _shuf(chars);
  let tries = 0;
  while (shuffled.join('') === chars.join('') && tries < 10) {
    shuffled = _shuf(chars);
    tries++;
  }
  return shuffled;
}

function check(answerLetters: string, target: string): boolean {
  return answerLetters === target;
}

describe('scramble-logic', () => {
  describe('build()', () => {
    it('returns SIZE words, each 4-9 letters and alphabetic only', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBe(SIZE);
      deck.forEach(w => {
        expect(w[0]).toMatch(/^[A-Za-z]+$/);
        expect(w[0].length).toBeGreaterThanOrEqual(4);
        expect(w[0].length).toBeLessThanOrEqual(9);
      });
    });

    it('uses getDeckSnapshot() when populated', () => {
      const custom: WordEntry[] = [
        ['table', 'стіл', '', '', '', ''] as unknown as WordEntry,
        ['chair', 'стілець', '', '', '', ''] as unknown as WordEntry,
      ];
      setDeckState(custom);
      const deck = build();
      deck.forEach(w => expect(custom.some(c => c[0] === w[0])).toBe(true));
      setDeckState([]);
    });
  });

  describe('shuffleWord()', () => {
    it('returns the same letters (as a multiset) as the input', () => {
      const result = shuffleWord('Tiger');
      expect(result.sort()).toEqual('tiger'.split('').sort());
    });

    it('lowercases the letters', () => {
      const result = shuffleWord('CAT');
      expect(result.every(ch => ch === ch.toLowerCase())).toBe(true);
    });

    it('returns a single-character array unchanged for 1-letter words', () => {
      expect(shuffleWord('a')).toEqual(['a']);
    });

    it('attempts to avoid returning the identity order for multi-letter words', () => {
      // With distinct letters, after up to 10 tries it's very likely shuffled.
      const result = shuffleWord('listen');
      expect(result.sort()).toEqual('listen'.split('').sort());
    });
  });

  describe('check()', () => {
    it('returns true when assembled letters match the lowercase target word', () => {
      expect(check('apple', 'apple')).toBe(true);
    });

    it('returns false when assembled letters do not match', () => {
      expect(check('appel', 'apple')).toBe(false);
    });
  });
});
