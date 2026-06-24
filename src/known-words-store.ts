// src/known-words-store.ts — known-words domain (replaces state.known +
// the 13 state.knownEs..knownNl fields). Migration per the state-management
// plan: mutations route through markKnown/unmarkKnown/etc. instead of
// mutating a Set in place, so every change reliably notifies subscribers
// (the original bug class this migration targets).
import { createDomainStore } from './create-domain-store.tsx';
import { ALL_TARGET_LANGS, type TargetLang } from './types.ts';

export type KnownLang = 'en' | TargetLang;

type KnownWordsState = Record<KnownLang, Set<string>>;

type KnownWordsAction =
  | { type: 'MARK'; lang: KnownLang; word: string }
  | { type: 'UNMARK'; lang: KnownLang; word: string }
  | { type: 'CLEAR'; lang: KnownLang }
  | { type: 'CLEAR_ALL' }
  | { type: 'SET'; lang: KnownLang; words: Set<string> };

function emptyState(): KnownWordsState {
  const s = { en: new Set<string>() } as KnownWordsState;
  for (const lang of ALL_TARGET_LANGS) s[lang] = new Set<string>();
  return s;
}

function knownWordsReducer(state: KnownWordsState, action: KnownWordsAction): KnownWordsState {
  switch (action.type) {
    case 'MARK': {
      const next = new Set(state[action.lang]);
      next.add(action.word);
      return { ...state, [action.lang]: next };
    }
    case 'UNMARK': {
      const next = new Set(state[action.lang]);
      next.delete(action.word);
      return { ...state, [action.lang]: next };
    }
    case 'CLEAR':
      return { ...state, [action.lang]: new Set<string>() };
    case 'CLEAR_ALL':
      return emptyState();
    case 'SET':
      return { ...state, [action.lang]: action.words };
  }
}

const knownWordsStore = createDomainStore<KnownWordsState, KnownWordsAction>(knownWordsReducer, emptyState());

export const KnownWordsProvider = knownWordsStore.Provider;

export function useKnownWords(lang: KnownLang): Set<string> {
  return knownWordsStore.useStore()[lang];
}

export function getKnownSnapshot(lang: KnownLang): Set<string> {
  return knownWordsStore.getSnapshot()[lang];
}

export function markKnown(lang: KnownLang, word: string): void {
  knownWordsStore.dispatch({ type: 'MARK', lang, word });
}

export function unmarkKnown(lang: KnownLang, word: string): void {
  knownWordsStore.dispatch({ type: 'UNMARK', lang, word });
}

export function clearKnown(lang: KnownLang): void {
  knownWordsStore.dispatch({ type: 'CLEAR', lang });
}

export function clearAllKnown(): void {
  knownWordsStore.dispatch({ type: 'CLEAR_ALL' });
}

export function setKnownWords(lang: KnownLang, words: Set<string>): void {
  knownWordsStore.dispatch({ type: 'SET', lang, words });
}
