// Vymova — data/senses.ts
// Numbered meanings for highly polysemous words, each with its own example
// sentence (Cambridge-style "multiple senses" view). Per-language data
// (formerly SENSES_BY_LANG here) now lives in data/senses-data/senses_XX.ts,
// lazy-loaded via js/features/senses-loader.ts's ensureSensesLoaded() so a
// learner only downloads their own language's entries instead of every
// language's eagerly (see docs/architecture-assessment.md p.6). This file
// keeps just the shared type.
import type { CefrLevel } from './cefr.ts';

export interface SenseEntry {
  pos: string;
  // level/gloss (2026-07-25) are optional and so far only backfilled for a
  // couple of demo entries (see senses_en.ts's "light"/"mean") — every other
  // language file, and most English entries, simply omit them. UI must treat
  // both as "may be undefined", not "always present once this shipped".
  // level is per-SENSE, not per-word: cefr.ts's CEFR_MAP gives one level for
  // the whole headword, but a word's individual meanings can sit at very
  // different levels (e.g. "mean" the verb is A1, "mean" the adjective B1).
  level?: CefrLevel;
  // English-language gloss (Cambridge-style paraphrase of the sense), not a
  // translation — distinct from `translation` below.
  gloss?: string;
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
