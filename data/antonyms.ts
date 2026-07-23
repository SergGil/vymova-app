// Vymova — data/antonyms.ts
// Curated antonym (opposite-meaning) pairs, mirroring the structure of
// data/synonyms.ts. Each pair is stored in one direction only — Association
// Chain (and any other consumer) is expected to build a symmetric view at
// runtime via synonyms.ts's buildSynonymReverse, exactly like it already
// does for SYNONYMS.
//
// Coverage is intentionally limited to en/ua for now (the two languages
// Association Chain is actually used with day to day) — extend to more
// languages later following the same native-curation approach (i.e. real
// antonym pairs in that language, not translations of the English list).
//
// Per-language data (formerly ANTONYMS_BY_LANG here) now lives in
// data/antonyms-data/antonyms_XX.ts, lazy-loaded via
// js/features/antonyms-loader.ts's ensureAntonymsLoaded() (see
// docs/architecture-assessment.md p.6). This file keeps just the shared type.
export interface AntonymEntry {
  word: string;
  note?: string;
}
