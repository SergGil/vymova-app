/**
 * English Words App — src/state.ts
 * Centralized mutable app state (Phase 3: TypeScript).
 */

import type { AppState, SRSData } from './types.js';

export const state: AppState = {
  deck:           [],
  idx:            0,
  flipped:        false,
  cw:             null,
  _baseWords:     [],
  _activeTagSet:  null,
  autoTimer:      null,
  known:          new Set<string>(),
  srsData:        {} as SRSData,
  _gameCache:     null,
  _dailyCache:    null,
  _srsStatsDirty: true,
  TODAY:          new Date().toISOString().slice(0, 10),
  _mode:          'en',
};
