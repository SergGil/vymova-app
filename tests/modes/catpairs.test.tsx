import { describe, it, expect, vi, beforeAll, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
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

let CatPairsPage: (typeof import('../../js/modes/catpairs.tsx'))['CatPairsPage'];
let CatPairsWiringInit: (typeof import('../../js/modes/catpairs.tsx'))['CatPairsWiringInit'];
let btnCatpairs: HTMLButtonElement;

// catpairs.tsx's open()/close() are reachable through bindOverlayOpenClose
// ('btn-catpairs', ...) — full-react-migration-roadmap.md Phase 5a moved
// this from a module-eval-time call (which only worked because #btn-catpairs
// was static HTML, present before React ever mounted) into
// <CatPairsWiringInit/>'s own useEffect, so it must be mounted alongside
// <CatPairsPage/> for the button click to do anything, matching how
// app-root.tsx mounts both.
beforeAll(async () => {
  const mod = await import('../../js/modes/catpairs.tsx');
  CatPairsPage = mod.CatPairsPage;
  CatPairsWiringInit = mod.CatPairsWiringInit;
});

function openCatPairs(): void {
  act(() => {
    btnCatpairs.click();
  });
}
function enButtons(): HTMLButtonElement[] {
  return Array.from(document.querySelectorAll<HTMLButtonElement>('.pair-btn')).filter(
    (b) => !b.textContent?.endsWith('_UA'),
  );
}
function uaButtons(): HTMLButtonElement[] {
  return Array.from(document.querySelectorAll<HTMLButtonElement>('.pair-btn')).filter((b) =>
    b.textContent?.endsWith('_UA'),
  );
}
function matchingUaFor(en: HTMLButtonElement): HTMLButtonElement {
  return uaButtons().find((b) => b.textContent === en.textContent + '_UA')!;
}
function startFirstCategory(): void {
  const catBtn = Array.from(document.querySelectorAll<HTMLButtonElement>('.cat-select-btn')).find(
    (b) => !b.disabled,
  )!;
  act(() => {
    catBtn.click();
  });
}

describe('catpairs.tsx (CatPairsPage)', () => {
  let overlay: HTMLElement;
  let container: HTMLElement;

  beforeEach(() => {
    localStorage.clear();
    document.body.innerHTML = '';
    btnCatpairs = document.createElement('button');
    btnCatpairs.id = 'btn-catpairs';
    document.body.appendChild(btnCatpairs);
    overlay = document.createElement('div');
    overlay.id = 'catpairs-overlay';
    overlay.style.display = 'none';
    document.body.appendChild(overlay);

    container = render(
      <>
        <CatPairsPage />
        <CatPairsWiringInit />
      </>,
    ).container;
  });

  it('renders nothing until opened', () => {
    expect(container.innerHTML).toBe('');
  });

  it('opening shows the category selection screen', () => {
    openCatPairs();
    expect(overlay.style.display).toBe('flex');
    expect(document.querySelectorAll('.cat-select-btn').length).toBeGreaterThan(1);
  });

  it('choosing a category starts a 6-vs-6 matching round', () => {
    openCatPairs();
    startFirstCategory();
    expect(enButtons()).toHaveLength(6);
    expect(uaButtons()).toHaveLength(6);
  });

  it('clicking a matching EN/UA pair marks both as matched', () => {
    openCatPairs();
    startFirstCategory();
    const en = enButtons()[0];
    act(() => {
      en.click();
    });
    const ua = matchingUaFor(en);
    act(() => {
      ua.click();
    });
    expect(en.classList.contains('matched')).toBe(true);
    expect(ua.classList.contains('matched')).toBe(true);
  });

  it('clicking a non-matching pair flags both as wrong, then clears after the shake delay', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory();
    const en = enButtons()[0];
    const wrongUa = uaButtons().find((b) => b.textContent !== en.textContent + '_UA')!;
    act(() => {
      en.click();
    });
    act(() => {
      wrongUa.click();
    });
    expect(en.classList.contains('wrong')).toBe(true);
    expect(wrongUa.classList.contains('wrong')).toBe(true);
    act(() => {
      vi.advanceTimersByTime(420);
    });
    expect(en.classList.contains('wrong')).toBe(false);
    vi.useRealTimers();
  });

  it('matching all 6 pairs finishes the round and offers "play again" / "back to themes"', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory();
    for (const en of enButtons()) {
      const ua = matchingUaFor(en);
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
    expect(enButtons()).toHaveLength(0);
    expect(screen.getByRole('button', { name: '🔄 Знову' })).toBeInTheDocument();
    vi.useRealTimers();
  });

  it('"back to themes" returns to the category picker', () => {
    vi.useFakeTimers();
    openCatPairs();
    startFirstCategory();
    for (const en of enButtons()) {
      const ua = matchingUaFor(en);
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
    act(() => {
      screen.getByRole('button', { name: '← Теми' }).click();
    });
    expect(document.querySelectorAll('.cat-select-btn').length).toBeGreaterThan(1);
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
    act(() => {
      screen.getByRole('button', { name: 'Закрити' }).click();
    });
    expect(overlay.style.display).toBe('none');
  });
});
