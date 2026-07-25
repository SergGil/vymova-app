// Vymova — js/features/duel/duel-spectator-logic.ts
// Spectator-mode state/logic, extracted out of duel.ts. Owns its own poll
// timer (_specPollTimer) rather than reusing duel.ts's game-opponent
// `_pollTimer` — play and spectate are mutually exclusive at runtime, so
// giving spectator mode a dedicated timer var is behavior-preserving and
// lets this module own its state outright instead of reaching back into
// duel.ts for it (same reasoning as duel-tournament-logic.ts).
import { t } from '../i18n.ts';
import { DB_URL, _fbGet, _fbPatch } from './duel-firebase.ts';
import { setLobbyMsg } from '../../../src/duel-lobby-store.ts';
import { setDuelScreen, setDuelRoom, getDuelRoomSnapshot } from '../../../src/duel-room-store.ts';
import { setDuelSpecRoom, getDuelSpecRoomSnapshot } from '../../../src/duel-async-store.ts';
import type { RoomData } from './duel.ts';
import { _genCode } from './duel-deck.ts';
import { _getMyName, _getMyAvatar } from './duel-profile-snap.ts';
import {
  _askCode,
  _showLobby,
  _cancelRoom,
  renderDuel,
  _registerSpecCancelHook,
  _registerSpecLeaveHook,
} from './duel.ts';

let _isSpectator = false;
let _specId = '';
let _specPollTimer: ReturnType<typeof setInterval> | null = null;

export function _getSpecRoom(): RoomData | null {
  return getDuelSpecRoomSnapshot();
}

// Called by duel.ts's _cancelRoom() via the registered hook below, so
// leaving/cancelling a room while spectating also stops the poll and
// removes the spectator entry from Firebase.
export function _cancelSpectating(roomId: string): void {
  if (_specPollTimer) {
    clearInterval(_specPollTimer);
    _specPollTimer = null;
  }
  if (_isSpectator && _specId) {
    fetch(`${DB_URL}/duel_rooms/${roomId}/spectators/${_specId}.json`, {
      method: 'DELETE',
    }).catch(() => {});
  }
  _isSpectator = false;
  _specId = '';
}

export async function joinAsSpectator(): Promise<void> {
  const code = await _askCode(t('duel.spectate.title'), t('duel.spectate.desc'));
  if (!code) return;
  try {
    const room = (await _fbGet(`/duel_rooms/${code}`)) as RoomData | null;
    if (!room?.seed) throw new Error(t('duel.err.notFound'));
    _isSpectator = true;
    _specId = _genCode();
    // mySlot defaults to (or may still hold) 'p1' from a previous game —
    // force it to 'p2' so _cancelRoom()'s "I'm p1, delete the room" branch
    // never fires for a spectator, who never owns the room being watched.
    setDuelRoom({ roomId: code, mySlot: 'p2' });
    await _fbPatch(`/duel_rooms/${code}/spectators/${_specId}`, {
      name: _getMyName(),
      avatar: _getMyAvatar(),
    });
    _startSpectatorView(room);
  } catch (e) {
    setLobbyMsg({ visible: true, text: '❌ ' + (e as Error).message, challenge: null });
  }
}

function _startSpectatorView(room: RoomData): void {
  setDuelScreen('spectate');
  _renderSpectatorView(room);
  _specPollTimer = setInterval(async () => {
    try {
      const r = (await _fbGet(`/duel_rooms/${getDuelRoomSnapshot().roomId}`)) as RoomData | null;
      if (!r) return;
      _renderSpectatorView(r);
      if (r.finished) {
        clearInterval(_specPollTimer!);
        _specPollTimer = null;
        // Clean up spectator entry in Firebase before leaving
        if (_specId)
          fetch(`${DB_URL}/duel_rooms/${getDuelRoomSnapshot().roomId}/spectators/${_specId}.json`, {
            method: 'DELETE',
          }).catch(() => {});
        _specId = '';
        _isSpectator = false;
        setTimeout(() => {
          _showLobby();
          renderDuel();
        }, 3000);
      }
    } catch (e) {}
  }, 1500);
}

function _renderSpectatorView(room: RoomData): void {
  setDuelSpecRoom(room);
}

// Покинути спостереження (item 33, Фаза 5) — викликається з React-кнопки
// duel-spectator.tsx, а також зі smart close-кнопки нижче.
export function _leaveSpectator(): void {
  _cancelRoom();
  _showLobby();
  renderDuel();
}

// Registered once at module load — duel.ts's _cancelRoom()/DuelInit call
// these via _specCancelHook/_specLeaveHook without importing this module
// (mirrors duel-async-challenge.ts's _registerAsyncStartCancelHook pattern).
_registerSpecCancelHook(_cancelSpectating);
_registerSpecLeaveHook(_leaveSpectator);
