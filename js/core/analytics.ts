// Vymova — js/core/analytics.ts
// Optional Firebase Analytics (Google Analytics 4 under the hood). Inert by
// default: does nothing unless VITE_FIREBASE_CONFIG (see firebase-app.ts) is
// set AND its parsed object includes a measurementId — the same config used
// for App Check, so setting it up for App Check alone does not silently
// turn analytics on too.
//
// GDPR-style consent gate: the actual GA script/network request never
// happens until the visitor explicitly accepts via
// js/features/analytics-consent-banner.tsx's AnalyticsConsentBanner — see
// getConsent()/setConsent() below. initIfConsented() (called at boot from
// src/main.ts) only proceeds if a *previous* visit already granted consent;
// the banner itself calls setConsent(true) directly on an in-session Accept
// click, which also triggers init immediately.
//
// See public/privacy.html's "Usage analytics" section — that page must stay
// accurate to whatever this module actually does on a given deployment; if
// this file's behavior changes, that page needs the matching update.
const FIREBASE_CONFIG_RAW = (import.meta.env.VITE_FIREBASE_CONFIG ?? '').trim();
const CONSENT_KEY = 'ew_analytics_consent';

export function hasAnalyticsConfig(): boolean {
  if (!FIREBASE_CONFIG_RAW) return false;
  try {
    const config = JSON.parse(FIREBASE_CONFIG_RAW) as Record<string, unknown>;
    return typeof config.measurementId === 'string' && config.measurementId.length > 0;
  } catch (e) {
    return false;
  }
}

// null = no decision made yet (banner should show, if hasAnalyticsConfig()).
export function getConsent(): boolean | null {
  const raw = localStorage.getItem(CONSENT_KEY);
  if (raw === '1') return true;
  if (raw === '0') return false;
  return null;
}

let _installed = false;

async function _doInit(): Promise<void> {
  if (_installed || !hasAnalyticsConfig()) return;
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

// Called by the consent banner's Accept/Decline buttons. granted=true starts
// loading Analytics immediately (this session); granted=false permanently
// records the decline (initIfConsented() below will keep no-op-ing on every
// future visit until the user clears site data).
export function setConsent(granted: boolean): void {
  localStorage.setItem(CONSENT_KEY, granted ? '1' : '0');
  if (granted) void _doInit();
}

// Boot-time entry point (src/main.ts) — only ever proceeds on a *returning*
// visitor who already accepted on a prior visit. A first-time visitor (or
// one who declined) gets no Analytics until/unless they accept via the
// banner, which calls setConsent(true) directly instead of this function.
export async function initIfConsented(): Promise<void> {
  if (getConsent() === true) await _doInit();
}
