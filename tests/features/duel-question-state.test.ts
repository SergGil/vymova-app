import { describe, it, expect } from 'vitest';
import { _getFeedbackData, _getQuestionData, _onInputChange } from '../../js/features/duel.ts';
import { getDuelQuestionSnapshot } from '../../src/duel-question-store.ts';

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
      q.choiceOptions.map((opt, i) => ({ text: opt, num: i + 1, cls: 'quiz-option' }))
    );
  });

  it('_onInputChange() updates state.duelQuestion.writeInputValue', () => {
    _onInputChange('hello');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('hello');
    _onInputChange('');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('');
  });
});
