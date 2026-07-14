// Structural sanity check for every per-language word table (data/words_<code>.js),
// not just the 5 "flagship" languages already covered by words-localized.test.ts.
// A previous audit found these files clean by direct script inspection, but nothing
// enforced that going forward — this is the permanent version of that one-time check.
import { describe, it, expect } from 'vitest';
import { W } from '../../data/words.js';
import { ALL_TARGET_LANGS } from '../../src/types.js';
import type { WordEntry } from '../../src/types.js';

const headwords = new Set((W as unknown as WordEntry[]).map((e) => e[0]));

// The constructed languages intentionally use a 4th tuple element — see
// data/words_tlh.js's header comment — instead of the
// [translation, example, transcription?] shape every natural language uses.
const CONLANGS = new Set(['tlh', 'qya', 'val', 'sjn', 'dth']);

function loadWordTable(code: string): Promise<Record<string, unknown>> {
  return import(`../../data/words_${code}.js`).then(
    (m) => (m as Record<string, unknown>)[`W_${code.toUpperCase()}`] as Record<string, unknown>,
  );
}

describe.each(ALL_TARGET_LANGS)('data/words_%s.js (structural sanity)', (code) => {
  it('exports a non-empty table of valid [translation, example, transcription?] tuples', async () => {
    const dict = await loadWordTable(code);
    expect(dict, `data/words_${code}.js has no W_${code.toUpperCase()} export`).toBeTruthy();

    const keys = Object.keys(dict);
    expect(keys.length, `${code}: empty word table`).toBeGreaterThan(0);

    const maxLen = CONLANGS.has(code) ? 4 : 3;
    const seen = new Set<string>();
    for (const key of keys) {
      expect(
        headwords.has(key),
        `${code}: "${key}" not found in the main W dictionary`,
      ).toBe(true);
      expect(seen.has(key), `${code}: duplicate key "${key}"`).toBe(false);
      seen.add(key);

      const value = dict[key];
      expect(Array.isArray(value), `${code}.${key}: value must be an array`).toBe(true);
      const arr = value as unknown[];
      expect(
        arr.length >= 2 && arr.length <= maxLen,
        `${code}.${key}: expected 2-${maxLen} elements, got ${arr.length}`,
      ).toBe(true);

      const [translation, example, transcription, isCanon] = arr;
      expect(typeof translation, `${code}.${key}: translation`).toBe('string');
      expect(
        (translation as string).length,
        `${code}.${key}: empty translation`,
      ).toBeGreaterThan(0);
      expect(typeof example, `${code}.${key}: example`).toBe('string');
      expect((example as string).length, `${code}.${key}: empty example`).toBeGreaterThan(0);
      if (arr.length >= 3) {
        expect(typeof transcription, `${code}.${key}: transcription`).toBe('string');
        expect(
          (transcription as string).length,
          `${code}.${key}: empty transcription`,
        ).toBeGreaterThan(0);
      }
      if (arr.length === 4) {
        expect(
          typeof isCanon,
          `${code}.${key}: 4th element (isCanon) must be boolean`,
        ).toBe('boolean');
      }
    }
  });
});
