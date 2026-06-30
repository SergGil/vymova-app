import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelLeaderboard, DuelRating } from '../../js/features/duel-leaderboard.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const {
  getProfiles,
  getActiveId,
  currentSnap,
  readSnap,
  parseKnown,
  parseGame,
  weekWords,
  getRating,
} = vi.hoisted(() => ({
  getProfiles: vi.fn(() => [] as { id: string; name: string; avatar: string }[]),
  getActiveId: vi.fn(() => ''),
  currentSnap: vi.fn(() => ({}) as Record<string, string>),
  readSnap: vi.fn(() => ({}) as Record<string, string>),
  parseKnown: vi.fn(() => [] as string[]),
  parseGame: vi.fn(() => ({}) as Record<string, number>),
  weekWords: vi.fn(() => 0),
  getRating: vi.fn(() => ({ wins: 0, losses: 0, ties: 0 })),
}));
vi.mock('../../js/features/duel.ts', () => ({
  _getProfiles: getProfiles,
  _getActiveId: getActiveId,
  _currentSnap: currentSnap,
  _readSnap: readSnap,
  _parseKnown: parseKnown,
  _parseGame: parseGame,
  _weekWords: weekWords,
  _getRating: getRating,
}));

function mount(El: () => React.ReactElement | null): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(El());
  });
  return { container, root };
}

describe('duel-leaderboard.tsx DuelLeaderboard', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getProfiles.mockClear().mockReturnValue([]);
    getActiveId.mockClear().mockReturnValue('');
    currentSnap.mockClear().mockReturnValue({});
    readSnap.mockClear().mockReturnValue({});
    parseKnown.mockClear().mockReturnValue([]);
    parseGame.mockClear().mockReturnValue({});
    weekWords.mockClear().mockReturnValue(0);
    getRating.mockClear().mockReturnValue({ wins: 0, losses: 0, ties: 0 });
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('shows the "no profiles" message when there are no profiles', () => {
    const { container, root } = mount(() => <DuelLeaderboard />);
    roots.push(root);
    expect(container.textContent).toContain('Немає профілів.');
  });

  it('renders profile cards sorted by XP with rank medals', () => {
    getProfiles.mockReturnValue([
      { id: 'p1', name: 'Alice', avatar: '🧑' },
      { id: 'p2', name: 'Bob', avatar: '🦊' },
    ]);
    getActiveId.mockReturnValue('p1');
    parseKnown.mockImplementation((snap: Record<string, string>) =>
      snap.tag === 'p1' ? ['a', 'b'] : ['c'],
    );
    parseGame.mockImplementation((snap: Record<string, string>) =>
      snap.tag === 'p1' ? { streak: 3, xp: 100 } : { streak: 1, xp: 5 },
    );
    currentSnap.mockReturnValue({ tag: 'p1' });
    readSnap.mockReturnValue({ tag: 'p2' });
    weekWords.mockReturnValue(2);

    const { container, root } = mount(() => <DuelLeaderboard />);
    roots.push(root);

    const cards = container.querySelectorAll('.duel-card');
    expect(cards.length).toBe(2);
    expect(cards[0].querySelector('.duel-rank')!.textContent).toBe('🥇');
    expect(cards[0].textContent).toContain('Alice');
    expect(cards[0].textContent).toContain('Ти');
    expect(cards[0].classList.contains('duel-card-active')).toBe(true);
    expect(cards[1].querySelector('.duel-rank')!.textContent).toBe('🥈');
    expect(cards[1].textContent).toContain('Bob');
    expect(cards[1].classList.contains('duel-card-active')).toBe(false);
  });
});

describe('duel-leaderboard.tsx DuelRating', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getRating.mockClear();
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders win/loss/tie counts with correct plural labels', () => {
    getRating.mockReturnValue({ wins: 1, losses: 2, ties: 1 });
    const { container, root } = mount(() => <DuelRating />);
    roots.push(root);
    expect(container.textContent).toContain('🏆 1 перемога');
    expect(container.textContent).toContain('💀 2 поразки');
    expect(container.textContent).toContain('🤝 1 нічия');
  });
});
