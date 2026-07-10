// Vymova — js/features/srs-cap-control.tsx
// −/+ control for the SRS daily new-card cap (#srs-new-cap-control),
// persisted to localStorage. Structural mirror of font-size-control.tsx.
import { useState, type ReactElement } from 'react';
import { getSrsNewDailyCap, setSrsNewDailyCap } from './game.ts';

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
        className="btn"
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
        className="btn"
        style={{ fontSize: 13, padding: '3px 10px', color: 'var(--text2)' }}
        onClick={() => change(STEP)}
        disabled={cap >= MAX}
      >
        +
      </button>
    </>
  );
}
