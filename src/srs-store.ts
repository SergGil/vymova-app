// src/srs-store.ts — SRS-data domain (replaces state.srsData + state._srsStatsDirty).
// Migration per the state-management plan: mutations route through
// setSrsEntry/deleteSrsEntry/etc instead of mutating the record in place, so
// the "dirty" flag (used by js/core/srs.ts's updateSrsUI to skip recompute)
// can never go stale the way it could when callers had to remember to set it
// by hand.
//
// Zustand (architecture-assessment.md p.2's state-management migration,
// 2026-08-15) — no Provider needed, so SrsProvider below is a no-op kept
// only for API compatibility with existing call sites.
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { createElement, Fragment, type ReactElement, type ReactNode } from 'react';
import type { SRSData, SRSEntry } from './types.ts';

interface SrsState {
  data: SRSData;
  dirty: boolean;
}

const useSrsStore = create<SrsState>()(
  devtools(() => ({ data: {}, dirty: true }), { name: 'srs', enabled: import.meta.env.DEV }),
);

export function SrsProvider({ children }: { children: ReactNode }): ReactElement {
  return createElement(Fragment, null, children);
}

export function useSrsData(): SRSData {
  return useSrsStore().data;
}

export function getSrsDataSnapshot(): SRSData {
  return useSrsStore.getState().data;
}

export function getSrsDirtySnapshot(): boolean {
  return useSrsStore.getState().dirty;
}

export function loadSrsData(data: SRSData): void {
  useSrsStore.setState({ data, dirty: true });
}

export function setSrsEntry(word: string, entry: SRSEntry): void {
  useSrsStore.setState((state) => ({ data: { ...state.data, [word]: entry }, dirty: true }));
}

export function deleteSrsEntry(word: string): void {
  useSrsStore.setState((state) => {
    const next = { ...state.data };
    delete next[word];
    return { data: next, dirty: true };
  });
}

export function clearSrsData(): void {
  useSrsStore.setState({ data: {}, dirty: true });
}

export function markSrsStatsClean(): void {
  useSrsStore.setState({ dirty: false });
}
