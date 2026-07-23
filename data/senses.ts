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
  // Renamed from exEn/exUa (2026-07-23) — those names dated back to when
  // this data only existed for English, and stayed literally wrong once
  // per-language files were added (senses_el.ts's `exEn` field holds a
  // Greek sentence, not English). exTarget = the example sentence in
  // whichever language this file is for; exKnow = its translation — always
  // Ukrainian today (not dynamically the user's actual "know" language),
  // a separate, pre-existing limitation this rename doesn't change.
  exTarget: string;
  exKnow: string;
}
