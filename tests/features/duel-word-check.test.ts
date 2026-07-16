import { describe, it, expect } from 'vitest';
import {
  _letterCounts,
  _canForm,
  _shuffleLetters,
  _checkWriteAnswer,
} from '../../js/features/duel/duel-word-check.ts';

describe('_letterCounts', () => {
  it('counts each character', () => {
    expect(_letterCounts('apple')).toEqual({ a: 1, p: 2, l: 1, e: 1 });
  });

  it('returns an empty object for an empty string', () => {
    expect(_letterCounts('')).toEqual({});
  });
});

describe('_canForm', () => {
  it('true when word only uses letters available in base, within counts', () => {
    expect(_canForm('cat', _letterCounts('tactic'))).toBe(true);
  });

  it('false when word needs a letter not present in base', () => {
    expect(_canForm('cat', _letterCounts('dog'))).toBe(false);
  });

  it('false when word needs MORE of a letter than base has (not just presence)', () => {
    // base "cat" has exactly one "t" — "tot" needs two.
    expect(_canForm('tot', _letterCounts('cat'))).toBe(false);
  });

  it('true for the exact same multiset of letters', () => {
    expect(_canForm('listen', _letterCounts('silent'))).toBe(true);
  });
});

describe('_shuffleLetters', () => {
  it('preserves the same letters (as a multiset), just reordered', () => {
    const result = _shuffleLetters('apple');
    const letters = result.split(' ').sort().join('');
    expect(letters).toBe('APELP'.split('').sort().join(''));
  });

  it('returns space-separated uppercase letters', () => {
    const result = _shuffleLetters('cat');
    expect(result.split(' ')).toHaveLength(3);
    expect(result).toBe(result.toUpperCase());
  });

  it('does not crash on a single-letter word (no infinite retry loop)', () => {
    expect(_shuffleLetters('a')).toBe('A');
  });
});

describe('_checkWriteAnswer', () => {
  describe('mode: letters (anagram-built answer must be a real dictionary word)', () => {
    it('accepts a valid dictionary word formable from the scrambled letters', () => {
      // "ans" (the source word) supplies the letters; val is what the
      // player typed. Both need to reduce to the same multiset here.
      expect(_checkWriteAnswer('letters', 'cat', 'cat')).toBe(true);
    });

    it('rejects a word that cannot be formed from the available letters', () => {
      expect(_checkWriteAnswer('letters', 'dog', 'cat')).toBe(false);
    });

    it('rejects answers shorter than 3 letters even if formable', () => {
      expect(_checkWriteAnswer('letters', 'at', 'cat')).toBe(false);
    });

    it('rejects a formable string that is not an actual dictionary word', () => {
      // "tca" uses exactly cat's letters but isn't a real word.
      expect(_checkWriteAnswer('letters', 'tca', 'cat')).toBe(false);
    });
  });

  describe('mode: write/anagram/quiz (typed-answer comparison)', () => {
    it('accepts an exact match', () => {
      expect(_checkWriteAnswer('write', 'hello', 'hello')).toBe(true);
    });

    it('rejects a wrong answer', () => {
      expect(_checkWriteAnswer('write', 'goodbye', 'hello')).toBe(false);
    });

    it('forgives a single-character typo for answers longer than 3 letters', () => {
      expect(_checkWriteAnswer('write', 'helo', 'hello')).toBe(true); // 1 deletion
      expect(_checkWriteAnswer('write', 'jello', 'hello')).toBe(true); // 1 substitution
    });

    it('does NOT forgive a typo for answers 3 characters or shorter — exact match required', () => {
      // "cat" -> "cot" is a single substitution, but ans.length is not > 3,
      // so the lev()<=1 fallback never kicks in for short words.
      expect(_checkWriteAnswer('write', 'cot', 'cat')).toBe(false);
    });

    it('rejects a typo of distance 2 or more even for long answers', () => {
      expect(_checkWriteAnswer('write', 'jelko', 'hello')).toBe(false);
    });
  });
});
