// Vymova — js/features/duel-rating.ts
// Standalone duel rating storage. Kept separate from duel.ts — a large
// module with a documented, fragile circular-import graph (see duel.ts's
// own comments) — so achievements.ts and other broadly imported files can
// read duel stats without statically pulling in duel.ts's whole module
// graph, which has previously caused non-deterministic TDZ ReferenceErrors
// across the full test suite. game.ts (unlike duel.ts) is already a plain,
// broadly-imported leaf module, so depending on it here is safe.
import { runCheckAchievements } from './game.ts';

const RATING_KEY = 'ew_duel_rating';

export interface DuelRating {
  wins: number;
  losses: number;
  ties: number;
  winStreak: number;
  maxWinStreak: number;
}

export function getDuelRating(): DuelRating {
  try {
    const r = JSON.parse(localStorage.getItem(RATING_KEY) || '{}') as Partial<DuelRating>;
    return {
      wins: r.wins || 0,
      losses: r.losses || 0,
      ties: r.ties || 0,
      winStreak: r.winStreak || 0,
      maxWinStreak: r.maxWinStreak || 0,
    };
  } catch (e) {
    return { wins: 0, losses: 0, ties: 0, winStreak: 0, maxWinStreak: 0 };
  }
}

export function recordDuelResult(won: boolean, tie: boolean): void {
  const r = getDuelRating();
  if (tie) {
    r.ties++;
  } else if (won) {
    r.wins++;
    r.winStreak++;
    if (r.winStreak > r.maxWinStreak) r.maxWinStreak = r.winStreak;
  } else {
    r.losses++;
    r.winStreak = 0;
  }
  try {
    localStorage.setItem(RATING_KEY, JSON.stringify(r));
  } catch (e) {}
  runCheckAchievements();
}
