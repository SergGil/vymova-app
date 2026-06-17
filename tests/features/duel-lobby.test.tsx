import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { state } from '../../src/state.ts';
import { DuelLobby } from '../../js/features/duel-lobby.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const {
  createRoom, joinRoom, cancelRoom, joinAsSpectator, createAsyncChallenge,
  joinAsyncChallenge, createTournament, joinTournament,
} = vi.hoisted(() => ({
  createRoom: vi.fn(),
  joinRoom: vi.fn(),
  cancelRoom: vi.fn(),
  joinAsSpectator: vi.fn(),
  createAsyncChallenge: vi.fn(),
  joinAsyncChallenge: vi.fn(),
  createTournament: vi.fn(),
  joinTournament: vi.fn(),
}));
vi.mock('../../js/features/duel.ts', async (importOriginal) => {
  const orig = await importOriginal<typeof import('../../js/features/duel.ts')>();
  return {
    ...orig, createRoom, joinRoom, _cancelRoom: cancelRoom, joinAsSpectator,
    createAsyncChallenge, joinAsyncChallenge, createTournament, joinTournament,
  };
});

vi.mock('../../js/features/duel-leaderboard.tsx', () => ({
  DuelLeaderboard: () => <div data-testid="leaderboard" />,
  DuelRating: () => <div data-testid="rating" />,
}));
vi.mock('../../js/features/duel-history.tsx', () => ({ DuelHistory: () => <div data-testid="history" /> }));
vi.mock('../../js/features/duel-lobby-options.tsx', () => ({
  DuelLangPicker: () => <div data-testid="lang-picker" />,
  DuelModePicker: () => <div data-testid="mode-picker" />,
  DuelCategoryPicker: () => <div data-testid="cat-picker" />,
  DuelOptionsRow: () => <div data-testid="options-row" />,
}));
vi.mock('../../js/features/duel-resume.tsx', () => ({ DuelResume: () => <div data-testid="resume" /> }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelLobby />); });
  return { container, root };
}

function resetLobbyUI(): void {
  state.duelLobbyUI = {
    msg: { visible: false, text: '', challenge: null },
    waiting: { visible: false, roomCode: '', modeLabel: '' },
    joinRowVisible: true,
    createBtn: { disabled: false },
    joinBtn: { disabled: false },
    asyncBtn: { disabled: false },
    tournBtn4: { disabled: false, errorLabel: null },
    tournBtn8: { disabled: false, errorLabel: null },
  };
}

describe('duel-lobby.tsx DuelLobby', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    resetLobbyUI();
    [createRoom, joinRoom, cancelRoom, joinAsSpectator, createAsyncChallenge, joinAsyncChallenge, createTournament, joinTournament]
      .forEach(fn => fn.mockClear());
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders the leaderboard, rating, pickers, history and resume mounts', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('[data-testid="leaderboard"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="rating"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="mode-picker"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="cat-picker"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="options-row"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="history"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="resume"]')).not.toBeNull();
  });

  it('the create button calls createRoom', () => {
    const { container, root } = mount();
    roots.push(root);
    act(() => { (container.querySelector('#duel-create-btn') as HTMLButtonElement).click(); });
    expect(createRoom).toHaveBeenCalled();
  });

  it('shows the waiting panel with room code when waiting for an opponent', () => {
    state.duelLobbyUI.waiting = { visible: true, roomCode: 'ABC123', modeLabel: '🧠 Тест' };
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-room-code')!.textContent).toBe('ABC123');

    act(() => { (container.querySelector('#duel-cancel-btn') as HTMLButtonElement).click(); });
    expect(cancelRoom).toHaveBeenCalled();
  });

  it('formats and submits the join code', () => {
    const { container, root } = mount();
    roots.push(root);
    const input = container.querySelector('#duel-join-input') as HTMLInputElement;
    const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
    act(() => {
      nativeValueSetter.call(input, 'abc123');
      input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    expect(input.value).toBe('ABC-123');

    act(() => { (container.querySelector('#duel-join-btn') as HTMLButtonElement).click(); });
    expect(joinRoom).toHaveBeenCalledWith('ABC-123');
  });

  it('spectate, reply, async-challenge and tournament buttons call their handlers', () => {
    const { container, root } = mount();
    roots.push(root);

    const byText = (txt: string) => Array.from(container.querySelectorAll('button')).find(b => b.textContent?.includes(txt)) as HTMLButtonElement;

    act(() => { byText('Спостерігати').click(); });
    expect(joinAsSpectator).toHaveBeenCalled();

    act(() => { byText('Відповісти').click(); });
    expect(joinAsyncChallenge).toHaveBeenCalled();

    act(() => { byText('Надіслати виклик').click(); });
    expect(createAsyncChallenge).toHaveBeenCalled();

    act(() => { byText('4 гравці').click(); });
    expect(createTournament).toHaveBeenCalledWith(4);

    act(() => { byText('8 гравців').click(); });
    expect(createTournament).toHaveBeenCalledWith(8);

    act(() => { byText('Вступити').click(); });
    expect(joinTournament).toHaveBeenCalled();
  });

  it('shows a message banner when duelLobbyUI.msg is visible', () => {
    state.duelLobbyUI.msg = { visible: true, text: 'Привіт', challenge: null };
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-msg')!.textContent).toContain('Привіт');
  });
});
