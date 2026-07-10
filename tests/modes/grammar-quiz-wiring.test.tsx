import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { GrammarQuizPage, openGrammarQuiz } from '../../js/modes/grammar-quiz.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('GrammarQuizPage', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    document.body.innerHTML = '<div id="grq-overlay" style="display:none;"></div>';
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  it('opens with a question and reveals the overlay', () => {
    act(() => {
      root.render(<GrammarQuizPage />);
    });
    act(() => {
      openGrammarQuiz();
    });

    const overlay = document.getElementById('grq-overlay')!;
    expect(overlay.style.display).toBe('flex');

    const options = container.querySelectorAll('.quiz-option');
    expect(options.length).toBeGreaterThan(0);
  });

  it('picking the correct option marks it correct and shows the success message', () => {
    // Same rationale as idiom-quiz-wiring.test.tsx: no DOM hook exposing the
    // correct option ahead of a click, so retry fresh remounts until one
    // happens to land on it.
    let foundCorrect = false;
    for (let attempt = 0; attempt < 20 && !foundCorrect; attempt++) {
      if (attempt > 0) {
        act(() => root.unmount());
        root = createRoot(container);
      }
      act(() => {
        root.render(<GrammarQuizPage />);
      });
      act(() => {
        openGrammarQuiz();
      });
      const firstOption = container.querySelector<HTMLButtonElement>('.quiz-option')!;
      act(() => {
        firstOption.click();
      });
      foundCorrect = firstOption.className.includes('correct');
    }
    expect(foundCorrect).toBe(true);
    expect(container.querySelector('.quiz-option.correct')).toBeTruthy();
  });

  it('all rendered options are unique rule titles', () => {
    act(() => {
      root.render(<GrammarQuizPage />);
    });
    act(() => {
      openGrammarQuiz();
    });

    const texts = Array.from(container.querySelectorAll('.quiz-option')).map((el) =>
      (el.textContent ?? '').replace(/^\d+/, '').trim(),
    );
    expect(new Set(texts).size).toBe(texts.length);
  });
});
