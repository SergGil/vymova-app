// src/deck-filter-store.ts — current deck-filter context (replaces
// state._baseWords + state._activeTagSet). The two fields always change
// together in js/features/deck-filter.tsx, so setDeckFilter() dispatches
// both at once; setBaseWords()/setActiveTagSet() cover the few call sites
// that only touch one.
import { createDomainStore } from './create-domain-store.tsx';
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

type DeckFilterAction =
  | { type: 'SET_BASE_WORDS'; words: WordEntry[] }
  | { type: 'SET_TAG_SET'; tagSet: Set<string> | null }
  | { type: 'SET_TAG_VALUE'; value: string }
  | { type: 'SET_FILTER'; words: WordEntry[]; tagSet: Set<string> | null };

function deckFilterReducer(state: DeckFilterState, action: DeckFilterAction): DeckFilterState {
  switch (action.type) {
    case 'SET_BASE_WORDS':
      return { ...state, baseWords: action.words };
    case 'SET_TAG_SET':
      return { ...state, activeTagSet: action.tagSet };
    case 'SET_TAG_VALUE':
      return { ...state, activeTagValue: action.value };
    case 'SET_FILTER':
      return { ...state, baseWords: action.words, activeTagSet: action.tagSet };
  }
}

const deckFilterStore = createDomainStore<DeckFilterState, DeckFilterAction>(
  deckFilterReducer,
  {
    baseWords: [],
    activeTagSet: null,
    activeTagValue: '',
  },
  'deck-filter',
);

export const DeckFilterProvider = deckFilterStore.Provider;

export function getBaseWordsSnapshot(): WordEntry[] {
  return deckFilterStore.getSnapshot().baseWords;
}

export function getActiveTagSetSnapshot(): Set<string> | null {
  return deckFilterStore.getSnapshot().activeTagSet;
}

export function setBaseWords(words: WordEntry[]): void {
  deckFilterStore.dispatch({ type: 'SET_BASE_WORDS', words });
}

export function setActiveTagSet(tagSet: Set<string> | null): void {
  deckFilterStore.dispatch({ type: 'SET_TAG_SET', tagSet });
}

export function getActiveTagValueSnapshot(): string {
  return deckFilterStore.getSnapshot().activeTagValue;
}

export function setActiveTagValue(value: string): void {
  deckFilterStore.dispatch({ type: 'SET_TAG_VALUE', value });
}

export function useActiveTagValue(): string {
  return deckFilterStore.useSelector((s) => s.activeTagValue);
}

export function setDeckFilter(words: WordEntry[], tagSet: Set<string> | null): void {
  deckFilterStore.dispatch({ type: 'SET_FILTER', words, tagSet });
}
