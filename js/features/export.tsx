// Vymova — js/features/export.tsx
// 🃏 ANKI/PDF EXPORT + SHARE
import { useEffect, useRef, type ReactElement } from 'react';
import { getWordIndex } from '../core/word-index.ts';
import { W } from '../../data/words.js';
import { t } from './i18n.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { ProgressIO } from './progress-io.tsx';
import { CsvExportButton } from './csv-export-button.tsx';

type WordIdx = Map<string, number>;

function _wi(): WordIdx | undefined {
  return getWordIndex();
}

export function ExportInit(): ReactElement | null {
  // The static #export-filter <select> is the sole owner of "which filter is
  // selected" (nothing else reads or renders it) — tracked via a ref updated
  // on 'change' instead of re-querying the DOM at each export-button click.
  const filterRef = useRef('known');

  useEffect(() => {
    const filterSel = document.getElementById('export-filter') as HTMLSelectElement | null;
    if (filterSel) filterRef.current = filterSel.value || 'known';
    const onFilterChange = () => {
      filterRef.current = filterSel!.value || 'known';
    };
    filterSel?.addEventListener('change', onFilterChange);

    // ── Export helpers ─────────────────────────────────────────────
    function _exportSrc(): (typeof W)[number][] {
      const filter = filterRef.current;
      const wi = _wi();
      if (filter === 'known')
        return [...getKnownSnapshot('en')]
          .map((k) => (wi ? (W as any)[wi.get(k)!] : null))
          .filter(Boolean);
      if (filter === 'unknown')
        return (W as any[]).filter((w: string[]) => !getKnownSnapshot('en').has(w[0]));
      return (W as any[]).slice(); // all
    }

    // ── Anki Export (improved: IPA + both examples) ────────────────
    const onAnkiExport = () => {
      const rows = [
        '#separator:tab',
        '#html:true',
        '#deck:Vymova',
        '#notetype:Basic (and reversed)',
        '',
      ];
      const src = _exportSrc();
      src.forEach((w) => {
        if (!w) return;
        const ww = w as string[];
        const ipa = ww[4] ?? '';
        const enEx = ww[2] ?? '';
        const uaEx = ww[3] ?? '';
        const front = `${ww[0]}${ipa ? `<br><small style="color:#888;font-style:italic">${ipa}</small>` : ''}`;
        const back = `${ww[1]}${enEx ? `<br><hr><em style="color:#555">${enEx}</em>` : ''}${uaEx ? `<br><small style="color:#777">${uaEx}</small>` : ''}`;
        rows.push(`${front}\t${back}`);
      });
      const blob = new Blob([rows.join('\n')], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = Object.assign(document.createElement('a'), {
        href: url,
        download: `vymova_anki_${src.length}.txt`,
      });
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
    const btnAnkiExport = document.getElementById('btn-anki-export');
    btnAnkiExport?.addEventListener('click', onAnkiExport);

    // ── PDF Export via window.print ───────────────────────────────
    const onPdfExport = () => {
      const src = _exportSrc();
      if (!src.length) {
        alert(t('export.noWordsAlert'));
        return;
      }
      const rows = src
        .map((w, i) => {
          if (!w) return '';
          const ww = w as string[];
          const ipa = ww[4] ?? '';
          const enEx = ww[2] ?? '';
          const uaEx = ww[3] ?? '';
          return `<tr>
          <td style="padding:6px 10px;border:1px solid #ddd;color:#888;font-size:11px;">${i + 1}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;font-weight:600;">${ww[0]}<br><span style="font-size:11px;color:#888;font-weight:400;">${ipa}</span></td>
          <td style="padding:6px 10px;border:1px solid #ddd;color:#444;">${ww[1]}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;font-size:11px;color:#666;font-style:italic;">${enEx}<br><span style="color:#888;">${uaEx}</span></td>
        </tr>`;
        })
        .join('');
      const filter = filterRef.current;
      const filterLabel: Record<string, string> = {
        known: t('export.filter.known'),
        unknown: t('export.filter.unknown'),
        all: t('export.filter.all'),
      };
      const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Vymova — ${filterLabel[filter] || ''}</title>
      <style>body{font-family:Arial,sans-serif;font-size:13px;margin:20px;}h1{font-size:16px;margin-bottom:16px;}table{border-collapse:collapse;width:100%;}th{background:#f0f0f0;padding:6px 10px;border:1px solid #ddd;text-align:left;}td{vertical-align:top;}@media print{@page{margin:1.5cm;size:A4;}}</style>
      </head><body>
      <h1>📚 Vymova — ${filterLabel[filter] || ''} (${src.length} ${t('export.pdf.wordsSuffix')})</h1>
      <table><thead><tr><th>#</th><th>${t('export.pdf.wordCol')}</th><th>${t('export.pdf.translCol')}</th><th>${t('export.pdf.exampleCol')}</th></tr></thead><tbody>${rows}</tbody></table>
      <script>window.onload=()=>window.print();</script></body></html>`;
      const w = window.open('', '_blank');
      if (w) {
        w.document.write(html);
        w.document.close();
      }
    };
    const btnPdfExport = document.getElementById('btn-pdf-export');
    btnPdfExport?.addEventListener('click', onPdfExport);

    // ── Share ──────────────────────────────────────────────────────
    const onShare = () => {
      const code = (window.exportProgress as (() => string) | undefined)?.() ?? '';
      if (navigator.share) {
        navigator.share({ title: t('share.title'), text: code }).catch(() => {});
      } else {
        try {
          navigator.clipboard.writeText(code).then(() => {
            const btn = document.getElementById('btn-share')!;
            const orig = btn.textContent;
            btn.textContent = t('share.copied');
            setTimeout(() => {
              btn.textContent = orig;
            }, 2000);
          });
        } catch (e) {
          prompt(t('share.copyPrompt'), code);
        }
      }
    };
    const btnShare = document.getElementById('btn-share');
    btnShare?.addEventListener('click', onShare);

    return () => {
      filterSel?.removeEventListener('change', onFilterChange);
      btnAnkiExport?.removeEventListener('click', onAnkiExport);
      btnPdfExport?.removeEventListener('click', onPdfExport);
      btnShare?.removeEventListener('click', onShare);
    };
  }, []);

  return null;
}

// full-react-migration-roadmap.md Phase 6: the settings-page "Збереження
// прогресу" (backup/export) block's static markup — previously in
// index.html. ExportInit's wiring above is untouched (still finds these
// same ids via getElementById in its own effect, post-mount timing is
// unaffected either way). progress-io-buttons-mount/csv-export-mount's
// separate <Portal> wrappers in app-root.tsx are removed — nothing else
// referenced those wrapper ids — ProgressIO/CsvExportButton now render
// directly as children here instead (same simplification as HeaderLeft's
// CardIdx/CardKnownCount in Phase 3).
export function BackupExportSection(): ReactElement {
  return (
    <>
      <div className="backup-row" style={{ marginTop: 10 }}>
        <ProgressIO />
      </div>
      <div className="backup-row" style={{ marginTop: 6 }}>
        <button className="backup-btn" id="btn-anki-export" data-i18n="settings.ankiCsv">
          {t('settings.ankiCsv')}
        </button>
        <button className="backup-btn" id="btn-share" data-i18n="settings.share">
          {t('settings.share')}
        </button>
      </div>
      <div className="backup-row" style={{ marginTop: 6 }}>
        <CsvExportButton />
        <button className="backup-btn" id="btn-pdf-export" data-i18n="settings.pdfExport">
          {t('settings.pdfExport')}
        </button>
      </div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text3)', marginTop: 6 }}>
        <label htmlFor="export-filter" style={{ marginRight: 6 }} data-i18n="settings.exportLabel">
          {t('settings.exportLabel')}
        </label>
        <select
          id="export-filter"
          style={{
            padding: '3px 8px',
            border: '1px solid var(--border)',
            borderRadius: 6,
            background: 'var(--bg)',
            color: 'var(--text)',
            fontSize: '0.72rem',
            fontFamily: 'inherit',
          }}
        >
          <option value="known" data-i18n="settings.exportKnown">
            {t('settings.exportKnown')}
          </option>
          <option value="unknown" data-i18n="settings.exportUnknown">
            {t('settings.exportUnknown')}
          </option>
          <option value="all" data-i18n="settings.exportAll">
            {t('settings.exportAll')}
          </option>
        </select>
      </div>
    </>
  );
}
