import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelResume, refreshDuelResume } from '../../js/features/duel-resume.tsx';
import type { ResumeSessionVM } from '../../js/features/duel.ts';
import { setDuelResumeSessions } from '../../src/duel-async-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getResumeSessions, onResumeContinue, onResumeDiscard } = vi.hoisted(() => ({
  getResumeSessions: vi.fn(() => [] as ResumeSessionVM[]),
  onResumeContinue: vi.fn(),
  onResumeDiscard: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', () => ({
  _getResumeSessions: getResumeSessions,
  _onResumeContinue: onResumeContinue,
  _onResumeDiscard: onResumeDiscard,
}));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => {
    root.render(<DuelResume />);
  });
  return { container, root };
}

function makeSession(over: Partial<ResumeSessionVM> = {}): ResumeSessionVM {
  return {
    roomId: 'r1',
    modeIcon: '🧠',
    modeLabel: 'Тест',
    score: 4,
    roomSize: 10,
    oppText: null,
    expiresAt: Date.now() + 3_600_000,
    ...over,
  };
}

describe('duel-resume.tsx DuelResume', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    onResumeContinue.mockClear();
    onResumeDiscard.mockClear();
    getResumeSessions.mockClear().mockReturnValue([]);
  });

  afterEach(() => {
    roots.forEach((r) => {
      act(() => {
        r.unmount();
      });
    });
  });

  it('renders nothing when there are no resume sessions', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');
  });

  it('renders a resume card with mode info, score and opponent text', () => {
    getResumeSessions.mockReturnValue([makeSession({ oppText: 'суперник: 🤖 Bot' })]);
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('🔄 Незавершена дуель');
    expect(container.textContent).toContain('🧠 Тест');
    expect(container.textContent).toContain('4/10');
    expect(container.textContent).toContain('суперник: 🤖 Bot');
  });

  it('shows the expired message once the session has expired', () => {
    getResumeSessions.mockReturnValue([makeSession({ expiresAt: Date.now() - 1000 })]);
    const { container, root } = mount();
    roots.push(root);
    expect(container.textContent).toContain('⌛ Час на завершення дуелі сплив');
  });

  it('calls _onResumeContinue and _onResumeDiscard on button clicks', () => {
    getResumeSessions.mockReturnValue([makeSession({ roomId: 'r42' })]);
    const { container, root } = mount();
    roots.push(root);
    const buttons = container.querySelectorAll('button');
    act(() => {
      (buttons[0] as HTMLButtonElement).click();
    });
    expect(onResumeContinue).toHaveBeenCalledWith('r42');
    act(() => {
      (buttons[1] as HTMLButtonElement).click();
    });
    expect(onResumeDiscard).toHaveBeenCalledWith('r42');
  });

  it('refreshDuelResume re-renders with updated sessions', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.innerHTML).toBe('');

    getResumeSessions.mockReturnValue([makeSession()]);
    act(() => {
      refreshDuelResume();
      setDuelResumeSessions([makeSession()]);
    });
    expect(container.textContent).toContain('🔄 Незавершена дуель');
  });
});
