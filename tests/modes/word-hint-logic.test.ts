import { describe, it, expect } from 'vitest';
import { countLetters, isAnswerCorrect } from '../../js/modes/word-hint.tsx';

describe('word-hint-logic', () => {
  describe('countLetters()', () => {
    it('counts only letters, ignoring spaces and punctuation', () => {
      expect(countLetters("don't stop")).toBe(8);
    });

    it('counts accented / non-Latin letters too', () => {
      expect(countLetters('café')).toBe(4);
      expect(countLetters('привіт')).toBe(6);
    });

    it('returns 0 for an all-punctuation string', () => {
      expect(countLetters('...')).toBe(0);
    });
  });

  describe('isAnswerCorrect()', () => {
    it('matches ignoring case and surrounding whitespace', () => {
      expect(isAnswerCorrect('  Garden ', 'garden')).toBe(true);
    });

    it('rejects an empty input even if the target is short', () => {
      expect(isAnswerCorrect('', 'cat')).toBe(false);
      expect(isAnswerCorrect('   ', 'cat')).toBe(false);
    });

    it('allows a one-typo fuzzy match only for targets longer than 3 letters', () => {
      expect(isAnswerCorrect('grden', 'garden')).toBe(true); // 1 deletion, len 6
      expect(isAnswerCorrect('cet', 'cat')).toBe(false); // len 3, no fuzzy allowed
    });

    it('rejects answers more than one edit away', () => {
      expect(isAnswerCorrect('grdn', 'garden')).toBe(false); // 2 deletions
    });
  });
});
