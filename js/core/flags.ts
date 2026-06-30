// Vymova — js/core/flags.ts
// Local country-flag SVGs (data/countries/*.svg), keyed by lowercase ISO code.
// Bundled at build time instead of fetching from flagcdn.com — works offline
// and never shows a broken-image flash while the network request resolves.
//
// data/countries/ holds 250+ flags (every ISO code), but the voice picker
// only ever needs the handful of accents in voice.tsx's VOICE_MAP/_langFlag.
// Globbing '*.svg' would pull all 250+ into this chunk (most get inlined as
// base64, ballooning it by ~300KB) for the ~20 actually used — so glob only
// the codes we need. `query: '?url'` also keeps them as separate cacheable
// files instead of inlining, since this list may grow.
// import.meta.glob needs a statically-analyzable array literal — no mapping
// over a runtime array — so the paths are spelled out individually.
const modules = import.meta.glob(
  [
    '../../data/countries/us.svg',
    '../../data/countries/gb.svg',
    '../../data/countries/au.svg',
    '../../data/countries/in.svg',
    '../../data/countries/mx.svg',
    '../../data/countries/ar.svg',
    '../../data/countries/ca.svg',
    '../../data/countries/ie.svg',
    '../../data/countries/ua.svg',
    '../../data/countries/es.svg',
    '../../data/countries/fr.svg',
    '../../data/countries/it.svg',
    '../../data/countries/pt.svg',
    '../../data/countries/br.svg',
    '../../data/countries/de.svg',
    '../../data/countries/il.svg',
    '../../data/countries/sa.svg',
    '../../data/countries/pl.svg',
    '../../data/countries/cn.svg',
    '../../data/countries/gr.svg',
    '../../data/countries/jp.svg',
    '../../data/countries/tr.svg',
    '../../data/countries/nl.svg',
  ],
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const FLAGS: Record<string, string> = {};
for (const path in modules) {
  const code = path.match(/([a-z]{2})\.svg$/i)?.[1];
  if (code) FLAGS[code.toLowerCase()] = modules[path];
}

export function flagUrl(code: string): string | null {
  return FLAGS[code.toLowerCase()] ?? null;
}
