// Vymova — js/core/analytics.ts
// Optional Firebase Analytics (Google Analytics 4 under the hood) init.
// Inert by default: does nothing unless VITE_FIREBASE_CONFIG (see
// firebase-app.ts) is set AND its parsed object includes a measurementId —
// the same config used for App Check, so setting it up for App Check alone
// does not silently turn analytics on too.
//
// See public/privacy.html's "Usage analytics" section — that page must stay
// accurate to whatever this module actually does on a given deployment; if
// this file's behavior changes, that page needs the matching update.
//
// Known gap: this does not show a cookie/tracking consent prompt before
// loading GA — if this deployment has EU visitors, standard practice (and in
// many jurisdictions, a legal requirement) is consent before any such script
// loads. No consent-management UI exists in this app yet; adding one is a
// separate, larger feature, not something this module attempts.
const FIREBASE_CONFIG_RAW = (import.meta.env.VITE_FIREBASE_CONFIG ?? '').trim();

function _hasMeasurementId(): boolean {
  if (!FIREBASE_CONFIG_RAW) return false;
  try {
    const config = JSON.parse(FIREBASE_CONFIG_RAW) as Record<string, unknown>;
    return typeof config.measurementId === 'string' && config.measurementId.length > 0;
  } catch (e) {
    return false;
  }
}

let _installed = false;

export async function initAnalytics(): Promise<void> {
  if (_installed || !_hasMeasurementId()) return;
  _installed = true;
  const { getFirebaseApp } = await import('./firebase-app.ts');
  const app = await getFirebaseApp();
  if (!app) return;
  try {
    const { getAnalytics, isSupported } = await import('firebase/analytics');
    // isSupported() rules out environments Analytics can't run in (Safari
    // private browsing, some in-app webviews without IndexedDB/cookies) —
    // calling getAnalytics() directly there throws instead of no-op-ing.
    if (!(await isSupported())) return;
    getAnalytics(app);
  } catch (e) {
    console.warn('[analytics] failed to initialize, continuing without it:', e);
  }
}
