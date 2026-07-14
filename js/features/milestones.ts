// Vymova — js/features/milestones.ts
// Milestone-toast system: checks user progress thresholds and shows a toast
// when a threshold is first crossed. Called after marking any word known.
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { getGameData } from './game.ts';
import { t } from './i18n.ts';
import { _jsonLoad, _jsonSave } from '../core/storage.ts';

const _shown: Record<string, number> = _jsonLoad('ew_milestones', {});

const MILESTONES = [
  { id: 'w100', check: () => getKnownSnapshot('en').size >= 100, key: 'milestone.w100' },
  { id: 'w500', check: () => getKnownSnapshot('en').size >= 500, key: 'milestone.w500' },
  { id: 'w1000', check: () => getKnownSnapshot('en').size >= 1000, key: 'milestone.w1000' },
  { id: 'w2000', check: () => getKnownSnapshot('en').size >= 2000, key: 'milestone.w2000' },
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
  const newOnes = MILESTONES.filter((m) => !_shown[m.id] && m.check());
  if (!newOnes.length) return;
  newOnes.forEach((m) => {
    _shown[m.id] = 1;
  });
  _jsonSave('ew_milestones', _shown);
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
