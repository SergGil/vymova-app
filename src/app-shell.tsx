// src/app-shell.tsx
// docs/full-react-migration-roadmap.md, Phase 0: a fixed, named-slot
// destination for markup that later phases lift out of index.html's static
// shell into real JSX (sidebar nav, header toolbar, page-overlay chrome,
// mode-card grid). Until a phase claims a slot, it's empty and renders
// nothing — AppRoot's existing ~90 portals/controllers keep rendering
// unchanged via `children`, this wrapper doesn't touch them.
import type { ReactElement, ReactNode } from 'react';

export function AppShell({
  sidebar = null,
  header = null,
  mainContent = null,
  overlays = null,
  children,
}: {
  sidebar?: ReactNode;
  header?: ReactNode;
  mainContent?: ReactNode;
  overlays?: ReactNode;
  children?: ReactNode;
}): ReactElement {
  return (
    <>
      {sidebar}
      {header}
      {mainContent}
      {overlays}
      {children}
    </>
  );
}
