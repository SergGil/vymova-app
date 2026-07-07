import { describe, it, expect } from 'vitest';
import { tokenize, getExample, build, shuffleTokens } from '../../js/modes/sentence-builder.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.js';

function w(word: string, transl: string, example = '', exampleUa = ''): WordEntry {
  return [word, transl, example, exampleUa, '', ''] as unknown as WordEntry;
}

describe('sentence-builder-logic', () => {
  describe('tokenize()', () => {
    it('splits on whitespace and drops empty tokens', () => {
      expect(tokenize('  She works   in the garden. ')).toEqual([
        'She',
        'works',
        'in',
        'the',
        'garden.',
      ]);
    });
  });

  describe('getExample()', () => {
    it("returns the word's EN example sentence by default", () => {
      expect(getExample(w('garden', 'сад', 'She works in the garden.'))).toBe(
        'She works in the garden.',
      );
    });

    it('falls back to the raw w[2] slot when entryFor finds nothing', () => {
      expect(getExample(w('garden', 'сад', 'fallback example'))).toBe('fallback example');
    });
  });

  describe('build()', () => {
    it('returns a deck of sentence-tokenizable words, favoring 4-9 token examples', () => {
      setDeckState([]);
      const deck = build();
      expect(deck.length).toBeGreaterThan(0);
      expect(deck.length).toBeLessThanOrEqual(8);
    });
  });

  describe('shuffleTokens()', () => {
    it('returns the same tokens in a possibly different order', () => {
      const tokens = ['one', 'two', 'three', 'four', 'five'];
      const shuffled = shuffleTokens(tokens);
      expect(shuffled.slice().sort()).toEqual(tokens.slice().sort());
      expect(shuffled.length).toBe(tokens.length);
    });

    it('returns a single-token list unchanged (nothing to shuffle)', () => {
      expect(shuffleTokens(['only'])).toEqual(['only']);
    });

    it('returns an empty list unchanged', () => {
      expect(shuffleTokens([])).toEqual([]);
    });

    it('actually reorders a multi-token list at least most of the time', () => {
      const tokens = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
      let reordered = 0;
      for (let i = 0; i < 20; i++) {
        if (shuffleTokens(tokens).join(' ') !== tokens.join(' ')) reordered++;
      }
      expect(reordered).toBeGreaterThan(15);
    });
  });
});
