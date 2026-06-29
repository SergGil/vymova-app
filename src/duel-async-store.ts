// src/duel-async-store.ts — five independent async/optional duel domains
// (replaces state.duelChatHistory/.duelSpecRoom/.duelTournView/.duelResult/
// .duelResumeSessions). Each is Firebase-polled or written on its own
// schedule with no co-write relationship to the others, so each gets its own
// createDomainStore instance rather than one shared reducer (which would
// create a fake coupling and cause e.g. duel-result.tsx to re-render on
// unrelated tournament-bracket updates).
import { createDomainStore } from './create-domain-store.tsx';
import type { RoomData, TournamentData, DuelResultData, ResumeSessionVM } from '../js/features/duel.ts';

// ── Chat history ──────────────────────────────────────────────
type ChatMsg = { text: string; isMe: boolean };
type ChatAction = { type: 'SET'; messages: ChatMsg[] } | { type: 'APPEND'; message: ChatMsg } | { type: 'CLEAR' };

function chatReducer(state: ChatMsg[], action: ChatAction): ChatMsg[] {
  switch (action.type) {
    case 'SET': return action.messages;
    case 'APPEND': return [...state, action.message];
    case 'CLEAR': return [];
  }
}

const chatStore = createDomainStore<ChatMsg[], ChatAction>(chatReducer, []);
export const DuelChatProvider = chatStore.Provider;
export function useDuelChat(): ChatMsg[] { return chatStore.useStore(); }
export function getDuelChatSnapshot(): ChatMsg[] { return chatStore.getSnapshot(); }
export function setDuelChat(messages: ChatMsg[]): void { chatStore.dispatch({ type: 'SET', messages }); }
export function appendDuelChat(message: ChatMsg): void { chatStore.dispatch({ type: 'APPEND', message }); }
export function clearDuelChat(): void { chatStore.dispatch({ type: 'CLEAR' }); }

// ── Spectator room snapshot ───────────────────────────────────
type SpecAction = { type: 'SET'; room: RoomData | null };

function specReducer(_state: RoomData | null, action: SpecAction): RoomData | null {
  return action.room;
}

const specStore = createDomainStore<RoomData | null, SpecAction>(specReducer, null);
export const DuelSpecRoomProvider = specStore.Provider;
export function useDuelSpecRoom(): RoomData | null { return specStore.useStore(); }
export function getDuelSpecRoomSnapshot(): RoomData | null { return specStore.getSnapshot(); }
export function setDuelSpecRoom(room: RoomData | null): void { specStore.dispatch({ type: 'SET', room }); }

// ── Tournament view ────────────────────────────────────────────
type TournAction = { type: 'SET'; view: TournamentData | null };

function tournReducer(_state: TournamentData | null, action: TournAction): TournamentData | null {
  return action.view;
}

const tournStore = createDomainStore<TournamentData | null, TournAction>(tournReducer, null);
export const DuelTournViewProvider = tournStore.Provider;
export function useDuelTournView(): TournamentData | null { return tournStore.useStore(); }
export function getDuelTournViewSnapshot(): TournamentData | null { return tournStore.getSnapshot(); }
export function setDuelTournView(view: TournamentData | null): void { tournStore.dispatch({ type: 'SET', view }); }

// ── Result screen snapshot ────────────────────────────────────
type ResultAction = { type: 'SET'; result: DuelResultData };

function resultReducer(_state: DuelResultData, action: ResultAction): DuelResultData {
  return action.result;
}

const resultStore = createDomainStore<DuelResultData, ResultAction>(resultReducer, null);
export const DuelResultProvider = resultStore.Provider;
export function useDuelResult(): DuelResultData { return resultStore.useStore(); }
export function getDuelResultSnapshot(): DuelResultData { return resultStore.getSnapshot(); }
export function setDuelResult(result: DuelResultData): void { resultStore.dispatch({ type: 'SET', result }); }

// ── Resume sessions list ──────────────────────────────────────
type ResumeAction = { type: 'SET'; sessions: ResumeSessionVM[] };

function resumeReducer(_state: ResumeSessionVM[], action: ResumeAction): ResumeSessionVM[] {
  return action.sessions;
}

const resumeStore = createDomainStore<ResumeSessionVM[], ResumeAction>(resumeReducer, []);
export const DuelResumeSessionsProvider = resumeStore.Provider;
export function useDuelResumeSessions(): ResumeSessionVM[] { return resumeStore.useStore(); }
export function getDuelResumeSessionsSnapshot(): ResumeSessionVM[] { return resumeStore.getSnapshot(); }
export function setDuelResumeSessions(sessions: ResumeSessionVM[]): void { resumeStore.dispatch({ type: 'SET', sessions }); }
