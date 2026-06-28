// src/srs-store.ts — SRS-data domain (replaces state.srsData + state._srsStatsDirty).
// Migration per the state-management plan: mutations route through
// setSrsEntry/deleteSrsEntry/etc instead of mutating the record in place, so
// the "dirty" flag (used by js/core/srs.ts's updateSrsUI to skip recompute)
// can never go stale the way it could when callers had to remember to set it
// by hand.
import { createDomainStore } from './create-domain-store.tsx';
import type { SRSData, SRSEntry } from './types.ts';

interface SrsState {
  data: SRSData;
  dirty: boolean;
}

type SrsAction =
  | { type: 'LOAD'; data: SRSData }
  | { type: 'UPDATE'; word: string; entry: SRSEntry }
  | { type: 'DELETE'; word: string }
  | { type: 'CLEAR' }
  | { type: 'MARK_CLEAN' };

function srsReducer(state: SrsState, action: SrsAction): SrsState {
  switch (action.type) {
    case 'LOAD':
      return { data: action.data, dirty: true };
    case 'UPDATE':
      return { data: { ...state.data, [action.word]: action.entry }, dirty: true };
    case 'DELETE': {
      const next = { ...state.data };
      delete next[action.word];
      return { data: next, dirty: true };
    }
    case 'CLEAR':
      return { data: {}, dirty: true };
    case 'MARK_CLEAN':
      return { ...state, dirty: false };
  }
}

const srsStore = createDomainStore<SrsState, SrsAction>(srsReducer, { data: {}, dirty: true });

export const SrsProvider = srsStore.Provider;

export function useSrsData(): SRSData {
  return srsStore.useStore().data;
}

export function getSrsDataSnapshot(): SRSData {
  return srsStore.getSnapshot().data;
}

export function getSrsDirtySnapshot(): boolean {
  return srsStore.getSnapshot().dirty;
}

export function loadSrsData(data: SRSData): void {
  srsStore.dispatch({ type: 'LOAD', data });
}

export function setSrsEntry(word: string, entry: SRSEntry): void {
  srsStore.dispatch({ type: 'UPDATE', word, entry });
}

export function deleteSrsEntry(word: string): void {
  srsStore.dispatch({ type: 'DELETE', word });
}

export function clearSrsData(): void {
  srsStore.dispatch({ type: 'CLEAR' });
}

export function markSrsStatsClean(): void {
  srsStore.dispatch({ type: 'MARK_CLEAN' });
}
