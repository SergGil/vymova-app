// Vymova — js/core/level-system.ts
// 100-level XP progression system.
//
// XP sources (for the info popup):
//   +5 XP  — each word learned, any language
//   +5 XP  — correct answer in most game modes  (× combo multiplier)
//   +10 XP — correct card in Картки mode        (× combo multiplier)
//   +5 XP  — per lesson point in Урок mode      (× combo multiplier)
//   up to ~300 XP — daily challenge completion
//   Combo: ×2 at 5 in a row, ×3 at 10+ in a row
//
// Threshold formula: LEVEL_XP[n] = Math.round(100 * n^1.5)
//   Level 1 starts at 0 XP, level 2 needs 100, level 10 needs 2 700, level 100 needs 98 510.

/** Cumulative XP needed to REACH each level.
 *  Index = level − 1, so LEVEL_XP[0] = 0 (level 1), LEVEL_XP[1] = 100 (level 2), ... */
export const LEVEL_XP: readonly number[] = (() => {
  const t: number[] = [0];
  for (let i = 1; i < 100; i++) t.push(Math.round(100 * Math.pow(i, 1.5)));
  return t;
})();

/** Representative milestones shown in the info popup. */
export const LEVEL_MILESTONES: readonly [number, number][] = [
  [1, 0],
  [5, LEVEL_XP[4]],
  [10, LEVEL_XP[9]],
  [20, LEVEL_XP[19]],
  [30, LEVEL_XP[29]],
  [50, LEVEL_XP[49]],
  [75, LEVEL_XP[74]],
  [100, LEVEL_XP[99]],
];

export interface LevelInfo {
  /** Current level (1–100). */
  level: number;
  /** XP earned within the current level gap. */
  xpInLevel: number;
  /** XP span for the current level gap (0 at max level). */
  xpForLevel: number;
  /** Progress 0–1 within the current level. */
  progress: number;
  /** True when level 100 is reached. */
  isMax: boolean;
}

export function getLevelInfo(totalXp: number): LevelInfo {
  // Binary-search for the highest level whose threshold is ≤ totalXp
  let level = 1;
  for (let i = 1; i < LEVEL_XP.length; i++) {
    if (totalXp >= LEVEL_XP[i]) level = i + 1;
    else break;
  }
  level = Math.min(level, 100);

  const isMax = level === 100;
  const lo = LEVEL_XP[level - 1];
  const hi = isMax ? LEVEL_XP[99] : LEVEL_XP[level];
  const xpInLevel = totalXp - lo;
  const xpForLevel = isMax ? 0 : hi - lo;
  const progress = isMax ? 1 : Math.min(1, xpForLevel > 0 ? xpInLevel / xpForLevel : 0);

  return { level, xpInLevel, xpForLevel, progress, isMax };
}
