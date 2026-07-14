// Vymova — js/features/voice/latinize.ts
// Mechanical diacritic-stripping "transcription" for NATIVE_LATIN_LANGS
// (js/features/mode-utils.ts): these 16 languages already use the Latin
// alphabet, so unlike LATIN_TRANSLIT_LANGS (a genuine phonetic romanization
// of a non-Latin native script, backed by a real Entry[2] data field), no
// separate transcription field exists or is needed for the word data
// itself — but raw diacritics (č, ä, ø, ș, ř, ...) often trip up an
// English-biased SpeechSynthesis voice. This reduces them to their closest
// plain-ASCII approximation so the fallback voice reads something closer
// to correct.
//
// Deliberately a pure per-character substitution table (not a real
// phonetic transliterator like scripts/translit/*.cjs uses for non-Latin
// scripts) — these languages don't need syllable/phonology-aware rules,
// just diacritic removal. That also means it can run live on ANY text —
// a single word or a full example sentence — with no per-word data to
// generate or maintain, unlike Entry[2] which only ever covers the word.
//
// Character inventories verified by scanning every word/example in each
// data/words_XX.js file directly (not guessed) — re-verify and extend this
// map if a later batch introduces a character not listed here for its
// language (an unmapped character just passes through unchanged, so
// gaps degrade gracefully rather than erroring).
import type { TargetLang } from '../mode-utils.ts';

const DIACRITIC_MAPS: Partial<Record<TargetLang, Record<string, string>>> = {
  az: {
    ç: 'c', Ç: 'C', ö: 'o', Ö: 'O', ü: 'u', Ü: 'U', ğ: 'g', Ğ: 'G',
    İ: 'I', ı: 'i', ş: 's', Ş: 'S', ə: 'e', Ə: 'E', ә: 'e', // U+04D9 Cyrillic schwa — a data typo mixing scripts mid-word, normalize the same as 'ə'
    '₂': '2',
  },
  bs: { č: 'c', Č: 'C', ć: 'c', Ć: 'C', đ: 'dj', Đ: 'Dj', š: 's', Š: 'S', ž: 'z', Ž: 'Z' },
  cs: {
    á: 'a', Á: 'A', č: 'c', Č: 'C', ď: 'd', Ď: 'D', é: 'e', É: 'E', ě: 'e', Ě: 'E',
    í: 'i', Í: 'I', ň: 'n', Ň: 'N', ó: 'o', Ó: 'O', ř: 'r', Ř: 'R', š: 's', Š: 'S',
    ť: 't', Ť: 'T', ú: 'u', Ú: 'U', ů: 'u', Ů: 'U', ý: 'y', Ý: 'Y', ž: 'z', Ž: 'Z',
  },
  da: { æ: 'ae', Æ: 'Ae', ø: 'o', Ø: 'O', å: 'aa', Å: 'Aa', é: 'e', É: 'E' },
  fi: { ä: 'a', Ä: 'A', ö: 'o', Ö: 'O', å: 'aa', Å: 'Aa' },
  hr: { č: 'c', Č: 'C', ć: 'c', Ć: 'C', đ: 'dj', Đ: 'Dj', š: 's', Š: 'S', ž: 'z', Ž: 'Z' },
  hu: {
    á: 'a', Á: 'A', é: 'e', É: 'E', í: 'i', Í: 'I', ó: 'o', Ó: 'O',
    ö: 'o', Ö: 'O', ő: 'o', Ő: 'O', ú: 'u', Ú: 'U', ü: 'u', Ü: 'U', ű: 'u', Ű: 'U',
  },
  id: { ë: 'e', Ë: 'E' },
  la: { ë: 'e', Ë: 'E' },
  ms: {},
  no: { æ: 'ae', Æ: 'Ae', ø: 'o', Ø: 'O', å: 'aa', Å: 'Aa' },
  pcm: {},
  ro: { ă: 'a', Ă: 'A', â: 'a', Â: 'A', î: 'i', Î: 'I', ș: 's', Ș: 'S', ț: 't', Ț: 'T' },
  sk: {
    á: 'a', Á: 'A', ä: 'a', Ä: 'A', č: 'c', Č: 'C', ď: 'd', Ď: 'D', é: 'e', É: 'E',
    í: 'i', Í: 'I', ľ: 'l', Ľ: 'L', ĺ: 'l', Ĺ: 'L', ň: 'n', Ň: 'N', ó: 'o', Ó: 'O',
    ô: 'o', Ô: 'O', ŕ: 'r', Ŕ: 'R', ř: 'r', Ř: 'R', š: 's', Š: 'S', ť: 't', Ť: 'T',
    ú: 'u', Ú: 'U', ý: 'y', Ý: 'Y', ž: 'z', Ž: 'Z',
  },
  sv: { ä: 'a', Ä: 'A', ö: 'o', Ö: 'O', å: 'aa', Å: 'Aa', é: 'e', É: 'E' },
  sw: {},
};

export function latinizeForSpeech(text: string, lang: TargetLang): string {
  const map = DIACRITIC_MAPS[lang];
  if (!map || !text) return text;
  let out = '';
  for (const ch of text) out += map[ch] ?? ch;
  return out;
}
