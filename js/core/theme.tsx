// Vymova — js/core/theme.tsx
// Dark/light theme toggle
import { useState, useEffect, type ReactElement } from 'react';
import { Switch } from '../../src/components/ui/switch.tsx';

function currentlyDark(): boolean {
  const saved = localStorage.getItem('ew_theme');
  // No explicit preference yet — settings.tsx's system-color-scheme
  // auto-detection may already have applied body.dark; match it so the
  // first click actually toggles away from the visible state instead of
  // just making the already-dark look "official" by writing ew_theme.
  return saved ? saved === 'dark' : document.body.classList.contains('dark');
}

export function setDarkMode(next: boolean): void {
  document.body.classList.toggle('dark', next);
  localStorage.setItem('ew_theme', next ? 'dark' : 'light');
}

// Reactive read of the current dark/light state. A MutationObserver, not
// just this component's own click handling, because body.dark can also
// flip from settings.tsx's system prefers-color-scheme listener — there's
// no other way for this hook to learn about that external change.
export function useIsDarkMode(): boolean {
  const [isDark, setIsDark] = useState(currentlyDark);
  useEffect(() => {
    const mo = new MutationObserver(() => setIsDark(currentlyDark()));
    mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => mo.disconnect();
  }, []);
  return isDark;
}

export function ThemeToggle(): ReactElement {
  const isDark = useIsDarkMode();
  return <Switch checked={isDark} onCheckedChange={setDarkMode} />;
}
