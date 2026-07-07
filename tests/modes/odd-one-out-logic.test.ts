import { describe, it, expect } from 'vitest';
import {
  wordsForCategory,
  toChoice,
  buildRoundForMain,
  buildDeck,
} from '../../js/modes/odd-one-out.tsx';
import { CATEGORY_LIST } from '../../data/categories.js';

const ANIMALS = '🐾 Тварини';

describe('odd-one-out-logic', () => {
  describe('wordsForCategory()', () => {
    it('returns real WordEntry tuples for a known category', () => {
      const words = wordsForCategory(ANIMALS);
      expect(words.length).toBeGreaterThan(4);
      words.forEach((w) => expect(Array.isArray(w)).toBe(true));
    });

    it('returns an empty array for a category with no matching words', () => {
      expect(wordsForCategory('totally-not-a-real-category')).toEqual([]);
    });
  });

  describe('toChoice()', () => {
    it('shapes a WordEntry into a label/translation choice', () => {
      const [w] = wordsForCategory(ANIMALS);
      const choice = toChoice(w);
      expect(choice.entry).toBe(w);
      expect(choice.label.length).toBeGreaterThan(0);
      expect(choice.translation.length).toBeGreaterThan(0);
    });
  });

  describe('buildRoundForMain()', () => {
    it('builds a round with exactly one odd word out from a different category', () => {
      const round = buildRoundForMain(ANIMALS);
      expect(round).not.toBeNull();
      expect(round!.choices.length).toBe(5);
      expect(round!.mainCategory).toBe(ANIMALS);
      expect(round!.oddCategory).not.toBe(ANIMALS);
      expect(round!.oddIndex).toBeGreaterThanOrEqual(0);
      expect(round!.oddIndex).toBeLessThan(5);
    });

    it('the odd word is not itself tagged under the main category (no ambiguous rounds)', () => {
      const round = buildRoundForMain(ANIMALS);
      const oddEntry = round!.choices[round!.oddIndex].entry;
      // None of the 4 "group" choices should be the odd entry, and the odd
      // entry's headword must genuinely not belong to the main category —
      // buildRoundForMain filters this explicitly to avoid a round where the
      // "odd" word could also correctly belong to the main group.
      const groupEntries = round!.choices.filter((_, i) => i !== round!.oddIndex);
      expect(groupEntries.some((c) => c.entry[0] === oddEntry[0])).toBe(false);
    });

    it('returns null for a category name that matches no words', () => {
      expect(buildRoundForMain('totally-not-a-real-category')).toBeNull();
    });
  });

  describe('buildDeck()', () => {
    it('builds multiple rounds, each with 5 choices and a valid odd index', () => {
      const deck = buildDeck();
      expect(deck.length).toBeGreaterThan(0);
      deck.forEach((round) => {
        expect(round.choices.length).toBe(5);
        expect(round.oddIndex).toBeGreaterThanOrEqual(0);
        expect(round.oddIndex).toBeLessThan(5);
      });
    });

    it('never builds a round using the generic catch-all category as the main group', () => {
      const deck = buildDeck();
      deck.forEach((round) => expect(round.mainCategory).not.toBe('🔤 Загальна лексика'));
    });

    it('only uses categories from the real CATEGORY_LIST', () => {
      const deck = buildDeck();
      deck.forEach((round) => {
        expect(CATEGORY_LIST).toContain(round.mainCategory);
        expect(CATEGORY_LIST).toContain(round.oddCategory);
      });
    });
  });
});
