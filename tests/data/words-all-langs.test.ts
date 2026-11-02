// Structural sanity check for every per-language word table (data/words-data/words_<code>.js),
// not just the 5 "flagship" languages already covered by words-localized.test.ts.
// A previous audit found these files clean by direct script inspection, but nothing
// enforced that going forward — this is the permanent version of that one-time check.
import { describe, it, expect } from 'vitest';
import { W } from '../../data/words-data/words.js';
import { ALL_TARGET_LANGS } from '../../src/types.js';
import type { WordEntry } from '../../src/types.js';

const headwords = new Set((W as unknown as WordEntry[]).map((e) => e[0]));

// The constructed languages intentionally use a 4th tuple element — see
// data/words-data/words_tlh.js's header comment — instead of the
// [translation, example, transcription?] shape every natural language uses.
const CONLANGS = new Set(['tlh', 'qya', 'val', 'sjn', 'dth']);

// A romanization must be Latin (plus Common-script IPA marks like ˈ ː, and
// Greek β θ χ, which IPA borrows). Any other letter means a transliterator in
// scripts/translit/ passed a character through unmapped (Thai "thangoาkat",
// Persian "taأsir") or a Cyrillic look-alike slipped in ("sаhna").
const NON_LATIN_LETTER = /(?![βθχ])(?![\p{Script=Latin}\p{Script=Common}])\p{L}/u;

// A single word mixing Latin with Cyrillic/Greek letters is a look-alike slip
// (Bulgarian "подпoлен" with a Latin o, Italian "fallisсono" with a Cyrillic с).
function mixedScriptWord(text: string): string | undefined {
  return text
    .split(/[^\p{L}\p{M}]+/u)
    .find((w) => /\p{Script=Latin}/u.test(w) && /[\p{Script=Cyrillic}\p{Script=Greek}]/u.test(w));
}

function loadWordTable(code: string): Promise<Record<string, unknown>> {
  return import(`../../data/words-data/words_${code}.js`).then(
    (m) => (m as Record<string, unknown>)[`W_${code.toUpperCase()}`] as Record<string, unknown>,
  );
}

// The import of a 10k-entry table sits inside the test, and in a loaded
// full-suite run it has gone past vitest's 5 s default (seen with words_es.js)
// — hence the explicit headroom below.
describe.each(ALL_TARGET_LANGS)('data/words-data/words_%s.js (structural sanity)', (code) => {
  it('exports a non-empty table of valid [translation, example, transcription?] tuples', async () => {
    const dict = await loadWordTable(code);
    expect(dict, `data/words-data/words_${code}.js has no W_${code.toUpperCase()} export`).toBeTruthy();

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
      for (const text of [translation, example] as string[]) {
        const word = mixedScriptWord(text);
        expect(word, `${code}.${key}: "${word}" mixes Latin with Cyrillic/Greek letters`).toBeUndefined();
      }
      // A non-Latin translation needs its romanization: whole ranges were once
      // merged as 2-element tuples (hi 2002-4249, entries 0-9 of six banks).
      const t = translation as string;
      if (/\p{L}/u.test(t) && !/\p{Script=Latin}/u.test(t)) {
        expect(arr.length >= 3, `${code}.${key}: non-Latin translation without a transcription`).toBe(true);
      }
      if (arr.length >= 3) {
        expect(typeof transcription, `${code}.${key}: transcription`).toBe('string');
        expect(
          (transcription as string).length,
          `${code}.${key}: empty transcription`,
        ).toBeGreaterThan(0);
        const stray = (transcription as string).match(NON_LATIN_LETTER)?.[0];
        expect(stray, `${code}.${key}: transcription contains non-Latin letter "${stray}"`).toBeUndefined();
      }
      if (arr.length === 4) {
        expect(
          typeof isCanon,
          `${code}.${key}: 4th element (isCanon) must be boolean`,
        ).toBe('boolean');
      }
    }
  }, 30_000);
});
