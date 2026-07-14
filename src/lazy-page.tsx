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
//
// Two ways to say "load now": pass `page` (compares against nav-store's
// activePage — the vast majority of callers) or `active` (a boolean the
// caller computed itself from whatever reactive source makes sense for
// pages that don't live behind nav-store, e.g. WordDetailPage/StatsPage —
// see word-detail-trigger.ts/stats-trigger.ts's own small reactive stores,
// built for exactly this because those two have multiple real trigger paths
// that don't all go through nav-store's openPage()).
import { useEffect, useState, type ComponentType, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { useActivePage } from './nav-store.tsx';
import { getMountPoint } from './get-mount-point.ts';
import { isStaleChunkError, reloadOnce } from './stale-chunk-recovery.ts';
import { t } from '../js/features/i18n.ts';

type PageLoader = () => Promise<{ Page: ComponentType }>;

type LazyPageProps = { mountId?: string; loader: PageLoader } & (
  | { page: string; active?: undefined }
  | { active: boolean; page?: undefined }
);

const retryBtnStyle: React.CSSProperties = {
  display: 'block',
  margin: '2rem auto',
  padding: '0.6rem 1.2rem',
  cursor: 'pointer',
};

export function LazyPage({ page, active, mountId, loader }: LazyPageProps): ReactElement | null {
  const activePage = useActivePage();
  const shouldLoad = page !== undefined ? activePage === page : active;
  const [Page, setPage] = useState<ComponentType | null>(null);
  // 0 = not tried, 1 = one silent auto-retry already used, 2+ = manual retries.
  // A previous version swallowed every load failure via `.catch(() => {})`,
  // which left the sidebar button permanently dead on a genuine failure AND
  // (since the rejection was no longer unhandled) prevented
  // stale-chunk-recovery.ts's `unhandledrejection` listener from ever firing
  // on the classic post-deploy "this chunk hash no longer exists" 404.
  const [attempt, setAttempt] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (Page || !shouldLoad) return;
    let cancelled = false;
    loader()
      .then((m) => {
        if (!cancelled) setPage(() => m.Page);
      })
      .catch((err: unknown) => {
        if (cancelled) return;
        const msg = String((err as { message?: string } | undefined)?.message ?? err ?? '');
        if (isStaleChunkError(msg)) {
          reloadOnce();
          return;
        }
        if (attempt === 0) {
          setTimeout(() => setAttempt(1), 1200);
        } else {
          setFailed(true);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [shouldLoad, Page, loader, attempt]);

  if (!Page) {
    if (!failed || !shouldLoad) return null;
    const retry = (): void => {
      setFailed(false);
      setAttempt((n) => n + 1);
    };
    const btn = (
      <button type="button" style={retryBtnStyle} onClick={retry}>
        {t('common.loadFailed')}
      </button>
    );
    if (!mountId) return btn;
    const el = getMountPoint(mountId);
    return el ? createPortal(btn, el) : null;
  }
  if (!mountId) return <Page />;
  const el = getMountPoint(mountId);
  return el ? createPortal(<Page />, el) : null;
}
