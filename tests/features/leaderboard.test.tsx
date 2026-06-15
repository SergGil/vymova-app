import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Leaderboard } from '../../js/features/leaderboard.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(refreshKey: number): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<Leaderboard refreshKey={refreshKey} />); });
  return { container, root };
}

describe('leaderboard.tsx Leaderboard', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('shows a loading state initially', () => {
    fetchMock.mockReturnValue(new Promise(() => {}));
    const { container } = mount(0);
    expect(container.textContent).toContain('Завантаження');
  });

  it('shows the empty state when the leaderboard has no entries', async () => {
    fetchMock.mockResolvedValue({ ok: true, json: async () => null });
    const { container } = await act(async () => {
      const result = mount(1);
      await new Promise(r => setTimeout(r, 0));
      return result;
    });
    expect(container.textContent).toContain('Поки немає учасників');
  });

  it('renders leaderboard entries sorted by xp', async () => {
    const data = {
      a: { name: 'Alice', avatar: '🦊', known: 10, streak: 3, xp: 100, updatedAt: 1 },
      b: { name: 'Bob', avatar: '🐱', known: 20, streak: 5, xp: 200, updatedAt: 2 },
    };
    fetchMock.mockResolvedValue({ ok: true, json: async () => data });
    const { container } = await act(async () => {
      const result = mount(2);
      await new Promise(r => setTimeout(r, 0));
      return result;
    });
    expect(container.textContent).toContain('Alice');
    expect(container.textContent).toContain('Bob');
    expect(container.textContent).toContain('🌍');

    const names = Array.from(container.querySelectorAll('div')).map(d => d.textContent).filter(t => t === 'Alice' || t === 'Bob');
    expect(names[0]).toBe('Bob');
  });

  it('shows empty state when fetch fails', async () => {
    fetchMock.mockRejectedValue(new Error('network error'));
    const { container } = await act(async () => {
      const result = mount(3);
      await new Promise(r => setTimeout(r, 0));
      return result;
    });
    expect(container.textContent).toContain('Поки немає учасників');
  });
});
