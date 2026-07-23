import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { IdiomQuizPage, openIdiomQuiz } from '../../js/modes/idiom-quiz.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

// startGame() (idiom-quiz.tsx) now preloads idiom data lazily
// (js/features/idioms-loader.ts) before building the deck — waits for that
// dynamic import (and the state update it triggers) to settle before the
// quiz overlay actually has questions in it.
async function openAndAwaitDeck(): Promise<void> {
  act(() => {
    openIdiomQuiz();
  });
  await act(async () => {
    await vi.dynamicImportSettled();
  });
}

describe('IdiomQuizPage', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    document.body.innerHTML = '<div id="idq-overlay" style="display:none;"></div>';
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  it('opens with a 4-option question and reveals the overlay', async () => {
    act(() => {
      root.render(<IdiomQuizPage />);
    });
    await openAndAwaitDeck();

    const overlay = document.getElementById('idq-overlay')!;
    expect(overlay.style.display).toBe('flex');

    const options = container.querySelectorAll('.quiz-option');
    expect(options.length).toBe(4);
  });

  it('picking the correct option marks it correct and shows the success message', async () => {
    // There's no DOM hook exposing which option is correct ahead of a click
    // (by design — that would leak the answer to the player), and a question
    // locks after one answer, so this can't target the right option
    // directly. Instead: click the first option of a fresh question, up to
    // 20 times across fresh remounts, until one happens to be correct (each
    // question independently shuffles which slot holds the right answer, so
    // ~25% land it per try — 20 tries makes a false failure astronomically
    // unlikely without hardcoding a random seed).
    let foundCorrect = false;
    for (let attempt = 0; attempt < 20 && !foundCorrect; attempt++) {
      if (attempt > 0) {
        act(() => root.unmount());
        root = createRoot(container);
      }
      act(() => {
        root.render(<IdiomQuizPage />);
      });
      await openAndAwaitDeck();
      const firstOption = container.querySelector<HTMLButtonElement>('.quiz-option')!;
      act(() => {
        firstOption.click();
      });
      foundCorrect = firstOption.className.includes('correct');
    }
    expect(foundCorrect).toBe(true);
    expect(container.querySelector('.quiz-option.correct')).toBeTruthy();
  });

  it('all 4 rendered options are unique meanings', async () => {
    act(() => {
      root.render(<IdiomQuizPage />);
    });
    await openAndAwaitDeck();

    const texts = Array.from(container.querySelectorAll('.quiz-option')).map((el) =>
      (el.textContent ?? '').replace(/^\d+/, '').trim(),
    );
    expect(new Set(texts).size).toBe(texts.length);
  });
});
