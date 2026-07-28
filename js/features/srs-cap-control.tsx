// Vymova — js/features/srs-cap-control.tsx
// −/+ control for the SRS daily new-card cap (#srs-new-cap-control),
// persisted to localStorage. Structural mirror of font-size-control.tsx.
import { useState, type ReactElement } from 'react';
import { getSrsNewDailyCap, setSrsNewDailyCap } from './game/game.ts';

const STEP = 5;
const MIN = 5;
const MAX = 50;

export function SrsNewCapControl(): ReactElement {
  const [cap, setCap] = useState(() => getSrsNewDailyCap());

  function change(delta: number): void {
    setCap((prev) => {
      const next = Math.min(MAX, Math.max(MIN, prev + delta));
      setSrsNewDailyCap(next);
      return next;
    });
  }

  return (
    <>
      <button
        id="btn-srs-cap-down"
        className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
        style={{ fontSize: 13, padding: '3px 10px', color: 'var(--text2)' }}
        onClick={() => change(-STEP)}
        disabled={cap <= MIN}
      >
        −
      </button>
      <span
        id="srs-cap-value"
        style={{ fontSize: '.85rem', color: 'var(--text2)', minWidth: 28, textAlign: 'center' }}
      >
        {cap}
      </span>
      <button
        id="btn-srs-cap-up"
        className="btn bg-[var(--btn-bg)] border-[var(--btn-border-color)] text-[var(--btn-color)] [transition:var(--btn-transition)] hover:bg-[var(--btn-hover-bg)] hover:text-[var(--btn-hover-color)] hover:border-[var(--btn-hover-border-fallback)] hover:shadow-[var(--btn-hover-shadow)] font-['DM_Sans',sans-serif] text-[13px] font-medium py-2 px-4 rounded-[10px] border cursor-pointer active:scale-[0.97] [@media(max-width:480px)]:min-h-[44px] [@media(max-width:480px)]:py-[10px] [@media(max-width:480px)]:px-[12px] [@media(max-width:480px)]:text-[12px] [@media(min-width:481px)_and_(max-width:640px)]:min-h-[40px] [@media(min-width:641px)_and_(max-width:900px)]:min-h-[38px]"
        style={{ fontSize: 13, padding: '3px 10px', color: 'var(--text2)' }}
        onClick={() => change(STEP)}
        disabled={cap >= MAX}
      >
        +
      </button>
    </>
  );
}
