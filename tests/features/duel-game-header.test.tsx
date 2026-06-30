import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { notifyStateChange } from '../../src/store.ts';
import { DuelGameHeader } from '../../js/features/duel-game-header.tsx';
import { setDuelRoom } from '../../src/duel-room-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getGameHeaderData } = vi.hoisted(() => ({
  getGameHeaderData: vi.fn(() => ({
    myAvatar: '🧑',
    myScore: 0,
    myIdx: 0,
    myTotal: 10,
    myFlags: [] as (boolean | 'skip' | 'double')[],
    oppAvatar: '🤖',
    oppName: 'Bot',
    oppScore: 0,
    oppIdx: 0,
    oppFlags: [] as (boolean | 'skip' | 'double')[],
    oppTotal: 10,
    mode: 'quiz' as const,
    progressText: '1 / 10',
    bestOf: 1 as const,
    seriesMe: 0,
    seriesOpp: 0,
    roomCode: null as string | null,
  })),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return { ...orig, _getGameHeaderData: getGameHeaderData };
});

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelGameHeader />);
  });
  return { container, root };
}

describe('duel-game-header.tsx DuelGameHeader', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getGameHeaderData.mockClear().mockReturnValue({
      myAvatar: '🧑',
      myScore: 0,
      myIdx: 0,
      myTotal: 10,
      myFlags: [],
      oppAvatar: '🤖',
      oppName: 'Bot',
      oppScore: 0,
      oppIdx: 0,
      oppFlags: [],
      oppTotal: 10,
      mode: 'quiz',
      progressText: '1 / 10',
      bestOf: 1,
      seriesMe: 0,
      seriesOpp: 0,
      roomCode: null,
    });
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders avatars, scores, opponent name and progress text', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('🧑');
    expect(container.textContent).toContain('🤖');
    expect(container.textContent).toContain('Bot');
    expect(container.textContent).toContain('1 / 10');
  });

  it('does not show the series row for a single-round match', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).not.toMatch(/\d:\d/);
  });

  it('shows the series score for a best-of-3 match', () => {
    getGameHeaderData.mockReturnValue({
      myAvatar: '🧑',
      myScore: 5,
      myIdx: 3,
      myTotal: 10,
      myFlags: [],
      oppAvatar: '🤖',
      oppName: 'Bot',
      oppScore: 2,
      oppIdx: 3,
      oppFlags: [],
      oppTotal: 10,
      mode: 'quiz',
      progressText: '4 / 10',
      bestOf: 3,
      seriesMe: 1,
      seriesOpp: 0,
      roomCode: null,
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('1');
    expect(container.textContent).toContain('0');
  });

  it('shows the room code when present', () => {
    getGameHeaderData.mockReturnValue({
      myAvatar: '🧑',
      myScore: 0,
      myIdx: 0,
      myTotal: 10,
      myFlags: [],
      oppAvatar: '🤖',
      oppName: 'Bot',
      oppScore: 0,
      oppIdx: 0,
      oppFlags: [],
      oppTotal: 10,
      mode: 'quiz',
      progressText: '1 / 10',
      bestOf: 1,
      seriesMe: 0,
      seriesOpp: 0,
      roomCode: 'ABCD12',
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('ABCD12');
  });

  it('renders flag dots reflecting answered status', () => {
    getGameHeaderData.mockReturnValue({
      myAvatar: '🧑',
      myScore: 1,
      myIdx: 1,
      myTotal: 10,
      myFlags: [true, false],
      oppAvatar: '🤖',
      oppName: 'Bot',
      oppScore: 0,
      oppIdx: 0,
      oppFlags: [],
      oppTotal: 10,
      mode: 'quiz',
      progressText: '2 / 10',
      bestOf: 1,
      seriesMe: 0,
      seriesOpp: 0,
      roomCode: null,
    });
    const { container, root } = mount();
    roots.push(root);
    const dots = container.querySelectorAll('span[style*="border-radius: 50%"]');
    expect(dots.length).toBeGreaterThanOrEqual(20);
  });

  it('re-renders when notifyStateChange is called', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Bot');

    getGameHeaderData.mockReturnValue({
      myAvatar: '🧑',
      myScore: 0,
      myIdx: 0,
      myTotal: 10,
      myFlags: [],
      oppAvatar: '🦊',
      oppName: 'Foxy',
      oppScore: 0,
      oppIdx: 0,
      oppFlags: [],
      oppTotal: 10,
      mode: 'quiz',
      progressText: '1 / 10',
      bestOf: 1,
      seriesMe: 0,
      seriesOpp: 0,
      roomCode: null,
    });
    act(() => {
      notifyStateChange();
      setDuelRoom({});
    });
    expect(container.textContent).toContain('Foxy');
  });
});
