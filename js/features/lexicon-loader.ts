// Vymova — js/features/lexicon-loader.ts
// Lazy-loads data/synonyms.ts and data/antonyms.ts on first use instead of
// bundling them into the eager app-root chunk. Both are large, hand-curated
// content datasets (1000+ EN head words each, ~260KB combined source) that
// many sessions never touch — word-context.tsx's chips only render on a
// flipped card, assoc-chain.tsx only runs if the user opens that specific
// mode — so a static top-level import was paying that cost for every user
// on every load regardless of whether they ever see either feature.
type SynonymsModule = typeof import('../../data/synonyms.ts');
type AntonymsModule = typeof import('../../data/antonyms.ts');

let _synonyms: SynonymsModule | null = null;
let _antonyms: AntonymsModule | null = null;
let _synonymsLoading: Promise<void> | null = null;
let _antonymsLoading: Promise<void> | null = null;

/** Returns the module if already loaded, otherwise null — never triggers a load itself. */
export function getSynonymsModule(): SynonymsModule | null {
  return _synonyms;
}
export function getAntonymsModule(): AntonymsModule | null {
  return _antonyms;
}

/** Safe to call multiple times — in-flight/completed loads are reused. */
export async function ensureSynonymsLoaded(): Promise<void> {
  if (_synonyms) return;
  if (!_synonymsLoading) {
    _synonymsLoading = import('../../data/synonyms.ts').then((m) => {
      _synonyms = m;
    });
  }
  await _synonymsLoading;
}

export async function ensureAntonymsLoaded(): Promise<void> {
  if (_antonyms) return;
  if (!_antonymsLoading) {
    _antonymsLoading = import('../../data/antonyms.ts').then((m) => {
      _antonyms = m;
    });
  }
  await _antonymsLoading;
}

export async function ensureLexiconLoaded(): Promise<void> {
  await Promise.all([ensureSynonymsLoaded(), ensureAntonymsLoaded()]);
}
