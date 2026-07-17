import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
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

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function buildDom(): void {
  document.body.innerHTML = `
    <button id="btn-daily-challenge"></button>
    <div id="modes-overlay" class="modes-overlay open as-page"></div>
    <div id="dc-overlay" class="page-overlay">
      <div id="dc-title"></div>
      <div id="dc-timer"></div>
      <button id="dc-close"></button>
      <div class="dc-pbar-wrap"><div id="dc-pbar"></div></div>
      <div class="dc-word-area">
        <div id="dc-word"></div>
        <div id="dc-ipa"></div>
        <div id="dc-result"></div>
      </div>
      <div id="dc-options"></div>
      <div id="dc-final" style="display:none">
        <div id="dc-final-emoji"></div>
        <div id="dc-final-title"></div>
        <div id="dc-final-xp"></div>
        <div id="dc-final-cooldown"></div>
      </div>
    </div>
  `;
}

function answer(optionIndex: number): void {
  const opts = document.querySelectorAll<HTMLButtonElement>('#dc-options .dc-opt');
  act(() => {
    opts[optionIndex].click();
  });
}

describe('daily-challenge.tsx (DailyChallenge)', () => {
  let root: Root;
  let container: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    mockGameData = { xp: 0, dailyMissionDate: null } as unknown as GameData;
    buildDom();
    vi.clearAllMocks();
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<DailyChallenge />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('renders no visible output itself (all DOM wiring is imperative)', () => {
    expect(container.innerHTML).toBe('');
  });

  // Regression: opening used to also set modes-overlay's style.display =
  // 'none' directly, leaving a stale inline style that permanently beat any
  // later classList.add('open') (inline style always wins over a
  // non-!important class rule) — the Modes overlay could never be reopened
  // again after visiting Daily Challenge once. classList.remove alone is
  // enough since .modes-overlay's base CSS rule is already display:none.
  it('opening closes the modes-overlay via class only, without leaving a stale inline display style', () => {
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    const modesOverlay = document.getElementById('modes-overlay')!;
    expect(modesOverlay.classList.contains('open')).toBe(false);
    expect(modesOverlay.classList.contains('as-page')).toBe(false);
    expect(modesOverlay.style.display).toBe('');
  });

  it('opening the mission shows the first question with 4 options', () => {
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    expect(document.getElementById('dc-overlay')!.classList.contains('open')).toBe(true);
    expect(document.getElementById('dc-word')!.textContent).not.toBe('');
    expect(document.querySelectorAll('#dc-options .dc-opt')).toHaveLength(4);
    expect(document.getElementById('dc-title')!.textContent).toContain('1');
  });

  it('shows the locked "already done today" screen when the mission is already completed', () => {
    mockGameData.dailyMissionDate = localToday();
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    // The locked screen replaces the question area and shows the final panel.
    expect(document.getElementById('dc-final')!.style.display).toBe('block');
    expect(document.getElementById('dc-options')!.innerHTML).toBe('');
  });

  it('answering marks the option, shows feedback, and starts the countdown timer', () => {
    vi.useFakeTimers();
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    const correctText = document.getElementById('dc-result');
    const opts = document.querySelectorAll<HTMLButtonElement>('#dc-options .dc-opt');
    act(() => {
      opts[0].click();
    });
    expect(opts[0].disabled).toBe(true);
    expect(correctText!.textContent).not.toBe('');
    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(document.getElementById('dc-timer')!.textContent).toMatch(/\d/);
    vi.useRealTimers();
  });

  it('advances to the next question after answering', async () => {
    vi.useFakeTimers();
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    answer(0);
    act(() => {
      vi.advanceTimersByTime(900);
    });
    expect(document.getElementById('dc-title')!.textContent).toContain('2');
    vi.useRealTimers();
  });

  it('completing all 10 questions shows the final screen and records XP/completion', () => {
    vi.useFakeTimers();
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    for (let i = 0; i < 10; i++) {
      const opts = document.querySelectorAll<HTMLButtonElement>('#dc-options .dc-opt');
      act(() => {
        opts[0].click();
      });
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
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
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
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    act(() => {
      document.getElementById('dc-close')!.click();
    });
    expect(document.getElementById('dc-overlay')!.classList.contains('open')).toBe(false);
  });

  it('clicking outside the panel closes the overlay', () => {
    act(() => {
      document.getElementById('btn-daily-challenge')!.click();
    });
    const overlay = document.getElementById('dc-overlay')!;
    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(overlay.classList.contains('open')).toBe(false);
  });
});
