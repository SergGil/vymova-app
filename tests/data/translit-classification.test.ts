// Vymova — tests/data/translit-classification.test.ts
// LATIN_TRANSLIT_LANGS (js/features/mode-utils.ts) is a hand-classified list
// of languages whose data/words_XX.js Entry[2] field is a Latin-script
// romanization — safe for speakForCode() to read aloud with an English
// voice as an approximation when no native browser voice exists. It
// deliberately excludes languages whose Entry[2] is real IPA phonetic
// notation (would sound garbled if spoken as literal text). This test
// doesn't try to auto-derive the classification (that needs linguistic
// judgment a regex can't reliably replicate) — it just spot-checks that no
// LATIN_TRANSLIT_LANGS member's data has drifted into containing IPA-only
// marker characters, to catch a future batch accidentally reintroducing IPA
// for a language classified as Latin-script.
import { describe, it, expect } from 'vitest';
import { LATIN_TRANSLIT_LANGS } from '../../js/features/mode-utils.ts';

// Characters that only ever appear in IPA transcription, never in ordinary
// Latin-script romanization (which uses plain Latin letters + common
// diacritics like á ā ñ ç š ž ʿ ʾ).
const IPA_MARKERS = /[ˈˌʃʒθðŋɪʊɛɔæʌɑɡʔɾɲ]/;

describe('LATIN_TRANSLIT_LANGS classification', () => {
  it.each([...LATIN_TRANSLIT_LANGS].sort())(
    "data/words_%s.js's Entry[2] values contain no IPA-only marker characters",
    async (code) => {
      const mod = (await import(`../../data/words_${code}.js`)) as Record<
        string,
        Record<string, readonly [string, string, string?, boolean?]>
      >;
      const dict = mod[`W_${code.toUpperCase()}`];
      expect(dict, `no W_${code.toUpperCase()} export in words_${code}.js`).toBeTruthy();

      const offenders: string[] = [];
      for (const [headword, entry] of Object.entries(dict)) {
        const translit = entry[2];
        if (translit && IPA_MARKERS.test(translit)) {
          offenders.push(`${headword}: "${translit}"`);
        }
      }
      expect(
        offenders,
        `${code} is in LATIN_TRANSLIT_LANGS but these entries look like IPA:\n${offenders.join('\n')}`,
      ).toEqual([]);
    },
  );
});
