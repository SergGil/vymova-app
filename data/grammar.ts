// Vymova — data/grammar.ts
// Grammar reference data: structured rules, tables, examples.
// Format: self-contained, easy to extend. Per-language data (formerly
// GRAMMAR_BY_LANG here) now lives in data/grammar-data/grammar_XX.ts,
// lazy-loaded via js/features/grammar-loader.ts's ensureGrammarLoaded() so a
// learner only downloads their own language's entries instead of every
// language's eagerly (see docs/architecture-assessment.md p.6). This file
// keeps just the shared types.
export interface GSection {
  type: 'intro' | 'formula' | 'table' | 'examples' | 'markers' | 'note' | 'tip' | 'subtitle';
  title?: string;
  text?: string;
  rows?: string[][]; // for table/formula
  items?: string[]; // for markers/list
  en?: {
    title?: string;
    text?: string;
    rows?: string[][];
    items?: string[];
  };
}

export interface GrammarRule {
  id: string;
  title: string;
  titleEn?: string;
  emoji: string;
  sections: GSection[];
}

export interface GrammarCategory {
  id: string;
  title: string;
  titleEn?: string;
  emoji: string;
  rules: GrammarRule[];
}
