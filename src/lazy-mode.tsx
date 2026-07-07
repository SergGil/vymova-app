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

type LoadedMode = { Page: ComponentType; open: () => void };
type ModeLoader = () => Promise<LoadedMode>;

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

  // Load the module the first time its button is clicked.
  useEffect(() => {
    if (mod) return;
    const btn = document.getElementById(btnId);
    if (!btn) return;
    const onClick = (): void => {
      loader()
        .then(setMod)
        .catch(() => {});
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

  if (!mod) return null;
  const el = document.getElementById(mountId);
  if (!el) return null;
  const { Page } = mod;
  return createPortal(<Page />, el);
}
