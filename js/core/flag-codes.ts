// Vymova — js/core/flag-codes.ts
// Country-flag code for each language code — picks the country most learners
// associate with it, not necessarily the only place it's spoken (e.g. 'ar' -> Saudi
// Arabia's 'sa', not a specific Arabic-speaking country in general).
//
// Pure data, zero imports: the single source of truth for this mapping, shared by
// lang-pair-select.tsx, idioms-page.tsx, and duel-lobby-options.tsx (previously each
// kept its own hand-copied version of this same object — see docs/adding-a-language.md
// section 7a.1 for the bug class that caused: a new language added to `Code` here
// wouldn't automatically appear in the duplicated copies, and none of them were
// type-safe enough for `tsc` to catch the omission).
//
// Safe to import statically from anywhere, including modules that otherwise avoid
// core/flags.ts's eager `import.meta.glob` of the flag SVGs themselves (this file
// has no such import — only the country-code strings).
import type { Code } from '../../src/types.js';

export const FLAG_CODE: Record<Code, string> = {
  ua: 'ua',
  en: 'gb',
  es: 'es',
  fr: 'fr',
  it: 'it',
  pt: 'pt',
  de: 'de',
  he: 'il',
  ar: 'sa',
  pl: 'pl',
  zh: 'cn',
  el: 'gr',
  ja: 'jp',
  tr: 'tr',
  nl: 'nl',
  vi: 'vn',
  hi: 'in',
  bn: 'bd',
  id: 'id',
  pcm: 'ng',
  ko: 'kr',
  fa: 'ir',
  sw: 'tz',
  ms: 'my',
  th: 'th',
  az: 'az',
  ro: 'ro',
  hu: 'hu',
  cs: 'cz',
  kk: 'kz',
  sv: 'se',
  ka: 'ge',
  hr: 'hr',
  sr: 'rs',
  bs: 'ba',
  bg: 'bg',
  sk: 'sk',
  hy: 'am',
  da: 'dk',
  fi: 'fi',
  no: 'no',
  la: 'spqr',
  lt: 'lt',
  lv: 'lv',
  et: 'ee',
  sl: 'si',
  mk: 'mk',
  sq: 'al',
  is: 'is',
  cy: 'wls',
  ga: 'ie',
  tl: 'ph',
  mn: 'mn',
  uz: 'uz',
  am: 'et',
};
