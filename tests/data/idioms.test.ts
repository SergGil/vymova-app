import { describe, it, expect } from 'vitest';
import { IDIOMS_EN as ENGLISH_IDIOMS } from '../../data/idioms-data/idioms_en.ts';
import { IDIOMS_UA as UKRAINIAN_IDIOMS } from '../../data/idioms-data/idioms_ua.ts';
import { IDIOMS_ES as SPANISH_IDIOMS } from '../../data/idioms-data/idioms_es.ts';
import { IDIOMS_HE as HEBREW_IDIOMS } from '../../data/idioms-data/idioms_he.ts';
import { IDIOMS_AR as ARABIC_IDIOMS } from '../../data/idioms-data/idioms_ar.ts';
import { IDIOMS_PL as POLISH_IDIOMS } from '../../data/idioms-data/idioms_pl.ts';
import { IDIOMS_ZH as CHINESE_IDIOMS } from '../../data/idioms-data/idioms_zh.ts';
import { IDIOMS_EL as GREEK_IDIOMS } from '../../data/idioms-data/idioms_el.ts';
import { IDIOMS_JA as JAPANESE_IDIOMS } from '../../data/idioms-data/idioms_ja.ts';
import { IDIOMS_TR as TURKISH_IDIOMS } from '../../data/idioms-data/idioms_tr.ts';
import { IDIOMS_NL as DUTCH_IDIOMS } from '../../data/idioms-data/idioms_nl.ts';
import { ensureIdiomsLoaded, getIdiomsForLang } from '../../js/features/idioms-loader.ts';
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
    const phrases = list.map((i) => i.phrase);
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

describe('POLISH_IDIOMS', () => {
  checkIdiomShape(POLISH_IDIOMS, 'POLISH_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(POLISH_IDIOMS.length).toBe(5);
  });

  it('every Polish idiom has an English meaning as well', () => {
    for (const idiom of POLISH_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('CHINESE_IDIOMS', () => {
  checkIdiomShape(CHINESE_IDIOMS, 'CHINESE_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(CHINESE_IDIOMS.length).toBe(5);
  });

  it('every Chinese idiom has an English meaning as well', () => {
    for (const idiom of CHINESE_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('GREEK_IDIOMS', () => {
  checkIdiomShape(GREEK_IDIOMS, 'GREEK_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(GREEK_IDIOMS.length).toBe(5);
  });

  it('every Greek idiom has an English meaning as well', () => {
    for (const idiom of GREEK_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('JAPANESE_IDIOMS', () => {
  checkIdiomShape(JAPANESE_IDIOMS, 'JAPANESE_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(JAPANESE_IDIOMS.length).toBe(5);
  });

  it('every Japanese idiom has an English meaning as well', () => {
    for (const idiom of JAPANESE_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('TURKISH_IDIOMS', () => {
  checkIdiomShape(TURKISH_IDIOMS, 'TURKISH_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(TURKISH_IDIOMS.length).toBe(5);
  });

  it('every Turkish idiom has an English meaning as well', () => {
    for (const idiom of TURKISH_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

describe('DUTCH_IDIOMS', () => {
  checkIdiomShape(DUTCH_IDIOMS, 'DUTCH_IDIOMS');

  it('has exactly 5 idioms', () => {
    expect(DUTCH_IDIOMS.length).toBe(5);
  });

  it('every Dutch idiom has an English meaning as well', () => {
    for (const idiom of DUTCH_IDIOMS) {
      expect((idiom.meaningEn ?? '').length).toBeGreaterThan(0);
    }
  });
});

// Former IDIOMS_BY_LANG aggregation is gone (js/features/idioms-loader.ts
// lazy-imports each language's own file instead — see
// docs/architecture-assessment.md p.6) — this now checks the loader
// resolves the same data these direct imports above see.
describe('idioms-loader', () => {
  it('resolves Hebrew and Arabic to the same data as their direct import', async () => {
    await ensureIdiomsLoaded('he');
    await ensureIdiomsLoaded('ar');
    expect(getIdiomsForLang('he')).toBe(HEBREW_IDIOMS);
    expect(getIdiomsForLang('ar')).toBe(ARABIC_IDIOMS);
  });

  it('resolves Polish, Chinese, Greek, Japanese, Turkish, and Dutch entries', async () => {
    await Promise.all(['pl', 'zh', 'el', 'ja', 'tr', 'nl'].map((lang) => ensureIdiomsLoaded(lang)));
    expect(getIdiomsForLang('pl')).toBe(POLISH_IDIOMS);
    expect(getIdiomsForLang('zh')).toBe(CHINESE_IDIOMS);
    expect(getIdiomsForLang('el')).toBe(GREEK_IDIOMS);
    expect(getIdiomsForLang('ja')).toBe(JAPANESE_IDIOMS);
    expect(getIdiomsForLang('tr')).toBe(TURKISH_IDIOMS);
    expect(getIdiomsForLang('nl')).toBe(DUTCH_IDIOMS);
  });
});
