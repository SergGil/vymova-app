// src/mode-store.ts — replaces the legacy hidden `#sel-mode` <select>
// (removed from index.html) as the shared source of truth for the current
// EN/UA-or-XX-XX mode string + "mix" direction's two component languages.
// See docs/full-react-migration-roadmap.md's "sel-mode" exception and
// js/features/lang-pair-select.tsx for the producer side.
import { createDomainStore } from './create-domain-store.tsx';

interface ModeState {
  mode: string;
  mixA: string | null;
  mixB: string | null;
}

type ModeAction = { type: 'SET_MODE'; mode: string; mixA: string | null; mixB: string | null };

function modeReducer(state: ModeState, action: ModeAction): ModeState {
  switch (action.type) {
    case 'SET_MODE':
      if (state.mode === action.mode && state.mixA === action.mixA && state.mixB === action.mixB) {
        return state;
      }
      return { mode: action.mode, mixA: action.mixA, mixB: action.mixB };
  }
}

const modeStore = createDomainStore<ModeState, ModeAction>(
  modeReducer,
  {
    mode: 'en',
    mixA: null,
    mixB: null,
  },
  'mode',
);

export const ModeProvider = modeStore.Provider;
export const useModeStore = modeStore.useStore;

export function getModeStateSnapshot(): ModeState {
  return modeStore.getSnapshot();
}

export function setMode(mode: string, mixA: string | null = null, mixB: string | null = null): void {
  modeStore.dispatch({ type: 'SET_MODE', mode, mixA, mixB });
}

export function subscribeMode(listener: () => void): () => void {
  return modeStore.subscribe(listener);
}
