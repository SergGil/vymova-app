// src/deck-store.ts — card/deck domain (replaces state.deck/idx/flipped/cw/_mode).
// Migration per the state-management plan: card-engine.ts used to mirror these
// fields into `state` by hand and (for flipped) sometimes forgot to notify —
// the exact bug class this migration closes. All reads/writes now go through
// one store, so there's no second copy left to desync.
import { createDomainStore } from './create-domain-store.tsx';
import type { WordEntry } from './types.ts';

interface DeckState {
  deck: WordEntry[];
  idx: number;
  flipped: boolean;
  cw: WordEntry | null;
  mode: string;
}

type DeckAction =
  | { type: 'SET_DECK'; deck: WordEntry[] }
  | { type: 'SET_IDX'; idx: number }
  | { type: 'SET_FLIPPED'; flipped: boolean }
  | { type: 'SET_CW'; cw: WordEntry | null }
  | { type: 'SET_MODE'; mode: string }
  | { type: 'RENDER_CARD'; cw: WordEntry | null; mode: string };

function deckReducer(state: DeckState, action: DeckAction): DeckState {
  switch (action.type) {
    case 'SET_DECK':
      return { ...state, deck: action.deck };
    case 'SET_IDX':
      return { ...state, idx: action.idx };
    case 'SET_FLIPPED':
      return { ...state, flipped: action.flipped };
    case 'SET_CW':
      return { ...state, cw: action.cw };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'RENDER_CARD':
      return { ...state, cw: action.cw, flipped: false, mode: action.mode };
  }
}

const deckStore = createDomainStore<DeckState, DeckAction>(deckReducer, {
  deck: [],
  idx: 0,
  flipped: false,
  cw: null,
  mode: 'en',
});

export const DeckProvider = deckStore.Provider;

export function useDeckState(): DeckState {
  return deckStore.useStore();
}

export function getDeckSnapshot(): WordEntry[] {
  return deckStore.getSnapshot().deck;
}

export function getIdxSnapshot(): number {
  return deckStore.getSnapshot().idx;
}

export function getFlippedSnapshot(): boolean {
  return deckStore.getSnapshot().flipped;
}

export function getCwSnapshot(): WordEntry | null {
  return deckStore.getSnapshot().cw;
}

export function getModeSnapshot(): string {
  return deckStore.getSnapshot().mode;
}

export function setDeckState(deck: WordEntry[]): void {
  deckStore.dispatch({ type: 'SET_DECK', deck });
}

export function setIdxState(idx: number): void {
  deckStore.dispatch({ type: 'SET_IDX', idx });
}

export function setFlippedState(flipped: boolean): void {
  deckStore.dispatch({ type: 'SET_FLIPPED', flipped });
}

export function setCwState(cw: WordEntry | null): void {
  deckStore.dispatch({ type: 'SET_CW', cw });
}

export function setModeState(mode: string): void {
  deckStore.dispatch({ type: 'SET_MODE', mode });
}

export function renderCardState(cw: WordEntry | null, mode: string): void {
  deckStore.dispatch({ type: 'RENDER_CARD', cw, mode });
}
