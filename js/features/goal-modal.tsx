// Vymova — js/features/goal-modal.tsx
// "Daily goal" modal, opened via the gear icon (#goal-set-btn) in the game bar.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { getGameData, saveGameData } from './game/game.ts';
import { t } from './i18n.ts';
import { renderGameBar } from './game/render-game-bar.ts';
import {
  Dialog,
  DialogOverlay,
  DialogPopup,
  DialogPortal,
} from '../../src/components/ui/dialog.tsx';

export function GoalModal(): ReactElement | null {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('20');
  const [shake, setShake] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const btn = document.getElementById('goal-set-btn');
    const onOpen = (e: Event) => {
      e.stopPropagation();
      setValue(String(getGameData().goalMax || 20));
      setOpen(true);
    };
    btn?.addEventListener('click', onOpen);
    return () => btn?.removeEventListener('click', onOpen);
  }, []);

  useEffect(() => {
    if (open)
      setTimeout(() => {
        inputRef.current?.focus();
        inputRef.current?.select();
      }, 50);
  }, [open]);

  if (!open) return null;

  function save(): void {
    const val = parseInt(value, 10);
    if (val >= 1 && val <= 500) {
      const d = getGameData();
      d.goalMax = val;
      saveGameData(d);
      renderGameBar();
      setOpen(false);
    } else {
      inputRef.current?.focus();
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  return (
    <Dialog open onOpenChange={(nextOpen) => setOpen(nextOpen)}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <DialogPopup
          style={{
            background: 'var(--modal-bg,var(--card))',
            borderRadius: 16,
            padding: '24px 20px',
            maxWidth: 300,
            width: '90%',
            textAlign: 'center',
            boxShadow: '0 8px 32px rgba(0,0,0,.2)',
          }}
        >
          <div
            style={{
              fontSize: '1rem',
              fontWeight: 600,
              marginBottom: 6,
              color: 'var(--text)',
              textAlign: 'center',
            }}
          >
            {t('goal.modal.title')}
          </div>
          <div
            style={{
              fontSize: '.83rem',
              color: 'var(--text2)',
              marginBottom: 14,
              textAlign: 'center',
            }}
          >
            {t('goal.modal.desc')}
          </div>
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            min={1}
            max={500}
            value={value}
            onChange={(e) => setValue(e.target.value.replace(/[^0-9]/g, '').slice(0, 3))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') save();
            }}
            className={shake ? 'shake animate-[shakeX_0.38s_ease] !border-[#e74c3c]' : ''}
            style={{
              width: '100%',
              padding: 10,
              border: '1.5px solid var(--border)',
              borderRadius: 10,
              fontSize: '1.1rem',
              textAlign: 'center',
              fontFamily: 'inherit',
              background: 'var(--bg)',
              color: 'var(--text)',
              outline: 'none',
              boxSizing: 'border-box',
              marginBottom: 14,
            }}
          />
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setOpen(false)}
              style={{
                flex: 1,
                padding: 9,
                border: '1.5px solid var(--border)',
                borderRadius: 8,
                background: 'var(--bg)',
                color: 'var(--text2)',
                fontSize: '.9rem',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {t('goal.modal.cancel')}
            </button>
            <button
              onClick={save}
              style={{
                flex: 1,
                padding: 9,
                border: 'none',
                borderRadius: 8,
                background: 'var(--accent)',
                color: '#fff',
                fontSize: '.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              {t('goal.modal.save')}
            </button>
          </div>
        </DialogPopup>
      </DialogPortal>
    </Dialog>
  );
}
