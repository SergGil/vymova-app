// Vymova — js/features/info-icon.tsx
// Маленька кнопка "ℹ️", що показує/ховає пояснювальну панель (InfoNote) поруч.
// Стан тримає компонент, що використовує цю пару — щоб панель могла бути
// блочним сиблінгом поза flex-рядком із самою кнопкою.
import type { ReactNode } from 'react';

export function InfoIcon({ open, onToggle, label }: { open: boolean; onToggle: () => void; label: string }) {
  return (
    <button
      type="button"
      className={'info-icon-btn' + (open ? ' active' : '')}
      aria-label={label}
      aria-expanded={open}
      title={label}
      onClick={e => { e.stopPropagation(); onToggle(); }}
    >
      ℹ️
    </button>
  );
}

export function InfoNote({ children }: { children: ReactNode }) {
  return (
    <div className="info-note" onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
}
