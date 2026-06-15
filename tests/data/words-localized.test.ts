import { describe, it, expect } from 'vitest';
import { W } from '../../data/words.js';
import { W_DE } from '../../data/words_de.js';
import { W_ES } from '../../data/words_es.js';
import { W_FR } from '../../data/words_fr.js';
import { W_IT } from '../../data/words_it.js';
import { W_PT } from '../../data/words_pt.js';
import type { WordEntry } from '../../src/types.js';

const headwords = new Set((W as unknown as WordEntry[]).map(e => e[0]));

const LOCALES: Record<string, Record<string, [string, string]>> = {
  W_DE, W_ES, W_FR, W_IT, W_PT,
};

describe.each(Object.entries(LOCALES))('%s (localized word list)', (_name, dict) => {
  it('is a non-empty object', () => {
    expect(Object.keys(dict).length).toBeGreaterThan(0);
  });

  it('every key matches a headword in the main W dictionary', () => {
    for (const key of Object.keys(dict)) {
      expect(headwords.has(key), `"${key}" not found in W`).toBe(true);
    }
  });

  it('every entry is a [translation, example] pair of non-empty strings', () => {
    for (const [key, value] of Object.entries(dict)) {
      expect(Array.isArray(value), `${key}: value must be array`).toBe(true);
      expect(value.length).toBe(2);
      const [translation, example] = value;
      expect(typeof translation, `${key}: translation`).toBe('string');
      expect(translation.length).toBeGreaterThan(0);
      expect(typeof example, `${key}: example`).toBe('string');
      expect(example.length).toBeGreaterThan(0);
    }
  });
});
