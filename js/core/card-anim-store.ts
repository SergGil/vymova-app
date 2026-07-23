// Vymova — js/core/card-anim-store.ts
// card-engine.ts's animCard()/startAuto()/stopAuto() dispatch here instead of
// touching '.card-face'/'#btn-auto' directly; js/features/card-face-anim.tsx
// (the actual DOM classList/reflow-restart trick) and card-shell.tsx's
// AutoButtonLabel own the reactive side. `animRequest` carries a monotonic
// `seq` alongside `dir` — dispatching the same direction twice in a row
// (e.g. clicking "next" repeatedly) must still restart the animation each
// time, but a plain `{dir}` object would fail React's same-value bailout
// when `dir` doesn't change; `seq` guarantees a new object every dispatch.
import { createDomainStore } from '../../src/create-domain-store.tsx';

export type AnimDir = 'next' | 'prev' | 'fade';

interface CardAnimState {
  animRequest: { dir: AnimDir; seq: number } | null;
  autoRunning: boolean;
}

type CardAnimAction = { type: 'ANIM'; dir: AnimDir } | { type: 'SET_AUTO_RUNNING'; running: boolean };

let seqCounter = 0;

function cardAnimReducer(state: CardAnimState, action: CardAnimAction): CardAnimState {
  switch (action.type) {
    case 'ANIM':
      seqCounter += 1;
      return { ...state, animRequest: { dir: action.dir, seq: seqCounter } };
    case 'SET_AUTO_RUNNING':
      return { ...state, autoRunning: action.running };
  }
}

const cardAnimStore = createDomainStore<CardAnimState, CardAnimAction>(
  cardAnimReducer,
  {
    animRequest: null,
    autoRunning: false,
  },
  'card-anim',
);

export function useCardAnimState(): CardAnimState {
  return cardAnimStore.useStore();
}

export function getCardAnimSnapshot(): CardAnimState {
  return cardAnimStore.getSnapshot();
}

export function dispatchAnimCard(dir: AnimDir): void {
  cardAnimStore.dispatch({ type: 'ANIM', dir });
}

export function setAutoRunningState(running: boolean): void {
  cardAnimStore.dispatch({ type: 'SET_AUTO_RUNNING', running });
}
