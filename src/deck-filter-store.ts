// src/deck-filter-store.ts — current deck-filter context (replaces
// state._baseWords + state._activeTagSet). The two fields always change
// together in js/features/deck-filter.tsx, so setDeckFilter() dispatches
// both at once; setBaseWords()/setActiveTagSet() cover the few call sites
// that only touch one.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so DeckFilterProvider below is a no-op
// kept only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type { WordEntry } from './types.ts';

interface DeckFilterState {
  baseWords: WordEntry[];
  activeTagSet: Set<string> | null;
  // The raw category string TagFilterSelect's control shows/holds — '' for
  // "all topics" — distinct from activeTagSet (the *derived* word-Set that
  // string maps to). Added when tag-filter-select.tsx became a controlled
  // shadcn Select: deck-filter.tsx needs to reset the *visible* selection
  // (e.g. when switching to a range mode that doesn't support tag
  // filtering) without a real <select> DOM node to write `.value = ''` on.
  activeTagValue: string;
}

const useDeckFilterStore = create<DeckFilterState>()(
  devtools(() => ({ baseWords: [], activeTagSet: null, activeTagValue: '' }), {
    name: 'deck-filter',
    enabled: import.meta.env.DEV,
  }),
);

export function DeckFilterProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function getBaseWordsSnapshot(): WordEntry[] {
  return useDeckFilterStore.getState().baseWords;
}

export function getActiveTagSetSnapshot(): Set<string> | null {
  return useDeckFilterStore.getState().activeTagSet;
}

export function setBaseWords(words: WordEntry[]): void {
  useDeckFilterStore.setState({ baseWords: words });
}

export function setActiveTagSet(tagSet: Set<string> | null): void {
  useDeckFilterStore.setState({ activeTagSet: tagSet });
}

export function getActiveTagValueSnapshot(): string {
  return useDeckFilterStore.getState().activeTagValue;
}

export function setActiveTagValue(value: string): void {
  useDeckFilterStore.setState({ activeTagValue: value });
}

export function useActiveTagValue(): string {
  return useDeckFilterStore((s) => s.activeTagValue);
}

export function setDeckFilter(words: WordEntry[], tagSet: Set<string> | null): void {
  useDeckFilterStore.setState({ baseWords: words, activeTagSet: tagSet });
}
