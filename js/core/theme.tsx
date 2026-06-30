// Vymova — js/core/theme.tsx
// Dark/light theme toggle
import { useState, useEffect, type ReactElement } from 'react';

export function ThemeToggle(): ReactElement {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('ew_theme');
    if (saved === 'dark') {
      document.body.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <button
      id="btn-theme"
      title="Темна/світла тема"
      style={{ display: 'none' }}
      onClick={() => {
        const next = !isDark;
        document.body.classList.toggle('dark', next);
        localStorage.setItem('ew_theme', next ? 'dark' : 'light');
        setIsDark(next);
      }}
    >
      {isDark ? '☀️' : '🌙'}
    </button>
  );
}
