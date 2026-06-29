import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelChatLog, refreshDuelChatLog } from '../../js/features/duel-chat-log.tsx';
import { setDuelChat } from '../../src/duel-async-store.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

let chatHistory: { text: string; isMe: boolean }[] = [];
const { getChatHistory } = vi.hoisted(() => ({
  getChatHistory: vi.fn(() => [] as { text: string; isMe: boolean }[]),
}));
vi.mock('../../js/features/duel.ts', () => ({ _getChatHistory: getChatHistory }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelChatLog />); });
  return { container, root };
}

describe('duel-chat-log.tsx DuelChatLog', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    chatHistory = [];
    roots = [];
    getChatHistory.mockClear().mockImplementation(() => chatHistory);
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders an empty log when there is no chat history', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-chat-log')).not.toBeNull();
    expect(container.querySelectorAll('.duel-chat-msg').length).toBe(0);
  });

  it('renders chat messages and marks own messages with the "me" class', () => {
    chatHistory = [{ text: 'Hello', isMe: true }, { text: 'Hi there', isMe: false }];
    const { container, root } = mount();
    roots.push(root);

    const msgs = container.querySelectorAll('.duel-chat-msg');
    expect(msgs.length).toBe(2);
    expect(msgs[0].textContent).toBe('Hello');
    expect(msgs[0].className).toContain('me');
    expect(msgs[1].textContent).toBe('Hi there');
    expect(msgs[1].className).not.toContain('me');
  });

  it('refreshDuelChatLog re-renders the log with new messages', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelectorAll('.duel-chat-msg').length).toBe(0);

    chatHistory = [{ text: 'New message', isMe: true }];
    act(() => { refreshDuelChatLog(); setDuelChat(chatHistory); });

    expect(container.querySelectorAll('.duel-chat-msg').length).toBe(1);
    expect(container.querySelector('.duel-chat-msg')!.textContent).toBe('New message');
  });

  it('scrolls to the bottom when new messages arrive', () => {
    const { container, root } = mount();
    roots.push(root);
    const log = container.querySelector('#duel-chat-log') as HTMLElement;
    Object.defineProperty(log, 'scrollHeight', { value: 500, configurable: true });
    log.scrollTop = 0;

    chatHistory = [{ text: 'New message', isMe: true }];
    act(() => { refreshDuelChatLog(); setDuelChat(chatHistory); });

    expect(log.scrollTop).toBe(500);
  });
});
