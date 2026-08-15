// src/mode-store.ts — replaces the legacy hidden `#sel-mode` <select>
// (removed from index.html) as the shared source of truth for the current
// EN/UA-or-XX-XX mode string + "mix" direction's two component languages.
// See docs/full-react-migration-roadmap.md's "sel-mode" exception and
// js/features/lang-pair-select.tsx for the producer side.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so ModeProvider below is a no-op kept
// only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';

interface ModeState {
  mode: string;
  mixA: string | null;
  mixB: string | null;
}

const useModeStoreInternal = create<ModeState>()(
  devtools(() => ({ mode: 'en', mixA: null, mixB: null }), {
    name: 'mode',
    enabled: import.meta.env.DEV,
  }),
);

export function ModeProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export const useModeStore = useModeStoreInternal;

export function getModeStateSnapshot(): ModeState {
  return useModeStoreInternal.getState();
}

export function setMode(mode: string, mixA: string | null = null, mixB: string | null = null): void {
  const state = useModeStoreInternal.getState();
  if (state.mode === mode && state.mixA === mixA && state.mixB === mixB) return;
  useModeStoreInternal.setState({ mode, mixA, mixB });
}

export function subscribeMode(listener: () => void): () => void {
  return useModeStoreInternal.subscribe(listener);
}
