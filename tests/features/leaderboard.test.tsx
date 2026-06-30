import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { Leaderboard } from '../../js/features/leaderboard.tsx';
import { setKnownWords } from '../../src/known-words-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

function mount(refreshKey: number): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<Leaderboard refreshKey={refreshKey} />);
  });
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
    setKnownWords('en', new Set());
  });

  it('submits the real known-word count on mount (regression: reading ew_known with a raw JSON.parse threw because it is LZ-compressed, so scores never got submitted)', async () => {
    localStorage.setItem(
      'ew_profiles',
      JSON.stringify([{ id: 'p1', name: 'Sergii', avatar: '🧑' }]),
    );
    localStorage.setItem('ew_active_profile', 'p1');
    setKnownWords('en', new Set(Array.from({ length: 100 }, (_, i) => `word${i}`)));
    fetchMock.mockResolvedValue({ ok: true, json: async () => null });

    await act(async () => {
      mount(10);
      await new Promise((r) => setTimeout(r, 0));
    });

    const putCall = fetchMock.mock.calls.find(
      ([, opts]) => (opts as RequestInit | undefined)?.method === 'PUT',
    );
    expect(putCall).toBeDefined();
    const body = JSON.parse((putCall![1] as RequestInit).body as string);
    expect(body.known).toBe(100);
    expect(body.name).toBe('Sergii');
    expect(body.xp).toBe(500);
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
      await new Promise((r) => setTimeout(r, 0));
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
      await new Promise((r) => setTimeout(r, 0));
      return result;
    });
    expect(container.textContent).toContain('Alice');
    expect(container.textContent).toContain('Bob');
    expect(container.textContent).toContain('🌍');

    const names = Array.from(container.querySelectorAll('div'))
      .map((d) => d.textContent)
      .filter((t) => t === 'Alice' || t === 'Bob');
    expect(names[0]).toBe('Bob');
  });

  it('shows empty state when fetch fails', async () => {
    fetchMock.mockRejectedValue(new Error('network error'));
    const { container } = await act(async () => {
      const result = mount(3);
      await new Promise((r) => setTimeout(r, 0));
      return result;
    });
    expect(container.textContent).toContain('Поки немає учасників');
  });
});
