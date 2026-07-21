import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { _getFeedbackData, _getQuestionData, _onInputChange } from '../../js/features/duel/duel.ts';
import { getDuelQuestionSnapshot, setDuelQuestionFields } from '../../src/duel-question-store.ts';
import { setDuelRoom } from '../../src/duel-room-store.ts';

describe('duel question/feedback state (Фаза 7.4-B / 6, state.duelQuestion)', () => {
  it('_getFeedbackData() reflects state.duelQuestion defaults', () => {
    const q = getDuelQuestionSnapshot();
    expect(_getFeedbackData()).toEqual({
      html: q.feedbackHtml,
      speed: q.speedText,
    });
  });

  it('_getQuestionData() reflects state.duelQuestion fields', () => {
    const data = _getQuestionData();
    const q = getDuelQuestionSnapshot();
    expect(data.qPrimary).toBe(q.qPrimary);
    expect(data.qSecondary).toBe(q.qSecondary);
    expect(data.qTertiary).toBe(q.qTertiary);
    expect(data.hintNote).toBe(q.hintNote);
    expect(data.inputBorderColor).toBe(q.inputBorderColor);
    expect(data.showNextBtn).toBe(q.showNextBtn);
    expect(data.waiting).toBe(q.waitingFinish);
    expect(data.options).toEqual(
      q.choiceOptions.map((opt, i) => ({ text: opt, num: i + 1, cls: 'quiz-option' })),
    );
  });

  it('_onInputChange() updates state.duelQuestion.writeInputValue', () => {
    _onInputChange('hello');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('hello');
    _onInputChange('');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('');
  });

  describe('_getQuestionData().canForfeit', () => {
    beforeEach(() => {
      vi.useFakeTimers();
      vi.setSystemTime(new Date('2024-06-01T12:00:00.000Z'));
      setDuelQuestionFields({ waitingFinish: true });
    });
    afterEach(() => {
      vi.useRealTimers();
      setDuelQuestionFields({ waitingFinish: false });
      setDuelRoom({ oppDisconnected: false, oppDisconnectedSince: null });
    });

    it('is false while connected (oppDisconnectedSince unset)', () => {
      setDuelRoom({ oppDisconnected: false, oppDisconnectedSince: null });
      expect(_getQuestionData().canForfeit).toBe(false);
    });

    it('is false right after the opponent is first flagged disconnected (FORFEIT_DELAY_MS not elapsed)', () => {
      setDuelRoom({ oppDisconnected: true, oppDisconnectedSince: Date.now() });
      expect(_getQuestionData().canForfeit).toBe(false);
    });

    it('is false at just under the delay threshold', () => {
      setDuelRoom({ oppDisconnected: true, oppDisconnectedSince: Date.now() - 11_999 });
      expect(_getQuestionData().canForfeit).toBe(false);
    });

    it('is true once the opponent has been disconnected past FORFEIT_DELAY_MS', () => {
      setDuelRoom({ oppDisconnected: true, oppDisconnectedSince: Date.now() - 12_001 });
      expect(_getQuestionData().canForfeit).toBe(true);
    });

    it('is false when not actually waiting on the opponent, even if long disconnected', () => {
      setDuelQuestionFields({ waitingFinish: false });
      setDuelRoom({ oppDisconnected: true, oppDisconnectedSince: Date.now() - 60_000 });
      expect(_getQuestionData().canForfeit).toBe(false);
    });
  });
});
