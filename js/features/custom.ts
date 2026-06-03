// English Words App — js/features/custom.ts
// ➕ CUSTOM WORDS + ANKI EXPORT + SHARE
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { recordCustomWordAdded } from './game.ts';

type CustomWord = { en: string; ua: string; ex_en?: string; ex_ua?: string };
type WordIdx = Map<string, number>;
type PlaySound = (s: string) => void;

const modal   = document.getElementById('custom-modal')! as HTMLElement;
const enInp   = document.getElementById('cw-en')!    as HTMLInputElement;
const uaInp   = document.getElementById('cw-ua')!    as HTMLInputElement;
const exEnInp = document.getElementById('cw-ex-en')! as HTMLInputElement;
const exUaInp = document.getElementById('cw-ex-ua')! as HTMLInputElement;
const errEl   = document.getElementById('cw-error')!;
const listEl  = document.getElementById('custom-words-list');

function _cw(): CustomWord[] {
  return (window as Window & { _customWords?: CustomWord[] })._customWords ?? [];
}
function _wi(): WordIdx | undefined {
  return (window as Window & { _wordIdx?: WordIdx })._wordIdx;
}

function openModal(): void {
  enInp.value = ''; uaInp.value = ''; exEnInp.value = ''; exUaInp.value = ''; errEl.textContent = '';
  renderList(); modal.className = 'open';
  setTimeout(() => { try { enInp.focus(); } catch (e) {} }, 60);
}
function closeModal(): void { modal.className = ''; }

function renderList(): void {
  if (!listEl) return;
  const cw = _cw();
  if (!cw.length) { listEl.innerHTML = '<div style="font-size:.8rem;color:var(--text3);text-align:center;">Власних слів ще немає</div>'; return; }
  listEl.innerHTML = cw.map((c, i) =>
    `<div class="custom-word-row"><span class="cw-en">${c.en}</span><span class="cw-ua">${c.ua}</span>` +
    `<button class="custom-del" data-i="${i}" title="Видалити">✕</button></div>`
  ).join('');
  listEl.querySelectorAll<HTMLButtonElement>('.custom-del').forEach(btn => {
    btn.addEventListener('click', () => {
      const i = parseInt(btn.dataset.i ?? '0');
      const cw2 = _cw(); cw2.splice(i, 1);
      (window as Window & { _customWords?: CustomWord[] })._customWords = cw2;
      localStorage.setItem('ew_custom', JSON.stringify(cw2));
      renderList();
      const key = btn.closest('.custom-word-row')?.querySelector('.cw-en')?.textContent ?? '';
      if (key) {
        (window.setDeck as ((d: unknown[]) => void) | undefined)?.(state.deck.filter(w => w[0] !== key));
      }
    });
  });
}

document.getElementById('cw-save')?.addEventListener('click', () => {
  const en = enInp.value.trim(), ua = uaInp.value.trim();
  const exEn = exEnInp.value.trim(), exUa = exUaInp.value.trim();
  if (!en || !ua) { errEl.textContent = 'Введіть обидва поля'; return; }
  const enLow = en.toLowerCase();
  let dupEn = false;
  _wi()?.forEach((_, key) => { if (key.toLowerCase() === enLow) dupEn = true; });
  if (dupEn) { errEl.textContent = `⚠️ Слово "${en}" вже є у словнику`; return; }
  if (en.length < 2) { errEl.textContent = 'Слово занадто коротке'; return; }
  // Sanitize HTML to prevent XSS when example sentences are inserted via innerHTML
  const sanitize = (s: string) => s.replace(/[<>"'&]/g, c => ({'<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','&':'&amp;'})[c] ?? c);
  const safeExEn = sanitize(exEn), safeExUa = sanitize(exUa);
  const entry = [en, ua, safeExEn || en + '.', safeExUa || ua + '.', ''] as unknown as (typeof W)[number];
  (W as unknown as typeof entry[]).push(entry);
  _wi()?.set(en, W.length - 1);
  const cw = _cw(); cw.push({ en, ua, ex_en: safeExEn, ex_ua: safeExUa });
  (window as Window & { _customWords?: CustomWord[] })._customWords = cw;
  localStorage.setItem('ew_custom', JSON.stringify(cw));
  state.deck.push(entry as unknown as (typeof state.deck)[0]);
  errEl.textContent = '';
  recordCustomWordAdded();
  (window.invalidateReadingIndex as (() => void) | undefined)?.();
  (window.invalidateCatCache as (() => void) | undefined)?.();
  (window.invalidateSimilarCache as (() => void) | undefined)?.();
  enInp.value = ''; uaInp.value = ''; exEnInp.value = ''; exUaInp.value = '';
  renderList();
  try { (window.playSound as PlaySound | undefined)?.('know'); } catch (e) {}
});

[enInp, uaInp, exEnInp, exUaInp].forEach(inp => {
  inp?.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Enter') document.getElementById('cw-save')?.click(); });
});

document.getElementById('btn-add-word')?.addEventListener('click', openModal);
document.getElementById('custom-modal-close')?.addEventListener('click', closeModal);
modal.addEventListener('click', (e: MouseEvent) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e: KeyboardEvent) => { if (e.key === 'Escape' && modal.className === 'open') closeModal(); });

// ── Export helpers ─────────────────────────────────────────────
function _exportSrc(): (typeof W[number])[] {
  const filter = (document.getElementById('export-filter') as HTMLSelectElement)?.value ?? 'known';
  const wi = _wi();
  if (filter === 'known') return [...state.known].map(k => wi ? (W as any)[wi.get(k)!] : null).filter(Boolean);
  if (filter === 'unknown') return (W as any[]).filter((w: string[]) => !state.known.has(w[0]));
  if (filter === 'custom') return _cw().map(c => { const i = wi?.get(c.en); return i !== undefined ? (W as any)[i] : null; }).filter(Boolean);
  return (W as any[]).slice(); // all
}

// ── Anki Export (improved: IPA + both examples) ────────────────
document.getElementById('btn-anki-export')?.addEventListener('click', () => {
  const rows = ['#separator:tab', '#html:true', '#deck:English Words App', '#notetype:Basic (and reversed)', ''];
  const src = _exportSrc();
  src.forEach(w => {
    if (!w) return;
    const ww = w as string[];
    const isFmtB = ww[2] && (ww[2][0]==='/'||ww[2][0]==='[');
    const ipa  = isFmtB ? ww[2] : (ww[4] ?? '');
    const enEx = isFmtB ? (ww[3] ?? '') : (ww[2] ?? '');
    const uaEx = isFmtB ? (ww[4] ?? '') : (ww[3] ?? '');
    const front = `${ww[0]}${ipa ? `<br><small style="color:#888;font-style:italic">${ipa}</small>` : ''}`;
    const back  = `${ww[1]}${enEx ? `<br><hr><em style="color:#555">${enEx}</em>` : ''}${uaEx ? `<br><small style="color:#777">${uaEx}</small>` : ''}`;
    rows.push(`${front}\t${back}`);
  });
  const blob = new Blob([rows.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = Object.assign(document.createElement('a'), { href: url, download: `english_words_anki_${src.length}.txt` });
  document.body.appendChild(a); a.click(); document.body.removeChild(a); URL.revokeObjectURL(url);
});

// ── PDF Export via window.print ───────────────────────────────
document.getElementById('btn-pdf-export')?.addEventListener('click', () => {
  const src = _exportSrc();
  if (!src.length) { alert('Немає слів для експорту. Змініть фільтр.'); return; }
  const rows = src.map((w, i) => {
    if (!w) return '';
    const ww = w as string[];
    const isFmtB = ww[2] && (ww[2][0]==='/'||ww[2][0]==='[');
    const ipa  = isFmtB ? ww[2] : (ww[4] ?? '');
    const enEx = isFmtB ? (ww[3] ?? '') : (ww[2] ?? '');
    const uaEx = isFmtB ? (ww[4] ?? '') : (ww[3] ?? '');
    return `<tr>
      <td style="padding:6px 10px;border:1px solid #ddd;color:#888;font-size:11px;">${i+1}</td>
      <td style="padding:6px 10px;border:1px solid #ddd;font-weight:600;">${ww[0]}<br><span style="font-size:11px;color:#888;font-weight:400;">${ipa}</span></td>
      <td style="padding:6px 10px;border:1px solid #ddd;color:#444;">${ww[1]}</td>
      <td style="padding:6px 10px;border:1px solid #ddd;font-size:11px;color:#666;font-style:italic;">${enEx}<br><span style="color:#888;">${uaEx}</span></td>
    </tr>`;
  }).join('');
  const filter = (document.getElementById('export-filter') as HTMLSelectElement)?.value ?? 'known';
  const filterLabel: Record<string,string> = { known:'вивчені', unknown:'невивчені', all:'всі', custom:'власні' };
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8"><title>English Words — ${filterLabel[filter]||''}</title>
  <style>body{font-family:Arial,sans-serif;font-size:13px;margin:20px;}h1{font-size:16px;margin-bottom:16px;}table{border-collapse:collapse;width:100%;}th{background:#f0f0f0;padding:6px 10px;border:1px solid #ddd;text-align:left;}td{vertical-align:top;}@media print{@page{margin:1.5cm;size:A4;}}</style>
  </head><body>
  <h1>📚 English Words — ${filterLabel[filter]||''} (${src.length} слів)</h1>
  <table><thead><tr><th>#</th><th>Слово / IPA</th><th>Переклад</th><th>Приклад</th></tr></thead><tbody>${rows}</tbody></table>
  <script>window.onload=()=>window.print();<\/script></body></html>`;
  const w = window.open('', '_blank');
  if (w) { w.document.write(html); w.document.close(); }
});

// ── Share ──────────────────────────────────────────────────────
document.getElementById('btn-share')?.addEventListener('click', () => {
  const code = (window.exportProgress as (() => string) | undefined)?.() ?? '';
  if (navigator.share) {
    navigator.share({ title: 'English Words — мій прогрес', text: code }).catch(() => {});
  } else {
    try {
      navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('btn-share')!;
        const orig = btn.textContent;
        btn.textContent = '✅ Скопійовано!';
        setTimeout(() => { btn.textContent = orig; }, 2000);
      });
    } catch (e) { prompt('Скопіюй цей код:', code); }
  }
});
