import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { DuelChatPanel } from '../../js/features/duel-chat-panel.tsx';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const { sendChatMsg } = vi.hoisted(() => ({ sendChatMsg: vi.fn() }));
vi.mock('../../js/features/duel.ts', () => ({ _sendChatMsg: sendChatMsg }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<DuelChatPanel />); });
  return { container, root };
}

function setInputValue(input: HTMLInputElement, value: string): void {
  const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')!.set!;
  act(() => {
    nativeValueSetter.call(input, value);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

describe('duel-chat-panel.tsx DuelChatPanel', () => {
  let roots: Root[] = [];

  beforeEach(() => {
    document.body.innerHTML = '';
    roots = [];
    sendChatMsg.mockClear();
  });

  afterEach(() => {
    roots.forEach(r => { act(() => { r.unmount(); }); });
  });

  it('renders the chat input, send button and emoji reaction buttons', () => {
    const { container, root } = mount();
    roots.push(root);
    expect(container.querySelector('#duel-chat-input')).not.toBeNull();
    expect(container.querySelector('#duel-chat-send')).not.toBeNull();
    expect(container.querySelectorAll('.dm-react-btn').length).toBe(5);
  });

  it('sends a typed message and clears the input on send button click', () => {
    const { container, root } = mount();
    roots.push(root);
    const input = container.querySelector('#duel-chat-input') as HTMLInputElement;
    setInputValue(input, 'Hello there');

    act(() => { (container.querySelector('#duel-chat-send') as HTMLButtonElement).click(); });

    expect(sendChatMsg).toHaveBeenCalledWith('Hello there');
    expect(input.value).toBe('');
  });

  it('sends the message on Enter key press', () => {
    const { container, root } = mount();
    roots.push(root);
    const input = container.querySelector('#duel-chat-input') as HTMLInputElement;
    setInputValue(input, 'Yo');

    act(() => { input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })); });

    expect(sendChatMsg).toHaveBeenCalledWith('Yo');
    expect(input.value).toBe('');
  });

  it('does not send a message that is empty or whitespace only', () => {
    const { container, root } = mount();
    roots.push(root);
    const input = container.querySelector('#duel-chat-input') as HTMLInputElement;
    setInputValue(input, '   ');

    act(() => { (container.querySelector('#duel-chat-send') as HTMLButtonElement).click(); });

    expect(sendChatMsg).not.toHaveBeenCalled();
  });

  it('clicking an emoji reaction sends it directly', () => {
    const { container, root } = mount();
    roots.push(root);
    const btns = container.querySelectorAll('.dm-react-btn');
    act(() => { (btns[2] as HTMLButtonElement).click(); });

    expect(sendChatMsg).toHaveBeenCalledWith('🔥');
  });
});
