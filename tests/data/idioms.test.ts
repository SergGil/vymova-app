import { describe, it, expect } from 'vitest';
import { ENGLISH_IDIOMS, UKRAINIAN_IDIOMS, SPANISH_IDIOMS, HEBREW_IDIOMS, ARABIC_IDIOMS, IDIOMS_BY_LANG } from '../../data/idioms.ts';
import type { Idiom } from '../../data/idioms.ts';

function checkIdiomShape(list: Idiom[], name: string) {
  it(`${name} is a non-empty array of idioms with required fields`, () => {
    expect(Array.isArray(list)).toBe(true);
    expect(list.length).toBeGreaterThan(0);
    for (const idiom of list) {
      expect(typeof idiom.phrase, `${name}: phrase`).toBe('string');
      expect(idiom.phrase.length).toBeGreaterThan(0);
      expect(typeof idiom.meaning, `${name}: meaning`).toBe('string');
      expect(idiom.meaning.length).toBeGreaterThan(0);
      expect(typeof idiom.exampleSrc, `${name}: exampleSrc`).toBe('string');
      expect(idiom.exampleSrc.length).toBeGreaterThan(0);
      expect(typeof idiom.exampleTr, `${name}: exampleTr`).toBe('string');
      expect(idiom.exampleTr.length).toBeGreaterThan(0);
    }
  });

  it(`${name} has unique phrases`, () => {
    const phrases = list.map(i => i.phrase);
    expect(new Set(phrases).size).toBe(phrases.length);
  });

  it(`${name} example sentences contain the idiom's keywords or are non-empty`, () => {
    for (const idiom of list) {
      expect(idiom.exampleSrc.length).toBeGreaterThan(5);
      expect(idiom.exampleTr.length).toBeGreaterThan(5);
    }
  });
}

describe('ENGLISH_IDIOMS', () => {
  checkIdiomShape(ENGLISH_IDIOMS, 'ENGLISH_IDIOMS');
});

describe('UKRAINIAN_IDIOMS', () => {
  checkIdiomShape(UKRAINIAN_IDIOMS, 'UKRAINIAN_IDIOMS');
});

describe('SPANISH_IDIOMS', () => {
  checkIdiomShape(SPANISH_IDIOMS, 'SPANISH_IDIOMS');

  it('every Spanish idiom has an English meaning as well', () => {
    for (const idiom of SPANISH_IDIOMS) {
      expect(typeof idiom.meaningEn).toBe('string');
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('HEBREW_IDIOMS', () => {
  checkIdiomShape(HEBREW_IDIOMS, 'HEBREW_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(HEBREW_IDIOMS.length).toBe(5);
  });

  it('every Hebrew idiom has an English meaning as well', () => {
    for (const idiom of HEBREW_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('ARABIC_IDIOMS', () => {
  checkIdiomShape(ARABIC_IDIOMS, 'ARABIC_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(ARABIC_IDIOMS.length).toBe(5);
  });

  it('every Arabic idiom has an English meaning as well', () => {
    for (const idiom of ARABIC_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('IDIOMS_BY_LANG', () => {
  it('includes Hebrew and Arabic entries', () => {
    expect(IDIOMS_BY_LANG.he).toBe(HEBREW_IDIOMS);
    expect(IDIOMS_BY_LANG.ar).toBe(ARABIC_IDIOMS);
  });
});
