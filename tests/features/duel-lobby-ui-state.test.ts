import { describe, it, expect } from 'vitest';
import { _getLobbyUIData, _cancelRoom } from '../../js/features/duel.ts';
import {
  setLobbyWaiting,
  setLobbyJoinRowVisible,
  setLobbyBtn,
  setLobbyMsg,
  getDuelLobbyUISnapshot,
} from '../../src/duel-lobby-store.ts';

describe('duel lobby UI state (Фаза 9/6, state.duelLobbyUI)', () => {
  it('_getLobbyUIData() reflects state.duelLobbyUI default', () => {
    expect(_getLobbyUIData()).toBe(getDuelLobbyUISnapshot());
    expect(_getLobbyUIData().msg.visible).toBe(false);
    expect(_getLobbyUIData().waiting.visible).toBe(false);
    expect(_getLobbyUIData().joinRowVisible).toBe(true);
    expect(_getLobbyUIData().createBtn.disabled).toBe(false);
    expect(_getLobbyUIData().tournBtn4.errorLabel).toBeNull();
    expect(_getLobbyUIData().tournBtn8.errorLabel).toBeNull();
  });

  it('_cancelRoom() resets waiting banner, join row and button disabled-states', () => {
    setLobbyWaiting({ visible: true, roomCode: 'ABC-123', modeLabel: 'Quiz' });
    setLobbyJoinRowVisible(false);
    setLobbyBtn('createBtn', true);
    setLobbyBtn('asyncBtn', true);
    setLobbyMsg({ visible: true, text: 'oops', challenge: null });

    _cancelRoom();

    expect(getDuelLobbyUISnapshot().waiting.visible).toBe(false);
    expect(getDuelLobbyUISnapshot().joinRowVisible).toBe(true);
    expect(getDuelLobbyUISnapshot().createBtn.disabled).toBe(false);
    expect(getDuelLobbyUISnapshot().asyncBtn.disabled).toBe(false);
    expect(getDuelLobbyUISnapshot().msg.visible).toBe(false);
  });
});
