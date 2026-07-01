import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ProfilePage } from '../../js/features/profile-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getGameData, loadUnlocked } = vi.hoisted(() => ({
  getGameData: vi.fn(() => ({ streak: 3, xp: 100 })),
  loadUnlocked: vi.fn(() => ['first1']),
}));
vi.mock('../../js/features/game.ts', () => ({ getGameData, loadUnlocked }));

const { getKnownInLang } = vi.hoisted(() => ({ getKnownInLang: vi.fn(() => 20) }));
vi.mock('../../js/features/mode-utils.ts', () => ({ getKnownInLang }));

// Known-words store: default to empty for all langs; override per-test via knownSnapshots
const knownSnapshots: Record<string, Set<string>> = {};
vi.mock('../../src/known-words-store.ts', () => ({
  getKnownSnapshot: (lang: string) => knownSnapshots[lang] ?? new Set<string>(),
}));

// flags.ts uses import.meta.glob — stub it to return predictable URLs
vi.mock('../../js/core/flags.ts', () => ({
  flagUrl: (code: string) => `/flags/${code}.svg`,
}));

function mount(): { container: HTMLElement; root: Root } {
  document.body.innerHTML = '<div id="profile-content"></div>';
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<ProfilePage />);
  });
  return { container: document.getElementById('profile-content')!, root };
}

/** Click the customize toggle to expand the pickers. */
function openCustomize(container: HTMLElement): void {
  const btn = container.querySelector('.profile-customize-toggle') as HTMLButtonElement;
  act(() => {
    btn.click();
  });
}

describe('profile-page.tsx ProfilePage', () => {
  beforeEach(() => {
    localStorage.clear();
    localStorage.setItem(
      'ew_profiles',
      JSON.stringify([{ id: 'p1', name: 'Alice', avatar: '🧑' }]),
    );
    localStorage.setItem('ew_active_profile', 'p1');
    getGameData.mockClear().mockReturnValue({ streak: 3, xp: 100 });
    loadUnlocked.mockClear().mockReturnValue(['first1']);
    getKnownInLang.mockClear().mockReturnValue(20);
    for (const k of Object.keys(knownSnapshots)) delete knownSnapshots[k];
  });

  // ── Customize toggle ──────────────────────────────────────────
  it('renders the avatar and customize toggle (pickers hidden until opened)', () => {
    const { container } = mount();
    expect(container.querySelector('[aria-label="character avatar"]')).not.toBeNull();
    expect(container.querySelector('.profile-customize-toggle')).not.toBeNull();
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(0);
  });

  it('expands pickers when customize toggle is clicked and shows 7 rows', () => {
    const { container } = mount();
    openCustomize(container);
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(7);
    const toggle = container.querySelector('.profile-customize-toggle') as HTMLButtonElement;
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
  });

  it('collapses pickers when toggle is clicked a second time', () => {
    const { container } = mount();
    openCustomize(container);
    openCustomize(container); // close
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(0);
    const toggle = container.querySelector('.profile-customize-toggle') as HTMLButtonElement;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('cycles an option forward locally without persisting until Save Changes is clicked', () => {
    const { container } = mount();
    openCustomize(container);
    const firstRow = container.querySelectorAll('.profile-picker-row')[0];
    const nextBtn = firstRow.querySelectorAll('.profile-picker-arrow')[1] as HTMLButtonElement;
    const valBefore = firstRow.querySelector('.profile-picker-val')!.textContent;
    act(() => {
      nextBtn.click();
    });
    const valAfter = firstRow.querySelector('.profile-picker-val')!.textContent;
    expect(valAfter).not.toBe(valBefore);
    expect(JSON.parse(localStorage.getItem('ew_profiles')!)[0].appearance).toBeUndefined();

    const saveBtn = container.querySelector('.profile-save-btn') as HTMLButtonElement;
    act(() => {
      saveBtn.click();
    });
    const profiles = JSON.parse(localStorage.getItem('ew_profiles')!);
    expect(profiles[0].appearance).toBeDefined();
    expect(profiles[0].avatarMode).toBe('character');
  });

  it('disables Save Changes again once a cycled option is reverted back to its saved value', () => {
    const { container } = mount();
    openCustomize(container);
    const saveBtn = container.querySelector('.profile-save-btn') as HTMLButtonElement;
    expect(saveBtn.disabled).toBe(true);

    const firstRow = container.querySelectorAll('.profile-picker-row')[0];
    const nextBtn = firstRow.querySelectorAll('.profile-picker-arrow')[1] as HTMLButtonElement;
    const prevBtn = firstRow.querySelectorAll('.profile-picker-arrow')[0] as HTMLButtonElement;

    act(() => {
      nextBtn.click();
    });
    expect(saveBtn.disabled).toBe(false);

    act(() => {
      prevBtn.click();
    });
    expect(saveBtn.disabled).toBe(true);
  });

  // ── Primary language card (always visible) ────────────────────
  it('always shows the primary language card with the correct flag img', () => {
    const { container } = mount();
    const primaryCard = container.querySelector('.profile-lang-card--primary')!;
    expect(primaryCard).not.toBeNull();
    const img = primaryCard.querySelector('img.profile-lang-flag-img') as HTMLImageElement;
    expect(img).not.toBeNull();
    // Default learn lang is 'en' → country 'gb'
    expect(img.src).toContain('gb.svg');
  });

  it('shows streak, words, XP and achievements inside the primary card mini-stats', () => {
    knownSnapshots['en'] = new Set(['apple', 'book', 'car']); // 3 words
    const { container } = mount();
    const vals = Array.from(
      container.querySelectorAll('.profile-lang-card--primary .profile-mini-val'),
    ).map((el) => el.textContent);
    expect(vals).toContain('3'); // streak
    expect(vals).toContain('3'); // words (from snapshot — getKnownInLang mock returns 20 but snapshot returns 3)
    // totalXp = 100 + 20*5 = 200
    expect(vals).toContain('200');
  });

  it('uses the current learn language for the primary card', () => {
    localStorage.setItem('ew_learn_lang', 'de');
    knownSnapshots['de'] = new Set(['Apfel']);
    const { container } = mount();
    const primaryCard = container.querySelector('.profile-lang-card--primary')!;
    const img = primaryCard.querySelector('img') as HTMLImageElement;
    expect(img.src).toContain('de.svg');
    expect(primaryCard.querySelector('.profile-lang-name')?.textContent).toBe('Deutsch');
  });

  // ── Other language cards ──────────────────────────────────────
  it('does not show secondary cards when no other language has known words', () => {
    const { container } = mount();
    const allCards = container.querySelectorAll('.profile-lang-card');
    // Only the primary card
    expect(allCards.length).toBe(1);
  });

  it('shows compact secondary cards for other languages with ≥1 word', () => {
    knownSnapshots['es'] = new Set(['hola', 'adios']);
    knownSnapshots['fr'] = new Set(['bonjour']);
    const { container } = mount();
    // primary + 2 secondary
    const allCards = container.querySelectorAll('.profile-lang-card');
    expect(allCards.length).toBe(3);
    const secondaryFlags = Array.from(
      container.querySelectorAll('.profile-lang-card:not(.profile-lang-card--primary) img'),
    ).map((el) => (el as HTMLImageElement).src);
    expect(secondaryFlags.some((s) => s.includes('es.svg'))).toBe(true);
    expect(secondaryFlags.some((s) => s.includes('fr.svg'))).toBe(true);
  });

  it('shows the correct word count in secondary cards', () => {
    knownSnapshots['de'] = new Set(['Apfel', 'Buch', 'Haus']);
    const { container } = mount();
    const secondary = container.querySelector(
      '.profile-lang-card:not(.profile-lang-card--primary)',
    )!;
    expect(secondary.querySelector('.profile-lang-count')?.textContent).toContain('3');
  });
});
