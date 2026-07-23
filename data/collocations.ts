// Vymova — data/collocations.ts
// Fixed word combinations that native speakers always use together (e.g.
// "make a decision" NOT "do a decision"). Covers English, Spanish and
// French. Per-language data (formerly private COLLOCATIONS_EN/ES/FR here)
// now lives in data/collocations-data/collocations_XX.ts, lazy-loaded via
// js/features/collocations-loader.ts's searchCollocations() (which also
// now lives there, along with the inverted word→collocations index it
// needs) so a learner only downloads their own language's entries instead
// of all three eagerly (see docs/architecture-assessment.md p.6). This
// file keeps just the shared type.
export interface Collocation {
  phrase: string; // the full collocation: "make a decision"
  category: string; // "make/do", "take", "have", "adjective+noun", etc.
  note?: string; // brief explanation if needed
}
