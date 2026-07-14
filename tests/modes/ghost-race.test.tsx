import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { GhostRacePage, openGhostRace, ghostKey } from '../../js/modes/ghost-race.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Synthetic, dictionary-unique EN/UA strings so wrong options (drawn from the
// real full W dictionary elsewhere in ghost-race.tsx) can never collide.
const TEN_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', ''],
  ['zqnight', 'зніч', '', ''],
  ['zqplant', 'зрослина', '', ''],
  ['zqcover', 'зобкладинка', '', ''],
  ['zqstone', 'закамінь', '', ''],
  ['zqchair', 'застілець', '', ''],
  ['zqbread', 'захліб', '', ''],
  ['zqhouse', 'здім', '', ''],
  ['zqwater', 'звода', '', ''],
  ['zqmusic', 'змузика', '', ''],
];

function currentPair(container: HTMLElement): WordEntry {
  return TEN_WORDS.find((w) => container.textContent?.includes(w[0]))!;
}
function correctOptionBtn(container: HTMLElement, pair: WordEntry): HTMLButtonElement {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option')).find((o) =>
    o.textContent?.includes(pair[1]),
  )!;
}
function wrongOptionBtn(container: HTMLElement, pair: WordEntry): HTMLButtonElement {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option')).find(
    (o) => !o.textContent?.includes(pair[1]),
  )!;
}
function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

describe('ghost-race.tsx (GhostRacePage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'ghost-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<GhostRacePage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening shows the ready screen with no ghost yet on a fresh run', () => {
    act(() => {
      openGhostRace();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.textContent).toMatch(/ще немає|немає привида/i);
  });

  it('starting the race shows the first question with progress bars', () => {
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('0/10');
  });

  it('a correct answer is marked correct and advances after the short delay', () => {
    vi.useFakeTimers();
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    act(() => {
      vi.advanceTimersByTime(350);
    });
    expect(container.textContent).toContain('1/10');
    vi.useRealTimers();
  });

  it('a wrong answer reveals the correct option', () => {
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    const pair = currentPair(container);
    const wrongBtn = wrongOptionBtn(container, pair);
    act(() => {
      wrongBtn.click();
    });
    expect(wrongBtn.className).toContain('wrong');
    expect(container.querySelector('.reveal')).not.toBeNull();
  });

  it('finishing all 10 questions shows the result screen and saves a ghost time', () => {
    vi.useFakeTimers();
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    for (let i = 0; i < 10; i++) {
      const pair = currentPair(container);
      const correctBtn = correctOptionBtn(container, pair);
      act(() => {
        correctBtn.click();
      });
      act(() => {
        vi.advanceTimersByTime(350);
      });
    }
    expect(container.textContent).toContain('10');
    expect(localStorage.getItem(ghostKey())).not.toBeNull();
    vi.useRealTimers();
  });

  it('"try again" from the result screen restarts the race', () => {
    vi.useFakeTimers();
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    for (let i = 0; i < 10; i++) {
      const pair = currentPair(container);
      const correctBtn = correctOptionBtn(container, pair);
      act(() => {
        correctBtn.click();
      });
      act(() => {
        vi.advanceTimersByTime(350);
      });
    }
    const tryAgainBtn = findButton(container, /ще раз/i);
    act(() => {
      tryAgainBtn.click();
    });
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    vi.useRealTimers();
  });

  it('a stale feedback timeout from a race closed-and-restarted mid-feedback does not skip the new race\'s first question', () => {
    vi.useFakeTimers();
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    // Answer race #1's first question, but close and restart before its
    // 350ms feedback timeout (which bumps qIdx) has a chance to fire.
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    // Race #2's first question, captured before the stale timeout can fire —
    // this is the word qIdx must still point at afterward. (Not asserted via
    // the "X/10" progress text: that's driven by checkpoints.length, which
    // only grows on an actual answer, not by qIdx — so it can't tell an
    // untouched question 0 apart from qIdx having silently skipped to 1.)
    const race2Q0 = currentPair(container);
    // Let race #1's now-stale timeout run.
    act(() => {
      vi.advanceTimersByTime(350);
    });
    // Race #2 must still be showing its first word, not silently bumped past
    // it by the leaked timeout from race #1.
    expect(currentPair(container)).toBe(race2Q0);
    expect(container.textContent).toContain('0/10');
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    vi.useRealTimers();
  });

  it('a stale feedback timeout from race #1\'s last question does not yank a restarted race #2 to the result screen', () => {
    vi.useFakeTimers();
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    // Play race #1 through its first 9 questions normally.
    for (let i = 0; i < 9; i++) {
      const pair = currentPair(container);
      const correctBtn = correctOptionBtn(container, pair);
      act(() => {
        correctBtn.click();
      });
      act(() => {
        vi.advanceTimersByTime(350);
      });
    }
    // Answer the 10th (last) question, then close and restart immediately —
    // before the stale timeout (whose closure sees qIdx+1 >= deck.length,
    // i.e. "finish the race") fires.
    const lastPair = currentPair(container);
    const lastCorrectBtn = correctOptionBtn(container, lastPair);
    act(() => {
      lastCorrectBtn.click();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    act(() => {
      openGhostRace();
    });
    act(() => {
      findButton(container, /старт|почати/i).click();
    });
    // Let race #1's stale "finish" timeout run.
    act(() => {
      vi.advanceTimersByTime(350);
    });
    // Race #2 must still be playing its first question — not yanked to the
    // result screen by race #1's leaked finishRace() call.
    expect(container.textContent).toContain('0/10');
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    vi.useRealTimers();
  });

  it('Escape closes the page', () => {
    act(() => {
      openGhostRace();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openGhostRace();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
