// Vymova — js/features/duel/duel-dialogs.tsx
// Reusable styled code-input dialog (replaces ugly browser prompt()) — a
// single React-owned modal, mounted once via <CodeInputDialog/> (see
// src/app-root.tsx's Portal for #code-input-mount) and triggered
// imperatively from anywhere via _askCode(), so call sites (join-tournament,
// reply-to-challenge, spectate) don't need to know or care that it's React.
import { useEffect, useRef, useState, type ReactElement, type KeyboardEvent } from 'react';
import { t } from '../i18n.ts';
import { Dialog, DialogOverlay, DialogPopup, DialogPortal } from '../../../src/components/ui/dialog.tsx';

type DialogRequest = { title: string; desc: string };

let _open: ((req: DialogRequest) => void) | null = null;
let _activeResolve: ((val: string | null) => void) | null = null;

export function _askCode(title: string, desc: string): Promise<string | null> {
  return new Promise((resolve) => {
    // A still-pending previous call is cancelled, not left dangling — see
    // duel-dialogs.test.ts for the regression this guards against (two
    // overlapping callers used to both resolve off a single click, back
    // when this dialog was driven by raw DOM listeners).
    _activeResolve?.(null);
    _activeResolve = resolve;
    _open?.({ title, desc });
  });
}

export function CodeInputDialog(): ReactElement | null {
  const [req, setReq] = useState<DialogRequest | null>(null);
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    _open = (r) => {
      setReq(r);
      setValue('');
      setError(false);
    };
    return () => {
      _open = null;
    };
  }, []);

  useEffect(() => {
    if (!req) return;
    const id = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(id);
  }, [req]);

  const close = (val: string | null): void => {
    setReq(null);
    _activeResolve?.(val);
    _activeResolve = null;
  };

  const ok = (): void => {
    const v = value.replace(/[-\s]/g, '').toUpperCase();
    if (v.length >= 6) close(v);
    else setError(true);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setError(false);
    // Auto-format: insert a dash after the 3rd char (ABC-123).
    let v = e.target.value.replace(/[^A-Z0-9]/gi, '').toUpperCase();
    if (v.length > 3) v = v.slice(0, 3) + '-' + v.slice(3);
    setValue(v.slice(0, 7));
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') ok();
    if (e.key === 'Escape') close(null);
  };

  if (!req) return null;

  return (
    <Dialog
      open
      disablePointerDismissal
      onOpenChange={(nextOpen, eventDetails) => {
        if (nextOpen) return;
        // No backdrop-click-to-close, no global Escape-to-close — matches
        // the original, which had no backdrop click handler at all and only
        // closed on Escape via the input's own onKeyDown (still wired below,
        // unaffected by this since it calls close() directly, not through
        // Dialog's open state).
        if (eventDetails.reason === 'escape-key') {
          eventDetails.cancel();
        }
      }}
    >
      <DialogPortal>
        <DialogOverlay className="z-[30000] bg-black/60 p-4" />
        <DialogPopup
          className="z-[30000]"
          style={{
            background: 'var(--modal-bg, var(--card))',
            borderRadius: 18,
            padding: '24px 22px',
            maxWidth: 360,
            width: '100%',
            boxShadow: '0 12px 40px rgba(0,0,0,.35)',
          }}
        >
        <div
          id="code-input-title"
          style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: 6 }}
        >
          {req.title}
        </div>
        <div
          id="code-input-desc"
          style={{ fontSize: '.78rem', color: 'var(--text3)', marginBottom: 14 }}
        >
          {req.desc}
        </div>
        <input
          ref={inputRef}
          id="code-input-field"
          type="text"
          autoComplete="off"
          spellCheck={false}
          placeholder="ABC-123"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          style={{
            width: '100%',
            padding: '11px 14px',
            border: `2px solid ${error ? 'var(--danger)' : 'var(--border)'}`,
            borderRadius: 12,
            fontFamily: 'monospace',
            fontSize: '1.1rem',
            background: 'var(--bg)',
            color: 'var(--text)',
            outline: 'none',
            boxSizing: 'border-box',
            textAlign: 'center',
            letterSpacing: '.12em',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}
        />
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            id="code-input-cancel"
            onClick={() => close(null)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 10,
              border: '1.5px solid var(--border)',
              background: 'none',
              color: 'var(--text2)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.88rem',
            }}
          >
            {t('modal.cancelAlt')}
          </button>
          <button
            id="code-input-ok"
            onClick={ok}
            style={{
              flex: 2,
              padding: 10,
              borderRadius: 10,
              border: 'none',
              background: 'var(--accent)',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '.88rem',
            }}
          >
            OK
          </button>
        </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
