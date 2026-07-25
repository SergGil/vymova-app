// Vymova — js/features/duel/duel-screen.ts
// Which duel screen is active (lobby/countdown/result — see duel.ts's
// _showGame for the "game" screen, which stays there since it also resets
// the chat-reaction dedup timestamp that lives alongside the rest of the
// chat/reactions logic). Pure wrapper over duel-room-store — zero dependency
// on game-runtime or lobby logic, so both can import this without risking a
// circular chunk. Readers subscribe reactively via useDuelRoomState().
import { getDuelScreenSnapshot, setDuelScreen } from '../../../src/duel-room-store.ts';
import { resetLobbyUI } from '../../../src/duel-lobby-store.ts';
import type { DuelScreen } from '../../../src/types.js';

// Який екран дуелі активний (item 36, Фаза 7.4-B, під-фаза 9) — дзеркалить
// `_showLobby`/`_showCountdown`/`_showGame`/`_showResult`/`_showTournament`/
// spectator-view.
export function _getDuelScreen(): DuelScreen {
  return getDuelScreenSnapshot();
}

export function _showLobby(): void {
  // Always reset waiting state so the create button is never stuck
  resetLobbyUI();
  setDuelScreen('lobby');
}
export function _showCountdown(): void {
  setDuelScreen('countdown');
}
// Keep the chat panel visible/usable on the finish screen so players can keep chatting.
export function _showResult(): void {
  setDuelScreen('result');
}
