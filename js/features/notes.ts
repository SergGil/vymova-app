// English Words App — js/features/notes.ts
// Personal notes / mnemonics per word

const _notes: Record<string, string> = {};
try { Object.assign(_notes, JSON.parse(localStorage.getItem('ew_notes') ?? '{}')); } catch (e) {}

function _save(): void {
  try { localStorage.setItem('ew_notes', JSON.stringify(_notes)); } catch (e) {}
}

export function getNoteForWord(w: string): string { return _notes[w] ?? ''; }
export function hasNote(w: string): boolean { return !!_notes[w]; }
export function setNoteForWord(w: string, text: string): void {
  if (text?.trim()) _notes[w] = text.trim();
  else delete _notes[w];
  _save();
}

// ── Modal UI ──────────────────────────────────────────────────
let _overlay: HTMLElement | null = null;
let _textarea: HTMLTextAreaElement | null = null;
let _currentWord: string | null = null;

function _ensureModal(): void {
  if (_overlay) return;
  _overlay = document.createElement('div');
  _overlay.id = 'note-overlay';
  _overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:99999;display:none;align-items:center;justify-content:center;padding:16px;';

  const panel = document.createElement('div');
  panel.className = 'note-panel';

  const header = document.createElement('div');
  header.className = 'note-header';

  const title = Object.assign(document.createElement('div'), {
    className: 'note-title', id: 'note-word-title',
  });
  const closeBtn = Object.assign(document.createElement('button'), {
    className: 'page-close-btn', textContent: '✕',
  });
  closeBtn.addEventListener('click', _close);
  header.append(title, closeBtn);

  const hint = document.createElement('div');
  hint.style.cssText = 'font-size:.75rem;color:var(--text3);margin-bottom:8px;';
  hint.textContent = '📝 Запиши мнемоніку, асоціацію або власний приклад';

  _textarea = document.createElement('textarea');
  _textarea.className = 'note-textarea';
  _textarea.placeholder = 'Наприклад: "abate" = "а батон убавився" — зменшуватись...';
  _textarea.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') _close();
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { _save2(); _close(); }
  });

  const footer = document.createElement('div');
  footer.style.cssText = 'display:flex;gap:8px;margin-top:10px;';

  const delBtn = Object.assign(document.createElement('button'), {
    className: 'prf-delete-btn prf-delete-btn-cancel',
    textContent: '🗑 Видалити',
  });
  delBtn.style.flex = '0 0 auto';
  delBtn.addEventListener('click', () => {
    if (_currentWord) setNoteForWord(_currentWord, '');
    _close(); _refreshCard();
  });

  const saveBtn = Object.assign(document.createElement('button'), {
    className: 'prf-delete-btn prf-delete-btn-confirm',
    textContent: '💾 Зберегти  (Ctrl+↵)',
  });
  saveBtn.style.background = 'var(--accent)';
  saveBtn.addEventListener('click', () => { _save2(); _close(); });

  footer.append(delBtn, saveBtn);
  panel.append(header, hint, _textarea, footer);
  _overlay.appendChild(panel);
  _overlay.addEventListener('click', (e: MouseEvent) => {
    if (e.target === _overlay) { _save2(); _close(); }
  });
  document.body.appendChild(_overlay);
}

function _save2(): void {
  if (_currentWord && _textarea) setNoteForWord(_currentWord, _textarea.value);
  _refreshCard();
}
function _refreshCard(): void {
  try { (window.render as (() => void) | undefined)?.(); } catch (e) {}
}
function _close(): void {
  if (_overlay) _overlay.style.display = 'none';
  _currentWord = null;
}

export function openNoteModal(word: string): void {
  _ensureModal();
  _currentWord = word;
  const title = document.getElementById('note-word-title');
  if (title) title.textContent = '📝 Нотатка: ' + word;
  if (_textarea) _textarea.value = getNoteForWord(word);
  if (_overlay) _overlay.style.display = 'flex';
  setTimeout(() => _textarea?.focus(), 50);
}
