// Vymova — src/lazy-mode.tsx
// Defers a game mode's JS — and the module-level DOM wiring each one does
// via bindOverlayOpenClose() — until the user actually clicks its sidebar
// button, instead of every mode being bundled into the initial load just
// because app-root.tsx imported all of them statically.
//
// Each mode still owns its open/close state entirely on its own (the
// existing `_open`/`_close` + bindOverlayOpenClose pattern is untouched).
// This wrapper only decides *when* to dynamically import the module and
// mount its Page component for the very first time. Once that's happened,
// the mode's own bindOverlayOpenClose listener (attached as a side effect
// of the import) handles every subsequent open/close directly — this
// wrapper gets out of the way.
import { useEffect, useRef, useState, type ComponentType, type ReactElement } from 'react';
import { createPortal } from 'react-dom';
import { getMountPoint } from './get-mount-point.ts';
import { isStaleChunkError, reloadOnce } from './stale-chunk-recovery.ts';
import { t } from '../js/features/i18n.ts';

type LoadedMode = { Page: ComponentType; open: () => void };
type ModeLoader = () => Promise<LoadedMode>;

const retryBtnStyle: React.CSSProperties = {
  display: 'block',
  margin: '2rem auto',
  padding: '0.6rem 1.2rem',
  cursor: 'pointer',
};

export function LazyMode({
  btnId,
  mountId,
  loader,
}: {
  btnId: string;
  mountId: string;
  loader: ModeLoader;
}): ReactElement | null {
  const [mod, setMod] = useState<LoadedMode | null>(null);
  const openedRef = useRef(false);
  // A previous version swallowed every load failure via `.catch(() => {})`,
  // leaving the sidebar button permanently dead on a genuine failure and
  // (since the rejection was no longer unhandled) preventing
  // stale-chunk-recovery.ts's `unhandledrejection` listener from ever firing
  // on the classic post-deploy "this chunk hash no longer exists" 404.
  const [failed, setFailed] = useState(false);

  // Load the module the first time its button is clicked.
  useEffect(() => {
    if (mod) return;
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const onClick = (): void => {
      setFailed(false);
      loader()
        .then(setMod)
        .catch((err: unknown) => {
          const msg = String((err as { message?: string } | undefined)?.message ?? err ?? '');
          if (isStaleChunkError(msg)) {
            reloadOnce();
            return;
          }
          setFailed(true);
        });
    };
    btn.addEventListener('click', onClick);
    return () => btn.removeEventListener('click', onClick);
  }, [mod, btnId, loader]);

  // The click that triggered the load happened before the Page component
  // existed, so nothing called its internal open() for that click yet —
  // do it once, right after the freshly-mounted Page has registered its
  // own _open/_close (child effects run before this parent effect).
  useEffect(() => {
    if (mod && !openedRef.current) {
      openedRef.current = true;
      mod.open();
    }
  }, [mod]);

  // The mount point lives inside the mode's overlay wrapper, which normally
  // only gets the visibility-toggling 'open' class from the mode's own
  // (not-yet-loaded) open()/close() — so on a load failure nothing has ever
  // made it visible. Toggle 'open' on the nearest `*-overlay` ancestor
  // ourselves so the retry button is actually seen instead of rendering
  // into a display:none container.
  useEffect(() => {
    if (!failed) return;
    const overlay = getMountPoint(mountId)?.closest<HTMLElement>('[id$="-overlay"]');
    overlay?.classList.add('open');
    return () => overlay?.classList.remove('open');
  }, [failed, mountId]);

  if (!mod) {
    if (!failed) return null;
    const el = getMountPoint(mountId);
    if (!el) return null;
    return createPortal(
      <button
        type="button"
        style={retryBtnStyle}
        onClick={() => document.getElementById(btnId)?.click()}
      >
        {t('common.loadFailed')}
      </button>,
      el,
    );
  }
  const el = getMountPoint(mountId);
  if (!el) return null;
  const { Page } = mod;
  return createPortal(<Page />, el);
}
