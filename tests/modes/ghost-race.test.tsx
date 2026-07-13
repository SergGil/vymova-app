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
