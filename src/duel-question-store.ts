// src/duel-question-store.ts — current question/answer/feedback domain
// (replaces state.duelQuestion). Resets atomically per question via
// _renderQuestion() and its mode-specific sub-renderers.
import { createDomainStore } from './create-domain-store.tsx';
import type { DuelQuestionState } from './types.ts';

type DuelQuestionAction =
  | { type: 'RESET_QUESTION'; patch: Partial<DuelQuestionState> }
  | { type: 'SET_FIELDS'; patch: Partial<DuelQuestionState> }
  | { type: 'SET_FEEDBACK'; html: string; speed: string }
  | { type: 'SET_CHOSEN'; chosenOption: string | null }
  | { type: 'SET_HINT_NOTE'; hintNote: string | null }
  | { type: 'SET_WRITE_INPUT'; value: string; borderColor?: string }
  | { type: 'SET_WAITING_FINISH'; waiting: boolean }
  | { type: 'SET_SHOW_NEXT'; show: boolean };

const initialQuestion: DuelQuestionState = {
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
};

function duelQuestionReducer(
  state: DuelQuestionState,
  action: DuelQuestionAction,
): DuelQuestionState {
  switch (action.type) {
    case 'RESET_QUESTION':
      return { ...initialQuestion, ...action.patch };
    case 'SET_FIELDS':
      return { ...state, ...action.patch };
    case 'SET_FEEDBACK':
      return { ...state, feedbackHtml: action.html, speedText: action.speed };
    case 'SET_CHOSEN':
      return { ...state, chosenOption: action.chosenOption };
    case 'SET_HINT_NOTE':
      return { ...state, hintNote: action.hintNote };
    case 'SET_WRITE_INPUT':
      return {
        ...state,
        writeInputValue: action.value,
        inputBorderColor: action.borderColor ?? state.inputBorderColor,
      };
    case 'SET_WAITING_FINISH':
      return { ...state, waitingFinish: action.waiting };
    case 'SET_SHOW_NEXT':
      return { ...state, showNextBtn: action.show };
  }
}

const duelQuestionStore = createDomainStore<DuelQuestionState, DuelQuestionAction>(
  duelQuestionReducer,
  initialQuestion,
);

export const DuelQuestionProvider = duelQuestionStore.Provider;

export function useDuelQuestion(): DuelQuestionState {
  return duelQuestionStore.useStore();
}

export function getDuelQuestionSnapshot(): DuelQuestionState {
  return duelQuestionStore.getSnapshot();
}

export function resetDuelQuestion(patch: Partial<DuelQuestionState>): void {
  duelQuestionStore.dispatch({ type: 'RESET_QUESTION', patch });
}

export function setDuelQuestionFields(patch: Partial<DuelQuestionState>): void {
  duelQuestionStore.dispatch({ type: 'SET_FIELDS', patch });
}

export function setDuelQuestionFeedback(html: string, speed: string): void {
  duelQuestionStore.dispatch({ type: 'SET_FEEDBACK', html, speed });
}

export function setDuelChosenOption(chosenOption: string | null): void {
  duelQuestionStore.dispatch({ type: 'SET_CHOSEN', chosenOption });
}

export function setDuelHintNote(hintNote: string | null): void {
  duelQuestionStore.dispatch({ type: 'SET_HINT_NOTE', hintNote });
}

export function setDuelWriteInput(value: string, borderColor?: string): void {
  duelQuestionStore.dispatch({ type: 'SET_WRITE_INPUT', value, borderColor });
}

export function setDuelWaitingFinish(waiting: boolean): void {
  duelQuestionStore.dispatch({ type: 'SET_WAITING_FINISH', waiting });
}

export function setDuelShowNextBtn(show: boolean): void {
  duelQuestionStore.dispatch({ type: 'SET_SHOW_NEXT', show });
}
