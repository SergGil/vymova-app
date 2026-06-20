// Vymova — js/config.ts
// Build-time config for features that need an external backend. The repo
// ships with no backend deployed — these stay empty so the app builds and
// runs fully offline; deploying worker/ and setting the env var enables the
// gated features (see worker/README.md).

// Cloudflare Worker base URL proxying Gemini for the AI tutor / voice roleplay.
// Set VITE_AI_PROXY_URL at build time once the worker (see worker/) is deployed.
export const AI_PROXY_URL: string = (import.meta.env.VITE_AI_PROXY_URL ?? '').replace(/\/$/, '');

export const AI_TUTOR_ENABLED: boolean = AI_PROXY_URL.length > 0;
