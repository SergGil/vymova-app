// Vymova — data/idioms.ts
// Idioms reference data: English idioms (with Ukrainian meaning),
// Ukrainian idioms (with their closest English equivalent),
// and idioms for many other target languages. Per-language data (formerly
// IDIOMS_BY_LANG here) now lives in data/idioms-data/idioms_XX.ts,
// lazy-loaded via js/features/idioms-loader.ts's ensureIdiomsLoaded() so a
// learner only downloads their own language's idioms instead of every
// language's eagerly (see docs/architecture-assessment.md p.6). This file
// keeps just the shared type.
export interface Idiom {
  phrase: string; // the idiom itself
  meaning: string; // Ukrainian meaning / explanation
  meaningEn?: string; // English meaning (Spanish idioms only)
  exampleSrc: string; // example sentence in the idiom's own language
  exampleTr: string; // Ukrainian translation of the example
  emoji?: string;
  // Per-language translations for Ukrainian idioms (meaning + example in that language)
  translations?: Partial<Record<string, { meaning: string; exampleTr: string }>>;
}
