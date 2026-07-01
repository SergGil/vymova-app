// Vymova — js/features/milestones.ts
// Milestone-toast system: checks user progress thresholds and shows a toast
// when a threshold is first crossed. Called after marking any word known.
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { getGameData } from './game.ts';
import { t } from './i18n.ts';

let _shown: Record<string, number> = {};
try {
  _shown = JSON.parse(localStorage.getItem('ew_milestones') ?? '{}');
} catch (e) {}

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
  MILESTONES.forEach((m) => {
    if (!_shown[m.id] && m.check()) {
      _shown[m.id] = 1;
      try {
        localStorage.setItem('ew_milestones', JSON.stringify(_shown));
      } catch (e) {}
      showMilestone(t(m.key));
    }
  });
}
