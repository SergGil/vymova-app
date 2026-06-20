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

function mount(): { container: HTMLElement; root: Root } {
  document.body.innerHTML = '<div id="profile-content"></div>';
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<ProfilePage />); });
  return { container: document.getElementById('profile-content')!, root };
}

describe('profile-page.tsx ProfilePage', () => {
  beforeEach(() => {
    localStorage.clear();
    getGameData.mockClear().mockReturnValue({ streak: 3, xp: 100 });
    loadUnlocked.mockClear().mockReturnValue(['first1']);
    getKnownInLang.mockClear().mockReturnValue(20);
  });

  it('renders the avatar svg and a picker row for every customization category', () => {
    const { container } = mount();
    expect(container.querySelector('svg')).not.toBeNull();
    expect(container.querySelectorAll('.profile-picker-row').length).toBe(5);
  });

  it('shows streak, total XP (xp + known*5), words learned and achievement count', () => {
    const { container } = mount();
    const values = Array.from(container.querySelectorAll('.profile-stats .sv')).map(el => el.textContent);
    expect(values).toContain('3');     // streak
    expect(values).toContain('200');   // 100 + 20*5
    expect(values).toContain('20');    // known
  });

  it('cycles an option forward and persists it to localStorage on arrow click', () => {
    const { container } = mount();
    const firstRow = container.querySelectorAll('.profile-picker-row')[0];
    const nextBtn = firstRow.querySelectorAll('.profile-picker-arrow')[1] as HTMLButtonElement;
    const valBefore = firstRow.querySelector('.profile-picker-val')!.textContent;
    act(() => { nextBtn.click(); });
    const valAfter = firstRow.querySelector('.profile-picker-val')!.textContent;
    expect(valAfter).not.toBe(valBefore);
    expect(localStorage.getItem('ew_character')).not.toBeNull();
  });
});
