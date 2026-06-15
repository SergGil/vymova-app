import { describe, it, expect, vi, beforeEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { NoteModal, openNoteModal } from '../../js/features/note-modal.tsx';
import { getNoteForWord, setNoteForWord } from '../../js/features/notes.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  act(() => { root.render(<NoteModal />); });
  return { container, root };
}

const nativeValueSetter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value')!.set!;
function setTextareaValue(el: HTMLTextAreaElement, value: string): void {
  nativeValueSetter.call(el, value);
  el.dispatchEvent(new Event('input', { bubbles: true }));
}

describe('note-modal.tsx NoteModal', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });

  it('renders nothing until openNoteModal is called', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('shows the word and any existing note when opened', () => {
    setNoteForWord('abandon', 'remember: leave behind');
    const { container } = mount();
    act(() => { openNoteModal('abandon'); });
    expect(container.querySelector('#note-word-title')!.textContent).toBe('📝 Нотатка: abandon');
    expect((container.querySelector('.note-textarea') as HTMLTextAreaElement).value).toBe('remember: leave behind');
  });

  it('saves the note text when closed via the save button', () => {
    const { container } = mount();
    act(() => { openNoteModal('cat'); });
    const textarea = container.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'кіт = cat'); });

    const saveBtn = container.querySelector('.prf-delete-btn-confirm') as HTMLButtonElement;
    act(() => { saveBtn.click(); });

    expect(getNoteForWord('cat')).toBe('кіт = cat');
    expect(container.innerHTML).toBe('');
  });

  it('deletes the note and closes when the delete button is clicked', () => {
    setNoteForWord('dog', 'собака');
    const { container } = mount();
    act(() => { openNoteModal('dog'); });

    const delBtn = container.querySelector('.prf-delete-btn-cancel') as HTMLButtonElement;
    act(() => { delBtn.click(); });

    expect(getNoteForWord('dog')).toBe('');
    expect(container.innerHTML).toBe('');
  });

  it('saves and closes on Ctrl+Enter', () => {
    const { container } = mount();
    act(() => { openNoteModal('bird'); });
    const textarea = container.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'птах'); });
    act(() => { textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true, bubbles: true })); });

    expect(getNoteForWord('bird')).toBe('птах');
    expect(container.innerHTML).toBe('');
  });

  it('saves and closes on Escape', () => {
    const { container } = mount();
    act(() => { openNoteModal('fish'); });
    const textarea = container.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'риба'); });
    act(() => { textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });

    expect(getNoteForWord('fish')).toBe('риба');
    expect(container.innerHTML).toBe('');
  });

  it('closes when clicking the backdrop', () => {
    const { container } = mount();
    act(() => { openNoteModal('owl'); });
    const overlay = container.querySelector('#note-overlay') as HTMLElement;
    act(() => { overlay.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(container.innerHTML).toBe('');
  });
});
