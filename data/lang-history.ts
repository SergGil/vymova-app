// Vymova — data/lang-history.ts
// "Історія мови" page content: short origin story + interesting facts per
// language. Per-language data (formerly LANG_HISTORY here) now lives in
// data/lang-history-data/lang-history_XX.ts, lazy-loaded via
// js/features/lang-history-loader.ts's ensureLangHistoryLoaded() so a
// visitor only downloads the language they actually open instead of all
// ~138 eagerly (see docs/architecture-assessment.md p.6). Any language not
// covered falls back to a "coming soon" placeholder in
// js/features/lang-history-page.tsx. Primary text is Ukrainian (`intro`/
// `facts`); `introEn`/`factsEn` are an optional English override, same
// bilingual pattern as data/grammar.ts's `titleEn` fields — other UI
// locales fall back to the Ukrainian text, same as grammar/idioms content.
export interface LangHistoryEntry {
  intro: string;
  introEn?: string;
  facts: string[];
  factsEn?: string[];
}
