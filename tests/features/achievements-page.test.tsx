import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { setKnownWords } from '../../src/known-words-store.ts';
import { ACHIEVEMENTS } from '../../data/achievements.ts';
import { AchievementsPage, refreshAchievementsPage } from '../../js/features/achievements-page.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getGameData, getModeStats, loadUnlocked, LEVELS } = vi.hoisted(() => ({
  getGameData: vi.fn(() => ({ streak: 0, xp: 0 })),
  getModeStats: vi.fn(() => ({})),
  loadUnlocked: vi.fn(() => [] as string[]),
  LEVELS: [
    { name: '🌌 Цивільний', min: 0, color: '#95a5a6', bg: '#ecf0f1' },
    { name: '✨ Чутливий до Сили', min: 30, color: '#5dade2', bg: '#eaf4fb' },
    { name: '⚔️ Падаван', min: 100, color: '#27ae60', bg: '#e9f7ef' },
  ],
}));
vi.mock('../../js/features/game.ts', () => ({ getGameData, getModeStats, loadUnlocked, LEVELS }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<AchievementsPage />);
  });
  return { container, root };
}

describe('achievements-page.tsx AchievementsPage', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="levels-roadmap"></div>
      <div id="ach-popup-overlay"></div>
    `;
    setKnownWords('en', new Set());
    getGameData.mockClear().mockReturnValue({ streak: 0, xp: 0 });
    getModeStats.mockClear().mockReturnValue({});
    loadUnlocked.mockClear().mockReturnValue([]);
  });

  it('renders an achievement card for every achievement, grouped by category', () => {
    const { container } = mount();
    expect(container.querySelectorAll('.ach-card').length).toBe(ACHIEVEMENTS.length);
    const cats = new Set(ACHIEVEMENTS.map((a) => a.cat));
    expect(container.querySelectorAll('.ach-category').length).toBe(cats.size);
  });

  it('shows locked cards with a progress label', () => {
    const { container } = mount();
    const card = container.querySelector('.ach-card') as HTMLElement;
    expect(card.className).toContain('locked');
    expect(card.querySelector('.ach-progress-label')!.textContent).toMatch(/\d+ \/ \d+/);
  });

  it('shows unlocked cards with the "done" label', () => {
    loadUnlocked.mockReturnValue([ACHIEVEMENTS[0].id]);
    const { container } = mount();
    const card = container.querySelector('.ach-card') as HTMLElement;
    expect(card.className).toContain('unlocked');
    expect(card.querySelector('.ach-progress-label')!.textContent).toBe('✓ Виконано');
  });

  it('renders the levels roadmap into #levels-roadmap', () => {
    mount();
    const roadmap = document.getElementById('levels-roadmap') as HTMLElement;
    expect(roadmap.querySelectorAll('.level-row').length).toBe(3);
    expect(roadmap.querySelector('.level-current')).not.toBeNull();
  });

  it('marks a higher level as current when known word count increases', () => {
    setKnownWords(
      'en',
      new Set([
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
        'aa',
        'bb',
        'cc',
        'dd',
        'ee',
      ]),
    );
    mount();
    const roadmap = document.getElementById('levels-roadmap') as HTMLElement;
    const rows = roadmap.querySelectorAll('.level-row');
    expect(rows[1].className).toContain('level-current');
    expect(rows[0].className).toContain('level-done');
  });

  it('opens the achievement popup when a card is clicked and closes it', () => {
    const { container } = mount();
    const card = container.querySelectorAll('.ach-card')[0] as HTMLElement;
    act(() => {
      card.click();
    });

    const overlay = document.getElementById('ach-popup-overlay') as HTMLElement;
    expect(overlay.className).toBe('open');
    expect(overlay.querySelector('.ach-popup-name')!.textContent).toBe(ACHIEVEMENTS[0].name);

    const closeBtn = overlay.querySelector('.ach-popup-close') as HTMLButtonElement;
    act(() => {
      closeBtn.click();
    });
    expect(overlay.className).toBe('');
  });

  it('closes the popup when clicking the overlay backdrop', () => {
    const { container } = mount();
    const card = container.querySelectorAll('.ach-card')[0] as HTMLElement;
    act(() => {
      card.click();
    });

    const overlay = document.getElementById('ach-popup-overlay') as HTMLElement;
    expect(overlay.className).toBe('open');
    act(() => {
      overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(overlay.className).toBe('');
  });

  it('does not throw when refreshAchievementsPage is called', () => {
    mount();
    expect(() => refreshAchievementsPage()).not.toThrow();
  });

  it('shows an unlocked/total summary count', () => {
    loadUnlocked.mockReturnValue([ACHIEVEMENTS[0].id, ACHIEVEMENTS[1].id]);
    const { container } = mount();
    expect(container.querySelector('.ach-summary-count')!.textContent).toBe(
      `2 / ${ACHIEVEMENTS.length} відкрито`,
    );
  });

  it('filters to only unlocked or only locked cards via the filter tabs', () => {
    loadUnlocked.mockReturnValue([ACHIEVEMENTS[0].id]);
    const { container } = mount();
    expect(container.querySelectorAll('.ach-card').length).toBe(ACHIEVEMENTS.length);

    const tabs = container.querySelectorAll('.ach-filter-tab');
    act(() => {
      (tabs[1] as HTMLElement).click(); // "Відкриті"
    });
    let cards = container.querySelectorAll('.ach-card');
    expect(cards.length).toBe(1);
    expect(cards[0].classList.contains('unlocked')).toBe(true);

    act(() => {
      (container.querySelectorAll('.ach-filter-tab')[2] as HTMLElement).click(); // "Заблоковані"
    });
    cards = container.querySelectorAll('.ach-card');
    expect(cards.length).toBe(ACHIEVEMENTS.length - 1);
    [...cards].forEach((c) => expect(c.classList.contains('locked')).toBe(true));
  });
});
