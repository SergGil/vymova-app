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
    '../../data/countries/vn.svg',
    '../../data/countries/bd.svg',
    '../../data/countries/id.svg',
    '../../data/countries/ng.svg',
    '../../data/countries/kr.svg',
    '../../data/countries/ir.svg',
    '../../data/countries/tz.svg',
    '../../data/countries/my.svg',
    '../../data/countries/th.svg',
    '../../data/countries/az.svg',
    '../../data/countries/ro.svg',
    '../../data/countries/hu.svg',
    '../../data/countries/cz.svg',
    '../../data/countries/kz.svg',
    '../../data/countries/se.svg',
    '../../data/countries/ge.svg',
    '../../data/countries/hr.svg',
    '../../data/countries/rs.svg',
    '../../data/countries/ba.svg',
    '../../data/countries/bg.svg',
    '../../data/countries/sk.svg',
    '../../data/countries/am.svg',
    '../../data/countries/dk.svg',
    '../../data/countries/fi.svg',
    '../../data/countries/no.svg',
    '../../data/countries/spqr.svg',
    '../../data/countries/lt.svg',
    '../../data/countries/lv.svg',
    '../../data/countries/ee.svg',
    '../../data/countries/si.svg',
    '../../data/countries/mk.svg',
    '../../data/countries/al.svg',
    '../../data/countries/is.svg',
    '../../data/countries/wls.svg',
    '../../data/countries/ph.svg',
    '../../data/countries/mn.svg',
    '../../data/countries/uz.svg',
    '../../data/countries/et.svg',
    '../../data/countries/eo.svg',
    '../../data/countries/za.svg',
    '../../data/countries/kg.svg',
    '../../data/countries/tj.svg',
    '../../data/countries/tm.svg',
    '../../data/countries/mt.svg',
    '../../data/countries/lu.svg',
    '../../data/countries/ht.svg',
    '../../data/countries/eu.svg',
    '../../data/countries/cat.svg',
    '../../data/countries/gal.svg',
    '../../data/countries/mm.svg',
    '../../data/countries/kh.svg',
    '../../data/countries/la.svg',
    '../../data/countries/np.svg',
    '../../data/countries/lk.svg',
    '../../data/countries/pk.svg',
    '../../data/countries/af.svg',
    '../../data/countries/so.svg',
    '../../data/countries/er.svg',
    '../../data/countries/sn.svg',
    '../../data/countries/mg.svg',
    '../../data/countries/zw.svg',
    '../../data/countries/mw.svg',
  ],
  { eager: true, query: '?url', import: 'default' },
) as Record<string, string>;

const FLAGS: Record<string, string> = {};
for (const path in modules) {
  // Most codes are 2-letter ISO country codes, but a few (e.g. 'spqr' for
  // Latin, which has no ISO country) are longer non-ISO identifiers — match
  // any run of letters/digits before .svg, not just exactly two.
  const code = path.match(/([a-z0-9]+)\.svg$/i)?.[1];
  if (code) FLAGS[code.toLowerCase()] = modules[path];
}

export function flagUrl(code: string): string | null {
  return FLAGS[code.toLowerCase()] ?? null;
}
