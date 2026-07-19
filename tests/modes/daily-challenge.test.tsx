import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render, within } from '@testing-library/react';
import { DailyChallenge } from '../../js/modes/daily-challenge.tsx';
import { today as localToday } from '../../js/core/today.ts';
import type { GameData } from '../../src/types.ts';

let mockGameData: GameData;

vi.mock('../../js/features/game.ts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../js/features/game.ts')>();
  return {
    ...actual,
    getGameData: vi.fn(() => mockGameData),
    saveGameData: vi.fn((d: GameData) => {
      mockGameData = d;
    }),
    recordModeComplete: vi.fn(),
  };
});
vi.mock('../../js/features/render-achievements.ts', () => ({
  checkAchievements: vi.fn(),
}));
vi.mock('../../js/features/game-bar-level.tsx', () => ({
  refreshGameBarLevel: vi.fn(),
}));

import { getGameData, recordModeComplete } from '../../js/features/game.ts';

// #dc-overlay and its children are no longer static fixture markup —
// DailyChallenge renders them itself (full-react-migration-roadmap.md
// Phase 2). Only the two elements it doesn't own (the trigger button,
// elsewhere in daily-mission-card.tsx, and modes-overlay, elsewhere in
// modes-modal.tsx) still need a fixture.
function buildFixture(): void {
  const fixture = document.createElement('div');
  fixture.innerHTML = `
    <button id="btn-daily-challenge"></button>
    <div id="modes-overlay" class="modes-overlay open as-page"></div>
  `;
  document.body.appendChild(fixture);
}

// The 4 answer buttons carry real translated word text, so they're
// queryable by role rather than by their .dc-opt marker class.
function options(): HTMLElement[] {
  return within(document.getElementById('dc-options')!).getAllByRole('button');
}

function answer(optionIndex: number): void {
  act(() => {
    options()[optionIndex].click();
  });
}

function openChallenge(): void {
  act(() => {
    document.getElementById('btn-daily-challenge')!.click();
  });
}

describe('daily-challenge.tsx (DailyChallenge)', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    mockGameData = { xp: 0, dailyMissionDate: null } as unknown as GameData;
    buildFixture();
    vi.clearAllMocks();
    render(<DailyChallenge />);
  });

  it('renders its own #dc-overlay markup (imperative wiring still targets those same ids)', () => {
    expect(document.getElementById('dc-overlay')).not.toBeNull();
  });

  // Regression: opening used to also set modes-overlay's style.display =
  // 'none' directly, leaving a stale inline style that permanently beat any
  // later classList.add('open') (inline style always wins over a
  // non-!important class rule) — the Modes overlay could never be reopened
  // again after visiting Daily Challenge once. classList.remove alone is
  // enough since .modes-overlay's base CSS rule is already display:none.
  it('opening closes the modes-overlay via class only, without leaving a stale inline display style', () => {
    openChallenge();
    const modesOverlay = document.getElementById('modes-overlay')!;
    expect(modesOverlay.classList.contains('open')).toBe(false);
    expect(modesOverlay.classList.contains('as-page')).toBe(false);
    expect(modesOverlay.style.display).toBe('');
  });

  it('opening the mission shows the first question with 4 options', () => {
    openChallenge();
    expect(document.getElementById('dc-overlay')!.classList.contains('open')).toBe(true);
    expect(document.getElementById('dc-word')!.textContent).not.toBe('');
    expect(options()).toHaveLength(4);
    expect(document.getElementById('dc-title')!.textContent).toContain('1');
  });

  it('shows the locked "already done today" screen when the mission is already completed', () => {
    mockGameData.dailyMissionDate = localToday();
    openChallenge();
    // The locked screen replaces the question area and shows the final panel.
    expect(document.getElementById('dc-final')!.style.display).toBe('block');
    expect(document.getElementById('dc-options')!.innerHTML).toBe('');
  });

  it('answering marks the option, shows feedback, and starts the countdown timer', () => {
    vi.useFakeTimers();
    openChallenge();
    const correctText = document.getElementById('dc-result');
    const opts = options();
    act(() => {
      opts[0].click();
    });
    expect((opts[0] as HTMLButtonElement).disabled).toBe(true);
    expect(correctText!.textContent).not.toBe('');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(document.getElementById('dc-timer')!.textContent).toMatch(/\d/);
    vi.useRealTimers();
  });

  it('advances to the next question after answering', () => {
    vi.useFakeTimers();
    openChallenge();
    answer(0);
    act(() => {
      vi.advanceTimersByTime(900);
    });
    expect(document.getElementById('dc-title')!.textContent).toContain('2');
    vi.useRealTimers();
  });

  it('completing all 10 questions shows the final screen and records XP/completion', () => {
    vi.useFakeTimers();
    openChallenge();
    for (let i = 0; i < 10; i++) {
      answer(0);
      act(() => {
        vi.advanceTimersByTime(900);
      });
    }
    expect(document.getElementById('dc-final')!.style.display).toBe('block');
    expect(recordModeComplete).toHaveBeenCalledWith('daily');
    expect(getGameData().dailyMissionDate).toBe(localToday());
    vi.useRealTimers();
  });

  it('the countdown timer ends the round early if time runs out', () => {
    vi.useFakeTimers();
    openChallenge();
    // Starting the timer requires answering the first question once.
    answer(0);
    act(() => {
      vi.advanceTimersByTime(900); // move to question 2
    });
    act(() => {
      vi.advanceTimersByTime(121_000); // exceed the whole mission's time budget
    });
    expect(document.getElementById('dc-final')!.style.display).toBe('block');
    vi.useRealTimers();
  });

  it('closing hides the overlay', () => {
    openChallenge();
    act(() => {
      document.getElementById('dc-close')!.click();
    });
    expect(document.getElementById('dc-overlay')!.classList.contains('open')).toBe(false);
  });

  it('clicking outside the panel closes the overlay', () => {
    openChallenge();
    const overlay = document.getElementById('dc-overlay')!;
    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(overlay.classList.contains('open')).toBe(false);
  });
});
