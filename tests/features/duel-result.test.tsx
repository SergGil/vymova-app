import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelResult } from '../../js/features/duel-result.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getResultData, onResultRematch, onResultNewDuel, onResultReaction } = vi.hoisted(() => ({
  getResultData: vi.fn((): unknown => null),
  onResultRematch: vi.fn(),
  onResultNewDuel: vi.fn(),
  onResultReaction: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return {
    ...orig,
    _getResultData: getResultData,
    _onResultRematch: onResultRematch,
    _onResultNewDuel: onResultNewDuel,
    _onResultReaction: onResultReaction,
  };
});

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelResult />);
  });
  return { container, root };
}

describe('duel-result.tsx DuelResult', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    onResultRematch.mockClear();
    onResultNewDuel.mockClear();
    onResultReaction.mockClear();
    getResultData.mockClear().mockReturnValue(null);
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders nothing when there is no result', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders a round result with series score and "next round" button', () => {
    getResultData.mockReturnValue({
      kind: 'round',
      outcome: 'win',
      round: 1,
      myWins: 1,
      oppWins: 0,
      myName: 'Alice',
      oppName: 'Bob',
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('твоя перемога');
    expect(container.textContent).toContain('Раунд');
    expect(container.textContent).toContain('Alice 1 — 0 Bob');

    const btn = container.querySelector('button') as HTMLButtonElement;
    expect(btn.textContent).toContain('Наступний раунд');
    act(() => {
      btn.click();
    });
    expect(onResultRematch).toHaveBeenCalled();
  });

  it('renders a final win result with scores and avatars', () => {
    getResultData.mockReturnValue({
      kind: 'final',
      outcome: 'win',
      modeIcon: '🧠',
      modeLabel: 'Тест',
      catLabel: '',
      myAvatar: '🧑',
      myScore: 8,
      oppAvatar: '🤖',
      oppScore: 5,
      oppName: 'Bot',
      roomSize: 10,
      historyText: '',
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Ти переміг!');
    expect(container.textContent).toContain('8/10');
    expect(container.textContent).toContain('5/10');
    expect(container.textContent).toContain('🏆');
  });

  it('renders a final loss result with the opponent name', () => {
    getResultData.mockReturnValue({
      kind: 'final',
      outcome: 'loss',
      modeIcon: '🧠',
      modeLabel: 'Тест',
      catLabel: '',
      myAvatar: '🧑',
      myScore: 3,
      oppAvatar: '🤖',
      oppScore: 8,
      oppName: 'Bot',
      roomSize: 10,
      historyText: '',
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('Bot переміг');
    expect(container.textContent).toContain('😔');
  });

  it('rematch/new-duel buttons and emoji reactions call their handlers', () => {
    getResultData.mockReturnValue({
      kind: 'final',
      outcome: 'tie',
      modeIcon: '🧠',
      modeLabel: 'Тест',
      catLabel: '',
      myAvatar: '🧑',
      myScore: 5,
      oppAvatar: '🤖',
      oppScore: 5,
      oppName: 'Bot',
      roomSize: 10,
      historyText: '',
    });
    const { container, root } = mount();
    roots.push(root);

    const rematchBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Реванш'),
    ) as HTMLButtonElement;
    act(() => {
      rematchBtn.click();
    });
    expect(onResultRematch).toHaveBeenCalled();

    const newDuelBtn = Array.from(container.querySelectorAll('button')).find((b) =>
      b.textContent?.includes('Нова дуель'),
    ) as HTMLButtonElement;
    act(() => {
      newDuelBtn.click();
    });
    expect(onResultNewDuel).toHaveBeenCalled();

    const reactionButtons = container.querySelectorAll('button');
    const emojiBtn = reactionButtons[reactionButtons.length - 1] as HTMLButtonElement;
    act(() => {
      emojiBtn.click();
    });
    expect(onResultReaction).toHaveBeenCalledWith(emojiBtn.textContent);
  });
});
