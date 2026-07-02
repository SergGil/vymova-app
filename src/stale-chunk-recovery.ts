// Vymova — src/stale-chunk-recovery.ts
// Every page load resolves lazy chunk imports (js/features/*, js/modes/*)
// against whatever build was live when the tab first opened. If a new
// deploy replaces the whole dist/ output while the tab stays open — GitHub
// Pages doesn't keep old hashed chunk files around — the next feature the
// user opens 404s ("Failed to fetch dynamically imported module") instead
// of loading, since that exact hash no longer exists on the server. A
// reload fetches the current index.html (network-first per sw.js) and
// current chunk hashes, which fixes it. Reload at most once per session so
// a genuine outage doesn't loop forever.
const RELOADED_KEY = 'ew_stale_chunk_reloaded';

export function isStaleChunkError(message: string): boolean {
  return /Failed to fetch dynamically imported module|error loading dynamically imported module/i.test(
    message,
  );
}

export function initStaleChunkRecovery(
  win: Window = window,
  reload: () => void = () => location.reload(),
): void {
  function reloadOnce(): void {
    if (sessionStorage.getItem(RELOADED_KEY)) return;
    sessionStorage.setItem(RELOADED_KEY, '1');
    reload();
  }
  win.addEventListener('vite:preloadError', reloadOnce);
  win.addEventListener('unhandledrejection', (e) => {
    const msg = String((e.reason as { message?: string } | undefined)?.message ?? e.reason ?? '');
    if (isStaleChunkError(msg)) reloadOnce();
  });
}
