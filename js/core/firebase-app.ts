// Vymova — js/core/firebase-app.ts
// Shared Firebase App singleton for app-check.ts and analytics.ts — both
// need the same initializeApp(config) instance, and calling initializeApp()
// twice for the same app throws ("Firebase App named '[DEFAULT]' already
// exists"), so this is the one place it happens.
// Set VITE_FIREBASE_CONFIG at build time (the firebaseConfig object from
// Firebase Console → Project settings → General → Add app → Web, stringified
// to one line) — unset means every caller of getFirebaseApp() stays inert,
// same "empty env var = feature off" pattern as VITE_AI_PROXY_URL.
const FIREBASE_CONFIG_RAW = (import.meta.env.VITE_FIREBASE_CONFIG ?? '').trim();

let _appPromise: Promise<import('firebase/app').FirebaseApp | null> | null = null;

async function _initApp(): Promise<import('firebase/app').FirebaseApp | null> {
  if (!FIREBASE_CONFIG_RAW) return null;
  try {
    const config = JSON.parse(FIREBASE_CONFIG_RAW) as Record<string, string>;
    const { initializeApp } = await import('firebase/app');
    return initializeApp(config);
  } catch (e) {
    console.warn('[firebase-app] failed to initialize, continuing without it:', e);
    return null;
  }
}

export function getFirebaseApp(): Promise<import('firebase/app').FirebaseApp | null> {
  if (!_appPromise) _appPromise = _initApp();
  return _appPromise;
}
