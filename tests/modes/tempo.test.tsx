import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { TempoPage, openTempo } from '../../js/modes/tempo.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Synthetic, dictionary-unique EN/UA strings so wrong options (drawn from the
// real full W dictionary elsewhere in tempo.tsx) can never collide with
// these — that would make "which option is correct" ambiguous in a test.
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
  return TEN_WORDS.find(
    (w) => container.textContent?.includes(w[0]) || container.textContent?.includes(w[1]),
  )!;
}
function correctOptionBtn(container: HTMLElement, pair: WordEntry): HTMLButtonElement {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.tempo-opt')).find(
    (o) => o.textContent?.includes(pair[0]) || o.textContent?.includes(pair[1]),
  )!;
}
function wrongOptionBtn(container: HTMLElement, pair: WordEntry): HTMLButtonElement {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.tempo-opt')).find(
    (o) => !o.textContent?.includes(pair[0]) && !o.textContent?.includes(pair[1]),
  )!;
}
function startGame(container: HTMLElement): void {
  const startBtn = Array.from(container.querySelectorAll('button')).find((b) =>
    b.textContent?.match(/старт/i),
  )!;
  act(() => {
    startBtn.click();
  });
}

describe('tempo.tsx (TempoPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'tempo-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<TempoPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
  });

  it('opening shows the start screen with 3 duration options', () => {
    act(() => {
      openTempo();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelectorAll('.tempo-time-btn')).toHaveLength(3);
    expect(container.querySelector('.tempo-time-btn.active')).not.toBeNull();
  });

  it('picking a duration marks it active', () => {
    act(() => {
      openTempo();
    });
    const sixtyBtn = Array.from(container.querySelectorAll<HTMLButtonElement>('.tempo-time-btn'))[1];
    act(() => {
      sixtyBtn.click();
    });
    expect(sixtyBtn.className).toContain('active');
  });

  it('starting the round shows a question with 4 options and a countdown', () => {
    act(() => {
      openTempo();
    });
    startGame(container);
    expect(container.querySelectorAll('.tempo-opt')).toHaveLength(4);
    expect(container.textContent).toContain('30');
  });

  it('choosing the correct option increases the score and shows correct feedback', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    expect(container.textContent).toContain('✓ 1');
    vi.useRealTimers();
  });

  it('choosing a wrong option increases the miss count and reveals the correct answer', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    const pair = currentPair(container);
    const wrongBtn = wrongOptionBtn(container, pair);
    act(() => {
      wrongBtn.click();
    });
    expect(wrongBtn.className).toContain('wrong');
    expect(container.querySelector('.reveal')).not.toBeNull();
    expect(container.textContent).toContain('✗ 1');
    vi.useRealTimers();
  });

  it('advances to a new question shortly after answering', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    act(() => {
      vi.advanceTimersByTime(400);
    });
    expect(container.querySelectorAll('.tempo-opt')).toHaveLength(4);
    expect(container.querySelector('.correct')).toBeNull();
    vi.useRealTimers();
  });

  it('the countdown ending shows the result screen and saves a best score', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    const pair = currentPair(container);
    act(() => {
      correctOptionBtn(container, pair).click();
    });
    act(() => {
      vi.advanceTimersByTime(30_000);
    });
    expect(container.textContent).toMatch(/✓ 1/);
    expect(localStorage.getItem('ew_tempo_best_30')).toBe('1');
    vi.useRealTimers();
  });

  it('"play again" from the result screen returns to the start screen', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    act(() => {
      vi.advanceTimersByTime(30_000);
    });
    const againBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/ще раз/i),
    )!;
    act(() => {
      againBtn.click();
    });
    expect(container.querySelectorAll('.tempo-time-btn')).toHaveLength(3);
    vi.useRealTimers();
  });

  it('Escape closes the page', () => {
    act(() => {
      openTempo();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  // Regression: the setTimeout that advances to the next question after an
  // answer (selectOption's 400ms/900ms delay) was never stored in a ref, so
  // closing the game (or restarting) while it was still pending left it
  // scheduled. It was guarded by `isRunning`, so it wouldn't fire an old
  // round's showQuestion() after a bare close — but restarting flips
  // isRunning back to true on the *same* run.current object, so the stale
  // timer would fire mid-fresh-round and re-trigger showQuestion()
  // unexpectedly. Fixed by tracking it in nextQTimerRef and clearing it on
  // close, on unmount, and before scheduling a new round.
  it('closing while a next-question timer is pending cancels it instead of leaking', () => {
    vi.useFakeTimers();
    act(() => {
      openTempo();
    });
    startGame(container);
    act(() => {
      vi.advanceTimersByTime(60); // let the progress-bar transition timeout elapse
    });
    const pair = currentPair(container);
    act(() => {
      wrongOptionBtn(container, pair).click();
    });
    // The countdown interval plus the pending next-question timeout.
    expect(vi.getTimerCount()).toBe(2);

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(vi.getTimerCount()).toBe(0);
    vi.useRealTimers();
  });

  it('closing from the start screen hides the overlay', () => {
    act(() => {
      openTempo();
    });
    const closeBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/закрити/i),
    )!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
