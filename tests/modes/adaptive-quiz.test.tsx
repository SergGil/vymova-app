import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import {
  AdaptiveQuizPage,
  openAdaptiveQuiz,
  numOptionsFor,
  timeLimitFor,
} from '../../js/modes/adaptive-quiz.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Synthetic, dictionary-unique EN/UA strings so wrong options (drawn from the
// real full W dictionary elsewhere in adaptive-quiz.tsx) can never collide.
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
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option')).find(
    (o) => o.textContent?.includes(pair[0]) || o.textContent?.includes(pair[1]),
  )!;
}
function wrongOptionBtn(container: HTMLElement, pair: WordEntry): HTMLButtonElement {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.quiz-option')).find(
    (o) => !o.textContent?.includes(pair[0]) && !o.textContent?.includes(pair[1]),
  )!;
}
function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}
function answerAndAdvance(container: HTMLElement, correct: boolean): void {
  const pair = currentPair(container);
  const btn = correct ? correctOptionBtn(container, pair) : wrongOptionBtn(container, pair);
  act(() => {
    btn.click();
  });
  act(() => {
    findButton(container, /наступне|фініш/i).click();
  });
}

describe('adaptive-quiz.tsx pure helpers', () => {
  it('numOptionsFor grows (capped at 6) with difficulty', () => {
    expect(numOptionsFor(1)).toBe(3);
    expect(numOptionsFor(5)).toBe(6);
    expect(numOptionsFor(10)).toBe(6);
  });
  it('timeLimitFor shrinks (floored at 4s) with difficulty', () => {
    expect(timeLimitFor(1)).toBe(11);
    expect(timeLimitFor(5)).toBe(4);
    expect(timeLimitFor(10)).toBe(4);
  });
});

describe('adaptive-quiz.tsx (AdaptiveQuizPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'aq-overlay';
    document.body.appendChild(overlay);
    setDeckState(TEN_WORDS);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<AdaptiveQuizPage />);
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

  it('opening shows the first question with 4 options and a countdown', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    expect(overlay.classList.contains('open')).toBe(true);
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toMatch(/\ds/);
  });

  it('a correct answer is marked correct and reveals the advance button', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    expect(container.textContent).toContain('✓ 1');
  });

  it('a wrong answer reveals the correct option', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    const pair = currentPair(container);
    const wrongBtn = wrongOptionBtn(container, pair);
    act(() => {
      wrongBtn.click();
    });
    expect(wrongBtn.className).toContain('wrong');
    expect(container.querySelector('.reveal')).not.toBeNull();
    expect(container.textContent).toContain('✗ 1');
  });

  it('letting the timer run out auto-submits as wrong', () => {
    vi.useFakeTimers();
    act(() => {
      openAdaptiveQuiz();
    });
    // START_DIFF=2 -> timeLimitFor(2) = 9s; tick down one second at a time so
    // React can re-schedule the interval's next callback between steps.
    for (let i = 0; i < 9; i++) {
      act(() => {
        vi.advanceTimersByTime(1000);
      });
    }
    expect(container.textContent).toMatch(/час вийшов|неправильно/i);
    expect(container.textContent).toContain('✗ 1');
    vi.useRealTimers();
  });

  it('advancing through all 10 questions shows the final screen', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    for (let i = 0; i < 10; i++) answerAndAdvance(container, true);
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
    expect(container.textContent).toContain('10');
  });

  it('"try again" from the final screen restarts the quiz', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    for (let i = 0; i < 10; i++) answerAndAdvance(container, true);
    const tryAgainBtn = findButton(container, /ще раз/i);
    act(() => {
      tryAgainBtn.click();
    });
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
  });

  it('Escape/close via the close button hides the overlay', () => {
    act(() => {
      openAdaptiveQuiz();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.classList.contains('open')).toBe(false);
  });
});
