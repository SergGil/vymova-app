// Ambient type declarations for the plain-JS word/category/illustration data
// modules in this folder. Kept separate (not co-located per-file) because a
// `<name>.d.ts` sibling next to `<name>.js` is resolved by TS as that file's
// own declaration file rather than as an ambient `declare module` host.
import type { WordEntry } from '../src/types.ts';

declare module './words.js' {
  export const W: WordEntry[];
}

declare module './words_es.js' {
  export const W_ES: Record<string, readonly [string, string, string?]>;
}

declare module './words_fr.js' {
  export const W_FR: Record<string, readonly [string, string, string?]>;
}

declare module './words_it.js' {
  export const W_IT: Record<string, readonly [string, string, string?]>;
}

declare module './words_pt.js' {
  export const W_PT: Record<string, readonly [string, string, string?]>;
}

declare module './words_de.js' {
  export const W_DE: Record<string, readonly [string, string, string?]>;
}

declare module './words_he.js' {
  export const W_HE: Record<string, readonly [string, string, string?]>;
}

declare module './words_ar.js' {
  export const W_AR: Record<string, readonly [string, string, string?]>;
}

declare module './words_pl.js' {
  export const W_PL: Record<string, readonly [string, string, string?]>;
}

declare module './words_zh.js' {
  export const W_ZH: Record<string, readonly [string, string, string?]>;
}

declare module './words_el.js' {
  export const W_EL: Record<string, readonly [string, string, string?]>;
}

declare module './words_ja.js' {
  export const W_JA: Record<string, readonly [string, string, string?]>;
}

declare module './words_tr.js' {
  export const W_TR: Record<string, readonly [string, string, string?]>;
}

declare module './words_nl.js' {
  export const W_NL: Record<string, readonly [string, string, string?]>;
}

declare module './categories.js' {
  export const CATEGORY_LIST: string[];
  export const WORD_CATEGORIES: Record<string, string[]>;
  export function getCategoriesForWord(word: string): string[];
}

declare module './illustrations.js' {
  export const SVG: Record<string, string>;
  export function getIllus(word: string): string | null;
}
