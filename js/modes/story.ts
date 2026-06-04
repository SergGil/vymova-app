// English Words App — js/modes/story.ts
// 📖 Story Mode: read short texts with vocabulary highlighted
// Words from deck appear highlighted → click to see translation
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { recordModeComplete } from '../features/game.ts';
import type { SpeakFn } from '../core/ui-helpers.ts';
import type { WordEntry } from '../../src/types.js';

// ── Built-in short stories ────────────────────────────────────
const STORIES = [
  {
    id: 'morning',
    title: 'A Busy Morning',
    level: 'A2',
    text: `Sarah woke up early in the morning. She felt tired because she had worked late the previous night. After a quick shower, she prepared a simple breakfast — toast with butter and a cup of coffee. While eating, she checked her phone and noticed several urgent messages from her colleague at work. She decided to leave the house earlier than usual to avoid the heavy traffic in the city. On the way to the office, she stopped at a small café to buy another coffee. The weather was cold and windy, so she walked fast. When she finally arrived at the office, her manager was already waiting with a new project for her to complete by the end of the day. It was going to be a very busy day.`,
  },
  {
    id: 'travel',
    title: 'The Journey',
    level: 'B1',
    text: `The expedition began at dawn, when the team gathered their equipment and prepared to depart. Their destination was a remote village located deep in the mountains, accessible only by a narrow path that wound through dense forest. The journey would take approximately three days on foot. Each member of the group carried a heavy backpack containing essential supplies — food, water, medical equipment, and warm clothing. Despite the difficult terrain, everyone maintained a positive attitude. By midday, they had covered considerable distance and decided to rest beside a clear mountain stream. The sound of flowing water and the fresh mountain air provided a welcome relief from the physical effort of the climb. As evening approached, they established camp and discussed their plans for the following day.`,
  },
  {
    id: 'science',
    title: 'A Scientific Discovery',
    level: 'B2',
    text: `The research team had been working for several months when they finally made a significant breakthrough. While analysing data from their latest experiment, they noticed an unusual pattern that contradicted their initial hypothesis. Rather than dismissing this anomaly, the lead scientist decided to investigate further. After conducting extensive additional tests, they concluded that the phenomenon they had observed was not only genuine but potentially revolutionary in its implications for the field. The discovery challenged several assumptions that had been accepted as fundamental principles for decades. Publishing their findings required careful documentation and rigorous peer review, a process that demanded considerable patience and attention to detail. When the paper was finally accepted by a prestigious scientific journal, the team felt a profound sense of achievement and anticipation about how their work might influence future research.`,
  },
];

// ── Word index from W ─────────────────────────────────────────
let _wordIdx: Map<string, number>;
function _getWordIdx(): Map<string, number> {
  if (_wordIdx) return _wordIdx;
  _wordIdx = new Map();
  (W as unknown as WordEntry[]).forEach((w, i) => _wordIdx.set(w[0].toLowerCase(), i));
  return _wordIdx;
}

// ── Render ────────────────────────────────────────────────────
let _currentStory: typeof STORIES[0] | null = null;
let _knownInStory = 0, _totalHighlighted = 0;

const overlay = document.getElementById('story-mode-overlay')! as HTMLElement;
const elTitle = document.getElementById('sm-title')!;
const elLevel = document.getElementById('sm-level')!;
const elText  = document.getElementById('sm-text')!  as HTMLElement;
const elStats = document.getElementById('sm-stats')!;
const elPopup = document.getElementById('sm-popup')! as HTMLElement;
const elPopupWord  = document.getElementById('sm-popup-word')!;
const elPopupTransl= document.getElementById('sm-popup-transl')!;
const elPopupIpa   = document.getElementById('sm-popup-ipa')!;
const elPopupSpeak = document.getElementById('sm-popup-speak')! as HTMLButtonElement;

function _highlightText(text: string): string {
  const wi = _getWordIdx();
  _knownInStory = 0; _totalHighlighted = 0;
  // Sort words by length desc to match longer phrases first
  const words = Array.from(wi.keys()).sort((a, b) => b.length - a.length);
  let result = text;
  const markers: {from:number;to:number;word:string}[] = [];

  for (const word of words) {
    if (word.length < 3) continue;
    const regex = new RegExp(`\\b(${word.replace(/[.*+?^${}()|\[\]\\]/g, '\\$&')}(?:s|ed|ing|er|est|ly)?)\\b`, 'gi');
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const overlap = markers.some(mk => m!.index < mk.to && m!.index + m![0].length > mk.from);
      if (!overlap) {
        markers.push({ from: m.index, to: m.index + m[0].length, word });
        _totalHighlighted++;
        if (state.known.has(word)) _knownInStory++;
      }
    }
  }

  // Sort by position descending, replace from end to preserve offsets
  markers.sort((a, b) => b.from - a.from);
  for (const mk of markers) {
    const isKnown = state.known.has(mk.word);
    const matched = text.slice(mk.from, mk.to);
    const cls = `sm-word${isKnown ? ' sm-known' : ''}`;
    result = result.slice(0, mk.from) +
      `<span class="${cls}" data-word="${mk.word}">${matched}</span>` +
      result.slice(mk.to);
  }
  return result;
}

function openStory(story: typeof STORIES[0]): void {
  _currentStory = story;
  elTitle.textContent = story.title;
  elLevel.textContent = story.level;
  elText.innerHTML = _highlightText(story.text);
  const known = _totalHighlighted > 0 ? Math.round(_knownInStory / _totalHighlighted * 100) : 0;
  elStats.textContent = `${_totalHighlighted} слів підсвічено · ${known}% вже відомі`;

  // Word click handler
  elText.querySelectorAll<HTMLElement>('.sm-word').forEach(span => {
    span.addEventListener('click', (e: MouseEvent) => {
      e.stopPropagation();
      const word = span.dataset.word ?? '';
      const wi = _getWordIdx();
      const idx = wi.get(word.toLowerCase());
      if (idx === undefined) return;
      const w = (W as unknown as WordEntry[])[idx];
      showPopup(w, span);
    });
  });

  overlay.style.display = 'flex';
  elPopup.style.display = 'none';
}

function showPopup(w: WordEntry, anchor: HTMLElement): void {
  const isFmtB = w[2]?.[0]==='/'||w[2]?.[0]==='[';
  const ipa = isFmtB ? w[2] : (w[4] ?? '');
  elPopupWord.textContent   = w[0];
  elPopupTransl.textContent = w[1];
  elPopupIpa.textContent    = ipa ? ipa.replace(/\\u([0-9a-fA-F]{4})/g, (_, c) => String.fromCharCode(parseInt(c,16))) : '';
  elPopupSpeak.onclick = () => (window.speak as SpeakFn | undefined)?.(w[0], elPopupSpeak);
  elPopup.style.display = 'flex';

  // Position near clicked word
  const rect = anchor.getBoundingClientRect();
  const pr   = elPopup.parentElement!.getBoundingClientRect();
  let top  = rect.bottom - pr.top + 8;
  let left = rect.left   - pr.left;
  // Clamp
  if (left + 200 > pr.width) left = pr.width - 210;
  if (left < 0) left = 0;
  elPopup.style.top  = top  + 'px';
  elPopup.style.left = left + 'px';
}

// Story picker
function renderPicker(): void {
  const picker = document.getElementById('sm-picker')! as HTMLElement;
  picker.innerHTML = STORIES.map(s => `
    <button class="sm-story-btn" data-id="${s.id}" style="
      display:block;width:100%;text-align:left;padding:12px 14px;margin-bottom:8px;
      border-radius:12px;border:1.5px solid var(--border);background:var(--bg);
      cursor:pointer;font-family:inherit;transition:border-color .15s;
    ">
      <div style="font-weight:700;font-size:.9rem;color:var(--text);">${s.title}</div>
      <div style="font-size:.75rem;color:var(--text3);margin-top:2px;">Рівень ${s.level}</div>
    </button>
  `).join('');
  picker.querySelectorAll<HTMLButtonElement>('.sm-story-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const story = STORIES.find(s => s.id === btn.dataset.id);
      if (story) { document.getElementById('sm-picker-view')!.style.display = 'none'; openStory(story); }
    });
  });
}

function open(): void {
  overlay.style.display = 'flex';
  document.getElementById('sm-story-view')!.style.display = 'none';
  document.getElementById('sm-picker-view')!.style.display = 'block';
  renderPicker();
}
function close(): void { overlay.style.display = 'none'; }

// Close popup on outside click
elText.addEventListener('click', () => { elPopup.style.display = 'none'; });
document.getElementById('sm-close')?.addEventListener('click', close);
overlay.addEventListener('click', (e: MouseEvent) => { if (e.target === overlay) close(); });
document.getElementById('btn-story')?.addEventListener('click', open);
document.getElementById('sm-back')?.addEventListener('click', () => {
  document.getElementById('sm-story-view')!.style.display = 'none';
  document.getElementById('sm-picker-view')!.style.display = 'block';
  if (_currentStory) recordModeComplete('story');
});
document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (e.key === 'Escape' && overlay.style.display === 'flex') close();
});
