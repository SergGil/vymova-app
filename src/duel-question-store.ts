// src/duel-question-store.ts — current question/answer/feedback domain
// (replaces state.duelQuestion). Resets atomically per question via
// _renderQuestion() and its mode-specific sub-renderers.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so DuelQuestionProvider below is a
// no-op kept only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type { DuelQuestionState } from './types.ts';

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

const useDuelQuestionStore = create<DuelQuestionState>()(
  devtools(() => initialQuestion, { name: 'duel-question', enabled: import.meta.env.DEV }),
);

export function DuelQuestionProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function useDuelQuestion(): DuelQuestionState {
  return useDuelQuestionStore();
}

export function getDuelQuestionSnapshot(): DuelQuestionState {
  return useDuelQuestionStore.getState();
}

// Every field of DuelQuestionState is present in {...initialQuestion,
// ...patch}, so a normal (merge-mode) setState already behaves like a full
// replace — no need for Zustand's replace:true flag.
export function resetDuelQuestion(patch: Partial<DuelQuestionState>): void {
  useDuelQuestionStore.setState({ ...initialQuestion, ...patch });
}

export function setDuelQuestionFields(patch: Partial<DuelQuestionState>): void {
  useDuelQuestionStore.setState(patch);
}

export function setDuelQuestionFeedback(html: string, speed: string): void {
  useDuelQuestionStore.setState({ feedbackHtml: html, speedText: speed });
}

export function setDuelChosenOption(chosenOption: string | null): void {
  useDuelQuestionStore.setState({ chosenOption });
}

export function setDuelHintNote(hintNote: string | null): void {
  useDuelQuestionStore.setState({ hintNote });
}

export function setDuelWriteInput(value: string, borderColor?: string): void {
  useDuelQuestionStore.setState((state) => ({
    writeInputValue: value,
    inputBorderColor: borderColor ?? state.inputBorderColor,
  }));
}

export function setDuelWaitingFinish(waiting: boolean): void {
  useDuelQuestionStore.setState({ waitingFinish: waiting });
}

export function setDuelShowNextBtn(show: boolean): void {
  useDuelQuestionStore.setState({ showNextBtn: show });
}
