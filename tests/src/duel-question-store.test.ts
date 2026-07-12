import { describe, it, expect, beforeEach } from 'vitest';
import {
  getDuelQuestionSnapshot,
  resetDuelQuestion,
  setDuelQuestionFields,
  setDuelQuestionFeedback,
  setDuelChosenOption,
  setDuelHintNote,
  setDuelWriteInput,
  setDuelWaitingFinish,
  setDuelShowNextBtn,
} from '../../src/duel-question-store.ts';

describe('duel-question-store.ts', () => {
  beforeEach(() => {
    resetDuelQuestion({});
  });

  it('has the documented blank-slate defaults', () => {
    expect(getDuelQuestionSnapshot()).toEqual({
      feedbackHtml: '',
      speedText: '',
      qPrimary: '',
      qSecondary: '',
      qTertiary: '',
      choiceOptions: [],
      choiceAnswer: '',
      chosenOption: null,
      hintNote: null,
      writeInputValue: '',
      inputBorderColor: '',
      waitingFinish: false,
      showNextBtn: false,
    });
  });

  it('resetDuelQuestion overwrites the whole state, patched with the given fields', () => {
    setDuelChosenOption('42');
    setDuelWaitingFinish(true);
    resetDuelQuestion({ qPrimary: 'apple', choiceOptions: ['a', 'b'] });
    const s = getDuelQuestionSnapshot();
    expect(s.qPrimary).toBe('apple');
    expect(s.choiceOptions).toEqual(['a', 'b']);
    // Reset means it's back to defaults, not just merged on top of old state.
    expect(s.chosenOption).toBeNull();
    expect(s.waitingFinish).toBe(false);
  });

  it('setDuelQuestionFields merges a partial patch onto existing state', () => {
    resetDuelQuestion({ qPrimary: 'apple' });
    setDuelQuestionFields({ qSecondary: 'bee' });
    const s = getDuelQuestionSnapshot();
    expect(s.qPrimary).toBe('apple');
    expect(s.qSecondary).toBe('bee');
  });

  it('setDuelQuestionFeedback sets feedbackHtml + speedText together', () => {
    setDuelQuestionFeedback('<b>Correct!</b>', '1.2s');
    const s = getDuelQuestionSnapshot();
    expect(s.feedbackHtml).toBe('<b>Correct!</b>');
    expect(s.speedText).toBe('1.2s');
  });

  it('setDuelChosenOption updates chosenOption only', () => {
    setDuelQuestionFields({ qPrimary: 'apple' });
    setDuelChosenOption('b');
    expect(getDuelQuestionSnapshot().chosenOption).toBe('b');
    expect(getDuelQuestionSnapshot().qPrimary).toBe('apple');
  });

  it('setDuelHintNote updates hintNote only', () => {
    setDuelHintNote('starts with a vowel');
    expect(getDuelQuestionSnapshot().hintNote).toBe('starts with a vowel');
  });

  it('setDuelWriteInput updates value and, when given, the border color', () => {
    setDuelWriteInput('ap');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('ap');
    expect(getDuelQuestionSnapshot().inputBorderColor).toBe('');

    setDuelWriteInput('apple', 'green');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('apple');
    expect(getDuelQuestionSnapshot().inputBorderColor).toBe('green');
  });

  it('setDuelWriteInput without a border color preserves the previous one', () => {
    setDuelWriteInput('ap', 'red');
    setDuelWriteInput('app');
    expect(getDuelQuestionSnapshot().writeInputValue).toBe('app');
    expect(getDuelQuestionSnapshot().inputBorderColor).toBe('red');
  });

  it('setDuelWaitingFinish / setDuelShowNextBtn toggle their own booleans', () => {
    setDuelWaitingFinish(true);
    expect(getDuelQuestionSnapshot().waitingFinish).toBe(true);
    setDuelShowNextBtn(true);
    expect(getDuelQuestionSnapshot().showNextBtn).toBe(true);
    expect(getDuelQuestionSnapshot().waitingFinish).toBe(true);
  });
});
