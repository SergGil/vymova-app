import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelOverlay } from '../../js/features/duel-overlay.tsx';
import type { DuelScreen } from '../../src/types.js';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { getDuelScreen } = vi.hoisted(() => ({
  getDuelScreen: vi.fn((): DuelScreen => 'lobby'),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getDuelScreen: getDuelScreen }));

vi.mock('../../js/features/duel-lobby.tsx', () => ({ DuelLobby: () => <div data-testid="lobby" /> }));
vi.mock('../../js/features/duel-countdown.tsx', () => ({ DuelCountdown: () => <div data-testid="countdown" /> }));
vi.mock('../../js/features/duel-game-header.tsx', () => ({ DuelGameHeader: () => <div data-testid="game-header" /> }));
vi.mock('../../js/features/duel-tempo-timer.tsx', () => ({ DuelTempoTimer: () => <div data-testid="tempo-timer" /> }));
vi.mock('../../js/features/duel-question.tsx', () => ({ DuelQuestion: () => <div data-testid="question" /> }));
vi.mock('../../js/features/duel-feedback.tsx', () => ({ DuelFeedback: () => <div data-testid="feedback" /> }));
vi.mock('../../js/features/duel-powerups.tsx', () => ({ DuelPowerups: () => <div data-testid="powerups" /> }));
vi.mock('../../js/features/duel-chat-log.tsx', () => ({ DuelChatLog: () => <div data-testid="chat-log" /> }));
vi.mock('../../js/features/duel-chat-panel.tsx', () => ({ DuelChatPanel: () => <div data-testid="chat-panel" /> }));
vi.mock('../../js/features/duel-result.tsx', () => ({ DuelResult: () => <div data-testid="result" /> }));
vi.mock('../../js/features/duel-spectator.tsx', () => ({ DuelSpectatorView: () => <div data-testid="spectator" /> }));
vi.mock('../../js/features/duel-tournament.tsx', () => ({ DuelTournament: () => <div data-testid="tournament" /> }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelOverlay />); });
  return { container, root };
}

describe('duel-overlay.tsx DuelOverlay', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    getDuelScreen.mockClear().mockReturnValue('lobby');
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('shows the lobby on the lobby screen, and always renders spectator + tournament views', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('[data-testid="lobby"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="spectator"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="tournament"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="countdown"]')).toBeNull();
    expect(container.querySelector('#duel-game')).toBeNull();
  });

  it('shows the countdown screen', () => {
    getDuelScreen.mockReturnValue('countdown');
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-countdown')).not.toBeNull();
    expect(container.querySelector('[data-testid="countdown"]')).not.toBeNull();
    expect(container.querySelector('[data-testid="lobby"]')).toBeNull();
  });

  it('shows the game screen with header, timer, question, feedback, powerups and chat', () => {
    getDuelScreen.mockReturnValue('game');
    const { container, root } = mount();
    roots.push(root);
    const game = container.querySelector('#duel-game')!;
    expect(game.querySelector('[data-testid="game-header"]')).not.toBeNull();
    expect(game.querySelector('[data-testid="tempo-timer"]')).not.toBeNull();
    expect(game.querySelector('[data-testid="question"]')).not.toBeNull();
    expect(game.querySelector('[data-testid="feedback"]')).not.toBeNull();
    expect(game.querySelector('[data-testid="powerups"]')).not.toBeNull();

    const chat = container.querySelector('#duel-chat-panel')!;
    expect(chat.querySelector('[data-testid="chat-log"]')).not.toBeNull();
    expect(chat.querySelector('[data-testid="chat-panel"]')).not.toBeNull();
  });

  it('shows the result screen with the chat panel and result component', () => {
    getDuelScreen.mockReturnValue('result');
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-result')!.querySelector('[data-testid="result"]')).not.toBeNull();
    expect(container.querySelector('#duel-chat-panel')).not.toBeNull();
    expect(container.querySelector('#duel-game')).toBeNull();
  });
});
