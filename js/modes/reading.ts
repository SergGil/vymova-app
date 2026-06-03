// English Words App — js/modes/reading.ts
// 📖 Reading mode: text with highlighted unknown words
import { state } from '../../src/state.ts';
import { saveKnown } from '../core/storage.ts';
import { W } from '../../data/words.js';
import { loadEpub } from '../features/epub.ts';
import { closePage, openPage } from '../features/sidebar.ts';
import type { WordEntry } from '../../src/types.js';

type TextEntry = { title: string; text: string; level: string };
type EpubBook  = { title: string; chapters: TextEntry[] };

const TEXTS: TextEntry[] = [
  { title: 'The Storm', level: 'B1', text: 'The dark clouds began to accumulate on the horizon. Scientists had predicted that the storm would abate by morning, but the wind only grew more fierce. People sought shelter in adjacent buildings, their anxiety visible on every face. The magnitude of the storm was unprecedented — it would inevitably alter the landscape of the region.' },
  { title: 'The Discovery', level: 'B2', text: 'The archaeologist had an intuition that something significant lay beneath the ancient ruins. After weeks of meticulous excavation, the team made a remarkable discovery. The artifacts were in pristine condition, their intricate patterns still vivid after centuries. The finding would substantially expand our knowledge of the civilization that had once flourished here.' },
  { title: 'The Forest', level: 'B1', text: 'She walked through the dense forest, her footsteps barely audible on the soft moss. The trees formed a natural canopy overhead, filtering the sunlight into scattered beams. A profound tranquility pervaded the air. She felt her tension gradually diminish as she ventured deeper into this serene sanctuary, far from the chaos of urban life.' },
  { title: 'Innovation', level: 'B2', text: 'The startup had developed an innovative technology that could potentially transform the industry. Investors were eager to collaborate with the founder, whose vision was both ambitious and pragmatic. The team worked with remarkable diligence to refine their product, anticipating that it would eventually disrupt conventional approaches to the problem.' },
  { title: 'The Journey', level: 'B2', text: 'The expedition set out at dawn, their equipment meticulously organized. The terrain proved more challenging than anticipated, forcing them to adapt their strategy. Despite the persistent obstacles, the team remained resilient and continued their ascent. By nightfall, they had reached an altitude that offered a breathtaking panoramic view of the vast, luminous valley below.' },
  { title: 'The Negotiation', level: 'B2', text: 'The two factions had been in conflict for decades. A neutral mediator was appointed to facilitate dialogue between the adversaries. The negotiations were tense, yet both sides demonstrated a willingness to compromise. The agreement they reached was considered a significant diplomatic achievement, though some critics remained skeptical about its long-term sustainability.' },
  { title: 'The Library', level: 'B1', text: 'The ancient library contained thousands of manuscripts, each one a valuable artifact of human knowledge. Scholars traveled from distant regions to consult these texts, which documented everything from astronomy to philosophy. The librarian took meticulous care to preserve each document, aware that even a single page could contain irreplaceable wisdom accumulated over centuries.' },
  { title: 'The Invention', level: 'B2', text: 'The engineer had been working on her invention for three years. The device was designed to convert solar energy into a portable, efficient power source. Her colleagues were initially skeptical, but the prototype demonstrated remarkable results. The invention had the potential to provide electricity to remote communities and substantially reduce dependence on conventional fuel sources.' },
  { title: 'The City', level: 'B1', text: 'The city had transformed dramatically over the past decade. Abandoned industrial areas had been converted into vibrant cultural districts. New sustainable architecture replaced outdated structures, and the urban landscape became more diverse and accessible. Residents who had witnessed the gradual transformation expressed profound pride in their community and optimism about its future prosperity.' },
  { title: 'The Mentor', level: 'B1', text: 'The young apprentice had much to learn, but her mentor was patient and perceptive. He recognized her innate talent and encouraged her to pursue challenges beyond her comfort zone. His guidance was subtle yet effective, allowing her to develop her abilities organically. Under his tutelage, she gradually became more confident and capable, eventually surpassing expectations.' },
];

let _currentTextIdx = 0;
let _epubBook: EpubBook | null = null;

const overlay = document.getElementById('reading-overlay');
if (overlay) {
  const elTitle  = document.getElementById('rd-title')!;
  const elLevel  = document.getElementById('rd-level')!;
  const elText   = document.getElementById('rd-text')!;
  const elWord   = document.getElementById('rd-popup-word')!;
  const elTrans  = document.getElementById('rd-popup-trans')!;
  const elIpa    = document.getElementById('rd-popup-ipa')!;
  const elPopup  = document.getElementById('rd-word-popup')! as HTMLElement;
  const elStats  = document.getElementById('rd-stats');
  const btnClose = document.getElementById('rd-close');
  const btnPrev  = document.getElementById('rd-prev-text') as HTMLButtonElement | null;
  const btnNext  = document.getElementById('rd-next-text') as HTMLButtonElement | null;

  let _dictIndex: Map<string, WordEntry> | null = null;
  let _stemCache: Record<string, WordEntry | false> = {};

  function _buildIndex(): void {
    if (_dictIndex) return;
    _dictIndex = new Map();
    (W as unknown as WordEntry[]).forEach(entry => {
      const key = entry[0].toLowerCase().replace(/\s*\([^)]*\)/g, '').trim().replace(/[^a-z]/g, '');
      if (key) _dictIndex!.set(key, entry);
    });
  }

  function invalidateReadingIndex(): void { _dictIndex = null; _stemCache = {}; }
  window.invalidateReadingIndex = invalidateReadingIndex;

  function _stems(w: string): string[] {
    const n = w.length, s: string[] = [];
    if (n > 5 && w.endsWith('ing')) { s.push(w.slice(0,-3)); s.push(w.slice(0,-3)+'e'); if(n>6&&w[n-4]===w[n-5]) s.push(w.slice(0,-4)); }
    if (n > 4 && w.endsWith('ed'))  { s.push(w.slice(0,-1)); s.push(w.slice(0,-2)); s.push(w.slice(0,-2)+'e'); if(n>5&&w[n-3]===w[n-4]) s.push(w.slice(0,-3)); }
    if (n > 3 && w.endsWith('ies')) s.push(w.slice(0,-3)+'y');
    if (n > 4 && w.endsWith('es'))  s.push(w.slice(0,-2));
    if (n > 3 && w.endsWith('s') && !w.endsWith('ss')) s.push(w.slice(0,-1));
    if (n > 4 && w.endsWith('er'))  { s.push(w.slice(0,-2)); s.push(w.slice(0,-2)+'e'); }
    if (n > 5 && w.endsWith('est')) { s.push(w.slice(0,-3)); s.push(w.slice(0,-3)+'e'); }
    if (n > 4 && w.endsWith('ly'))  { s.push(w.slice(0,-2)); s.push(w.slice(0,-2)+'le'); }
    if (n > 6 && w.endsWith('ness')) s.push(w.slice(0,-4));
    if (n > 6 && w.endsWith('less')) s.push(w.slice(0,-4));
    if (n > 5 && w.endsWith('ful'))  s.push(w.slice(0,-3));
    if (n > 6 && w.endsWith('ment')) { s.push(w.slice(0,-4)); s.push(w.slice(0,-4)+'e'); }
    if (n > 6 && w.endsWith('able')) { s.push(w.slice(0,-4)); s.push(w.slice(0,-4)+'e'); }
    if (n > 6 && w.endsWith('ible')) s.push(w.slice(0,-4));
    if (n > 6 && w.endsWith('tion')) s.push(w.slice(0,-4));
    if (n > 6 && w.endsWith('sion')) { s.push(w.slice(0,-4)); s.push(w.slice(0,-4)+'d'); }
    if (n > 5 && w.endsWith('ity'))  s.push(w.slice(0,-3));
    if (n > 5 && w.endsWith('al'))   s.push(w.slice(0,-2));
    return s.filter(x => x.length >= 3);
  }

  function _lookupWord(raw: string): WordEntry | null {
    const clean = raw.toLowerCase().replace(/[^a-z]/g, '');
    if (!clean || clean.length < 2) return null;
    if (_stemCache[clean] !== undefined) return (_stemCache[clean] as WordEntry | false) || null;
    _buildIndex();
    const hit = _dictIndex!.get(clean);
    if (hit) { _stemCache[clean] = hit; return hit; }
    for (const c of _stems(clean)) {
      const h = _dictIndex!.get(c);
      if (h) { _stemCache[clean] = h; return h; }
    }
    _stemCache[clean] = false; return null;
  }

  function _activeTexts(): TextEntry[] { return _epubBook ? _epubBook.chapters : TEXTS; }

  function _renderText(): void {
    const texts = _activeTexts(), t = texts[_currentTextIdx];
    if (!t) return;
    elTitle.textContent = _epubBook ? `${_epubBook.title} — Ч.${_currentTextIdx + 1}` : t.title;
    elLevel.textContent = _epubBook ? 'epub' : t.level;
    const chunks = t.text.split(/(\s+|[,\.!?;:'"()\-—]+)/);
    let knownCount = 0, unknownCount = 0;
    elText.innerHTML = chunks.map(chunk => {
      if (/^\s+$/.test(chunk) || /^[,\.!?;:'"()\-—]+$/.test(chunk)) return chunk;
      const w = _lookupWord(chunk);
      if (!w) return chunk;
      const isKnown = state.known.has(w[0]);
      if (isKnown) { knownCount++; return `<span class="rd-word rd-known" data-word="${w[0]}">${chunk}</span>`; }
      unknownCount++; return `<span class="rd-word rd-unknown" data-word="${w[0]}">${chunk}</span>`;
    }).join('');
    if (elStats) elStats.textContent = `Знаєш: ${knownCount} | Нові: ${unknownCount} слів у тексті`;
    elText.querySelectorAll<HTMLElement>('.rd-word').forEach(span => {
      span.addEventListener('click', (e: MouseEvent) => {
        e.stopPropagation();
        const wObj = _lookupWord(span.dataset.word ?? '');
        if (wObj) _showPopup(wObj);
      });
    });
    if (btnPrev) btnPrev.disabled = _currentTextIdx === 0;
    if (btnNext) btnNext.disabled = _currentTextIdx === _activeTexts().length - 1;
  }

  function _showPopup(w: WordEntry): void {
    elWord.textContent = w[0]; elTrans.textContent = w[1];
    let ipa = (w[4] ?? '').replace(/\\u([0-9a-fA-F]{4})/g, (_, code) => String.fromCharCode(parseInt(code, 16)));
    if (ipa && ipa[0] !== '[' && ipa[0] !== '/') ipa = '[' + ipa + ']';
    elIpa.textContent = ipa;
    elPopup.style.display = 'block';
    const isKnown = state.known.has(w[0]);
    const knowBtn = document.getElementById('rd-popup-know') as HTMLButtonElement | null;
    if (knowBtn) {
      knowBtn.textContent = isKnown ? '✓ Знаю' : '+ Вивчити';
      knowBtn.onclick = () => {
        if (!isKnown) {
          state.known.add(w[0]);
          saveKnown(state.known);
          (window.onWordLearned as (() => void) | undefined)?.();
        }
        elPopup.style.display = 'none'; _renderText();
      };
    }
    const speakBtn = document.getElementById('rd-popup-speak');
    if (speakBtn) speakBtn.onclick = () => { (window.speak as ((t: string, b: null) => void) | undefined)?.(w[0], null); };
  }

  function open(): void {
    closePage();
    const modesOvl = document.getElementById('modes-overlay') as HTMLElement | null;
    if (modesOvl) { modesOvl.classList.remove('as-page', 'open'); modesOvl.style.display = 'none'; }
    overlay!.classList.add('open'); _renderText();
  }
  function close(): void { overlay!.classList.remove('open'); elPopup.style.display = 'none'; openPage('modes'); }

  document.getElementById('btn-reading')?.addEventListener('click', open);
  btnClose?.addEventListener('click', close);
  btnPrev?.addEventListener('click', () => { if (_currentTextIdx > 0) { _currentTextIdx--; _renderText(); } });
  btnNext?.addEventListener('click', () => { if (_currentTextIdx < _activeTexts().length - 1) { _currentTextIdx++; _renderText(); } });

  const epubInput = document.getElementById('rd-epub-input') as HTMLInputElement | null;
  const epubBtn   = document.getElementById('rd-epub-btn');
  const epubProg  = document.getElementById('rd-epub-progress') as HTMLElement | null;

  epubBtn?.addEventListener('click', () => epubInput?.click());
  epubInput?.addEventListener('change', (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    (epubInput as HTMLInputElement).value = '';
    const bookTitle = file.name.replace(/\.epub$/i, '');
    if (epubProg) { epubProg.style.display = 'block'; epubProg.textContent = 'Завантаження…'; }
    loadEpub(file,
      (msg: string, pct: number) => { if (epubProg) epubProg.textContent = `${msg} (${pct}%)`; },
      (chunks: string[] | null, err: string | null) => {
        if (err || !chunks?.length) {
          if (epubProg) { epubProg.textContent = '❌ ' + (err ?? 'Розділів не знайдено'); setTimeout(() => { epubProg!.style.display = 'none'; }, 4000); }
          return;
        }
        _epubBook = { title: bookTitle, chapters: chunks.map(text => ({ text, title: bookTitle, level: 'epub' })) };
        _currentTextIdx = 0;
        if (epubProg) { epubProg.textContent = `✅ Завантажено: ${chunks.length} фрагментів`; setTimeout(() => { epubProg!.style.display = 'none'; }, 2500); }
        _renderText();
      }
    );
  });

  overlay!.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
  document.addEventListener('click', (e: MouseEvent) => {
    const t = e.target as HTMLElement;
    if (!t.closest('#rd-word-popup') && !t.closest('.rd-word')) elPopup.style.display = 'none';
  });
}
