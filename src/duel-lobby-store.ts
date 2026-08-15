// src/duel-lobby-store.ts — duel lobby domain (replaces state.duelSel +
// state.duelLobbyUI). Both are written/read together on the pre-game lobby
// screen (_showLobby() resets both atomically), so they share one store.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so DuelLobbyProvider below is a no-op
// kept only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type { DuelSelState, DuelLobbyUIState } from './types.ts';

interface DuelLobbyState {
  sel: DuelSelState;
  ui: DuelLobbyUIState;
}

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

const useDuelLobbyStore = create<DuelLobbyState>()(
  devtools(() => ({ sel: initialSel, ui: initialUi }), {
    name: 'duel-lobby',
    enabled: import.meta.env.DEV,
  }),
);

export function DuelLobbyProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function useDuelLobby(): DuelLobbyState {
  return useDuelLobbyStore();
}

export function getDuelSelSnapshot(): DuelSelState {
  return useDuelLobbyStore.getState().sel;
}

export function getDuelLobbyUISnapshot(): DuelLobbyUIState {
  return useDuelLobbyStore.getState().ui;
}

export function setSelField<K extends keyof DuelSelState>(field: K, value: DuelSelState[K]): void {
  useDuelLobbyStore.setState((state) => ({ sel: { ...state.sel, [field]: value } }));
}

export function setLobbyMsg(msg: DuelLobbyUIState['msg']): void {
  useDuelLobbyStore.setState((state) => ({ ui: { ...state.ui, msg } }));
}

export function setLobbyWaiting(waiting: DuelLobbyUIState['waiting']): void {
  useDuelLobbyStore.setState((state) => ({ ui: { ...state.ui, waiting } }));
}

export function setLobbyJoinRowVisible(visible: boolean): void {
  useDuelLobbyStore.setState((state) => ({ ui: { ...state.ui, joinRowVisible: visible } }));
}

export function setLobbyBtn(btn: 'createBtn' | 'joinBtn' | 'asyncBtn', disabled: boolean): void {
  useDuelLobbyStore.setState((state) => ({
    ui: { ...state.ui, [btn]: { disabled } },
  }));
}

export function setLobbyTournBtn(
  btn: 'tournBtn4' | 'tournBtn8',
  disabled: boolean,
  errorLabel: string | null,
): void {
  useDuelLobbyStore.setState((state) => ({
    ui: { ...state.ui, [btn]: { disabled, errorLabel } },
  }));
}

export function resetLobbyUI(): void {
  useDuelLobbyStore.setState({ ui: { ...initialUi } });
}
