// Vymova — js/features/font-size-control.tsx
// A−/A+ font size control (#font-size-control), persisted to localStorage.
import { useEffect, useState, type ReactElement } from 'react';

const MIN = 70;
const MAX = 140;

function applySize(sz: number): void {
  document.documentElement.style.fontSize = sz + '%';
  localStorage.setItem('ew_fontsize', String(sz));
}

export function FontSizeControl(): ReactElement {
  const [sz, setSz] = useState(() => parseInt(localStorage.getItem('ew_fontsize') ?? '100', 10));

  useEffect(() => {
    applySize(sz);
  }, [sz]);

  function change(delta: number): void {
    setSz((prev) => Math.min(MAX, Math.max(MIN, prev + delta)));
  }

  return (
    <>
      <button
        id="btn-font-down"
        className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
        style={{ fontSize: 11, padding: '3px 8px', color: 'var(--text2)' }}
        onClick={() => change(-10)}
      >
        A−
      </button>
      <span
        id="font-pct"
        style={{ fontSize: 11, color: 'var(--text3)', minWidth: 32, textAlign: 'center' }}
      >
        {sz}%
      </span>
      <button
        id="btn-font-up"
        className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
        style={{ fontSize: 13, padding: '3px 8px', color: 'var(--text2)' }}
        onClick={() => change(10)}
      >
        A+
      </button>
    </>
  );
}
