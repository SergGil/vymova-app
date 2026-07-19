import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DuelChatPanel } from '../../js/features/duel/duel-chat-panel.tsx';

const { sendChatMsg } = vi.hoisted(() => ({ sendChatMsg: vi.fn() }));
vi.mock('../../js/features/duel/duel.ts', () => ({ _sendChatMsg: sendChatMsg }));

beforeEach(() => {
  sendChatMsg.mockClear();
});

describe('duel-chat-panel.tsx DuelChatPanel', () => {
  it('renders the chat input, send button and emoji reaction buttons', () => {
    render(<DuelChatPanel />);
    expect(screen.getByPlaceholderText('Повідомлення…')).toBeInTheDocument();
    expect(screen.getByTitle('Надіслати')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(6); // send + 5 reactions
  });

  it('sends a typed message and clears the input on send button click', async () => {
    const user = userEvent.setup();
    render(<DuelChatPanel />);
    const input = screen.getByPlaceholderText('Повідомлення…');
    await user.type(input, 'Hello there');
    await user.click(screen.getByTitle('Надіслати'));

    expect(sendChatMsg).toHaveBeenCalledWith('Hello there');
    expect(input).toHaveValue('');
  });

  it('sends the message on Enter key press', async () => {
    const user = userEvent.setup();
    render(<DuelChatPanel />);
    const input = screen.getByPlaceholderText('Повідомлення…');
    await user.type(input, 'Yo{Enter}');

    expect(sendChatMsg).toHaveBeenCalledWith('Yo');
    expect(input).toHaveValue('');
  });

  it('does not send a message that is empty or whitespace only', async () => {
    const user = userEvent.setup();
    render(<DuelChatPanel />);
    const input = screen.getByPlaceholderText('Повідомлення…');
    await user.type(input, '   ');
    await user.click(screen.getByTitle('Надіслати'));

    expect(sendChatMsg).not.toHaveBeenCalled();
  });

  it('clicking an emoji reaction sends it directly', async () => {
    const user = userEvent.setup();
    render(<DuelChatPanel />);
    await user.click(screen.getByTitle('Вогонь!'));

    expect(sendChatMsg).toHaveBeenCalledWith('🔥');
  });
});
