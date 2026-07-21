// Vymova — js/core/error-report.ts
// Forwards uncaught client-side errors to the AI-proxy Worker's /error
// endpoint (see worker/src/index.ts's handleError) so they're visible in
// `wrangler tail`/Cloudflare's Workers Logs instead of only ever surfacing
// via a user's bug report. No-op entirely when no Worker is deployed
// (AI_PROXY_URL unset) — same gate js/config.ts already uses for the AI
// tutor, since /error lives on that same Worker.
import { AI_PROXY_URL } from '../config.ts';
import { getWorkerClientId } from './worker-client-id.ts';

// Caps total reports per page load — a script stuck in a retry loop that
// throws every tick shouldn't be able to turn one bug into thousands of
// requests; the Worker's own rate limit (worker/src/index.ts) is the second,
// cross-tab layer of the same guard.
const MAX_REPORTS_PER_SESSION = 20;
let _reportCount = 0;

function report(message: string, stack?: string): void {
  if (!AI_PROXY_URL || _reportCount >= MAX_REPORTS_PER_SESSION) return;
  _reportCount++;
  // fetch(..., {keepalive:true}) rather than sendBeacon(): sendBeacon can't
  // set a JSON Content-Type (only CORS-safelisted types), and this isn't
  // exclusively a during-unload use case — keepalive covers the unload case
  // too, while staying consistent with how ai-tutor.tsx/voice-roleplay.tsx
  // already call this same Worker.
  try {
    fetch(`${AI_PROXY_URL}/error`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Client-Id': getWorkerClientId() },
      keepalive: true,
      body: JSON.stringify({
        message: message.slice(0, 2000),
        stack: stack?.slice(0, 8000),
        url: location.href.slice(0, 500),
        userAgent: navigator.userAgent.slice(0, 300),
      }),
    }).catch(() => {});
  } catch (e) {
    // Never let error reporting itself throw — that would recurse into the
    // 'error' listener below.
  }
}

let _installed = false;

export function initErrorReporting(): void {
  if (_installed || !AI_PROXY_URL) return;
  _installed = true;

  window.addEventListener('error', (e: ErrorEvent) => {
    // Cross-origin scripts loaded without CORS report as a bare "Script
    // error." with no stack/filename — browser security restriction, not
    // actionable noise worth a request.
    if (e.message === 'Script error.' && !e.filename) return;
    report(e.message || 'Unknown error', e.error?.stack);
  });

  window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
    const reason = e.reason as unknown;
    const message =
      reason instanceof Error ? reason.message : typeof reason === 'string' ? reason : 'Unhandled rejection';
    report(message, reason instanceof Error ? reason.stack : undefined);
  });
}
