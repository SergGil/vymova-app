import { describe, it, expect } from 'vitest';
import { W } from '../../data/words.js';
import type { WordEntry } from '../../src/types.js';

const entries = W as unknown as WordEntry[];

describe('W (main word dictionary)', () => {
  it('is a large non-empty array', () => {
    expect(Array.isArray(entries)).toBe(true);
    expect(entries.length).toBeGreaterThan(1000);
  });

  it('every entry has the required tuple fields', () => {
    for (const e of entries) {
      expect(typeof e[0], `word: ${e[0]}`).toBe('string');
      expect(e[0].length).toBeGreaterThan(0);
      expect(typeof e[1], `translation for ${e[0]}`).toBe('string');
      expect(e[1].length).toBeGreaterThan(0);
      expect(typeof e[2], `EN example for ${e[0]}`).toBe('string');
      expect(typeof e[3], `UA example for ${e[0]}`).toBe('string');
      expect(typeof e[4], `ipa for ${e[0]}`).toBe('string');
    }
  });

  it('every entry has a non-empty English example sentence', () => {
    for (const e of entries) {
      expect(e[2].length, `${e[0]} missing EN example`).toBeGreaterThan(0);
    }
  });

  it('every entry has a non-empty Ukrainian example translation', () => {
    for (const e of entries) {
      expect(e[3].length, `${e[0]} missing UA example`).toBeGreaterThan(0);
    }
  });

  it('all headwords (lowercased) are unique', () => {
    const words = entries.map((e) => e[0].toLowerCase());
    expect(new Set(words).size).toBe(words.length);
  });
});
