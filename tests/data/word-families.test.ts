import { describe, it, expect } from 'vitest';
import { WORD_FAMILIES, WORD_FAMILY_REVERSE } from '../../data/word-families.ts';

describe('WORD_FAMILIES', () => {
  it('is a non-empty object mapping base words to arrays of related forms', () => {
    const entries = Object.entries(WORD_FAMILIES);
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
    for (const [base, members] of Object.entries(WORD_FAMILIES)) {
      expect(members).not.toContain(base);
    }
  });

  it('every member word has no duplicates within its family', () => {
    for (const [base, members] of Object.entries(WORD_FAMILIES)) {
      expect(new Set(members).size, `${base}: duplicate members`).toBe(members.length);
    }
  });
});

describe('WORD_FAMILY_REVERSE', () => {
  it('maps every family member to a valid base word from WORD_FAMILIES', () => {
    expect(WORD_FAMILY_REVERSE.size).toBeGreaterThan(0);
    const bases = new Set(Object.keys(WORD_FAMILIES));
    for (const [member, base] of WORD_FAMILY_REVERSE) {
      expect(typeof member).toBe('string');
      expect(bases.has(base), `${member} -> ${base} is not a known base word`).toBe(true);
    }
  });

  it('returns undefined for a word not in any family', () => {
    expect(WORD_FAMILY_REVERSE.get('zzzznotaword')).toBeUndefined();
  });
});
