import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelSpectatorView } from '../../js/features/duel-spectator.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getSpecRoom, getDuelScreen, leaveSpectator } = vi.hoisted(() => ({
  getSpecRoom: vi.fn((): unknown => null),
  getDuelScreen: vi.fn(() => 'lobby' as string),
  leaveSpectator: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return {
    ...orig,
    _getSpecRoom: getSpecRoom,
    _getDuelScreen: getDuelScreen,
    _leaveSpectator: leaveSpectator,
  };
});

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelSpectatorView />);
  });
  return { container, root };
}

const baseRoom = {
  seed: 1,
  mode: 'quiz',
  category: '',
  difficulty: 'mixed',
  bestOf: 1,
  maxHints: 3,
  powerupsEnabled: false,
  p1: {
    name: 'Alice',
    avatar: '🧑',
    score: 5,
    idx: 5,
    done: false,
    hintsLeft: 3,
    powerups: { double: 1, skip: 1, freeze: 1 },
  },
  p2: {
    name: 'Bob',
    avatar: '🦊',
    score: 3,
    idx: 3,
    done: false,
    hintsLeft: 3,
    powerups: { double: 1, skip: 1, freeze: 1 },
  },
  started: true,
  finished: false,
  createdAt: 0,
  series: { p1wins: 0, p2wins: 0, round: 1 },
  spectators: {},
};

describe('duel-spectator.tsx DuelSpectatorView', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    leaveSpectator.mockClear();
    getSpecRoom.mockClear().mockReturnValue(null);
    getDuelScreen.mockClear().mockReturnValue('lobby');
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders nothing when not on the spectate screen', () => {
    getDuelScreen.mockReturnValue('lobby');
    getSpecRoom.mockReturnValue(baseRoom);
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders nothing on the spectate screen if there is no room snapshot', () => {
    getDuelScreen.mockReturnValue('spectate');
    getSpecRoom.mockReturnValue(null);
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders both players with scores and progress when spectating', () => {
    getDuelScreen.mockReturnValue('spectate');
    getSpecRoom.mockReturnValue(baseRoom);
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Alice');
    expect(container.textContent).toContain('Bob');
    expect(container.textContent).toContain('5');
    expect(container.textContent).toContain('3');
    expect(container.textContent).toContain('🧠');
  });

  it('shows the waiting message when there is no second player', () => {
    getDuelScreen.mockReturnValue('spectate');
    getSpecRoom.mockReturnValue({ ...baseRoom, p2: null });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Очікуємо P2…');
  });

  it('shows the spectator count when present', () => {
    getDuelScreen.mockReturnValue('spectate');
    getSpecRoom.mockReturnValue({ ...baseRoom, spectators: { a: { name: 'X', avatar: '👀' } } });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('1');
    expect(container.textContent).toContain('гляд.');
  });

  it('the leave button calls _leaveSpectator', () => {
    getDuelScreen.mockReturnValue('spectate');
    getSpecRoom.mockReturnValue(baseRoom);
    const { container, root } = mount();
    roots.push(root);
    const btn = container.querySelector('button') as HTMLButtonElement;
    act(() => {
      btn.click();
    });
    expect(leaveSpectator).toHaveBeenCalled();
  });
});
