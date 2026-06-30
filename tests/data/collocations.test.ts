import { describe, it, expect } from 'vitest';
import { searchCollocations } from '../../data/collocations.ts';

describe('searchCollocations()', () => {
  it('finds collocations containing the given word', () => {
    const results = searchCollocations('decision');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((c) => c.phrase === 'make a decision')).toBe(true);
  });

  it('is case-insensitive', () => {
    const lower = searchCollocations('decision');
    const upper = searchCollocations('DECISION');
    expect(upper).toEqual(lower);
  });

  it('returns an empty array for words not in any collocation', () => {
    expect(searchCollocations('zzzznotaword')).toEqual([]);
  });

  it('every returned collocation has a phrase and category', () => {
    const results = searchCollocations('make');
    expect(results.length).toBeGreaterThan(0);
    for (const c of results) {
      expect(typeof c.phrase).toBe('string');
      expect(c.phrase.length).toBeGreaterThan(0);
      expect(typeof c.category).toBe('string');
      expect(c.category.length).toBeGreaterThan(0);
    }
  });

  it('matches a word appearing anywhere in the phrase, not just first', () => {
    const results = searchCollocations('research');
    expect(results.some((c) => c.phrase.includes('research'))).toBe(true);
  });
});
