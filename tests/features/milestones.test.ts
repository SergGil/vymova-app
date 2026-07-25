import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setKnownWords } from '../../src/known-words-store.ts';

const { getGameData } = vi.hoisted(() => ({ getGameData: vi.fn() }));

vi.mock('../../js/features/game/game.ts', () => ({
  getGameData: (...a: unknown[]) => getGameData(...a),
}));
vi.mock('../../js/features/i18n.ts', () => ({
  t: (k: string) => k,
}));

import {
  checkMilestones,
  showMilestone,
  invalidateMilestonesCache,
} from '../../js/features/milestones.ts';

describe('checkMilestones', () => {
  beforeEach(() => {
    localStorage.clear();
    invalidateMilestonesCache();
    getGameData.mockReset().mockReturnValue({ streak: 0 });
    setKnownWords('en', new Set());
    setKnownWords('es', new Set());
    setKnownWords('fr', new Set());
    document.body.innerHTML = '<div id="milestone-toast"></div>';
  });

  it('fires the w100 milestone once known words in the active learn language cross 100', () => {
    localStorage.setItem('ew_learn_lang', 'es');
    setKnownWords('es', new Set(Array.from({ length: 100 }, (_, i) => `w${i}`)));

    checkMilestones();

    expect(JSON.parse(localStorage.getItem('ew_milestones_es')!)).toEqual({ w100: 1 });
  });

  it('does not fire based on the base en known set when learning a target language', () => {
    localStorage.setItem('ew_learn_lang', 'es');
    // 100 known English words, but zero known Spanish words — the milestone
    // must not fire off the wrong language's progress.
    setKnownWords('en', new Set(Array.from({ length: 100 }, (_, i) => `w${i}`)));

    checkMilestones();

    expect(localStorage.getItem('ew_milestones_es')).toBeNull();
  });

  it('keeps milestone-shown state separate per learn language', () => {
    localStorage.setItem('ew_learn_lang', 'es');
    setKnownWords('es', new Set(Array.from({ length: 100 }, (_, i) => `w${i}`)));
    checkMilestones();

    localStorage.setItem('ew_learn_lang', 'fr');
    setKnownWords('fr', new Set(Array.from({ length: 100 }, (_, i) => `w${i}`)));
    checkMilestones();

    // Both languages independently recorded their own w100 — crossing it in
    // French must not be suppressed by having already shown it in Spanish.
    expect(JSON.parse(localStorage.getItem('ew_milestones_es')!)).toEqual({ w100: 1 });
    expect(JSON.parse(localStorage.getItem('ew_milestones_fr')!)).toEqual({ w100: 1 });
  });

  it('does not re-fire an already-shown milestone for the same language', () => {
    localStorage.setItem('ew_learn_lang', 'es');
    localStorage.setItem('ew_milestones_es', JSON.stringify({ w100: 1 }));
    invalidateMilestonesCache();
    setKnownWords('es', new Set(Array.from({ length: 100 }, (_, i) => `w${i}`)));

    const el = document.getElementById('milestone-toast')!;
    checkMilestones();

    expect(el.className).toBe('');
  });

  it('fires streak milestones regardless of learn language (per-language game data already resolves streak)', () => {
    localStorage.setItem('ew_learn_lang', 'es');
    getGameData.mockReturnValue({ streak: 7 });

    checkMilestones();

    expect(JSON.parse(localStorage.getItem('ew_milestones_es')!)).toEqual({ s7: 1 });
  });
});

describe('showMilestone', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="milestone-toast"></div>';
  });

  it('does nothing when the toast element is missing', () => {
    document.body.innerHTML = '';
    expect(() => showMilestone('hi')).not.toThrow();
  });

  it('sets text and toggles the show class', () => {
    showMilestone('🎉 100 words!');
    const el = document.getElementById('milestone-toast')!;
    expect(el.textContent).toBe('🎉 100 words!');
    expect(el.className).toBe('milestone-toast show');
  });
});
