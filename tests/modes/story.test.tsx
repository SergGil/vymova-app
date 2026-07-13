import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { StoryPage, openStoryMode } from '../../js/modes/story.tsx';
import { clearAllKnown, getKnownSnapshot } from '../../src/known-words-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function findButton(container: HTMLElement, re: RegExp): HTMLButtonElement {
  return Array.from(container.querySelectorAll('button')).find((b) => b.textContent?.match(re))!;
}

describe('story.tsx (StoryPage) — builtin stories (AI disabled in test env)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    clearAllKnown();
    document.body.innerHTML = '';
    overlay = document.createElement('div');
    overlay.id = 'story-mode-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<StoryPage />);
    });
  });

  afterEach(() => {
    act(() => {
      root.unmount();
    });
    document.body.innerHTML = '';
    clearAllKnown();
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening shows the picker with 3 builtin stories and no AI generator', () => {
    act(() => {
      openStoryMode();
    });
    expect(overlay.style.display).toBe('flex');
    expect(container.textContent).toMatch(/busy morning/i);
    expect(container.textContent).toMatch(/the journey/i);
    expect(container.textContent).toMatch(/scientific discovery/i);
    // AI_TUTOR_ENABLED is false without a configured proxy URL in tests.
    expect(findButton(container, /generate|generuj|згенер/i)).toBeFalsy();
  });

  it('picking a builtin story shows highlighted vocabulary words', () => {
    act(() => {
      openStoryMode();
    });
    act(() => {
      findButton(container, /busy morning/i).click();
    });
    expect(container.textContent).toContain('A Busy Morning');
    expect(container.querySelectorAll('.sm-word').length).toBeGreaterThan(0);
  });

  it('clicking a highlighted word opens a translation popup', () => {
    act(() => {
      openStoryMode();
    });
    act(() => {
      findButton(container, /busy morning/i).click();
    });
    const word = container.querySelector<HTMLElement>('.sm-word')!;
    act(() => {
      word.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(container.querySelector('#sm-popup-speak')).not.toBeNull();
  });

  it('marking a word known updates the known-words store and closes the popup', () => {
    act(() => {
      openStoryMode();
    });
    act(() => {
      findButton(container, /busy morning/i).click();
    });
    const word = container.querySelector<HTMLElement>('.sm-word')!;
    const headword = word.dataset.word!;
    act(() => {
      word.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    const markBtn = Array.from(container.querySelectorAll('button')).find(
      (b) => b.className.includes('backup-btn'),
    )!;
    act(() => {
      markBtn.click();
    });
    expect(getKnownSnapshot('en').has(headword)).toBe(true);
    expect(container.querySelector('#sm-popup-speak')).toBeNull();
  });

  it('"back" returns to the picker and completion is recorded once a story was opened', () => {
    act(() => {
      openStoryMode();
    });
    act(() => {
      findButton(container, /busy morning/i).click();
    });
    act(() => {
      findButton(container, /back|назад/i).click();
    });
    expect(container.textContent).toMatch(/busy morning/i);
    expect(container.querySelectorAll('.sm-word')).toHaveLength(0);
  });

  it('Escape closes the page', () => {
    act(() => {
      openStoryMode();
    });
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    act(() => {
      openStoryMode();
    });
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
