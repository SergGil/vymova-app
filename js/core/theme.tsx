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
    } else if (!saved) {
      // No explicit preference yet — settings.tsx's system-color-scheme
      // auto-detection may already have applied body.dark; match it so the
      // first click actually toggles away from the visible state instead of
      // just making the already-dark look "official" by writing ew_theme.
      setIsDark(document.body.classList.contains('dark'));
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
