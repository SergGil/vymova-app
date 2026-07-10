// Vymova — src/lazy-page.tsx
// Defers a sidebar-navigation page's JS until the user actually navigates to
// it, instead of every such page being bundled into the initial load just
// because app-root.tsx imported all of them statically. This is the
// nav-store-driven sibling of lazy-mode.tsx's LazyMode (used for the ~20
// game modes opened via a single dedicated sidebar button that don't go
// through the shared page-nav system) — js/features/sidebar.tsx's
// openPage(page) dispatches into src/nav-store.tsx, whose reactive
// useActivePage() this subscribes to.
//
// Unlike LazyMode, no "was the triggering click missed" workaround is
// needed: activePage is reactive state, not a one-shot event, so once it
// matches `page` this component naturally re-renders and shows itself —
// sidebar.tsx's openPage() already toggles the overlay's own CSS visibility
// independently of whether this component's dynamic import has resolved
// yet (same brief loading gap LazyMode already has for modes).
//
// Some pages manage their own portal internally (look up their own target
// element and call createPortal themselves, e.g. AiTutorPage) — for those,
// omit `mountId` and this just renders <Page/> directly once loaded. Others
// (AchievementsPage, GrammarPage, ...) expect the caller to portal them
// into a specific element — pass `mountId` for those.
import { useEffect, useState, type ComponentType, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useActivePage } from './nav-store.tsx';

type PageLoader = () => Promise<{ Page: ComponentType }>;

export function LazyPage({
  page,
  mountId,
  loader,
}: {
  page: string;
  mountId?: string;
  loader: PageLoader;
}): ReactElement | null {
  const activePage = useActivePage();
  const [Page, setPage] = useState<ComponentType | null>(null);

  useEffect(() => {
    if (Page || activePage !== page) return;
    loader()
      .then((m) => setPage(() => m.Page))
      .catch(() => {});
  }, [activePage, Page, page, loader]);

  if (!Page) return null;
  if (!mountId) return <Page />;
  const el = document.getElementById(mountId);
  return el ? createPortal(<Page />, el) : null;
}
