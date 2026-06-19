// English Words App — js/modes/story.tsx
// 📖 Story Mode: read short texts with vocabulary highlighted
// Words from deck appear highlighted → click to see translation
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { W } from '../../data/words.js';
import { recordModeComplete } from '../features/game.ts';
import { speak } from '../features/speech.ts';
import { t } from '../features/i18n.ts';
import type { WordEntry } from '../../src/types.js';
import { esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry } from '../features/mode-utils.ts';
import { getKnowLang } from '../features/lang-pair-select.tsx';

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

type Story = typeof STORIES[0];

function getWordInLang(w: WordEntry, lang: string): string {
  switch (lang) {
    case 'ua': return w[1];
    case 'es': return esEntry(w[0])?.[0] ?? '';
    case 'fr': return frEntry(w[0])?.[0] ?? '';
    case 'it': return itEntry(w[0])?.[0] ?? '';
    case 'pt': return ptEntry(w[0])?.[0] ?? '';
    case 'de': return deEntry(w[0])?.[0] ?? '';
    case 'he': return heEntry(w[0])?.[0] ?? '';
    case 'ar': return arEntry(w[0])?.[0] ?? '';
    default:   return w[0];
  }
}

// ── Word index from W ─────────────────────────────────────────
let _wordIdx: Map<string, number>;
function _getWordIdx(): Map<string, number> {
  if (_wordIdx) return _wordIdx;
  _wordIdx = new Map();
  (W as unknown as WordEntry[]).forEach((w, i) => _wordIdx.set(w[0].toLowerCase(), i));
  return _wordIdx;
}

function _highlightText(text: string): { html: string; total: number; known: number } {
  const wi = _getWordIdx();
  let knownInStory = 0, totalHighlighted = 0;
  const lowerText = text.toLowerCase();
  const words = Array.from(wi.keys()).sort((a, b) => b.length - a.length);
  let result = text;
  const markers: { from: number; to: number; word: string }[] = [];

  for (const word of words) {
    if (word.length < 3) continue;
    if (!lowerText.includes(word)) continue;
    const regex = new RegExp(`\\b(${word.replace(/[.*+?^${}()|\[\]\\]/g, '\\$&')}(?:s|ed|ing|er|est|ly)?)\\b`, 'gi');
    let m: RegExpExecArray | null;
    while ((m = regex.exec(text)) !== null) {
      const overlap = markers.some(mk => m!.index < mk.to && m!.index + m![0].length > mk.from);
      if (!overlap) {
        markers.push({ from: m.index, to: m.index + m[0].length, word });
        totalHighlighted++;
        if (state.known.has(word)) knownInStory++;
      }
    }
  }

  markers.sort((a, b) => b.from - a.from);
  for (const mk of markers) {
    const isKnown = state.known.has(mk.word);
    const matched = text.slice(mk.from, mk.to);
    const cls = `sm-word${isKnown ? ' sm-known' : ''}`;
    result = result.slice(0, mk.from) +
      `<span class="${cls}" data-word="${mk.word}">${matched}</span>` +
      result.slice(mk.to);
  }
  return { html: result, total: totalHighlighted, known: knownInStory };
}

let _open: (() => void) | null = null;
let _close: (() => void) | null = null;

function openStoryMode(): void { _open?.(); }
function closeStoryMode(): void { _close?.(); }

type Popup = { word: string; trans: string; ipa: string; top: number; left: number };

export function StoryPage(): ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const [story, setStory] = useState<Story | null>(null);
  const [popup, setPopup] = useState<Popup | null>(null);
  const [completed, setCompleted] = useState(false);

  const textRef = useRef<HTMLDivElement>(null);

  const markCompleted = (): void => {
    if (story && !completed) {
      setCompleted(true);
      recordModeComplete('story');
    }
  };

  useEffect(() => {
    _open = () => {
      setIsOpen(true);
      setStory(null);
      setPopup(null);
      const overlay = document.getElementById('story-mode-overlay');
      if (overlay) overlay.style.display = 'flex';
    };
    _close = () => {
      markCompleted();
      setIsOpen(false);
      const overlay = document.getElementById('story-mode-overlay');
      if (overlay) overlay.style.display = 'none';
    };
    return () => { _open = null; _close = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [story, completed]);

  // Escape to close
  useEffect(() => {
    function onKeydown(e: KeyboardEvent): void {
      const overlay = document.getElementById('story-mode-overlay');
      if (e.key === 'Escape' && overlay?.style.display === 'flex') closeStoryMode();
    }
    document.addEventListener('keydown', onKeydown);
    return () => document.removeEventListener('keydown', onKeydown);
  }, []);

  const goBack = (): void => {
    markCompleted();
    setStory(null);
    setPopup(null);
  };

  const onTextClick = (e: { target: EventTarget | null; stopPropagation: () => void }): void => {
    const target = (e.target as HTMLElement).closest<HTMLElement>('.sm-word');
    if (!target) { setPopup(null); return; }
    e.stopPropagation();
    const word = target.dataset.word ?? '';
    const wi = _getWordIdx();
    const idx = wi.get(word.toLowerCase());
    if (idx === undefined) return;
    const w = (W as unknown as WordEntry[])[idx];
    const ipaRaw = w[4] ?? '';
    const ipa = ipaRaw ? ipaRaw.replace(/\\u([0-9a-fA-F]{4})/g, (_m, c) => String.fromCharCode(parseInt(c, 16))) : '';

    const rect = target.getBoundingClientRect();
    const parent = textRef.current?.parentElement;
    const pr = parent?.getBoundingClientRect() ?? { top: 0, left: 0, width: 0 };
    let top = rect.bottom - pr.top + (parent?.scrollTop ?? 0) + 8;
    let left = rect.left - pr.left + (parent?.scrollLeft ?? 0);
    if (left + 200 > pr.width) left = pr.width - 210;
    if (left < 0) left = 0;
    setPopup({ word: w[0], trans: getWordInLang(w, getKnowLang()) || w[1], ipa, top, left });
  };

  const speakPopup = (): void => {
    if (!popup) return;
    try { speak(popup.word, document.getElementById('sm-popup-speak')); } catch (e) {}
  };

  if (!isOpen) return <></>;

  const highlighted = story ? _highlightText(story.text) : null;
  const pct = highlighted && highlighted.total > 0 ? Math.round(highlighted.known / highlighted.total * 100) : 0;

  return (
    <>
      <div className="page-header">
        <div>
          <div className="page-title">{story ? story.title : '📖 Story Mode'}</div>
          {story && <div style={{ fontSize: '.72rem', color: 'var(--accent)', marginTop: 2 }}>{story.level}</div>}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {story && (
            <button
              style={{ padding: '6px 12px', borderRadius: 9, border: '1.5px solid var(--border)', background: 'none', color: 'var(--text2)', cursor: 'pointer', fontFamily: 'inherit', fontSize: '.8rem' }}
              onClick={goBack}
              data-i18n="cards.back"
            >{t('cards.back')}</button>
          )}
          <button className="page-close-btn" onClick={closeStoryMode}>✕</button>
        </div>
      </div>

      {!story && (
        <div style={{ padding: '14px 20px' }}>
          <div style={{ fontSize: '.82rem', color: 'var(--text2)', marginBottom: 12 }} data-i18n="story.pickerDesc">{t('story.pickerDesc')}</div>
          <div>
            {STORIES.map(s => (
              <button
                key={s.id}
                onClick={() => setStory(s)}
                style={{
                  display: 'block', width: '100%', textAlign: 'left', padding: '12px 14px', marginBottom: 8,
                  borderRadius: 12, border: '1.5px solid var(--border)', background: 'var(--bg)',
                  cursor: 'pointer', fontFamily: 'inherit', transition: 'border-color .15s',
                }}
              >
                <div style={{ fontWeight: 700, fontSize: '.9rem', color: 'var(--text)' }}>{s.title}</div>
                <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginTop: 2 }}>{t('story.levelLabel', { lvl: s.level })}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {story && highlighted && (
        <div style={{ padding: '14px 20px', position: 'relative' }}>
          <div style={{ fontSize: '.75rem', color: 'var(--text3)', marginBottom: 12 }}>{t('story.statsLine', { n: highlighted.total, pct })}</div>
          <div ref={textRef} style={{ fontSize: '.9rem', lineHeight: 1.8, color: 'var(--text)' }} onClick={onTextClick} dangerouslySetInnerHTML={{ __html: highlighted.html }} />
          {popup && (
            <div
              style={{
                display: 'flex', position: 'absolute', background: 'var(--card)', border: '1.5px solid var(--border)',
                borderRadius: 12, padding: '10px 14px', boxShadow: '0 8px 24px rgba(0,0,0,.25)', zIndex: 10,
                minWidth: 160, flexDirection: 'column', gap: 4, top: popup.top, left: popup.left,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontWeight: 700, fontSize: '.95rem', color: 'var(--text)' }}>{popup.word}</span>
                <button id="sm-popup-speak" style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1rem', padding: 2 }} onClick={speakPopup}>🔊</button>
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--accent2)' }}>{popup.ipa}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--text2)', fontWeight: 600 }}>{popup.trans}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

import { bindOverlayOpenClose } from '../features/overlay-utils.ts';
bindOverlayOpenClose('btn-story', 'story-mode-overlay', openStoryMode, closeStoryMode);
