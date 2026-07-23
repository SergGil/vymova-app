import { describe, it, expect, beforeAll } from 'vitest';
import { W } from '../../data/words-data/words.js';
import type { WordEntry } from '../../src/types.ts';
import { ensureLangTableLoaded } from '../../js/features/mode-utils.ts';
import {
  DUEL_LANG_CODES,
  _wordInLang,
  _hasLangWord,
  _dateLocale,
  _secUnit,
  _genCode,
  _fmtCode,
  _rng,
  _SCRAMBLE_POOL,
  _buildDeck,
} from '../../js/features/duel/duel-deck.ts';

const apple = (W as unknown as WordEntry[]).find((w) => w[0] === 'apple')!;

describe('duel-deck.ts pure helpers', () => {
  // _wordInLang/_hasLangWord read from mode-utils.ts's per-language tables,
  // which are lazy-loaded on demand — load Spanish once up front so the
  // 'es' cases below see real data instead of an empty table.
  beforeAll(async () => {
    await ensureLangTableLoaded('es');
  });

  describe('DUEL_LANG_CODES', () => {
    it('always starts with en/ua and has no duplicates', () => {
      expect(DUEL_LANG_CODES[0]).toBe('en');
      expect(DUEL_LANG_CODES[1]).toBe('ua');
      expect(new Set(DUEL_LANG_CODES).size).toBe(DUEL_LANG_CODES.length);
    });
  });

  describe('_wordInLang', () => {
    it('returns the raw English headword for en', () => {
      expect(_wordInLang(apple, 'en')).toBe('apple');
    });

    it('returns the Ukrainian translation for ua', () => {
      expect(_wordInLang(apple, 'ua')).toBe(apple[1]);
    });

    it('returns the target-language translation for a known code', () => {
      expect(_wordInLang(apple, 'es')).toBe('manzana');
    });

    it('falls back to the Ukrainian translation for an unrecognized code', () => {
      expect(_wordInLang(apple, 'zz-not-a-real-lang')).toBe(apple[1]);
    });
  });

  describe('_hasLangWord', () => {
    it('is always true for en and ua', () => {
      expect(_hasLangWord(apple, 'en')).toBe(true);
      expect(_hasLangWord(apple, 'ua')).toBe(true);
    });

    it('is true for a common word in a well-covered target language', () => {
      expect(_hasLangWord(apple, 'es')).toBe(true);
    });

    it('defaults to true for an unrecognized code', () => {
      expect(_hasLangWord(apple, 'zz-not-a-real-lang')).toBe(true);
    });
  });

  describe('_dateLocale / _secUnit', () => {
    it('_dateLocale returns one of the supported locale codes', () => {
      expect(['en', 'es', 'uk']).toContain(_dateLocale());
    });

    it('_secUnit returns one of the supported seconds-unit strings', () => {
      expect(['с', 's']).toContain(_secUnit());
    });
  });

  describe('_genCode / _fmtCode', () => {
    it('_genCode generates a 6-character code from the room-code alphabet', () => {
      const code = _genCode();
      expect(code).toHaveLength(6);
      expect(code).toMatch(/^[A-Z0-9]{6}$/);
    });

    it('_genCode is not trivially constant across calls', () => {
      const codes = new Set(Array.from({ length: 20 }, () => _genCode()));
      expect(codes.size).toBeGreaterThan(1);
    });

    it('_fmtCode inserts a dash after the third character', () => {
      expect(_fmtCode('ABCDEF')).toBe('ABC-DEF');
    });
  });

  describe('_rng', () => {
    it('is deterministic for a given seed', () => {
      const a = _rng(42);
      const b = _rng(42);
      const seqA = [a(), a(), a()];
      const seqB = [b(), b(), b()];
      expect(seqA).toEqual(seqB);
    });

    it('produces values in [0, 1)', () => {
      const rnd = _rng(7);
      for (let i = 0; i < 50; i++) {
        const v = rnd();
        expect(v).toBeGreaterThanOrEqual(0);
        expect(v).toBeLessThan(1);
      }
    });

    it('different seeds produce different sequences', () => {
      const a = _rng(1);
      const b = _rng(2);
      expect(a()).not.toBe(b());
    });
  });

  describe('_SCRAMBLE_POOL', () => {
    it('only contains 4-9 letter, all-alphabetic headwords', () => {
      expect(_SCRAMBLE_POOL.length).toBeGreaterThan(0);
      for (const w of _SCRAMBLE_POOL.slice(0, 200)) {
        expect(w[0]).toMatch(/^[a-zA-Z]{4,9}$/);
      }
    });
  });

  describe('_buildDeck', () => {
    it('returns exactly ROOM_SIZE (10) words for a plain quiz deck', () => {
      const deck = _buildDeck(1, '', 'mixed', 'quiz', 'en', 'ua');
      expect(deck).toHaveLength(10);
    });

    it('is deterministic for the same seed and parameters', () => {
      const a = _buildDeck(123, '', 'mixed', 'quiz', 'en', 'ua');
      const b = _buildDeck(123, '', 'mixed', 'quiz', 'en', 'ua');
      expect(a.map((w) => w[0])).toEqual(b.map((w) => w[0]));
    });

    it('different seeds tend to produce a different deck', () => {
      const a = _buildDeck(1, '', 'mixed', 'quiz', 'en', 'ua');
      const b = _buildDeck(2, '', 'mixed', 'quiz', 'en', 'ua');
      expect(a.map((w) => w[0])).not.toEqual(b.map((w) => w[0]));
    });

    it('restricts to the scramble pool for anagram/letters modes', () => {
      const deck = _buildDeck(1, '', 'mixed', 'anagram', 'en', 'ua');
      expect(deck).toHaveLength(10);
      for (const w of deck) {
        expect(w[0]).toMatch(/^[a-zA-Z]{4,9}$/);
      }
    });

    it('restricts to a word category when one is given', async () => {
      const { WORD_CATEGORIES } = await import('../../data/categories.js');
      const category = Object.keys(WORD_CATEGORIES)[0];
      const deck = _buildDeck(1, category, 'mixed', 'quiz', 'en', 'ua');
      expect(deck.length).toBeGreaterThan(0);
      expect(deck.length).toBeLessThanOrEqual(10);
    });

    it('falls back to the full pool when a filter would leave too few words', () => {
      const deck = _buildDeck(1, 'not-a-real-category-xyz', 'mixed', 'quiz', 'en', 'ua');
      expect(deck).toHaveLength(10);
    });
  });
});
