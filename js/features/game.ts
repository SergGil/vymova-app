// Vymova — js/features/game.ts
// Game data, progress tracking, levels & achievements data
import { today } from '../core/today.ts';
import { getMaxWordsForLearnLang } from './mode-utils.ts';
import type { GameData, Level, Achievement, ModeStats, ModeAccuracy, ModeAccEntry } from '../../src/types.js';

// ── Session caches ─────────────────────────────────────────────
// Module-private caches (same pattern as _modeStatsCache below) — nothing
// outside this file reads them; card-actions.ts only needs to invalidate
// them on reset/import, via invalidateGameCaches().

function _langKey(base: string): string {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  return lang === 'en' ? base : `${base}_${lang}`;
}

let _gameCache: GameData | null = null;
let _gameCachedLang: string | null = null;
let _dailyCache: Record<string, unknown> | null = null;
let _dailyCachedLang: string | null = null;

export function invalidateGameCaches(): void {
  _gameCache = null;
  _dailyCache = null;
}

function loadGameDataRaw(): GameData {
  try { return JSON.parse(localStorage.getItem(_langKey('ew_game')) ?? '{}') as GameData; }
  catch (e) { return {} as GameData; }
}

export function saveGameData(d: GameData): void {
  _gameCache = d;
  try { localStorage.setItem(_langKey('ew_game'), JSON.stringify(d)); } catch (e) {}
}

export function getGameData(): GameData {
  const TODAY = today();
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  if (!_gameCache || _gameCachedLang !== lang) {
    _gameCache = loadGameDataRaw();
    _gameCachedLang = lang;
  }
  const d = _gameCache;
  if (!d.goalMax) d.goalMax = 20;
  if (d.goalDate !== TODAY) { d.goalDate = TODAY; d.goalCur = 0; d.confettiShown = null; }
  if (!d.streakDate) { d.streakDate = null; d.streak = 0; }
  if (d.srsNewDate !== TODAY) { d.srsNewDate = TODAY; d.srsNewToday = 0; }
  // Return a shallow copy so callers can't accidentally mutate the cache
  // without going through saveGameData(). Cache mutations above (date reset) are intentional.
  return { ...d };
}

// ── SRS daily new-card quota ────────────────────────────────────
// How many never-before-seen cards the SRS deck introduces per day —
// matches the classic Anki-style "new cards/day" limit, tracked across
// the whole day rather than just within one deck snapshot.
export const SRS_NEW_DAILY_CAP = 10;

export function getSrsNewRemaining(): number {
  const d = getGameData();
  return Math.max(0, SRS_NEW_DAILY_CAP - (d.srsNewToday || 0));
}

export function recordSrsNewCard(): void {
  const d = getGameData();
  d.srsNewToday = (d.srsNewToday || 0) + 1;
  saveGameData(d);
}

export function updateStreak(d: GameData): GameData {
  const TODAY = today();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (!d.shields) d.shields = 0;
  if (d.streakDate === TODAY) {
    // already counted today — nothing to do (shield awarded only on first increment)
  } else if (d.streakDate === yStr) {
    d.streak = (d.streak ?? 0) + 1;
    d.streakDate = TODAY;
    // Award shield once per 7-day streak milestone (only on the day streak increments)
    if (d.streak % 7 === 0 && d.shields < 3) d.shields = Math.min(3, d.shields + 1);
  } else if (d.streakDate) {
    // Missed a day — use shield if available
    if (d.shields > 0) {
      d.shields--;
      d.streak = (d.streak ?? 0) + 1;
      d.streakDate = TODAY;
    } else {
      d.streak = 1;
      d.streakDate = TODAY;
    }
  } else {
    d.streak = 1;
    d.streakDate = TODAY;
  }
  return d;
}

// ── Daily stats ────────────────────────────────────────────────

export function getDailyStats(): Record<string, number> {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  if (!_dailyCache || _dailyCachedLang !== lang) {
    try { _dailyCache = JSON.parse(localStorage.getItem(_langKey('ew_daily')) ?? '{}'); }
    catch (e) { _dailyCache = {}; }
    _dailyCachedLang = lang;
  }
  return Object.assign({}, _dailyCache as Record<string, number>);
}

export function saveDailyStats(d: Record<string, number>): void {
  _dailyCache = Object.assign({}, d);
  _dailyCachedLang = localStorage.getItem('ew_learn_lang') ?? 'en';
  try { localStorage.setItem(_langKey('ew_daily'), JSON.stringify(d)); } catch (e) {}
}

export function recordDailyWord(): void {
  const d = getDailyStats();
  const TODAY = today();
  d[TODAY] = (d[TODAY] ?? 0) + 1;
  // Hourly key includes date so stats don't bleed across days
  const hKey = TODAY + '_h' + new Date().getHours();
  d[hKey] = (d[hKey] ?? 0) + 1;
  saveDailyStats(d);
}

// ── Mode stats ─────────────────────────────────────────────────
let _modeStatsCache: ModeStats | null = null;
let _modeStatsCachedLang: string | null = null;

export function getModeStats(): ModeStats {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  if (_modeStatsCache && _modeStatsCachedLang === lang) return Object.assign({}, _modeStatsCache);
  try {
    _modeStatsCache = JSON.parse(localStorage.getItem(_langKey('ew_modes')) ?? '{}') as ModeStats;
    _modeStatsCachedLang = lang;
    return Object.assign({}, _modeStatsCache);
  } catch (e) { return {}; }
}

export function saveModeStats(m: ModeStats): void {
  _modeStatsCache = Object.assign({}, m);
  _modeStatsCachedLang = localStorage.getItem('ew_learn_lang') ?? 'en';
  try { localStorage.setItem(_langKey('ew_modes'), JSON.stringify(m)); } catch (e) {}
}

export function invalidateModeStatsCache(): void {
  _modeStatsCache = null;
  _modeStatsCachedLang = null;
}

// ── Achievements unlocked list ─────────────────────────────────
function _achKey(): string {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  return lang === 'en' || lang === 'ua' ? 'ew_ach' : `ew_ach_${lang}`;
}

export function loadUnlocked(): string[] {
  try { return JSON.parse(localStorage.getItem(_achKey()) ?? '[]') as string[]; }
  catch (e) { return []; }
}

export function saveUnlocked(arr: string[]): void {
  try { localStorage.setItem(_achKey(), JSON.stringify(arr)); } catch (e) {}
}

// ── Idle scheduler ─────────────────────────────────────────────
export function _idle(fn: () => void): void {
  // Runs detached from the call site (50ms-2s later). Wrap in try/catch
  // here, not just at call sites: in test environments a module can be
  // torn down/reloaded between scheduling and firing, putting even the
  // imports a call site relies on (e.g. a `safe()` wrapper) in a
  // temporary not-yet-initialized state — an uncaught error here would
  // otherwise escape as an unhandled exception with no useful call stack.
  const guarded = (): void => { try { fn(); } catch (e) {} };
  if ('requestIdleCallback' in window) requestIdleCallback(guarded, { timeout: 2000 });
  else setTimeout(guarded, 50);
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
  { name: '🏆 Магістр Йода',        get min() { return getMaxWordsForLearnLang(); }, color: '#2d6a3d', bg: '#e0f7e9' },
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

// ── recordModeComplete ─────────────────────────────────────────
export function recordModeComplete(mode: string): void {
  const m = getModeStats();
  m[mode] = (m[mode] ?? 0) + 1;
  saveModeStats(m);
  _runCheckAchievements();
}

// ── Mode accuracy tracking ─────────────────────────────────────
export function getModeAccuracy(): ModeAccuracy {
  try { return JSON.parse(localStorage.getItem(_langKey('ew_mode_acc')) ?? '{}') as ModeAccuracy; }
  catch (e) { return {}; }
}

export function recordModeAnswer(mode: string, ok: boolean): void {
  const acc = getModeAccuracy();
  const entry: ModeAccEntry = acc[mode] ?? { ok: 0, err: 0 };
  if (ok) entry.ok++; else entry.err++;
  acc[mode] = entry;
  try { localStorage.setItem(_langKey('ew_mode_acc'), JSON.stringify(acc)); } catch (e) {}
}

// ── Mistake tracking (cross-mode "hard words") ─────────────────
export function getMistakes(): Record<string, number> {
  try { return JSON.parse(localStorage.getItem(_langKey('ew_mistakes')) ?? '{}') as Record<string, number>; }
  catch (e) { return {}; }
}

export function recordMistake(word: string): void {
  const m = getMistakes();
  m[word] = (m[word] ?? 0) + 1;
  try { localStorage.setItem(_langKey('ew_mistakes'), JSON.stringify(m)); } catch (e) {}
}

export function clearMistake(word: string): void {
  const m = getMistakes();
  delete m[word];
  try { localStorage.setItem(_langKey('ew_mistakes'), JSON.stringify(m)); } catch (e) {}
}

export function getHardWords(limit = 50): string[] {
  const m = getMistakes();
  return Object.entries(m)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([w]) => w);
}
