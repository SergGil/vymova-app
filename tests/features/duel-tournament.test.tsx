import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelTournament } from '../../js/features/duel-tournament.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const {
  getTournamentData,
  getDuelScreen,
  onTournStart,
  onTournCancel,
  onTournPlay,
  onTournRejoin,
} = vi.hoisted(() => ({
  getTournamentData: vi.fn((): unknown => null),
  getDuelScreen: vi.fn(() => 'lobby' as string),
  onTournStart: vi.fn(),
  onTournCancel: vi.fn(),
  onTournPlay: vi.fn(),
  onTournRejoin: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', () => ({
  _getTournamentData: getTournamentData,
  _getDuelScreen: getDuelScreen,
  _onTournStart: onTournStart,
  _onTournCancel: onTournCancel,
  _onTournPlay: onTournPlay,
  _onTournRejoin: onTournRejoin,
}));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelTournament />);
  });
  return { container, root };
}

describe('duel-tournament.tsx DuelTournament', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    onTournStart.mockClear();
    onTournCancel.mockClear();
    onTournPlay.mockClear();
    onTournRejoin.mockClear();
    getTournamentData.mockClear().mockReturnValue(null);
    getDuelScreen.mockClear().mockReturnValue('lobby');
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders nothing when not on the tournament screen', () => {
    getDuelScreen.mockReturnValue('lobby');
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders the waiting room with slots and a start button', () => {
    getDuelScreen.mockReturnValue('tournament');
    getTournamentData.mockReturnValue({
      phase: 'waiting',
      code: 'ABC-123',
      modeLabel: '🧠 Тест · 4 гравці',
      slots: [
        { filled: true, avatar: '🧑', name: 'Alice', label: '' },
        { filled: false, avatar: '', name: '', label: 'Слот 2' },
      ],
      joined: 1,
      size: 4,
      showStartBtn: true,
      startBtnLabel: '⚔️ Почати турнір (1/4)',
      finished: false,
      champion: '',
      statusLabel: '',
      statusColor: '',
      rounds: [],
      matchArea: { kind: 'none' },
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('ABC-123');
    expect(container.textContent).toContain('Alice');
    expect(container.textContent).toContain('Слот 2');

    const startBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Почати турнір'),
    ) as HTMLButtonElement;
    act(() => {
      startBtn.click();
    });
    expect(onTournStart).toHaveBeenCalled();

    const cancelBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Скасувати'),
    ) as HTMLButtonElement;
    act(() => {
      cancelBtn.click();
    });
    expect(onTournCancel).toHaveBeenCalled();
  });

  it('renders the bracket with rounds and a champion', () => {
    getDuelScreen.mockReturnValue('tournament');
    getTournamentData.mockReturnValue({
      phase: 'bracket',
      code: 'ABC-123',
      modeLabel: '',
      slots: [],
      joined: 4,
      size: 4,
      showStartBtn: false,
      startBtnLabel: '',
      finished: true,
      champion: 'Alice',
      statusLabel: 'Завершено',
      statusColor: '#f39c12',
      rounds: [
        {
          name: 'Фінал',
          matches: [
            {
              p1: { avatar: '🧑', name: 'Alice', won: true },
              p2: { avatar: '🦊', name: 'Bob', won: false },
              scoreText: '8:5',
              active: false,
            },
          ],
        },
      ],
      matchArea: { kind: 'champion' },
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Завершено');
    expect(container.textContent).toContain('Фінал');
    expect(container.textContent).toContain('8:5');
    expect(container.textContent).toContain('🏆');
    expect(container.textContent).toContain('Alice');

    const leaveBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Вийти'),
    ) as HTMLButtonElement;
    act(() => {
      leaveBtn.click();
    });
    expect(onTournCancel).toHaveBeenCalled();
  });

  it('renders a play button for the matchArea "play" state', () => {
    getDuelScreen.mockReturnValue('tournament');
    getTournamentData.mockReturnValue({
      phase: 'bracket',
      code: '',
      modeLabel: '',
      slots: [],
      joined: 4,
      size: 4,
      finished: false,
      champion: '',
      statusLabel: '',
      statusColor: '',
      rounds: [],
      matchArea: { kind: 'play' },
      showStartBtn: false,
      startBtnLabel: '',
    });
    const { container, root } = mount();
    roots.push(root);
    const playBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Грати зараз'),
    ) as HTMLButtonElement;
    act(() => {
      playBtn.click();
    });
    expect(onTournPlay).toHaveBeenCalled();
  });

  it('renders a rejoin button for the matchArea "rejoin" state', () => {
    getDuelScreen.mockReturnValue('tournament');
    getTournamentData.mockReturnValue({
      phase: 'bracket',
      code: '',
      modeLabel: '',
      slots: [],
      joined: 4,
      size: 4,
      finished: false,
      champion: '',
      statusLabel: '',
      statusColor: '',
      rounds: [],
      matchArea: { kind: 'rejoin' },
      showStartBtn: false,
      startBtnLabel: '',
    });
    const { container, root } = mount();
    roots.push(root);
    const rejoinBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Продовжити матч'),
    ) as HTMLButtonElement;
    act(() => {
      rejoinBtn.click();
    });
    expect(onTournRejoin).toHaveBeenCalled();
  });

  it('renders the waiting-for-match message for the matchArea "waiting" state', () => {
    getDuelScreen.mockReturnValue('tournament');
    getTournamentData.mockReturnValue({
      phase: 'bracket',
      code: '',
      modeLabel: '',
      slots: [],
      joined: 4,
      size: 4,
      finished: false,
      champion: '',
      statusLabel: '',
      statusColor: '',
      rounds: [],
      matchArea: { kind: 'waiting', oppName: 'Bob' },
      showStartBtn: false,
      startBtnLabel: '',
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Bob');
    expect(container.textContent).toContain('Ідуть матч');
  });
});
