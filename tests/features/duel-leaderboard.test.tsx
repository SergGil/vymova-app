import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { DuelLeaderboard, DuelRating } from '../../js/features/duel/duel-leaderboard.tsx';

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
vi.mock('../../js/features/duel/duel.ts', () => ({
  _getRating: getRating,
}));
vi.mock('../../js/features/duel/duel-profile-snap.ts', () => ({
  _getProfiles: getProfiles,
  _getActiveId: getActiveId,
  _currentSnap: currentSnap,
  _readSnap: readSnap,
  _parseKnown: parseKnown,
  _parseGame: parseGame,
  _weekWords: weekWords,
}));

describe('duel-leaderboard.tsx DuelLeaderboard', () => {
  beforeEach(() => {
    getProfiles.mockClear().mockReturnValue([]);
    getActiveId.mockClear().mockReturnValue('');
    currentSnap.mockClear().mockReturnValue({});
    readSnap.mockClear().mockReturnValue({});
    parseKnown.mockClear().mockReturnValue([]);
    parseGame.mockClear().mockReturnValue({});
    weekWords.mockClear().mockReturnValue(0);
    getRating.mockClear().mockReturnValue({ wins: 0, losses: 0, ties: 0 });
  });

  it('shows the "no profiles" message when there are no profiles', () => {
    render(<DuelLeaderboard />);
    expect(screen.getByText('Немає профілів.')).toBeInTheDocument();
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

    render(<DuelLeaderboard />);

    const cards = document.querySelectorAll('.duel-card');
    expect(cards).toHaveLength(2);
    expect(cards[0].querySelector('.duel-rank')!.textContent).toBe('🥇');
    expect(screen.getByText(/Alice/)).toBeInTheDocument();
    expect(screen.getByText(/Alice/).textContent).toContain('Ти');
    expect(cards[0].classList.contains('duel-card-active')).toBe(true);
    expect(cards[1].querySelector('.duel-rank')!.textContent).toBe('🥈');
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(cards[1].classList.contains('duel-card-active')).toBe(false);
  });
});

describe('duel-leaderboard.tsx DuelRating', () => {
  beforeEach(() => {
    getRating.mockClear();
  });

  it('renders win/loss/tie counts with correct plural labels', () => {
    getRating.mockReturnValue({ wins: 1, losses: 2, ties: 1 });
    render(<DuelRating />);
    expect(screen.getByText(/🏆 1 перемога/)).toBeInTheDocument();
    expect(screen.getByText(/💀 2 поразки/)).toBeInTheDocument();
    expect(screen.getByText(/🤝 1 нічия/)).toBeInTheDocument();
  });
});
