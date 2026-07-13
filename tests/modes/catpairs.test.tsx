import { describe, it, expect, vi, beforeAll, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import type { WordEntry } from '../../src/types.ts';

// Make EN/UA text trivially matchable in tests: EN shows the plain headword,
// UA shows the same headword with a "_UA" suffix — real translations aren't
// deterministic/known ahead of time, but catpairs.tsx always draws its 6
// words from the real dictionary's categories, so this keeps pairing logic
// testable without guessing actual Ukrainian text.
vi.mock('../../js/features/mode-utils.ts', async (importOriginal) => {
  const actual = await importOriginal<typeof import('../../js/features/mode-utils.ts')>();
  return {
    ...actual,
    entryFor: (code: string, cw: WordEntry) =>
      code === 'en' ? { word: cw[0], ex: cw[2] ?? '' } : { word: cw[0] + '_UA', ex: cw[3] ?? '' },
  };
});

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let CatPairsPage: (typeof import('../../js/modes/catpairs.tsx'))['CatPairsPage'];
let btnCatpairs: HTMLButtonElement;

// catpairs.tsx's open()/close() are only reachable through its module-level
// bindOverlayOpenClose('btn-catpairs', ...), which attaches its click
// listener to whatever #btn-catpairs element exists the moment the module
// is first imported — so that button must exist *before* the dynamic
// import below, and we keep a direct reference to click through later
// (a direct listener still fires via .click() even once detached/rebuilt
// around it each test).
beforeAll(async () => {
  btnCatpairs = document.createElement('button');
  btnCatpairs.id = 'btn-catpairs';
  document.body.appendChild(btnCatpairs);
  const mod = await import('../../js/modes/catpairs.tsx');
  CatPairsPage = mod.CatPairsPage;
});

function openCatPairs(): void {
  act(() => {
    btnCatpairs.click();
  });
}
function enButtons(container: HTMLElement): HTMLButtonElement[] {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.pair-btn')).filter(
    (b) => !b.textContent?.endsWith('_UA'),
  );
}
function uaButtons(container: HTMLElement): HTMLButtonElement[] {
  return Array.from(container.querySelectorAll<HTMLButtonElement>('.pair-btn')).filter((b) =>
    b.textContent?.endsWith('_UA'),
  );
}
function matchingUaFor(container: HTMLElement, en: HTMLButtonElement): HTMLButtonElement {
  return uaButtons(container).find((b) => b.textContent === en.textContent + '_UA')!;
}
function startFirstCategory(container: HTMLElement): void {
  const catBtn = Array.from(
    container.querySelectorAll<HTMLButtonElement>('.cat-select-btn'),
  ).find((b) => !b.disabled)!;
  act(() => {
    catBtn.click();
  });
}

describe('catpairs.tsx (CatPairsPage)', () => {
  let root: Root;
  let container: HTMLElement;
  let overlay: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = '';
    document.body.appendChild(btnCatpairs);
    overlay = document.createElement('div');
    overlay.id = 'catpairs-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
    act(() => {
      root.render(<CatPairsPage />);
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

  it('opening shows the category selection screen', () => {
    openCatPairs();
    expect(overlay.style.display).toBe('flex');
    expect(container.querySelectorAll('.cat-select-btn').length).toBeGreaterThan(1);
  });

  it('choosing a category starts a 6-vs-6 matching round', () => {
    openCatPairs();
    startFirstCategory(container);
    expect(enButtons(container)).toHaveLength(6);
    expect(uaButtons(container)).toHaveLength(6);
  });

  it('clicking a matching EN/UA pair marks both as matched', () => {
    openCatPairs();
    startFirstCategory(container);
    const en = enButtons(container)[0];
    act(() => {
      en.click();
    });
    const ua = matchingUaFor(container, en);
    act(() => {
      ua.click();
    });
    expect(en.className).toContain('matched');
    expect(ua.className).toContain('matched');
  });

  it('clicking a non-matching pair flags both as wrong, then clears after the shake delay', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory(container);
    const en = enButtons(container)[0];
    const wrongUa = uaButtons(container).find((b) => b.textContent !== en.textContent + '_UA')!;
    act(() => {
      en.click();
    });
    act(() => {
      wrongUa.click();
    });
    expect(en.className).toContain('wrong');
    expect(wrongUa.className).toContain('wrong');
    act(() => {
      vi.advanceTimersByTime(420);
    });
    expect(en.className).not.toContain('wrong');
    vi.useRealTimers();
  });

  it('matching all 6 pairs finishes the round and offers "play again" / "back to themes"', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory(container);
    for (const en of enButtons(container)) {
      const ua = matchingUaFor(container, en);
      act(() => {
        en.click();
      });
      act(() => {
        ua.click();
      });
    }
    act(() => {
      vi.advanceTimersByTime(350);
    });
    expect(enButtons(container)).toHaveLength(0);
    expect(
      Array.from(container.querySelectorAll('button')).some((b) => b.textContent?.match(/знову/i)),
    ).toBe(true);
    vi.useRealTimers();
  });

  it('"back to themes" returns to the category picker', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory(container);
    for (const en of enButtons(container)) {
      const ua = matchingUaFor(container, en);
      act(() => {
        en.click();
      });
      act(() => {
        ua.click();
      });
    }
    act(() => {
      vi.advanceTimersByTime(350);
    });
    const backBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.match(/тем/i),
    )!;
    act(() => {
      backBtn.click();
    });
    expect(container.querySelectorAll('.cat-select-btn').length).toBeGreaterThan(1);
    vi.useRealTimers();
  });

  it('Escape closes the page', () => {
    openCatPairs();
    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    });
    expect(overlay.style.display).toBe('none');
  });

  it('closing via the close button hides the overlay', () => {
    openCatPairs();
    const closeBtn = container.querySelector<HTMLButtonElement>('button[aria-label]')!;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
