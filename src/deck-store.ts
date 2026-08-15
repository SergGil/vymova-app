// src/deck-store.ts — card/deck domain (replaces state.deck/idx/flipped/cw/_mode).
// Migration per the state-management plan: card-engine.ts used to mirror these
// fields into `state` by hand and (for flipped) sometimes forgot to notify —
// the exact bug class this migration closes. All reads/writes now go through
// one store, so there's no second copy left to desync.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so DeckProvider below is a no-op kept
// only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type { WordEntry } from './types.ts';

interface DeckState {
  deck: WordEntry[];
  idx: number;
  flipped: boolean;
  cw: WordEntry | null;
  mode: string;
}

const useDeckStore = create<DeckState>()(
  devtools(() => ({ deck: [], idx: 0, flipped: false, cw: null, mode: 'en' }), {
    name: 'deck',
    enabled: import.meta.env.DEV,
  }),
);

export function DeckProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function useDeckState(): DeckState {
  return useDeckStore();
}

export function getDeckSnapshot(): WordEntry[] {
  return useDeckStore.getState().deck;
}

export function getIdxSnapshot(): number {
  return useDeckStore.getState().idx;
}

export function getFlippedSnapshot(): boolean {
  return useDeckStore.getState().flipped;
}

export function getCwSnapshot(): WordEntry | null {
  return useDeckStore.getState().cw;
}

export function getModeSnapshot(): string {
  return useDeckStore.getState().mode;
}

export function setDeckState(deck: WordEntry[]): void {
  useDeckStore.setState({ deck });
}

export function setIdxState(idx: number): void {
  useDeckStore.setState({ idx });
}

export function setFlippedState(flipped: boolean): void {
  useDeckStore.setState({ flipped });
}

export function setCwState(cw: WordEntry | null): void {
  useDeckStore.setState({ cw });
}

export function setModeState(mode: string): void {
  useDeckStore.setState({ mode });
}

export function renderCardState(cw: WordEntry | null, mode: string): void {
  useDeckStore.setState({ cw, flipped: false, mode });
}
