// Vymova — data/synonyms.ts
// Curated near-synonym groups with short nuance notes (register/intensity/formality).
// Headword → list of close synonyms. Notes explain how a synonym differs from
// the headword. Per-language data (formerly SYNONYMS_BY_LANG here) now
// lives in data/synonyms-data/synonyms_XX.ts, lazy-loaded via
// js/features/synonyms-loader.ts's ensureSynonymsLoaded() so a learner only
// downloads their own language's entries instead of every language's
// eagerly (see docs/architecture-assessment.md p.6). This file keeps just
// the shared type and the reverse-lookup builder (also reused by
// data/antonyms.ts, which has the same "member word → headword" shape) —
// the loader rebuilds each language's reverse map after loading its base
// data instead of a REVERSE_BY_LANG aggregator persisting Maps (JSON can't
// serialize a Map).
export interface SynonymEntry {
  word: string;
  note?: string;
}

// A synonym group is one-directional in the source data (headword → its
// synonyms) — this builds the inverse (any member word → the headword it
// belongs to) so a click on a synonym chip can jump to *its* full group,
// not just the flashcard's own headword's group. Lossy by design for a
// word that's a member of multiple groups: last group registered for that
// language wins, with no cross-language member lookup/click-through.
export function buildSynonymReverse(dict: Record<string, SynonymEntry[]>): Map<string, string> {
  const rev = new Map<string, string>();
  for (const [head, members] of Object.entries(dict)) {
    for (const m of members) rev.set(m.word, head);
  }
  return rev;
}
