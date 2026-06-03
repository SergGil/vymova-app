// English Words App — js/features/export.ts
// ════════ CSV EXPORT (Google Sheets) ════════
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';

const btn = document.getElementById('btn-csv-export') as HTMLButtonElement | null;
if (btn) {
  btn.addEventListener('click', () => {
    const BOM = '﻿';
    const rows: string[][] = [['English', 'Переклад', 'IPA', 'Приклад EN', 'Приклад UA', 'Статус']];
    const { known, deck } = state;
    const src = known.size > 0 ? W.filter(w => known.has(w[0])) : deck.slice(0, 500);

    src.forEach(w => {
      if (!w) return;
      let ipa = w[4] ?? '';
      try {
        if (ipa) ipa = JSON.parse('"' + ipa.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"');
      } catch (e) {}
      const exEn = (w[2] ?? '').replace(/<[^>]+>/g, '');
      rows.push([w[0], w[1], ipa, exEn, w[3] ?? '', known.has(w[0]) ? 'Знаю' : 'Не знаю']);
    });

    const csv = BOM + rows.map(row =>
      row.map(cell => {
        const s = String(cell ?? '').replace(/"/g, '""');
        return s.includes(',') || s.includes('"') || s.includes('\n') ? `"${s}"` : s;
      }).join(',')
    ).join('\r\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = Object.assign(document.createElement('a'), { href: url, download: 'english_words.csv' });
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });
}
