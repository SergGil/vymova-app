import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { ProfilePage } from '../../js/features/profile-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getGameData, loadUnlocked, getLangStreak } = vi.hoisted(() => ({
  getGameData: vi.fn(() => ({ streak: 3, xp: 100 })),
  loadUnlocked: vi.fn(() => ['first1']),
  getLangStreak: vi.fn((_lang: string) => 3),
}));
vi.mock('../../js/features/game.ts', () => ({ getGameData, loadUnlocked, getLangStreak }));

const { getKnownInLang } = vi.hoisted(() => ({ getKnownInLang: vi.fn(() => 20) }));
vi.mock('../../js/features/mode-utils.ts', () => ({ getKnownInLang }));

// Known-words store: default to empty; override per-test via knownSnapshots.
// useAllKnownWords() must return a full state object for all 14 languages.
const knownSnapshots: Record<string, Set<string>> = {};
vi.mock('../../src/known-words-store.ts', () => ({
  useAllKnownWords: () => {
    const state: Record<string, Set<string>> = {};
    for (const lang of ['en', 'es', 'fr', 'it', 'pt', 'de', 'he', 'ar', 'pl', 'zh', 'el', 'ja', 'tr', 'nl']) {
      state[lang] = knownSnapshots[lang] ?? new Set<string>();
    }
    return state;
  },
}));

// flags.ts uses import.meta.glob — stub to return predictable URLs
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
    getLangStreak.mockClear().mockImplementation((_lang: string) => 3);
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
    expect(
      (container.querySelector('.profile-customize-toggle') as HTMLButtonElement).getAttribute(
        'aria-expanded',
      ),
    ).toBe('true');
  });

  it('collapses pickers when toggle is clicked a second time', () => {
    const { container } = mount();
    openCustomize(container);
    openCustomize(container);
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(0);
    expect(
      (container.querySelector('.profile-customize-toggle') as HTMLButtonElement).getAttribute(
        'aria-expanded',
      ),
    ).toBe('false');
  });

  it('cycles an option forward locally without persisting until Save Changes is clicked', () => {
    const { container } = mount();
    openCustomize(container);
    const firstRow = container.querySelectorAll('.profile-picker-row')[0];
    const nextBtn = firstRow.querySelectorAll('.profile-picker-arrow')[1] as HTMLButtonElement;
    const valBefore = firstRow.querySelector('.profile-picker-val')!.textContent;
    act(() => { nextBtn.click(); });
    expect(firstRow.querySelector('.profile-picker-val')!.textContent).not.toBe(valBefore);
    expect(JSON.parse(localStorage.getItem('ew_profiles')!)[0].appearance).toBeUndefined();
    act(() => { (container.querySelector('.profile-save-btn') as HTMLButtonElement).click(); });
    const profiles = JSON.parse(localStorage.getItem('ew_profiles')!);
    expect(profiles[0].appearance).toBeDefined();
    expect(profiles[0].avatarMode).toBe('character');
  });

  it('disables Save Changes again once a cycled option is reverted', () => {
    const { container } = mount();
    openCustomize(container);
    const saveBtn = container.querySelector('.profile-save-btn') as HTMLButtonElement;
    expect(saveBtn.disabled).toBe(true);
    const firstRow = container.querySelectorAll('.profile-picker-row')[0];
    const nextBtn = firstRow.querySelectorAll('.profile-picker-arrow')[1] as HTMLButtonElement;
    const prevBtn = firstRow.querySelectorAll('.profile-picker-arrow')[0] as HTMLButtonElement;
    act(() => { nextBtn.click(); });
    expect(saveBtn.disabled).toBe(false);
    act(() => { prevBtn.click(); });
    expect(saveBtn.disabled).toBe(true);
  });

  // ── Hero section (level, XP, avatar) ────────────────────────
  it('renders the hero banner with a level badge and XP progress bar', () => {
    const { container } = mount();
    expect(container.querySelector('.profile-hero')).not.toBeNull();
    expect(container.querySelector('.profile-hero-banner')).not.toBeNull();
    expect(container.querySelector('.profile-hero-lvl-badge')).not.toBeNull();
    expect(container.querySelector('.profile-hero-bar-wrap')).not.toBeNull();
  });

  it('shows level 1 when XP is 0 (no words, no game XP)', () => {
    getGameData.mockReturnValue({ streak: 0, xp: 0 });
    const { container } = mount();
    expect(container.querySelector('.profile-hero-lvl-badge')!.textContent).toContain('1');
  });

  it('shows level 2 when total XP reaches 100', () => {
    // 20 words × 5 XP = 100 XP; gd.xp = 0 → level 2 exactly
    knownSnapshots['en'] = new Set(Array.from({ length: 20 }, (_, i) => `word${i}`));
    getGameData.mockReturnValue({ streak: 0, xp: 0 });
    const { container } = mount();
    expect(container.querySelector('.profile-hero-lvl-badge')!.textContent).toContain('2');
  });

  it('shows the info popup trigger button', () => {
    const { container } = mount();
    expect(container.querySelector('.level-info-btn')).not.toBeNull();
  });

  // ── Primary language card ─────────────────────────────────────
  it('always shows the primary language card with the correct circular flag img', () => {
    const { container } = mount();
    const primaryCard = container.querySelector('.profile-lang-card--primary')!;
    expect(primaryCard).not.toBeNull();
    const img = primaryCard.querySelector('img.profile-flag-circle-img') as HTMLImageElement;
    expect(img).not.toBeNull();
    expect(img.src).toContain('gb.svg');
  });

  it('shows per-language streak and knownCount inside the primary card stat row', () => {
    getLangStreak.mockImplementation((_lang: string) => 7);
    const { container } = mount();
    const vals = Array.from(
      container.querySelectorAll('.profile-lang-card--primary .profile-stat-val'),
    ).map((el) => el.textContent);
    expect(vals).toContain('7');  // per-language streak
    expect(vals).toContain('20'); // knownCount from getKnownInLang mock
  });

  it('uses totalXp across all language snapshots for the XP stat', () => {
    // gd.xp=0, en=10 words, es=5 words → total = 15*5 = 75 XP
    knownSnapshots['en'] = new Set(Array.from({ length: 10 }, (_, i) => `w${i}`));
    knownSnapshots['es'] = new Set(['hola', 'adios', 'bueno', 'malo', 'gato']);
    getGameData.mockReturnValue({ streak: 1, xp: 0 });
    const { container } = mount();
    const xpVal = Array.from(
      container.querySelectorAll('.profile-lang-card--primary .profile-stat-val'),
    ).find((el) => el.textContent === '75');
    expect(xpVal).not.toBeUndefined();
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
  it('does not show secondary cards when no other language has words', () => {
    expect(mount().container.querySelectorAll('.profile-lang-card').length).toBe(1);
  });

  it('shows compact secondary cards for other languages with ≥1 word', () => {
    knownSnapshots['es'] = new Set(['hola', 'adios']);
    knownSnapshots['fr'] = new Set(['bonjour']);
    const { container } = mount();
    expect(container.querySelectorAll('.profile-lang-card').length).toBe(3);
    const flags = Array.from(
      container.querySelectorAll('.profile-lang-card:not(.profile-lang-card--primary) img'),
    ).map((el) => (el as HTMLImageElement).src);
    expect(flags.some((s) => s.includes('es.svg'))).toBe(true);
    expect(flags.some((s) => s.includes('fr.svg'))).toBe(true);
  });

  it('shows per-language streak and word count in secondary card stat row', () => {
    knownSnapshots['de'] = new Set(['Apfel', 'Buch', 'Haus']);
    getLangStreak.mockImplementation((lang: string) => lang === 'de' ? 4 : 0);
    const secondary = mount().container.querySelector(
      '.profile-lang-card:not(.profile-lang-card--primary)',
    )!;
    const vals = Array.from(secondary.querySelectorAll('.profile-stat-val')).map((el) => el.textContent);
    expect(vals).toContain('3'); // word count
    expect(vals).toContain('4'); // German-specific streak
  });
});
