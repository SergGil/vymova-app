// src/duel-async-store.ts — five independent async/optional duel domains
// (replaces state.duelChatHistory/.duelSpecRoom/.duelTournView/.duelResult/
// .duelResumeSessions). Each is Firebase-polled or written on its own
// schedule with no co-write relationship to the others, so each gets its own
// store instance rather than one shared reducer (which would create a fake
// coupling and cause e.g. duel-result.tsx to re-render on unrelated
// tournament-bracket updates).
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so the 5 *Provider exports below are
// no-ops kept only for API compatibility with existing call sites. Each
// store's entire state IS the value (an array or a nullable object, not a
// {field: ...} container) — every setState call below passes `true`
// (replace mode) so Zustand's default shallow-merge-into-existing-state
// behavior never runs; merging e.g. `null` into a previous RoomData object
// would silently no-op instead of clearing it, which is exactly the kind
// of bug this migration must not introduce.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type {
  RoomData,
  DuelResultData,
  ResumeSessionVM,
  TournamentData,
} from '../js/features/duel/duel-types.ts';

// ── Chat history ──────────────────────────────────────────────
type ChatMsg = { text: string; isMe: boolean };

const useDuelChatStore = create<ChatMsg[]>()(
  devtools(() => [], { name: 'duel-chat', enabled: import.meta.env.DEV }),
);
export function DuelChatProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}
export function useDuelChat(): ChatMsg[] {
  return useDuelChatStore();
}
export function getDuelChatSnapshot(): ChatMsg[] {
  return useDuelChatStore.getState();
}
export function setDuelChat(messages: ChatMsg[]): void {
  useDuelChatStore.setState(messages, true);
}
export function appendDuelChat(message: ChatMsg): void {
  useDuelChatStore.setState((state) => [...state, message], true);
}
export function clearDuelChat(): void {
  useDuelChatStore.setState([], true);
}

// ── Spectator room snapshot ───────────────────────────────────
const useDuelSpecRoomStore = create<RoomData | null>()(
  devtools(() => null, { name: 'duel-spec-room', enabled: import.meta.env.DEV }),
);
export function DuelSpecRoomProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}
export function useDuelSpecRoom(): RoomData | null {
  return useDuelSpecRoomStore();
}
export function getDuelSpecRoomSnapshot(): RoomData | null {
  return useDuelSpecRoomStore.getState();
}
export function setDuelSpecRoom(room: RoomData | null): void {
  useDuelSpecRoomStore.setState(room, true);
}

// ── Tournament view ────────────────────────────────────────────
const useDuelTournViewStore = create<TournamentData | null>()(
  devtools(() => null, { name: 'duel-tourn-view', enabled: import.meta.env.DEV }),
);
export function DuelTournViewProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}
export function useDuelTournView(): TournamentData | null {
  return useDuelTournViewStore();
}
export function getDuelTournViewSnapshot(): TournamentData | null {
  return useDuelTournViewStore.getState();
}
export function setDuelTournView(view: TournamentData | null): void {
  useDuelTournViewStore.setState(view, true);
}

// ── Result screen snapshot ────────────────────────────────────
const useDuelResultStore = create<DuelResultData>()(
  devtools(() => null, { name: 'duel-result', enabled: import.meta.env.DEV }),
);
export function DuelResultProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}
export function useDuelResult(): DuelResultData {
  return useDuelResultStore();
}
export function getDuelResultSnapshot(): DuelResultData {
  return useDuelResultStore.getState();
}
export function setDuelResult(result: DuelResultData): void {
  useDuelResultStore.setState(result, true);
}

// ── Resume sessions list ──────────────────────────────────────
const useDuelResumeSessionsStore = create<ResumeSessionVM[]>()(
  devtools(() => [], { name: 'duel-resume-sessions', enabled: import.meta.env.DEV }),
);
export function DuelResumeSessionsProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}
export function useDuelResumeSessions(): ResumeSessionVM[] {
  return useDuelResumeSessionsStore();
}
export function getDuelResumeSessionsSnapshot(): ResumeSessionVM[] {
  return useDuelResumeSessionsStore.getState();
}
export function setDuelResumeSessions(sessions: ResumeSessionVM[]): void {
  useDuelResumeSessionsStore.setState(sessions, true);
}
