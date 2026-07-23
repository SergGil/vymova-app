// Vymova — data/word-families.ts
// Word families: base word → related forms. Per-language data (formerly
// WORD_FAMILIES_BY_LANG here) now lives in data/word-families-data/
// word-families_XX.ts, lazy-loaded via js/features/word-families-loader.ts's
// ensureWordFamiliesLoaded() so a learner only downloads their own
// language's entries instead of every language's eagerly (see
// docs/architecture-assessment.md p.6). This file keeps just the
// reverse-lookup builder (base word → each of its family members, inverted
// to member → base) — the loader rebuilds each language's reverse map
// after loading its base data instead of a REVERSE_BY_LANG aggregator
// persisting Maps (JSON can't serialize a Map).
export function buildFamilyReverse(dict: Record<string, string[]>): Map<string, string> {
  const rev = new Map<string, string>();
  for (const [base, members] of Object.entries(dict)) {
    for (const m of members) rev.set(m, base);
  }
  return rev;
}
