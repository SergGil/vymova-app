// Vymova — data/senses.ts
// Numbered meanings for highly polysemous words, each with its own example
// sentence (Cambridge-style "multiple senses" view). Per-language data
// (formerly SENSES_BY_LANG here) now lives in data/senses-data/senses_XX.ts,
// lazy-loaded via js/features/senses-loader.ts's ensureSensesLoaded() so a
// learner only downloads their own language's entries instead of every
// language's eagerly (see docs/architecture-assessment.md p.6). This file
// keeps just the shared type.
export interface SenseEntry {
  pos: string;
  translation: string;
  exEn: string;
  exUa: string;
}
