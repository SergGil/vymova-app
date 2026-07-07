import { describe, it, expect } from 'vitest';
import {
  stripPunct,
  tokenize,
  findHeadwordIndex,
  matchCase,
  buildToken,
} from '../../js/modes/error-hunt.tsx';

describe('error-hunt-logic', () => {
  describe('stripPunct()', () => {
    it('strips leading and trailing punctuation but keeps interior characters', () => {
      expect(stripPunct('"garden.')).toBe('garden');
      expect(stripPunct('well-known,')).toBe('well-known');
    });

    it('leaves a plain word untouched', () => {
      expect(stripPunct('garden')).toBe('garden');
    });
  });

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

  describe('findHeadwordIndex()', () => {
    it('finds the token matching the headword, ignoring case and surrounding punctuation', () => {
      const tokens = tokenize('She works in the Garden.');
      expect(findHeadwordIndex(tokens, 'garden')).toBe(4);
    });

    it('returns -1 when the headword never appears', () => {
      const tokens = tokenize('She works in the yard.');
      expect(findHeadwordIndex(tokens, 'garden')).toBe(-1);
    });
  });

  describe('matchCase()', () => {
    it('capitalizes the replacement when the original token started uppercase', () => {
      expect(matchCase('Garden', 'yard')).toBe('Yard');
    });

    it('leaves the replacement lowercase when the original was lowercase', () => {
      expect(matchCase('garden', 'yard')).toBe('yard');
    });

    it('leaves the replacement as-is for non-letter cores (e.g. all-punctuation)', () => {
      expect(matchCase('', 'yard')).toBe('yard');
    });
  });

  describe('buildToken()', () => {
    it('preserves surrounding punctuation while swapping the word core', () => {
      expect(buildToken('garden.', 'yard')).toBe('yard.');
      expect(buildToken('"garden,', 'yard')).toBe('"yard,');
    });

    it("matches the original token's capitalization on the replacement", () => {
      expect(buildToken('Garden.', 'yard')).toBe('Yard.');
    });

    it('handles a token with no punctuation at all', () => {
      expect(buildToken('garden', 'yard')).toBe('yard');
    });
  });
});
