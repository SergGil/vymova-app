// Vymova — js/core/app-check.ts
// Optional Firebase App Check token attachment for the Realtime Database
// REST calls (duel-firebase.ts, cloud-sync.tsx, leaderboard.tsx). Entirely
// inert by default — getAppCheckHeaders() resolves to {} synchronously-ish
// (no network, no dynamic import even) until BOTH env vars below are set,
// AND App Check enforcement is turned on for Realtime Database in the
// Firebase Console (attaching the header alone does nothing until
// enforcement is on — RTDB just ignores an unrecognized header).
//
// Deliberately NOT wiring this into the REST calls' *data* path — this is
// about proving a request comes from a real build of this app, a different
// concern from docs/legacy-modernization-roadmap.md section 5's "don't
// switch duel-firebase.ts to the SDK" (that's about keeping manual
// compare-and-swap control over writes, unaffected by this).
//
// Firebase Console setup this depends on (parallel to worker/README.md's
// /chat setup, but for App Check instead of the Gemini key):
//   1. Project settings → General → Add app → Web — copy the resulting
//      firebaseConfig object into VITE_FIREBASE_CONFIG (see firebase-app.ts).
//   2. App Check → register the web app → reCAPTCHA v3 → copy the site key
//      into VITE_FIREBASE_APPCHECK_SITE_KEY.
//   3. App Check → APIs → Realtime Database → Enforce.
// Steps 1, 2, and 3 can only be done by whoever owns the Firebase project —
// nothing in this codebase can complete them.
import { getFirebaseApp } from './firebase-app.ts';

const SITE_KEY = (import.meta.env.VITE_FIREBASE_APPCHECK_SITE_KEY ?? '').trim();

// Cached across calls — initializeAppCheck() isn't meant to run per-request,
// unlike getToken() below (which the SDK itself caches and silently
// refreshes, so calling it again per RTDB request is the intended, cheap
// usage once the instance exists).
let _appCheckPromise: Promise<import('firebase/app-check').AppCheck | null> | null = null;

async function _initAppCheck(): Promise<import('firebase/app-check').AppCheck | null> {
  if (!SITE_KEY) return null;
  const app = await getFirebaseApp();
  if (!app) return null;
  try {
    const { initializeAppCheck, ReCaptchaV3Provider } = await import('firebase/app-check');
    return initializeAppCheck(app, {
      provider: new ReCaptchaV3Provider(SITE_KEY),
      isTokenAutoRefreshEnabled: true,
    });
  } catch (e) {
    console.warn('[app-check] failed to initialize, continuing without it:', e);
    return null;
  }
}

function _getAppCheck(): Promise<import('firebase/app-check').AppCheck | null> {
  if (!_appCheckPromise) _appCheckPromise = _initAppCheck();
  return _appCheckPromise;
}

// {} when unconfigured, on init failure, or on token-fetch failure — every
// caller merges this into an existing headers object, so "no header" is
// always a safe, silent fallback to today's behavior (no App Check at all),
// never a thrown error blocking a real duel/sync/leaderboard request.
export async function getAppCheckHeaders(): Promise<Record<string, string>> {
  if (!SITE_KEY) return {};
  const appCheck = await _getAppCheck();
  if (!appCheck) return {};
  try {
    const { getToken } = await import('firebase/app-check');
    const { token } = await getToken(appCheck);
    return { 'X-Firebase-AppCheck': token };
  } catch (e) {
    return {};
  }
}
