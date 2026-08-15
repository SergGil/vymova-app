// Vymova — js/core/card-anim-store.ts
// card-engine.ts's animCard()/startAuto()/stopAuto() dispatch here instead of
// touching '.card-face'/'#btn-auto' directly; js/features/card-face-anim.tsx
// (the actual DOM classList/reflow-restart trick) and card-shell.tsx's
// AutoButtonLabel own the reactive side. `animRequest` carries a monotonic
// `seq` alongside `dir` — dispatching the same direction twice in a row
// (e.g. clicking "next" repeatedly) must still restart the animation each
// time, but a plain `{dir}` object would fail React's same-value bailout
// when `dir` doesn't change; `seq` guarantees a new object every dispatch.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15).
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export type AnimDir = 'next' | 'prev' | 'fade';

interface CardAnimState {
  animRequest: { dir: AnimDir; seq: number } | null;
  autoRunning: boolean;
}

let seqCounter = 0;

const useCardAnimStore = create<CardAnimState>()(
  devtools(() => ({ animRequest: null, autoRunning: false }), {
    name: 'card-anim',
    enabled: import.meta.env.DEV,
  }),
);

export function useCardAnimState(): CardAnimState {
  return useCardAnimStore();
}

export function getCardAnimSnapshot(): CardAnimState {
  return useCardAnimStore.getState();
}

export function dispatchAnimCard(dir: AnimDir): void {
  seqCounter += 1;
  useCardAnimStore.setState({ animRequest: { dir, seq: seqCounter } });
}

export function setAutoRunningState(running: boolean): void {
  useCardAnimStore.setState({ autoRunning: running });
}
