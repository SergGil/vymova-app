import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { WordLettersPage, openWordLetters } from '../../js/modes/word-letters.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

describe('WordLettersPage', () => {
  let container: HTMLElement;
  let root: Root;

  beforeEach(() => {
    localStorage.setItem('ew_learn_lang', 'en');
    localStorage.setItem('ew_know_lang', 'ua');
    document.body.innerHTML = '<div id="wl-overlay" style="display:none;"></div>';
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    localStorage.removeItem('ew_learn_lang');
    localStorage.removeItem('ew_know_lang');
  });

  function tileLetters(): string {
    return Array.from(container.querySelectorAll('.scr-tile:not(.scr-tile-placed)'))
      .map((el) => el.textContent)
      .join('');
  }

  it('opens with a round ready and non-empty letter tiles', () => {
    act(() => {
      root.render(<WordLettersPage />);
    });
    act(() => {
      openWordLetters();
    });

    const overlay = document.getElementById('wl-overlay')!;
    expect(overlay.style.display).toBe('flex');
    expect(tileLetters().length).toBeGreaterThan(0);
  });

  it('clicking Done advances the round and sets up new letter tiles, rather than freezing on round 1', () => {
    // Regression guard: advance() used to only bump the round index —
    // nothing re-ran setupRound() for the new round, so the tiles, timer
    // and found-words list stayed frozen on round 1 forever while the
    // "Round N of 5" label kept climbing.
    act(() => {
      root.render(<WordLettersPage />);
    });
    act(() => {
      openWordLetters();
    });

    const round1Letters = tileLetters();
    expect(round1Letters.length).toBeGreaterThan(0);

    const doneButton = container.querySelector<HTMLButtonElement>(
      '[data-i18n="letters.doneBtn"]',
    )!;
    expect(doneButton).toBeTruthy();
    act(() => {
      doneButton.click();
    });

    const round2Letters = tileLetters();
    expect(round2Letters.length).toBeGreaterThan(0);
    expect(round2Letters).not.toBe(round1Letters);
  });
});
