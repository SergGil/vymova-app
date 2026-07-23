// Vymova — js/features/collocations-loader.ts
// Lazy per-language loader + search for collocations (formerly private
// COLLOCATIONS_EN/ES/FR consts and searchCollocations() in
// data/collocations.ts, accessed only via that one function — see
// docs/architecture-assessment.md p.6). Builds each language's inverted
// word→collocations index lazily too, on first search after that
// language's dict has loaded (mirrors the old module-load-time
// _buildIndex(), just deferred).
import type { Collocation } from '../../data/collocations.ts';

const CACHE: Partial<Record<string, Record<string, Collocation[]>>> = {};
const INDEX_CACHE: Partial<Record<string, Map<string, Collocation[]>>> = {};
const LOADING: Partial<Record<string, Promise<void>>> = {};

const LOADERS: Partial<Record<string, () => Promise<Record<string, Collocation[]>>>> = {
  en: () =>
    import('../../data/collocations-data/collocations_en.ts').then((m) => m.COLLOCATIONS_EN),
  es: () =>
    import('../../data/collocations-data/collocations_es.ts').then((m) => m.COLLOCATIONS_ES),
  fr: () =>
    import('../../data/collocations-data/collocations_fr.ts').then((m) => m.COLLOCATIONS_FR),
};

/** Loads (and caches) `lang`'s collocations on first call; a no-op if already loaded/loading/unavailable. */
export async function ensureCollocationsLoaded(lang: string): Promise<void> {
  if (CACHE[lang]) return;
  const loader = LOADERS[lang];
  if (!loader) return;
  if (!LOADING[lang]) {
    LOADING[lang] = loader().then((data) => {
      CACHE[lang] = data;
    });
  }
  await LOADING[lang];
}

// Inverted index: each word in any phrase → collocations containing it.
// Splits on apostrophes too (not just whitespace) so a French elision like
// "l'accent" indexes under "accent", matching the bare headword "accent".
function _buildIndex(byCategory: Record<string, Collocation[]>): Map<string, Collocation[]> {
  const idx = new Map<string, Collocation[]>();
  for (const colls of Object.values(byCategory)) {
    for (const c of colls) {
      for (const token of c.phrase.toLowerCase().split(/[\s']+/)) {
        if (!token) continue;
        const list = idx.get(token);
        if (list) list.push(c);
        else idx.set(token, [c]);
      }
    }
  }
  return idx;
}

/** Search `lang`'s collocations whose phrase contains a given word (O(1) index lookup once loaded, [] otherwise). Defaults to English. */
export function searchCollocations(word: string, lang = 'en'): Collocation[] {
  const dict = CACHE[lang];
  if (!dict) return [];
  let idx = INDEX_CACHE[lang];
  if (!idx) {
    idx = _buildIndex(dict);
    INDEX_CACHE[lang] = idx;
  }
  return idx.get(word.toLowerCase()) ?? [];
}
