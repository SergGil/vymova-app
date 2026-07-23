// Vymova — tests/data/translit-classification.test.ts
// LATIN_TRANSLIT_LANGS (js/features/mode-utils.ts) is a hand-classified list
// of languages whose data/words-data/words_XX.js Entry[2] field is a Latin-script
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
import { LATIN_TRANSLIT_LANGS, NATIVE_LATIN_LANGS } from '../../js/features/mode-utils.ts';

// Characters that only ever appear in IPA transcription, never in ordinary
// Latin-script romanization (which uses plain Latin letters + common
// diacritics like á ā ñ ç š ž ʿ ʾ).
const IPA_MARKERS = /[ˈˌʃʒθðŋɪʊɛɔæʌɑɡʔɾɲ]/;

async function loadDict(code: string) {
  const mod = (await import(`../../data/words-data/words_${code}.js`)) as Record<
    string,
    Record<string, readonly [string, string, string?, boolean?]>
  >;
  const dict = mod[`W_${code.toUpperCase()}`];
  expect(dict, `no W_${code.toUpperCase()} export in words_${code}.js`).toBeTruthy();
  return dict;
}

describe('LATIN_TRANSLIT_LANGS classification', () => {
  it.each([...LATIN_TRANSLIT_LANGS].sort())(
    "data/words-data/words_%s.js's Entry[2] values contain no IPA-only marker characters",
    async (code) => {
      const dict = await loadDict(code);
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

describe('NATIVE_LATIN_LANGS classification', () => {
  // speakForCode() reads Entry[0]/Entry[1] directly for these languages —
  // no separate Entry[2] transliteration exists because the real orthography
  // is already Latin (which can legitimately include letters IPA also uses,
  // e.g. Danish/Norwegian æ/ø/å — unlike LATIN_TRANSLIT_LANGS's romanization
  // schemes, an IPA-marker check would false-positive on real diacritics
  // here, so this only checks the one invariant that actually matters: no
  // Entry[2] has crept in (would silently go unused by speakForCode() as
  // currently wired — a signal the language should graduate to
  // LATIN_TRANSLIT_LANGS instead).
  it.each([...NATIVE_LATIN_LANGS].sort())(
    'data/words-data/words_%s.js has no Entry[2] (still genuinely 2-element)',
    async (code) => {
      const dict = await loadDict(code);
      const withEntry2 = Object.entries(dict)
        .filter(([, entry]) => entry[2])
        .map(([headword]) => headword);
      expect(
        withEntry2,
        `${code} now has an Entry[2] on these words — consider moving it to LATIN_TRANSLIT_LANGS instead:\n${withEntry2.join('\n')}`,
      ).toEqual([]);
    },
  );
});
