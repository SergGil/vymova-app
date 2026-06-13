// English Words App — js/features/font-size-control.tsx
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

  useEffect(() => { applySize(sz); }, [sz]);

  function change(delta: number): void {
    setSz(prev => Math.min(MAX, Math.max(MIN, prev + delta)));
  }

  return (
    <>
      <button id="btn-font-down" className="btn" style={{ fontSize: 11, padding: '3px 8px', color: 'var(--text2)' }} onClick={() => change(-10)}>A−</button>
      <span id="font-pct" style={{ fontSize: 11, color: 'var(--text3)', minWidth: 32, textAlign: 'center' }}>{sz}%</span>
      <button id="btn-font-up" className="btn" style={{ fontSize: 13, padding: '3px 8px', color: 'var(--text2)' }} onClick={() => change(10)}>A+</button>
    </>
  );
}

