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

// Known-words store: default to empty for all langs; override per-test via mockSnapshot
const knownSnapshots: Record<string, Set<string>> = {};
vi.mock('../../src/known-words-store.ts', () => ({
  getKnownSnapshot: (lang: string) => knownSnapshots[lang] ?? new Set<string>(),
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
    // Reset per-lang snapshots
    for (const k of Object.keys(knownSnapshots)) delete knownSnapshots[k];
  });

  it('renders the avatar and customize toggle (pickers hidden until opened)', () => {
    const { container } = mount();
    expect(container.querySelector('[aria-label="character avatar"]')).not.toBeNull();
    expect(container.querySelector('.profile-customize-toggle')).not.toBeNull();
    // Pickers hidden before toggle
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
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(7);
    openCustomize(container); // close
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(0);
    const toggle = container.querySelector('.profile-customize-toggle') as HTMLButtonElement;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });

  it('shows streak, total XP (xp + known*5), words learned and achievement count', () => {
    const { container } = mount();
    const values = Array.from(container.querySelectorAll('.profile-stats .sv')).map(
      (el) => el.textContent,
    );
    expect(values).toContain('3'); // streak
    expect(values).toContain('200'); // 100 + 20*5
    expect(values).toContain('20'); // known
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
    }); // back to the original value
    expect(saveBtn.disabled).toBe(true);
  });

  it('hides the language stats section when no language has known words', () => {
    const { container } = mount();
    expect(container.querySelector('.profile-lang-stats')).toBeNull();
  });

  it('shows a lang card for each language that has at least 1 known word', () => {
    knownSnapshots['en'] = new Set(['apple', 'book']);
    knownSnapshots['es'] = new Set(['hola']);
    const { container } = mount();
    const cards = container.querySelectorAll('.profile-lang-card');
    expect(cards.length).toBe(2);
    const flags = Array.from(cards).map((c) => c.querySelector('.profile-lang-flag')?.textContent);
    expect(flags).toContain('🇬🇧');
    expect(flags).toContain('🇪🇸');
  });

  it('shows the correct word count in each language card', () => {
    knownSnapshots['de'] = new Set(['Apfel', 'Buch', 'Haus']);
    const { container } = mount();
    const card = container.querySelector('.profile-lang-card')!;
    expect(card.querySelector('.profile-lang-flag')?.textContent).toBe('🇩🇪');
    expect(card.querySelector('.profile-lang-count')?.textContent).toContain('3');
  });

  it('does not show a lang card for languages with zero known words', () => {
    knownSnapshots['fr'] = new Set(['bonjour']);
    // 'de' has 0 — no card for it
    const { container } = mount();
    const flags = Array.from(container.querySelectorAll('.profile-lang-flag')).map(
      (el) => el.textContent,
    );
    expect(flags).toContain('🇫🇷');
    expect(flags).not.toContain('🇩🇪');
  });
});
