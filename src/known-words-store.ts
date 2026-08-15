// src/known-words-store.ts — known-words domain (replaces state.known +
// the 13 state.knownEs..knownNl fields). Migration per the state-management
// plan: mutations route through markKnown/unmarkKnown/etc. instead of
// mutating a Set in place, so every change reliably notifies subscribers
// (the original bug class this migration targets).
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so KnownWordsProvider below is a no-op
// kept only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import { ALL_TARGET_LANGS, type TargetLang } from './types.ts';

export type KnownLang = 'en' | TargetLang;

type KnownWordsState = Record<KnownLang, Set<string>>;

function emptyState(): KnownWordsState {
  const s = { en: new Set<string>() } as KnownWordsState;
  for (const lang of ALL_TARGET_LANGS) s[lang] = new Set<string>();
  return s;
}

const useKnownWordsStore = create<KnownWordsState>()(
  devtools(() => emptyState(), { name: 'known-words', enabled: import.meta.env.DEV }),
);

export function KnownWordsProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

// Whole-store subscription on purpose, matching the original useStore()
// semantics — any language's mutation re-renders every useKnownWords()
// caller, not just the one for the changed lang (see the migration's own
// pilot note on nav-store for why call sites weren't given a chance to
// silently start behaving differently mid-migration).
export function useKnownWords(lang: KnownLang): Set<string> {
  return useKnownWordsStore()[lang];
}

export function getKnownSnapshot(lang: KnownLang): Set<string> {
  return useKnownWordsStore.getState()[lang];
}

export function useAllKnownWords(): KnownWordsState {
  return useKnownWordsStore();
}

export function markKnown(lang: KnownLang, word: string): void {
  useKnownWordsStore.setState((state) => {
    const next = new Set(state[lang]);
    next.add(word);
    return { [lang]: next } as Partial<KnownWordsState>;
  });
}

export function unmarkKnown(lang: KnownLang, word: string): void {
  useKnownWordsStore.setState((state) => {
    const next = new Set(state[lang]);
    next.delete(word);
    return { [lang]: next } as Partial<KnownWordsState>;
  });
}

export function clearKnown(lang: KnownLang): void {
  useKnownWordsStore.setState({ [lang]: new Set<string>() } as Partial<KnownWordsState>);
}

export function clearAllKnown(): void {
  useKnownWordsStore.setState(emptyState());
}

export function setKnownWords(lang: KnownLang, words: Set<string>): void {
  useKnownWordsStore.setState({ [lang]: words } as Partial<KnownWordsState>);
}
