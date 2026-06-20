// Vymova — js/features/learning-path-logic.ts
// Pure, DOM-free logic for the Learning Path feature (importable in tests)
import { getCefrLevel } from '../../data/cefr.ts';
import type { CefrLevel } from '../../data/cefr.ts';
import type { WordEntry } from '../../src/types.js';

interface CefrStat { total: number; known: number; pct: number; }
type CefrStats = Record<CefrLevel, CefrStat>;
export interface PaceSnapshot { date: string; count: number; } // date: 'YYYY-MM-DD'

const LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export function computeCefrStats(knownWords: Set<string>, words: WordEntry[]): CefrStats {
  const result = {} as CefrStats;
  LEVELS.forEach(l => result[l] = { total: 0, known: 0, pct: 0 });
  words.forEach(w => {
    const lvl = getCefrLevel(w[0]);
    result[lvl].total++;
    if (knownWords.has(w[0])) result[lvl].known++;
  });
  LEVELS.forEach(l => {
    result[l].pct = result[l].total > 0
      ? Math.round(result[l].known / result[l].total * 100) : 0;
  });
  return result;
}

export function findCurrentLevel(stats: CefrStats): CefrLevel {
  for (const l of LEVELS) {
    if (stats[l].pct < 70) return l;
  }
  return 'C2';
}

export function filterDailyWords(
  level: CefrLevel,
  knownWords: Set<string>,
  words: WordEntry[],
  limit = 20,
): WordEntry[] {
  return words
    .filter(w => getCefrLevel(w[0]) === level && !knownWords.has(w[0]))
    .slice(0, limit);
}

export function computePersonalPace(snapshots: PaceSnapshot[]): number | null {
  if (snapshots.length < 2) return null;
  const sorted = [...snapshots].sort((a, b) => a.date.localeCompare(b.date));
  const oldest = sorted[0];
  const newest = sorted[sorted.length - 1];
  if (oldest.date === newest.date) return null;
  const daysDiff = (new Date(newest.date).getTime() - new Date(oldest.date).getTime()) / 86_400_000;
  if (daysDiff <= 0) return null;
  const pace = (newest.count - oldest.count) / daysDiff;
  return Math.max(0, Math.round(pace));
}

export function estimateDays(remaining: number, pace: number | null): number {
  const effectivePace = (pace !== null && pace > 0) ? pace : 20;
  return Math.max(1, Math.ceil(remaining / effectivePace));
}

export function updateCompletionDates(
  stats: CefrStats,
  stored: Record<string, string>,
  todayStr: string,
): Record<string, string> {
  const updated = { ...stored };
  LEVELS.forEach(l => {
    if (stats[l].pct >= 90 && !updated[l]) {
      updated[l] = todayStr;
    }
  });
  return updated;
}
