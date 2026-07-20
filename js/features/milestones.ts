// Vymova — js/features/milestones.ts
// Milestone-toast system: checks user progress thresholds and shows a toast
// when a threshold is first crossed. Called after marking any word known.
import { getGameData } from './game.ts';
import { t } from './i18n.ts';
import { _jsonLoad, _jsonSave } from '../core/storage.ts';
import { getKnownInLang } from './mode-utils.ts';

// Per-learn-language, same pattern as game.ts's _achKey() — 'ew_milestones'
// for the base en/ua pair, 'ew_milestones_<lang>' for every target language.
// Without this, once someone crossed e.g. 100 known words in one language,
// that id stayed "shown" forever in a single shared bucket, so the same
// milestone could never fire again after switching to a different language.
function _milestonesKey(): string {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  return lang === 'en' || lang === 'ua' ? 'ew_milestones' : `ew_milestones_${lang}`;
}

// Cached + invalidated on language change, same pattern as game.ts's
// getModeStats()/getDailyStats() — a plain module-level `const` (the
// previous shape) only ever loaded 'ew_milestones' once at import time and
// never revisited it after a language switch mid-session.
let _shownCache: Record<string, number> | null = null;
let _shownCachedLang: string | null = null;

function _loadShown(): Record<string, number> {
  const lang = localStorage.getItem('ew_learn_lang') ?? 'en';
  if (!_shownCache || _shownCachedLang !== lang) {
    _shownCache = _jsonLoad(_milestonesKey(), {});
    _shownCachedLang = lang;
  }
  return _shownCache;
}

// Test-only escape hatch, same pattern as game.ts's invalidateGameCaches() —
// forces the next checkMilestones() to re-read localStorage even when the
// learn language string itself hasn't changed (e.g. between test cases that
// reset localStorage directly instead of switching languages).
export function invalidateMilestonesCache(): void {
  _shownCache = null;
  _shownCachedLang = null;
}

// getKnownInLang() (not a hardcoded getKnownSnapshot('en')) — otherwise
// these never fire for any of the ~140 non-en/ua target languages, since
// their progress lives in a separate per-language known-words bucket that
// getKnownSnapshot('en') never sees. render-achievements.ts's equivalent
// word-count checks already use this same helper.
const MILESTONES = [
  { id: 'w100', check: () => getKnownInLang() >= 100, key: 'milestone.w100' },
  { id: 'w500', check: () => getKnownInLang() >= 500, key: 'milestone.w500' },
  { id: 'w1000', check: () => getKnownInLang() >= 1000, key: 'milestone.w1000' },
  { id: 'w2000', check: () => getKnownInLang() >= 2000, key: 'milestone.w2000' },
  { id: 's7', check: () => (getGameData().streak ?? 0) >= 7, key: 'milestone.s7' },
  { id: 's30', check: () => (getGameData().streak ?? 0) >= 30, key: 'milestone.s30' },
  { id: 's100', check: () => (getGameData().streak ?? 0) >= 100, key: 'milestone.s100' },
];

export function showMilestone(text: string): void {
  const el = document.getElementById('milestone-toast');
  if (!el) return;
  el.textContent = text;
  el.className = 'milestone-toast';
  void el.offsetWidth;
  el.className = 'milestone-toast show';
  setTimeout(() => {
    el.className = 'milestone-toast';
  }, 3500);
}

export function checkMilestones(): void {
  const shown = _loadShown();
  const newOnes = MILESTONES.filter((m) => !shown[m.id] && m.check());
  if (!newOnes.length) return;
  newOnes.forEach((m) => {
    shown[m.id] = 1;
  });
  _jsonSave(_milestonesKey(), shown);
  // Same show-next-after-a-delay queue as render-achievements.ts's
  // checkAchievements() — without it, crossing two thresholds in the same
  // check (e.g. a progress import jumping past both w500 and w1000) called
  // showMilestone() synchronously twice in a row, and the second call
  // overwrote the shared #milestone-toast element before the first was ever
  // visually shown.
  let i = 0;
  function showNext(): void {
    if (i < newOnes.length) {
      showMilestone(t(newOnes[i].key));
      i++;
      if (i < newOnes.length) setTimeout(showNext, 4000);
    }
  }
  showNext();
}
