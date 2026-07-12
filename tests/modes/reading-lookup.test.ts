import { describe, it, expect, beforeEach } from 'vitest';
import { lookupEnglishWord, invalidateReadingIndex } from '../../js/modes/reading-lookup.ts';

describe('reading-lookup.ts (lookupEnglishWord)', () => {
  beforeEach(() => {
    invalidateReadingIndex();
  });

  it('finds an exact headword match', () => {
    const hit = lookupEnglishWord('walk');
    expect(hit?.[0]).toBe('walk');
  });

  it('is case-insensitive and strips surrounding punctuation', () => {
    expect(lookupEnglishWord('Walk!')?.[0]).toBe('walk');
    expect(lookupEnglishWord('"CAT,"')?.[0]).toBe('cat');
  });

  it('resolves an -ing form via stemming', () => {
    expect(lookupEnglishWord('walking')?.[0]).toBe('walk');
  });

  it('resolves an -ed form via stemming', () => {
    expect(lookupEnglishWord('walked')?.[0]).toBe('walk');
  });

  it('resolves a plural -s form via stemming', () => {
    expect(lookupEnglishWord('cats')?.[0]).toBe('cat');
  });

  it('resolves -er/-est comparative/superlative forms via stemming', () => {
    expect(lookupEnglishWord('quicker')?.[0]).toBe('quick');
    expect(lookupEnglishWord('quickest')?.[0]).toBe('quick');
  });

  it('resolves an -ly adverb form via stemming', () => {
    expect(lookupEnglishWord('quickly')?.[0]).toBe('quick');
  });

  it('resolves an -ness form via stemming', () => {
    expect(lookupEnglishWord('quickness')?.[0]).toBe('quick');
    expect(lookupEnglishWord('darkness')?.[0]).toBe('dark');
  });

  it('resolves a -ful form via stemming', () => {
    expect(lookupEnglishWord('playful')?.[0]).toBe('play');
  });

  it('resolves a -ment form via stemming', () => {
    expect(lookupEnglishWord('equipment')?.[0]).toBe('equip');
  });

  it('resolves an -able form via stemming', () => {
    expect(lookupEnglishWord('readable')?.[0]).toBe('read');
  });

  it('resolves an -al form via stemming', () => {
    // Exercises the -al branch mechanically; the surface form itself
    // doesn't need to be a real English word.
    expect(lookupEnglishWord('reasonal')?.[0]).toBe('reason');
  });

  it('returns null for words with no headword or stemmed match', () => {
    expect(lookupEnglishWord('zzzqwibbleflorp')).toBeNull();
  });

  it('returns null for inputs shorter than 2 letters after cleaning', () => {
    expect(lookupEnglishWord('a')).toBeNull();
    expect(lookupEnglishWord('!!!')).toBeNull();
  });

  it('caches lookups and stays correct across repeated calls', () => {
    const first = lookupEnglishWord('walking');
    const second = lookupEnglishWord('walking');
    expect(first).toEqual(second);
    expect(first?.[0]).toBe('walk');
  });

  it('caches negative (miss) results too, without throwing', () => {
    expect(lookupEnglishWord('zzzqwibbleflorp')).toBeNull();
    expect(lookupEnglishWord('zzzqwibbleflorp')).toBeNull();
  });

  it('invalidateReadingIndex resets the cache and index without breaking future lookups', () => {
    expect(lookupEnglishWord('walk')?.[0]).toBe('walk');
    invalidateReadingIndex();
    expect(lookupEnglishWord('walk')?.[0]).toBe('walk');
  });
});
