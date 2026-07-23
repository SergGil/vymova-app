// Vymova — js/features/etymology-loader.ts
// Lazy per-UI-locale loader for etymology facts (formerly data/etymology.ts's
// ETYMOLOGY_BY_LANG). Keyed by the 7-value UI locale (Lang from i18n.ts),
// NOT the ~137-value target language — etymology facts are explained in
// the reader's interface language, not the word's learn-language. Mirrors
// mode-utils.ts's TABLES/LANG_LOADERS pattern, generated file names via
// scripts/gen-lang-loader.js's langsIn() convention but hand-written here
// since getEtymologyFact()'s always-load-'ua'-as-fallback behavior doesn't
// fit the generic single-language genLoader() template.
type EtymologyDict = Record<string, string>;

const CACHE: Partial<Record<string, EtymologyDict>> = {};
const LOADING: Partial<Record<string, Promise<void>>> = {};

const LOADERS: Partial<Record<string, () => Promise<EtymologyDict>>> = {
  ua: () => import('../../data/etymology-data/etymology_ua.ts').then((m) => m.ETYMOLOGY_UA),
  en: () => import('../../data/etymology-data/etymology_en.ts').then((m) => m.ETYMOLOGY_EN),
  es: () => import('../../data/etymology-data/etymology_es.ts').then((m) => m.ETYMOLOGY_ES),
  fr: () => import('../../data/etymology-data/etymology_fr.ts').then((m) => m.ETYMOLOGY_FR),
  it: () => import('../../data/etymology-data/etymology_it.ts').then((m) => m.ETYMOLOGY_IT),
  pt: () => import('../../data/etymology-data/etymology_pt.ts').then((m) => m.ETYMOLOGY_PT),
  de: () => import('../../data/etymology-data/etymology_de.ts').then((m) => m.ETYMOLOGY_DE),
};

async function _load(lang: string): Promise<void> {
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

/** Loads `lang`'s facts, plus Ukrainian (the fallback getEtymologyFact() always needs). */
export async function ensureEtymologyLoaded(lang: string): Promise<void> {
  await Promise.all([_load(lang), _load('ua')]);
}

/** Etymology fact for `word` in the given UI language, falling back to Ukrainian if untranslated. */
export function getEtymologyFact(word: string, lang: string): string | undefined {
  return CACHE[lang]?.[word] ?? CACHE.ua?.[word];
}
