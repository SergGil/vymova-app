// src/duel-lobby-store.ts — duel lobby domain (replaces state.duelSel +
// state.duelLobbyUI). Both are written/read together on the pre-game lobby
// screen (_showLobby() resets both atomically), so they share one store.
import { createDomainStore } from './create-domain-store.tsx';
import type { DuelSelState, DuelLobbyUIState } from './types.ts';

interface DuelLobbyState {
  sel: DuelSelState;
  ui: DuelLobbyUIState;
}

type DuelLobbyAction =
  | { type: 'SET_SEL_FIELD'; field: keyof DuelSelState; value: DuelSelState[keyof DuelSelState] }
  | { type: 'SET_MSG'; msg: DuelLobbyUIState['msg'] }
  | { type: 'SET_WAITING'; waiting: DuelLobbyUIState['waiting'] }
  | { type: 'SET_JOIN_ROW_VISIBLE'; visible: boolean }
  | { type: 'SET_BTN'; btn: 'createBtn' | 'joinBtn' | 'asyncBtn'; disabled: boolean }
  | { type: 'SET_TOURN_BTN'; btn: 'tournBtn4' | 'tournBtn8'; disabled: boolean; errorLabel: string | null }
  | { type: 'RESET_LOBBY' };

const initialSel: DuelSelState = {
  mode: 'quiz',
  category: '',
  difficulty: 'mixed',
  bestOf: 1,
  maxHints: 3,
  powerupsEnabled: true,
  lang: localStorage.getItem('ew_learn_lang') ?? 'en',
  knowLang: localStorage.getItem('ew_know_lang') ?? 'ua',
};

const initialUi: DuelLobbyUIState = {
  msg: { visible: false, text: '', challenge: null },
  waiting: { visible: false, roomCode: '', modeLabel: '' },
  joinRowVisible: true,
  createBtn: { disabled: false },
  joinBtn: { disabled: false },
  asyncBtn: { disabled: false },
  tournBtn4: { disabled: false, errorLabel: null },
  tournBtn8: { disabled: false, errorLabel: null },
};

function duelLobbyReducer(state: DuelLobbyState, action: DuelLobbyAction): DuelLobbyState {
  switch (action.type) {
    case 'SET_SEL_FIELD':
      return { ...state, sel: { ...state.sel, [action.field]: action.value } };
    case 'SET_MSG':
      return { ...state, ui: { ...state.ui, msg: action.msg } };
    case 'SET_WAITING':
      return { ...state, ui: { ...state.ui, waiting: action.waiting } };
    case 'SET_JOIN_ROW_VISIBLE':
      return { ...state, ui: { ...state.ui, joinRowVisible: action.visible } };
    case 'SET_BTN':
      return { ...state, ui: { ...state.ui, [action.btn]: { disabled: action.disabled } } };
    case 'SET_TOURN_BTN':
      return { ...state, ui: { ...state.ui, [action.btn]: { disabled: action.disabled, errorLabel: action.errorLabel } } };
    case 'RESET_LOBBY':
      return { ...state, ui: { ...initialUi } };
  }
}

const duelLobbyStore = createDomainStore<DuelLobbyState, DuelLobbyAction>(
  duelLobbyReducer,
  { sel: initialSel, ui: initialUi },
);

export const DuelLobbyProvider = duelLobbyStore.Provider;

export function useDuelLobby(): DuelLobbyState {
  return duelLobbyStore.useStore();
}

export function getDuelSelSnapshot(): DuelSelState {
  return duelLobbyStore.getSnapshot().sel;
}

export function getDuelLobbyUISnapshot(): DuelLobbyUIState {
  return duelLobbyStore.getSnapshot().ui;
}

export function setSelField<K extends keyof DuelSelState>(field: K, value: DuelSelState[K]): void {
  duelLobbyStore.dispatch({ type: 'SET_SEL_FIELD', field, value });
}

export function setLobbyMsg(msg: DuelLobbyUIState['msg']): void {
  duelLobbyStore.dispatch({ type: 'SET_MSG', msg });
}

export function setLobbyWaiting(waiting: DuelLobbyUIState['waiting']): void {
  duelLobbyStore.dispatch({ type: 'SET_WAITING', waiting });
}

export function setLobbyJoinRowVisible(visible: boolean): void {
  duelLobbyStore.dispatch({ type: 'SET_JOIN_ROW_VISIBLE', visible });
}

export function setLobbyBtn(btn: 'createBtn' | 'joinBtn' | 'asyncBtn', disabled: boolean): void {
  duelLobbyStore.dispatch({ type: 'SET_BTN', btn, disabled });
}

export function setLobbyTournBtn(btn: 'tournBtn4' | 'tournBtn8', disabled: boolean, errorLabel: string | null): void {
  duelLobbyStore.dispatch({ type: 'SET_TOURN_BTN', btn, disabled, errorLabel });
}

export function resetLobbyUI(): void {
  duelLobbyStore.dispatch({ type: 'RESET_LOBBY' });
}
