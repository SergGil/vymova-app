import { describe, it, expect } from 'vitest';
import {
  _letterCounts,
  _canForm,
  _shuffleLetters,
  _checkWriteAnswer,
  _genCode,
  _fmtCode,
  _rng,
  _buildDeck,
  CHARS,
  ROOM_SIZE,
} from '../../js/features/duel.ts';

describe('_letterCounts()', () => {
  it('counts letter frequencies', () => {
    expect(_letterCounts('apple')).toEqual({ a: 1, p: 2, l: 1, e: 1 });
  });
  it('empty string -> empty map', () => {
    expect(_letterCounts('')).toEqual({});
  });
});

describe('_canForm()', () => {
  it('word formable from base counts', () => {
    expect(_canForm('cat', _letterCounts('trace'))).toBe(true);
  });
  it('word not formable when letter missing', () => {
    expect(_canForm('cats', _letterCounts('trace'))).toBe(false);
  });
  it('word not formable when not enough repeats', () => {
    expect(_canForm('aa', _letterCounts('cat'))).toBe(false);
  });
});

describe('_shuffleLetters()', () => {
  it('returns uppercase letters separated by spaces', () => {
    const result = _shuffleLetters('cat');
    expect(result.replace(/ /g, '').length).toBe(3);
    expect(result).toBe(result.toUpperCase());
  });
  it('contains the same letters as the input', () => {
    const result = _shuffleLetters('apple').split(' ').sort().join('');
    expect(result).toBe('APPLE'.split('').sort().join(''));
  });
  it('handles single-letter input without infinite loop', () => {
    expect(_shuffleLetters('a')).toBe('A');
  });
});

describe('_checkWriteAnswer()', () => {
  it('write/anagram modes: exact match is correct', () => {
    expect(_checkWriteAnswer('write', 'apple', 'apple')).toBe(true);
  });
  it('write/anagram modes: typo within levenshtein distance 1 on long words is correct', () => {
    expect(_checkWriteAnswer('write', 'aple', 'apple')).toBe(true);
  });
  it('write/anagram modes: short words require exact match', () => {
    expect(_checkWriteAnswer('write', 'cot', 'cat')).toBe(false);
  });
  it('write/anagram modes: wrong answer is incorrect', () => {
    expect(_checkWriteAnswer('anagram', 'banana', 'apple')).toBe(false);
  });
  it('letters mode: too-short answers are rejected', () => {
    expect(_checkWriteAnswer('letters', 'at', 'cat')).toBe(false);
  });
  it('letters mode: answer must be formable from source letters', () => {
    expect(_checkWriteAnswer('letters', 'act', 'cat')).toBe(true);
    expect(_checkWriteAnswer('letters', 'cab', 'cat')).toBe(false);
  });
});

describe('_genCode() / _fmtCode()', () => {
  it('generates a 6-character code from the allowed charset', () => {
    const code = _genCode();
    expect(code.length).toBe(6);
    expect(code.split('').every((c) => CHARS.includes(c))).toBe(true);
  });
  it('formats a code as XXX-XXX', () => {
    expect(_fmtCode('ABC123')).toBe('ABC-123');
  });
});

describe('_rng()', () => {
  it('is deterministic for a given seed', () => {
    const a = _rng(42),
      b = _rng(42);
    expect(a()).toBe(b());
    expect(a()).toBe(b());
  });
  it('produces values in [0, 1)', () => {
    const rnd = _rng(123);
    for (let i = 0; i < 20; i++) {
      const v = rnd();
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThan(1);
    }
  });
});

describe('_buildDeck()', () => {
  it('returns ROOM_SIZE words for a fresh seed', () => {
    expect(_buildDeck(1, '', 'mixed').length).toBe(ROOM_SIZE);
  });
  it('is deterministic for the same seed', () => {
    const a = _buildDeck(7, '', 'mixed').map((w) => w[0]);
    const b = _buildDeck(7, '', 'mixed').map((w) => w[0]);
    expect(a).toEqual(b);
  });
  it('different seeds tend to produce different decks', () => {
    const a = _buildDeck(1, '', 'mixed').map((w) => w[0]);
    const b = _buildDeck(2, '', 'mixed').map((w) => w[0]);
    expect(a).not.toEqual(b);
  });
  it('anagram/letters mode restricts to plain a-z words of 4-9 letters', () => {
    const deck = _buildDeck(5, '', 'mixed', 'anagram');
    deck.forEach((w) => {
      expect(/^[a-z]+$/i.test(w[0])).toBe(true);
      expect(w[0].length).toBeGreaterThanOrEqual(4);
      expect(w[0].length).toBeLessThanOrEqual(9);
    });
  });
});
