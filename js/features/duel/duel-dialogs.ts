// Vymova — js/features/duel-dialogs.ts
// Reusable styled dialogs (replace ugly browser prompt()/confirm()) — pure
// DOM manipulation over static markup in index.html, zero dependency on
// duel room/game state.

// ── Reusable styled code input (replaces ugly browser prompt) ─
// The dialog is a single shared set of DOM elements (#code-input-*), so two
// overlapping _askCode() calls (join-tournament, reply-to-challenge, and
// spectate can each trigger one) would otherwise stack a second set of
// `_ok`/`_cancel`/`_key` listeners on top of the first's — one click on OK
// would then fire both closures and resolve both callers' promises with the
// same value, even though only the second dialog's title/desc was ever
// visible. Tracking the currently-open call lets a new one cancel it first.
let _activeCodeClose: ((val: string | null) => void) | null = null;

export function _askCode(title: string, desc: string): Promise<string | null> {
  return new Promise((resolve) => {
    _activeCodeClose?.(null);

    const overlay = document.getElementById('code-input-overlay') as HTMLElement;
    const titleEl = document.getElementById('code-input-title')!;
    const descEl = document.getElementById('code-input-desc')!;
    const inp = document.getElementById('code-input-field') as HTMLInputElement;
    const okBtn = document.getElementById('code-input-ok')!;
    const cancelBtn = document.getElementById('code-input-cancel')!;

    titleEl.textContent = title;
    descEl.textContent = desc;
    inp.value = '';
    inp.placeholder = 'ABC-123';
    overlay.style.display = 'flex';
    setTimeout(() => inp.focus(), 80);

    function _close(val: string | null): void {
      overlay.style.display = 'none';
      okBtn.removeEventListener('click', _ok);
      cancelBtn.removeEventListener('click', _cancel);
      inp.removeEventListener('keydown', _key);
      if (_activeCodeClose === _close) _activeCodeClose = null;
      resolve(val);
    }
    function _ok(): void {
      const v = inp.value.replace(/[-\s]/g, '').toUpperCase();
      if (v.length >= 6) _close(v);
      else inp.style.borderColor = 'var(--danger)';
    }
    function _cancel(): void {
      _close(null);
    }
    function _key(e: KeyboardEvent): void {
      inp.style.borderColor = '';
      // Auto-format: insert dash after 3rd char
      let v = inp.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
      if (v.length > 3) v = v.slice(0, 3) + '-' + v.slice(3);
      inp.value = v.slice(0, 7);
      if (e.key === 'Enter') _ok();
      if (e.key === 'Escape') _cancel();
    }
    okBtn.addEventListener('click', _ok);
    cancelBtn.addEventListener('click', _cancel);
    inp.addEventListener('keydown', _key);
    _activeCodeClose = _close;
  });
}

// ── Styled confirm dialog (replaces browser confirm()) ────────
export function _showConfirm(title: string, message: string, okLabel: string): Promise<boolean> {
  return new Promise((resolve) => {
    const overlay = document.getElementById('confirm-overlay') as HTMLElement | null;
    if (!overlay) {
      resolve(window.confirm(message));
      return;
    }
    const titleEl = document.getElementById('confirm-title');
    const msgEl = document.getElementById('confirm-message');
    const okBtn = document.getElementById('confirm-ok') as HTMLButtonElement | null;
    const cancelBtn = document.getElementById('confirm-cancel') as HTMLButtonElement | null;
    if (!okBtn || !cancelBtn) {
      resolve(window.confirm(message));
      return;
    }
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;
    okBtn.textContent = okLabel;
    overlay.style.display = 'flex';
    const ovl = overlay!,
      ok = okBtn!,
      cancel = cancelBtn!;
    function _close(val: boolean): void {
      ovl.style.display = 'none';
      ok.removeEventListener('click', _ok);
      cancel.removeEventListener('click', _cancel);
      resolve(val);
    }
    function _ok(): void {
      _close(true);
    }
    function _cancel(): void {
      _close(false);
    }
    ok.addEventListener('click', _ok);
    cancel.addEventListener('click', _cancel);
    // Escape = cancel
    const _key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        _cancel();
        document.removeEventListener('keydown', _key);
      }
      if (e.key === 'Enter') {
        _ok();
        document.removeEventListener('keydown', _key);
      }
    };
    document.addEventListener('keydown', _key);
  });
}
