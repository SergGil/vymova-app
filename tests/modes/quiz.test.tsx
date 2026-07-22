import { describe, it, expect, beforeEach } from 'vitest';
import { act } from 'react';
import { render } from '@testing-library/react';
import { QuizPage, openQuickQuiz } from '../../js/modes/quiz.tsx';
import { setDeckState } from '../../src/deck-store.ts';
import type { WordEntry } from '../../src/types.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// Synthetic, dictionary-unique EN/UA strings so wrong options (drawn from the
// real full W dictionary elsewhere in quiz.tsx) can never collide with these.
const FIVE_WORDS: WordEntry[] = [
  ['zqcloud', 'зхмара', '', ''],
  ['zqnight', 'зніч', '', ''],
  ['zqplant', 'зрослина', '', ''],
  ['zqcover', 'зобкладинка', '', ''],
  ['zqstone', 'закамінь', '', ''],
];

function currentPair(container: HTMLElement): WordEntry {
  return FIVE_WORDS.find(
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
function answerAndAdvance(container: HTMLElement, correct: boolean): void {
  const pair = currentPair(container);
  const btn = correct ? correctOptionBtn(container, pair) : wrongOptionBtn(container, pair);
  act(() => {
    btn.click();
  });
  const nextBtn = Array.from(container.querySelectorAll('button')).find((b) =>
    b.textContent?.match(/наступне|фініш/i),
  )!;
  act(() => {
    nextBtn.click();
  });
}

describe('quiz.tsx (QuizPage)', () => {
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem('ew_srs_priority', '0');
    document.body.innerHTML = '';
    setDeckState(FIVE_WORDS);

    render(<QuizPage />);
    // QuizPage now renders its own #quiz-overlay/#quiz-panel directly
    // (portaled to document.body), rather than portaling into a static
    // fixture — both exist unconditionally so useModeSession's open()/
    // close() can always find #quiz-overlay by id.
    overlay = document.getElementById('quiz-overlay')!;
    container = document.getElementById('quiz-panel')!;
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening a quick quiz starts a 5-question round with 4 options', () => {
    act(() => {
      openQuickQuiz();
    });
    expect(overlay.classList.contains('open')).toBe(true);
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('1');
  });

  it('choosing the correct option shows correct feedback and the advance button', () => {
    act(() => {
      openQuickQuiz();
    });
    const pair = currentPair(container);
    const correctBtn = correctOptionBtn(container, pair);
    act(() => {
      correctBtn.click();
    });
    expect(correctBtn.className).toContain('correct');
    expect(container.textContent).toContain('✓ 1');
    expect(
      Array.from(container.querySelectorAll('button')).some((b) =>
        b.textContent?.match(/наступне|фініш/i),
      ),
    ).toBe(true);
  });

  it('choosing a wrong option reveals the correct answer', () => {
    act(() => {
      openQuickQuiz();
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

  it('a perfect run shows the perfect-score final screen with no "retry wrong" option', () => {
    act(() => {
      openQuickQuiz();
    });
    for (let i = 0; i < 5; i++) answerAndAdvance(container, true);
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(0);
    expect(container.textContent).toContain('🏆');
    expect(
      Array.from(container.querySelectorAll('button')).some((b) =>
        b.textContent?.match(/помилк/i),
      ),
    ).toBe(false);
  });

  it('a run with mistakes offers a "retry wrong words" button that restarts just those', () => {
    act(() => {
      openQuickQuiz();
    });
    answerAndAdvance(container, false);
    for (let i = 0; i < 4; i++) answerAndAdvance(container, true);
    const retryBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/помилк/i),
    );
    expect(retryBtn).toBeTruthy();
    act(() => {
      retryBtn!.click();
    });
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('1');
  });

  it('"try again" restarts a fresh round from the final screen', () => {
    act(() => {
      openQuickQuiz();
    });
    for (let i = 0; i < 5; i++) answerAndAdvance(container, true);
    const tryAgainBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/ще раз/i),
    )!;
    act(() => {
      tryAgainBtn.click();
    });
    expect(container.querySelectorAll('.quiz-option')).toHaveLength(4);
    expect(container.textContent).toContain('1');
  });

  it('Escape closes the page', () => {
    act(() => {
      openQuickQuiz();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.classList.contains('open')).toBe(false);
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openQuickQuiz();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.classList.contains('open')).toBe(false);
  });
});
