// Vymova — js/features/lexicon-loader.ts
// Lazy-loads several large, hand-curated content datasets on first use
// instead of bundling them into the eager app-root chunk — synonyms/
// antonyms (1000+ EN head words each), collocations, word-families,
// etymology, and usage-notes (~355KB combined source). Many sessions never
// touch any of these — word-context.tsx's chips only render on a flipped
// card, assoc-chain.tsx only runs if the user opens that specific mode — so
// a static top-level import was paying that cost for every user on every
// load regardless of whether they ever see any of these features.
type SynonymsModule = typeof import('../../data/synonyms.ts');
type AntonymsModule = typeof import('../../data/antonyms.ts');
type CollocationsModule = typeof import('../../data/collocations.ts');
type WordFamiliesModule = typeof import('../../data/word-families.ts');
type EtymologyModule = typeof import('../../data/etymology.ts');
type UsageNotesModule = typeof import('../../data/usage-notes.ts');

let _synonyms: SynonymsModule | null = null;
let _antonyms: AntonymsModule | null = null;
let _collocations: CollocationsModule | null = null;
let _wordFamilies: WordFamiliesModule | null = null;
let _etymology: EtymologyModule | null = null;
let _usageNotes: UsageNotesModule | null = null;
let _synonymsLoading: Promise<void> | null = null;
let _antonymsLoading: Promise<void> | null = null;
let _collocationsLoading: Promise<void> | null = null;
let _wordFamiliesLoading: Promise<void> | null = null;
let _etymologyLoading: Promise<void> | null = null;
let _usageNotesLoading: Promise<void> | null = null;

/** Returns the module if already loaded, otherwise null — never triggers a load itself. */
export function getSynonymsModule(): SynonymsModule | null {
  return _synonyms;
}
export function getAntonymsModule(): AntonymsModule | null {
  return _antonyms;
}
export function getCollocationsModule(): CollocationsModule | null {
  return _collocations;
}
export function getWordFamiliesModule(): WordFamiliesModule | null {
  return _wordFamilies;
}
export function getEtymologyModule(): EtymologyModule | null {
  return _etymology;
}
export function getUsageNotesModule(): UsageNotesModule | null {
  return _usageNotes;
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

export async function ensureCollocationsLoaded(): Promise<void> {
  if (_collocations) return;
  if (!_collocationsLoading) {
    _collocationsLoading = import('../../data/collocations.ts').then((m) => {
      _collocations = m;
    });
  }
  await _collocationsLoading;
}

export async function ensureWordFamiliesLoaded(): Promise<void> {
  if (_wordFamilies) return;
  if (!_wordFamiliesLoading) {
    _wordFamiliesLoading = import('../../data/word-families.ts').then((m) => {
      _wordFamilies = m;
    });
  }
  await _wordFamiliesLoading;
}

export async function ensureEtymologyLoaded(): Promise<void> {
  if (_etymology) return;
  if (!_etymologyLoading) {
    _etymologyLoading = import('../../data/etymology.ts').then((m) => {
      _etymology = m;
    });
  }
  await _etymologyLoading;
}

export async function ensureUsageNotesLoaded(): Promise<void> {
  if (_usageNotes) return;
  if (!_usageNotesLoading) {
    _usageNotesLoading = import('../../data/usage-notes.ts').then((m) => {
      _usageNotes = m;
    });
  }
  await _usageNotesLoading;
}

export async function ensureLexiconLoaded(): Promise<void> {
  await Promise.all([ensureSynonymsLoaded(), ensureAntonymsLoaded()]);
}
