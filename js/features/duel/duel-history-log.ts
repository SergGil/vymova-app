// Vymova — js/features/duel/duel-history-log.ts
// Match history (localStorage) + rating re-export — pure persistence with
// zero dependency on duel room/game state, read by duel-history.tsx and
// duel-leaderboard.tsx. Rating storage itself lives in duel-rating.ts (a
// dependency-free leaf module) so achievements.ts can read it without
// importing this whole file.
import { getDuelRating } from './duel-rating.ts';
import type { DuelMode } from './duel-types.ts';

const HIST_KEY = 'ew_duel_history';

interface HistEntry {
  date: string;
  mode: DuelMode;
  myScore: number;
  oppScore: number;
  oppName: string;
  won: boolean;
  category: string;
  lang?: string;
  knowLang?: string;
}

export function _getHistory(): HistEntry[] {
  try {
    return JSON.parse(localStorage.getItem(HIST_KEY) || '[]');
  } catch (e) {
    return [];
  }
}
export function _addHistory(e: HistEntry): void {
  const h = _getHistory();
  h.unshift(e);
  if (h.length > 100) h.length = 100;
  try {
    localStorage.setItem(HIST_KEY, JSON.stringify(h));
  } catch (e) {}
}
export const _getRating = getDuelRating;
