import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { act } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import { NoteModal, openNoteModal } from '../../js/features/note-modal.tsx';
import { getNoteForWord, setNoteForWord } from '../../js/features/notes.ts';

(globalThis as unknown as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

vi.mock('../../js/core/card-engine.ts', () => ({ render: vi.fn() }));

// NoteModal portals its content to document.body, so a stale, un-unmounted
// root from a previous test would leave its event listeners attached —
// track the active root and unmount it for real between tests instead of
// just wiping innerHTML.
let activeRoot: Root | null = null;

function mount(): { container: HTMLElement; root: Root } {
  const container = document.createElement('div');
  document.body.appendChild(container);
  const root = createRoot(container);
  activeRoot = root;
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

  afterEach(() => {
    if (activeRoot) { act(() => { activeRoot!.unmount(); }); activeRoot = null; }
    document.body.innerHTML = '';
  });

  it('renders nothing until openNoteModal is called', () => {
    const { container } = mount();
    expect(container.innerHTML).toBe('');
  });

  it('shows the word and any existing note when opened', () => {
    setNoteForWord('abandon', 'remember: leave behind');
    mount();
    act(() => { openNoteModal('abandon'); });
    expect(document.querySelector('#note-word-title')!.textContent).toBe('📝 Нотатка: abandon');
    expect((document.querySelector('.note-textarea') as HTMLTextAreaElement).value).toBe('remember: leave behind');
  });

  it('saves the note text when closed via the save button', () => {
    mount();
    act(() => { openNoteModal('cat'); });
    const textarea = document.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'кіт = cat'); });

    const saveBtn = document.querySelector('.prf-delete-btn-confirm') as HTMLButtonElement;
    act(() => { saveBtn.click(); });

    expect(getNoteForWord('cat')).toBe('кіт = cat');
    expect(document.getElementById('note-overlay')).toBeNull();
  });

  it('deletes the note and closes when the delete button is clicked', () => {
    setNoteForWord('dog', 'собака');
    mount();
    act(() => { openNoteModal('dog'); });

    const delBtn = document.querySelector('.prf-delete-btn-cancel') as HTMLButtonElement;
    act(() => { delBtn.click(); });

    expect(getNoteForWord('dog')).toBe('');
    expect(document.getElementById('note-overlay')).toBeNull();
  });

  it('saves and closes on Ctrl+Enter', () => {
    mount();
    act(() => { openNoteModal('bird'); });
    const textarea = document.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'птах'); });
    act(() => { textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', ctrlKey: true, bubbles: true })); });

    expect(getNoteForWord('bird')).toBe('птах');
    expect(document.getElementById('note-overlay')).toBeNull();
  });

  it('saves and closes on Escape', () => {
    mount();
    act(() => { openNoteModal('fish'); });
    const textarea = document.querySelector('.note-textarea') as HTMLTextAreaElement;
    act(() => { setTextareaValue(textarea, 'риба'); });
    act(() => { textarea.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });

    expect(getNoteForWord('fish')).toBe('риба');
    expect(document.getElementById('note-overlay')).toBeNull();
  });

  it('closes when clicking the backdrop', () => {
    mount();
    act(() => { openNoteModal('owl'); });
    const overlay = document.getElementById('note-overlay') as HTMLElement;
    act(() => { overlay.dispatchEvent(new MouseEvent('click', { bubbles: true })); });
    expect(document.getElementById('note-overlay')).toBeNull();
  });
});
