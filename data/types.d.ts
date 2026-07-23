// Ambient type declarations for the plain-JS word/category/illustration data
// modules in this folder. Kept separate (not co-located per-file) because a
// `<name>.d.ts` sibling next to `<name>.js` is resolved by TS as that file's
// own declaration file rather than as an ambient `declare module` host.
//
// This file must stay a *module* (need at least one top-level import/export)
// for the relative `declare module './x.js'` blocks below to actually take
// effect as augmentations — a script-context .d.ts (no import/export at all)
// silently fails to apply them. Found the hard way: deleting the
// `import type { WordEntry }` this file used to have (for the words.js/
// words_*.js declarations below, now removed — see next paragraph) without
// replacing it with anything else silently broke every consumer of
// getCategoriesForWord()/getIllus() (fell back to `any`, no error at the
// broken site) — only caught by noticing an unrelated, seemingly
// unconnected implicit-any two files away, in card-meta.tsx.
export {};

// Every `data/words-data/words.js` and `data/words-data/words_*.js` file now opts into
// type-checking itself via a `// @ts-check` pragma + inline `@type` JSDoc
// annotation on its own exports (see e.g. data/words-data/words_es.js) — declaring the
// same shape again here would conflict ("Cannot redeclare block-scoped
// variable") rather than help, so those are no longer listed below.
//
// categories.js/illustrations.js are NOT yet self-checked (`@ts-check`
// would fail to compile today — both files have genuine duplicate object
// keys TypeScript's `checkJs` catches as a hard TS1117 error, which JS
// itself silently resolves to "last duplicate wins", silently dropping the
// first one's data; e.g. categories.js has two separate `'mouse'` entries —
// one under 🐾 Тварини, one under 💻 Технології — only the second is ever
// live). Fixing that is a data-content decision (merge the two entries'
// values? one was a stray accidental duplicate?), not a type-annotation
// one, so it's deliberately left as ambient declarations here rather than
// self-checked, pending that decision.
declare module './categories.js' {
  export const CATEGORY_LIST: string[];
  export const WORD_CATEGORIES: Record<string, string[]>;
  export function getCategoriesForWord(word: string): string[];
}

declare module './illustrations.js' {
  export const SVG: Record<string, string>;
  export function getIllus(word: string): string | null;
}
