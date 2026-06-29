import { describe, it, expect } from 'vitest';
import { _getGameHeaderData, _getPowerupsData, _getQuestionData } from '../../js/features/duel.ts';
import { getDuelRoomSnapshot } from '../../src/duel-room-store.ts';

describe('duel room/game core state (Фаза 7.4-B / 7, state.duelRoom)', () => {
  it('_getGameHeaderData() reflects state.duelRoom defaults', () => {
    const data = _getGameHeaderData();
    const room = getDuelRoomSnapshot();
    expect(data.myScore).toBe(room.myScore);
    expect(data.myIdx).toBe(room.quizIdx);
    expect(data.myTotal).toBe(room.quizDeck.length);
    expect(data.myFlags).toBe(room.myFlags);
    expect(data.oppScore).toBe(room.oppScore);
    expect(data.oppIdx).toBe(room.oppIdx);
    expect(data.oppFlags).toBe(room.oppFlags);
    expect(data.mode).toBe(room.mode);
    expect(data.bestOf).toBe(room.bestOf);
    expect(data.progressText).toBe(`${room.quizIdx + 1} / ${room.quizDeck.length}`);
  });

  it('_getPowerupsData() reflects state.duelRoom power-up fields', () => {
    const data = _getPowerupsData();
    const room = getDuelRoomSnapshot();
    expect(data.enabled).toBe(room.powerupsEnabled);
    expect(data.mode).toBe(room.mode);
    expect(data.myPowerups).toEqual(room.myPowerups);
    expect(data.answered).toBe(room.answered);
  });

  it('_getQuestionData() hint button reflects state.duelRoom.hintsLeft', () => {
    const data = _getQuestionData();
    const room = getDuelRoomSnapshot();
    expect(data.hintBtnDisabled).toBe(room.hintsLeft <= 0);
    expect(data.showHintBtn).toBe(room.mode === 'write');
  });
});
