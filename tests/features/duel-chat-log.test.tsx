import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import { DuelChatLog } from '../../js/features/duel/duel-chat-log.tsx';
import { setDuelChat } from '../../src/duel-async-store.ts';

let chatHistory: { text: string; isMe: boolean }[] = [];
const { getChatHistory } = vi.hoisted(() => ({
  getChatHistory: vi.fn(() => [] as { text: string; isMe: boolean }[]),
}));
vi.mock('../../js/features/duel/duel.ts', () => ({ _getChatHistory: getChatHistory }));

beforeEach(() => {
  chatHistory = [];
  getChatHistory.mockClear().mockImplementation(() => chatHistory);
});

describe('duel-chat-log.tsx DuelChatLog', () => {
  it('renders an empty log when there is no chat history', () => {
    render(<DuelChatLog />);
    expect(document.getElementById('duel-chat-log')?.textContent).toBe('');
  });

  it('renders chat messages and marks own messages with the "me" class', () => {
    chatHistory = [
      { text: 'Hello', isMe: true },
      { text: 'Hi there', isMe: false },
    ];
    render(<DuelChatLog />);

    expect(screen.getByText('Hello').classList.contains('me')).toBe(true);
    expect(screen.getByText('Hi there').classList.contains('me')).toBe(false);
  });

  it('re-renders the log with new messages', () => {
    render(<DuelChatLog />);
    expect(screen.queryByText('New message')).toBeNull();

    chatHistory = [{ text: 'New message', isMe: true }];
    act(() => {
      setDuelChat(chatHistory);
    });

    expect(screen.getByText('New message')).toBeInTheDocument();
  });

  it('scrolls to the bottom when new messages arrive', () => {
    render(<DuelChatLog />);
    const log = document.getElementById('duel-chat-log') as HTMLElement;
    Object.defineProperty(log, 'scrollHeight', { value: 500, configurable: true });
    log.scrollTop = 0;

    chatHistory = [{ text: 'New message', isMe: true }];
    act(() => {
      setDuelChat(chatHistory);
    });

    expect(log.scrollTop).toBe(500);
  });
});
