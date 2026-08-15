// src/duel-room-store.ts — active-duel-game domain (replaces state.duelRoom +
// state.duelScreen + state.duelCountdownNum + state.duelTempo). Bundled into
// one store deliberately: duelScreen/duelCountdownNum/duelTempo coordinate
// with duelRoom.mode/.finished in the same tick (e.g. _showFinish, the
// opponent-poll interval) — splitting them would reintroduce a cross-store
// tearing risk for no benefit, since no reader needs duelScreen without also
// needing room-shaped data.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so DuelRoomProvider below is a no-op
// kept only for API compatibility with existing call sites. useDuelRoomSelector
// keeps its own useSyncExternalStore-based implementation (not Zustand's
// built-in hook) because Zustand v5 dropped the custom-equalityFn 2nd
// argument its old createDomainStore().useSelector() supported — this
// reimplements that exact caching/equality contract against the Zustand
// store's getState()/subscribe(), which is API-compatible with what
// create-domain-store.tsx's useSelector() expected.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, useRef, useSyncExternalStore, type ReactElement, type ReactNode } from 'react';
import type { DuelRoomState, DuelScreen } from './types.ts';

interface DuelRoomStoreState {
  room: DuelRoomState;
  screen: DuelScreen;
  countdownNum: number;
  tempo: { visible: boolean; num: number };
}

const initialRoom: DuelRoomState = {
  roomId: '',
  mySlot: 'p1',
  quizDeck: [],
  quizIdx: 0,
  myScore: 0,
  myCorrect: 0,
  myWrong: 0,
  myFlags: [],
  answered: false,
  mode: 'quiz',
  finished: false,
  myDone: false,
  hintsLeft: 3,
  series: { p1wins: 0, p2wins: 0, round: 1 },
  bestOf: 1,
  answerStartMs: 0,
  myPowerups: { double: 1, skip: 1, freeze: 1 },
  doubleActive: false,
  powerupsEnabled: false,
  isAsyncChallenge: false,
  oppName: '',
  oppAvatar: '',
  oppScore: 0,
  oppIdx: 0,
  oppFlags: [],
  oppDisconnected: false,
  oppDisconnectedSince: null,
  roomCreatedAt: 0,
  roomSeed: 0,
  roomCategory: '',
  roomDifficulty: 'mixed',
  roomMaxHints: 3,
  roomLang: 'en',
  roomKnowLang: 'ua',
};

const useDuelRoomStore = create<DuelRoomStoreState>()(
  devtools(
    () => ({
      room: initialRoom,
      screen: 'lobby',
      countdownNum: 3,
      tempo: { visible: false, num: 4 },
    }),
    { name: 'duel-room', enabled: import.meta.env.DEV },
  ),
);

export function DuelRoomProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function useDuelRoomState(): DuelRoomStoreState {
  return useDuelRoomStore();
}

function shallowEqual<T>(a: T, b: T): boolean {
  if (Object.is(a, b)) return true;
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) return false;
  const keysA = Object.keys(a as Record<string, unknown>);
  const keysB = Object.keys(b as Record<string, unknown>);
  if (keysA.length !== keysB.length) return false;
  for (const key of keysA) {
    if (!Object.is((a as Record<string, unknown>)[key], (b as Record<string, unknown>)[key])) {
      return false;
    }
  }
  return true;
}

// Fine-grained variant of useDuelRoomState(): re-renders only when the
// selected/derived value actually changes (shallow-equal by default), not on
// every one of this store's 25+ fields. `selector` may ignore its argument
// and read getDuelRoomSnapshot()/getDuelScreenSnapshot()/etc. directly — the
// shape this codebase's existing `_getXxxData()` view-model helpers already
// have (see duel-game-header.tsx, duel-powerups.tsx, duel-lobby-logic.ts).
export function useDuelRoomSelector<T>(
  selector: (state: DuelRoomStoreState) => T,
  isEqual: (a: T, b: T) => boolean = shallowEqual,
): T {
  const cache = useRef<{ input: DuelRoomStoreState; output: T } | null>(null);
  function getSelection(): T {
    const state = useDuelRoomStore.getState();
    if (cache.current && cache.current.input === state) {
      return cache.current.output;
    }
    const next = selector(state);
    const output =
      cache.current && isEqual(cache.current.output, next) ? cache.current.output : next;
    cache.current = { input: state, output };
    return output;
  }
  return useSyncExternalStore(useDuelRoomStore.subscribe, getSelection);
}

export function getDuelRoomSnapshot(): DuelRoomState {
  return useDuelRoomStore.getState().room;
}

export function getDuelScreenSnapshot(): DuelScreen {
  return useDuelRoomStore.getState().screen;
}

export function getDuelCountdownNumSnapshot(): number {
  return useDuelRoomStore.getState().countdownNum;
}

export function getDuelTempoSnapshot(): { visible: boolean; num: number } {
  return useDuelRoomStore.getState().tempo;
}

export function setDuelRoom(patch: Partial<DuelRoomState>): void {
  useDuelRoomStore.setState((state) => ({ room: { ...state.room, ...patch } }));
}

export function setDuelScreen(screen: DuelScreen): void {
  useDuelRoomStore.setState({ screen });
}

export function setDuelCountdownNum(num: number): void {
  useDuelRoomStore.setState({ countdownNum: num });
}

export function setDuelTempo(tempo: { visible: boolean; num: number }): void {
  useDuelRoomStore.setState({ tempo });
}
