// Vymova — js/features/csv-export-button.tsx
// "Google Sheets CSV" export button (settings → backup section).
import { type ReactElement } from 'react';
import { W } from '../../data/words.js';
import { t } from './i18n.ts';
import { useStateVersion } from '../../src/store.ts';
import { getKnownSnapshot } from '../../src/known-words-store.ts';
import { getDeckSnapshot } from '../../src/deck-store.ts';

function exportCsv(): void {
  const BOM = '﻿';
  const rows: string[][] = [
    [
      t('csv.colEnglish'),
      t('csv.colTranslation'),
      t('csv.colIpa'),
      t('csv.colExampleEn'),
      t('csv.colExampleUa'),
      t('csv.colStatus'),
    ],
  ];
  const known = getKnownSnapshot('en');
  const deck = getDeckSnapshot();
  const src = known.size > 0 ? W.filter((w) => known.has(w[0])) : deck.slice(0, 500);

  src.forEach((w) => {
    if (!w) return;
    let ipa = w[4] ?? '';
    try {
      if (ipa) ipa = JSON.parse('"' + ipa.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"');
    } catch (e) {}
    const exEn = (w[2] ?? '').replace(/<[^>]+>/g, '');
    rows.push([
      w[0],
      w[1],
      ipa,
      exEn,
      w[3] ?? '',
      known.has(w[0]) ? t('csv.statusKnown') : t('csv.statusUnknown'),
    ]);
  });

  const csv =
    BOM +
    rows
      .map((row) =>
        row
          .map((cell) => {
            const s = String(cell ?? '').replace(/"/g, '""');
            return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s}"` : s;
          })
          .join(','),
      )
      .join('\r\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: 'vymova.csv' });
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function CsvExportButton(): ReactElement {
  useStateVersion();
  return (
    <button className="backup-btn" id="btn-csv-export" onClick={exportCsv}>
      {t('settings.sheetsCsv')}
    </button>
  );
}
