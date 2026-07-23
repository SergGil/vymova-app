import { describe, it, expect, beforeAll } from 'vitest';
import {
  ensureWordFamiliesLoaded,
  getWordFamiliesForLang,
  getWordFamilyReverseForLang,
} from '../../js/features/word-families-loader.ts';

describe('WORD_FAMILIES', () => {
  beforeAll(async () => {
    await ensureWordFamiliesLoaded('en');
  });

  it('is a non-empty object mapping base words to arrays of related forms', () => {
    const entries = Object.entries(getWordFamiliesForLang('en')!);
    expect(entries.length).toBeGreaterThan(20);
    for (const [base, members] of entries) {
      expect(typeof base).toBe('string');
      expect(base.length).toBeGreaterThan(0);
      expect(Array.isArray(members)).toBe(true);
      expect(members.length).toBeGreaterThan(0);
      for (const m of members) {
        expect(typeof m).toBe('string');
        expect(m.length).toBeGreaterThan(0);
      }
    }
  });

  it('a member word does not equal its own base word', () => {
    for (const [base, members] of Object.entries(getWordFamiliesForLang('en')!)) {
      expect(members).not.toContain(base);
    }
  });

  it('every member word has no duplicates within its family', () => {
    for (const [base, members] of Object.entries(getWordFamiliesForLang('en')!)) {
      expect(new Set(members).size, `${base}: duplicate members`).toBe(members.length);
    }
  });
});

describe('WORD_FAMILY_REVERSE', () => {
  beforeAll(async () => {
    await ensureWordFamiliesLoaded('en');
  });

  it('maps every family member to a valid base word from WORD_FAMILIES', () => {
    const reverse = getWordFamilyReverseForLang('en')!;
    expect(reverse.size).toBeGreaterThan(0);
    const bases = new Set(Object.keys(getWordFamiliesForLang('en')!));
    for (const [member, base] of reverse) {
      expect(typeof member).toBe('string');
      expect(bases.has(base), `${member} -> ${base} is not a known base word`).toBe(true);
    }
  });

  it('returns undefined for a word not in any family', () => {
    expect(getWordFamilyReverseForLang('en')!.get('zzzznotaword')).toBeUndefined();
  });
});
