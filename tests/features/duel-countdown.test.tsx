import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelCountdown } from '../../js/features/duel-countdown.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getCountdownData } = vi.hoisted(() => ({
  getCountdownData: vi.fn(() => ({
    oppAvatar: '🤖',
    oppName: 'Bot',
    myAvatar: '🧑',
    myName: 'Me',
    roomCode: null as string | null,
    num: 3,
  })),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getCountdownData: getCountdownData }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelCountdown />);
  });
  return { container, root };
}

describe('duel-countdown.tsx DuelCountdown', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getCountdownData
      .mockClear()
      .mockReturnValue({
        oppAvatar: '🤖',
        oppName: 'Bot',
        myAvatar: '🧑',
        myName: 'Me',
        roomCode: null,
        num: 3,
      });
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('shows the player names/avatars and the countdown number', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('🤖 Bot vs 🧑 Me');
    expect(container.textContent).toContain('3');
    expect(container.textContent).toContain('Готуйся!');
  });

  it('shows a lightning bolt instead of a number once countdown reaches zero', () => {
    getCountdownData.mockReturnValue({
      oppAvatar: '🤖',
      oppName: 'Bot',
      myAvatar: '🧑',
      myName: 'Me',
      roomCode: null,
      num: 0,
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('⚡');
  });

  it('shows the room code when provided', () => {
    getCountdownData.mockReturnValue({
      oppAvatar: '🤖',
      oppName: 'Bot',
      myAvatar: '🧑',
      myName: 'Me',
      roomCode: 'ABCD12',
      num: 3,
    });
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('ABCD12');
  });

  it('does not show a room code when none is provided', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).not.toContain('Код кімнати');
  });

  it('pulses the countdown number on each tick', async () => {
    const { container, root } = mount();
    roots.push(root);
    const numEl = container.querySelector('div[style*="6rem"]') as HTMLElement;
    expect(numEl.style.transform).toBe('scale(1.4)');

    await act(async () => {
      await new Promise((r) => setTimeout(r, 160));
    });
    expect(numEl.style.transform).toBe('');
  });
});
