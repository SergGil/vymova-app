// Vymova — js/features/duel/duel-profile-snap.ts
// Per-profile localStorage snapshot readers used by the local duel
// leaderboard (duel-leaderboard.tsx), plus _getMyName/_getMyAvatar — used by
// both duel.ts (game-header/finish screens) and duel-lobby-logic.ts
// (create/join room), which is exactly why these live in this shared leaf
// rather than either of those two files: both already depend on this
// module, so adding them here can't create a new cycle between them.
// Dependency-free otherwise — pure reads of localStorage, no shared
// mutable state.
import * as LZString from 'lz-string';
import { localDateStr } from '../../core/today.ts';
import { t } from '../i18n.ts';

const LIST_KEY = 'ew_profiles',
  ACTIVE_KEY = 'ew_active_profile';
const SNAP_KEYS = ['ew_known', 'ew_known_lz', 'ew_game', 'ew_daily', 'ew_ach'];

// Minimal shape of what this module actually reads off a stored profile —
// deliberately not the full Profile type from profile-switcher.tsx (see the
// file header: importing it would create the dependency cycle this module
// exists to avoid).
type ProfileSnapEntry = { id: string; name?: string; avatar?: string };

export function _getProfiles(): ProfileSnapEntry[] {
  try {
    return JSON.parse(localStorage.getItem(LIST_KEY) || '[]');
  } catch (e) {
    return [];
  }
}
export function _getActiveId() {
  return localStorage.getItem(ACTIVE_KEY) || '';
}
export function _getMyName(): string {
  try {
    const prfs = _getProfiles();
    const id = _getActiveId();
    return prfs.find((x) => x.id === id)?.name || t('duel.player');
  } catch (e) {
    return t('duel.player');
  }
}
export function _getMyAvatar(): string {
  try {
    const prfs = _getProfiles();
    const id = _getActiveId();
    return prfs.find((x) => x.id === id)?.avatar || '🧑';
  } catch (e) {
    return '🧑';
  }
}
export function _readSnap(id: string): Record<string, string> {
  const d: Record<string, string> = {};
  SNAP_KEYS.forEach((k) => {
    const v = localStorage.getItem(`ew_p_${id}__${k}`);
    if (v !== null) d[k] = v;
  });
  return d;
}
export function _currentSnap(): Record<string, string> {
  const d: Record<string, string> = {};
  SNAP_KEYS.forEach((k) => {
    const v = localStorage.getItem(k);
    if (v !== null) d[k] = v;
  });
  return d;
}
export function _parseKnown(s: Record<string, string>): string[] {
  const r = s['ew_known'];
  if (!r) return [];
  try {
    if (s['ew_known_lz'] === '1') {
      const d = LZString.decompress(r);
      if (d) return JSON.parse(d);
    }
    return JSON.parse(r);
  } catch (e) {
    return [];
  }
}
export function _parseGame(s: Record<string, string>) {
  try {
    return JSON.parse(s['ew_game'] || '{}');
  } catch (e) {
    return {};
  }
}
export function _weekWords(s: Record<string, string>): number {
  try {
    const d = JSON.parse(s['ew_daily'] || '{}');
    const t = new Date();
    let c = 0;
    for (let i = 0; i < 7; i++) {
      const dt = new Date(t);
      dt.setDate(dt.getDate() - i);
      c += d[localDateStr(dt)] || 0;
    }
    return c;
  } catch (e) {
    return 0;
  }
}
