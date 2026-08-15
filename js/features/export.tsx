// Vymova — js/features/export.tsx
// 🃏 ANKI/PDF EXPORT + SHARE
import { useEffect, useState, type ReactElement } from 'react';
import { getWordIndex } from '../core/word-index.ts';
import { W } from '../../data/words-data/words.js';
import { t } from './i18n.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { ProgressIO } from './progress-io.tsx';
import { CsvExportButton } from './csv-export-button.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../src/components/ui/select.tsx';

type WordIdx = Map<string, number>;

function _wi(): WordIdx | undefined {
  return getWordIndex();
}

// ExportInit (mounted once, permanently, in app-root.tsx) and
// BackupExportSection (mounted/unmounted as settings-page shows) are separate
// component instances that only used to agree on "which export filter is
// selected" via the #export-filter DOM node's .value — the same
// DOM-node-as-source-of-truth pattern the sel-tag/sel-range refactor
// eliminated elsewhere. This tiny module-level pair replaces that coupling
// so BackupExportSection's <select> can be a real controlled shadcn Select.
let _exportFilter = 'known';
export function getExportFilter(): string {
  return _exportFilter;
}
export function setExportFilter(value: string): void {
  _exportFilter = value;
}

export function ExportInit(): ReactElement | null {
  useEffect(() => {
    // ── Export helpers ─────────────────────────────────────────────
    function _exportSrc(): (typeof W)[number][] {
      const filter = getExportFilter();
      const wi = _wi();
      if (filter === 'known')
        return [...getKnownSnapshot('en')]
          .map((k) => (wi ? W[wi.get(k)!] : null))
          .filter((w): w is (typeof W)[number] => w !== null);
      if (filter === 'unknown')
        return W.filter((w) => !getKnownSnapshot('en').has(w[0]));
      return W.slice(); // all
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
        const ipa = w[4] ?? '';
        const enEx = w[2] ?? '';
        const uaEx = w[3] ?? '';
        const front = `${w[0]}${ipa ? `<br><small style="color:#888;font-style:italic">${ipa}</small>` : ''}`;
        const back = `${w[1]}${enEx ? `<br><hr><em style="color:#555">${enEx}</em>` : ''}${uaEx ? `<br><small style="color:#777">${uaEx}</small>` : ''}`;
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
          const ipa = w[4] ?? '';
          const enEx = w[2] ?? '';
          const uaEx = w[3] ?? '';
          return `<tr>
          <td style="padding:6px 10px;border:1px solid #ddd;color:#888;font-size:11px;">${i + 1}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;font-weight:600;">${w[0]}<br><span style="font-size:11px;color:#888;font-weight:400;">${ipa}</span></td>
          <td style="padding:6px 10px;border:1px solid #ddd;color:#444;">${w[1]}</td>
          <td style="padding:6px 10px;border:1px solid #ddd;font-size:11px;color:#666;font-style:italic;">${enEx}<br><span style="color:#888;">${uaEx}</span></td>
        </tr>`;
        })
        .join('');
      const filter = getExportFilter();
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
  const [filter, setFilter] = useState(getExportFilter);
  const onFilterChange = (value: string): void => {
    setFilter(value);
    setExportFilter(value);
  };

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
        <Select value={filter} onValueChange={(v) => onFilterChange(v as string)}>
          <SelectTrigger
            id="export-filter"
            className="h-auto rounded-[6px] border border-[var(--border)] bg-[var(--bg)] px-2 py-[3px] font-[inherit] text-[.72rem] text-[var(--text)]"
          >
            <SelectValue>
              {(v: string) =>
                ({
                  known: t('settings.exportKnown'),
                  unknown: t('settings.exportUnknown'),
                  all: t('settings.exportAll'),
                })[v] ?? v
              }
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="known">{t('settings.exportKnown')}</SelectItem>
            <SelectItem value="unknown">{t('settings.exportUnknown')}</SelectItem>
            <SelectItem value="all">{t('settings.exportAll')}</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
}
