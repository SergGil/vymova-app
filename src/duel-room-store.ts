// src/duel-room-store.ts — active-duel-game domain (replaces state.duelRoom +
// state.duelScreen + state.duelCountdownNum + state.duelTempo). Bundled into
// one store deliberately: duelScreen/duelCountdownNum/duelTempo coordinate
// with duelRoom.mode/.finished in the same tick (e.g. _showFinish, the
// opponent-poll interval) — splitting them would reintroduce a cross-store
// tearing risk for no benefit, since no reader needs duelScreen without also
// needing room-shaped data.
import { createDomainStore } from './create-domain-store.tsx';
import type { DuelRoomState, DuelScreen } from './types.ts';

interface DuelRoomStoreState {
  room: DuelRoomState;
  screen: DuelScreen;
  countdownNum: number;
  tempo: { visible: boolean; num: number };
}

type DuelRoomAction =
  | { type: 'SET_ROOM'; patch: Partial<DuelRoomState> }
  | { type: 'SET_SCREEN'; screen: DuelScreen }
  | { type: 'SET_COUNTDOWN_NUM'; num: number }
  | { type: 'SET_TEMPO'; tempo: { visible: boolean; num: number } };

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
  roomCreatedAt: 0,
  roomSeed: 0,
  roomCategory: '',
  roomDifficulty: 'mixed',
  roomMaxHints: 3,
  roomLang: 'en',
  roomKnowLang: 'ua',
};

function duelRoomReducer(state: DuelRoomStoreState, action: DuelRoomAction): DuelRoomStoreState {
  switch (action.type) {
    case 'SET_ROOM':
      return { ...state, room: { ...state.room, ...action.patch } };
    case 'SET_SCREEN':
      return { ...state, screen: action.screen };
    case 'SET_COUNTDOWN_NUM':
      return { ...state, countdownNum: action.num };
    case 'SET_TEMPO':
      return { ...state, tempo: action.tempo };
  }
}

const duelRoomStore = createDomainStore<DuelRoomStoreState, DuelRoomAction>(duelRoomReducer, {
  room: initialRoom,
  screen: 'lobby',
  countdownNum: 3,
  tempo: { visible: false, num: 4 },
});

export const DuelRoomProvider = duelRoomStore.Provider;

export function useDuelRoomState(): DuelRoomStoreState {
  return duelRoomStore.useStore();
}

export function getDuelRoomSnapshot(): DuelRoomState {
  return duelRoomStore.getSnapshot().room;
}

export function getDuelScreenSnapshot(): DuelScreen {
  return duelRoomStore.getSnapshot().screen;
}

export function getDuelCountdownNumSnapshot(): number {
  return duelRoomStore.getSnapshot().countdownNum;
}

export function getDuelTempoSnapshot(): { visible: boolean; num: number } {
  return duelRoomStore.getSnapshot().tempo;
}

export function setDuelRoom(patch: Partial<DuelRoomState>): void {
  duelRoomStore.dispatch({ type: 'SET_ROOM', patch });
}

export function setDuelScreen(screen: DuelScreen): void {
  duelRoomStore.dispatch({ type: 'SET_SCREEN', screen });
}

export function setDuelCountdownNum(num: number): void {
  duelRoomStore.dispatch({ type: 'SET_COUNTDOWN_NUM', num });
}

export function setDuelTempo(tempo: { visible: boolean; num: number }): void {
  duelRoomStore.dispatch({ type: 'SET_TEMPO', tempo });
}
