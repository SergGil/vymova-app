import { describe, it, expect } from 'vitest';
import { _getFeedbackData, _getQuestionData, _onInputChange } from '../../js/features/duel.ts';
import { state } from '../../src/state.ts';

describe('duel question/feedback state (Фаза 7.4-B / 6, state.duelQuestion)', () => {
  it('_getFeedbackData() reflects state.duelQuestion defaults', () => {
    expect(_getFeedbackData()).toEqual({
      html: state.duelQuestion.feedbackHtml,
      speed: state.duelQuestion.speedText,
    });
  });

  it('_getQuestionData() reflects state.duelQuestion fields', () => {
    const data = _getQuestionData();
    expect(data.qPrimary).toBe(state.duelQuestion.qPrimary);
    expect(data.qSecondary).toBe(state.duelQuestion.qSecondary);
    expect(data.qTertiary).toBe(state.duelQuestion.qTertiary);
    expect(data.hintNote).toBe(state.duelQuestion.hintNote);
    expect(data.inputBorderColor).toBe(state.duelQuestion.inputBorderColor);
    expect(data.showNextBtn).toBe(state.duelQuestion.showNextBtn);
    expect(data.waiting).toBe(state.duelQuestion.waitingFinish);
    expect(data.options).toEqual(
      state.duelQuestion.choiceOptions.map((opt, i) => ({ text: opt, num: i + 1, cls: 'quiz-option' }))
    );
  });

  it('_onInputChange() updates state.duelQuestion.writeInputValue', () => {
    _onInputChange('hello');
    expect(state.duelQuestion.writeInputValue).toBe('hello');
    _onInputChange('');
    expect(state.duelQuestion.writeInputValue).toBe('');
  });
});
