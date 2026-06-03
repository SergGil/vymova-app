// English Words App — js/features/game.ts
// Game data, progress tracking, levels & achievements data
import { state } from '../../src/state.ts';
import type { GameData, Level, Achievement, ModeStats, ModeAccuracy, ModeAccEntry } from '../../src/types.js';

// ── Session caches ─────────────────────────────────────────────
// Backed by state so modules share the same cache instance

function loadGameDataRaw(): GameData {
  try { return JSON.parse(localStorage.getItem('ew_game') ?? '{}') as GameData; }
  catch (e) { return {} as GameData; }
}

export function saveGameData(d: GameData): void {
  state._gameCache = d;
  try { localStorage.setItem('ew_game', JSON.stringify(d)); } catch (e) {}
}

export function getGameData(): GameData {
  // Refresh TODAY on every call — handles sessions running past midnight
  state.TODAY = new Date().toISOString().slice(0, 10);
  if (!state._gameCache) state._gameCache = loadGameDataRaw();
  const d = state._gameCache as GameData;
  if (!d.goalMax) d.goalMax = 20;
  if (d.goalDate !== state.TODAY) { d.goalDate = state.TODAY; d.goalCur = 0; d.confettiShown = null; }
  if (!d.streakDate) { d.streakDate = null; d.streak = 0; }
  return d;
}

export function updateStreak(d: GameData): GameData {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (!d.shields) d.shields = 0;
  if (d.streakDate === state.TODAY) {
    // already counted today — check if we need to award a shield (every 7-day milestone)
    if ((d.streak ?? 0) > 0 && (d.streak % 7 === 0) && d.shields < 3) d.shields = Math.min(3, d.shields + 1);
  } else if (d.streakDate === yStr) {
    d.streak = (d.streak ?? 0) + 1;
    d.streakDate = state.TODAY;
    // Award shield at every 7-day streak milestone
    if (d.streak % 7 === 0 && d.shields < 3) d.shields = Math.min(3, d.shields + 1);
  } else if (d.streakDate) {
    // Missed a day — use shield if available
    if (d.shields > 0) {
      d.shields--;
      d.streak = (d.streak ?? 0) + 1;
      d.streakDate = state.TODAY;
    } else {
      d.streak = 1;
      d.streakDate = state.TODAY;
    }
  } else {
    d.streak = 1;
    d.streakDate = state.TODAY;
  }
  return d;
}

// ── Daily stats ────────────────────────────────────────────────
export function getDailyStats(): Record<string, number> {
  if (!state._dailyCache) {
    try { state._dailyCache = JSON.parse(localStorage.getItem('ew_daily') ?? '{}'); }
    catch (e) { state._dailyCache = {}; }
  }
  return Object.assign({}, state._dailyCache as Record<string, number>);
}

export function saveDailyStats(d: Record<string, number>): void {
  state._dailyCache = Object.assign({}, d);
  try { localStorage.setItem('ew_daily', JSON.stringify(d)); } catch (e) {}
}

export function recordDailyWord(): void {
  const d = getDailyStats();
  d[state.TODAY] = (d[state.TODAY] ?? 0) + 1;
  const hKey = 'h' + new Date().getHours();
  d[hKey] = (d[hKey] ?? 0) + 1;
  saveDailyStats(d);
}

// ── Mode stats ─────────────────────────────────────────────────
export function getModeStats(): ModeStats {
  try { return JSON.parse(localStorage.getItem('ew_modes') ?? '{}') as ModeStats; }
  catch (e) { return {}; }
}

export function saveModeStats(m: ModeStats): void {
  try { localStorage.setItem('ew_modes', JSON.stringify(m)); } catch (e) {}
}

// ── Achievements unlocked list ─────────────────────────────────
export function loadUnlocked(): string[] {
  try { return JSON.parse(localStorage.getItem('ew_ach') ?? '[]') as string[]; }
  catch (e) { return []; }
}

export function saveUnlocked(arr: string[]): void {
  try { localStorage.setItem('ew_ach', JSON.stringify(arr)); } catch (e) {}
}

// ── Idle scheduler ─────────────────────────────────────────────
export function _idle(fn: () => void): void {
  if ('requestIdleCallback' in window) requestIdleCallback(fn, { timeout: 2000 });
  else setTimeout(fn, 50);
}

// ── Levels ─────────────────────────────────────────────────────
export const LEVELS: Level[] = [
  { name: '🌌 Цивільний',           min: 0,    color: '#95a5a6', bg: '#ecf0f1' },
  { name: '✨ Чутливий до Сили',    min: 30,   color: '#5dade2', bg: '#eaf4fb' },
  { name: '🟡 Падаван',             min: 100,  color: '#f1c40f', bg: '#fefde7' },
  { name: '🔵 Джедай-лицар',        min: 250,  color: '#2980b9', bg: '#eaf4fb' },
  { name: '🟢 Майстер Джедай',      min: 500,  color: '#27ae60', bg: '#e8f8f0' },
  { name: '🟣 Член Ради',           min: 900,  color: '#8e44ad', bg: '#f5eef8' },
  { name: '🔴 Ситх-лорд',           min: 1500, color: '#c0392b', bg: '#fdedec' },
  { name: '⚡ Обраний',             min: 2500, color: '#d4ac0d', bg: '#fefde7' },
  { name: '🌠 Балансувальник Сили', min: 4000, color: '#1a1a2e', bg: '#eaf0fb' },
  { name: '🏆 Магістр Йода',        min: 5542, color: '#2d6a3d', bg: '#e0f7e9' },
];

export function getLevel(n: number): Level {
  let lv = LEVELS[0];
  for (const lvl of LEVELS) { if (n >= lvl.min) lv = lvl; else break; }
  return lv;
}

export function getNextLevel(n: number): Level | null {
  for (const lvl of LEVELS) { if (lvl.min > n) return lvl; }
  return null;
}

// ── Achievement checker registration ──────────────────────────
// checkAchievements lives in app.ts (depends on DOM). Register it here to avoid window.*.
let _checkAchievementsFn: (() => void) | null = null;
export function registerCheckAchievements(fn: () => void): void { _checkAchievementsFn = fn; }
function _runCheckAchievements(): void { try { _checkAchievementsFn?.(); } catch (e) {} }

// ── recordModeComplete / recordCustomWordAdded ─────────────────
export function recordModeComplete(mode: string): void {
  const m = getModeStats();
  m[mode] = (m[mode] ?? 0) + 1;
  saveModeStats(m);
  _runCheckAchievements();
}

export function recordCustomWordAdded(): void {
  _runCheckAchievements();
}

// ── Mode accuracy tracking ─────────────────────────────────────
const ACC_LS = 'ew_mode_acc';

export function getModeAccuracy(): ModeAccuracy {
  try { return JSON.parse(localStorage.getItem(ACC_LS) ?? '{}') as ModeAccuracy; }
  catch (e) { return {}; }
}

export function recordModeAnswer(mode: string, ok: boolean): void {
  const acc = getModeAccuracy();
  const entry: ModeAccEntry = acc[mode] ?? { ok: 0, err: 0 };
  if (ok) entry.ok++; else entry.err++;
  acc[mode] = entry;
  try { localStorage.setItem(ACC_LS, JSON.stringify(acc)); } catch (e) {}
}

// ── Mistake tracking (cross-mode "hard words") ─────────────────
const MISTAKES_LS = 'ew_mistakes';

export function getMistakes(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(MISTAKES_LS) ?? '{}') as Record<string, number>; }
  catch (e) { return {}; }
}

export function recordMistake(word: string): void {
  const m = getMistakes();
  m[word] = (m[word] ?? 0) + 1;
  try { localStorage.setItem(MISTAKES_LS, JSON.stringify(m)); } catch (e) {}
}

export function clearMistake(word: string): void {
  const m = getMistakes();
  delete m[word];
  try { localStorage.setItem(MISTAKES_LS, JSON.stringify(m)); } catch (e) {}
}

export function getHardWords(limit = 50): string[] {
  const m = getMistakes();
  return Object.entries(m)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([w]) => w);
}
