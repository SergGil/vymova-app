// English Words App — js/features/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import type { ReactElement } from 'react';
import { createRoot } from 'react-dom/client';
import { useAppState } from '../../src/store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { tLang, type Lang } from './i18n.ts';
import { srsStatusInfo, type SrsEntry } from '../core/card-helpers.ts';
import { getResolvedMode, computeCardView } from './mode-utils.ts';

function getRangeVal(): string {
  return (document.getElementById('sel-range') as HTMLSelectElement | null)?.value ?? '';
}

function WordText() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { frontWord } = computeCardView(cw, getResolvedMode());
  return <span className="word-text" id="wword">{frontWord}</span>;
}

function Transcription() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { FRONT_LANG } = computeCardView(cw, getResolvedMode());
  const trans = decodeIpa(cw[4] || '');
  const show = FRONT_LANG === 'EN' && !!trans;
  return <div className="transcription" id="wtrans" style={{ display: show ? 'block' : 'none' }}>{show ? trans : ''}</div>;
}

function PosTag() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { FRONT_LANG } = computeCardView(cw, getResolvedMode());
  const posCode = cw[5] || '';
  const posLang: Lang = FRONT_LANG === 'EN' ? 'en' : FRONT_LANG === 'UA' ? 'ua' : FRONT_LANG === 'FR' ? 'fr' : 'es';
  const posText = posCode ? tLang('pos.' + posCode, posLang) : '';
  return <div className="pos-tag" id="wpos" style={{ display: posCode ? 'block' : 'none' }}>{posText}</div>;
}

function SrsBadge() {
  useAppState();
  const win = window as unknown as { srsData?: Record<string, SrsEntry>; TODAY?: string; cw?: import('../../src/types.js').WordEntry | null };
  const cw = win.cw;
  if (!cw) return null;
  const sd = win.srsData?.[cw[0]];
  const info = srsStatusInfo(sd, win.TODAY ?? '', getRangeVal());
  if (!info) return <div id="srs-next" className="srs-next" style={{ display: 'none' }} />;
  return <div id="srs-next" className={info.className}>{info.text}</div>;
}

function Translation() {
  const { cw, flipped } = useAppState();
  if (!cw) return null;
  const { backWord } = computeCardView(cw, getResolvedMode());
  return <div className={'transl' + (flipped ? ' show' : '')} id="wtransl">{backWord}</div>;
}

function ExEn() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { exenHtml } = computeCardView(cw, getResolvedMode());
  return <span className="ex-en" id="exen" dangerouslySetInnerHTML={{ __html: exenHtml }} />;
}

function ExUa() {
  const { cw, flipped } = useAppState();
  if (!cw) return null;
  const { exuaHtml } = computeCardView(cw, getResolvedMode());
  return <div className={'ex-ua' + (flipped ? ' show' : '')} id="exua" dangerouslySetInnerHTML={{ __html: exuaHtml }} />;
}

export function mountCardFrontText(): void {
  const mounts: Array<[string, () => ReactElement]> = [
    ['wword-mount', () => <WordText />],
    ['wtrans-mount', () => <Transcription />],
    ['wpos-mount', () => <PosTag />],
    ['srs-next-mount', () => <SrsBadge />],
    ['wtransl-mount', () => <Translation />],
    ['exen-mount', () => <ExEn />],
    ['exua-mount', () => <ExUa />],
  ];
  for (const [id, render] of mounts) {
    const el = document.getElementById(id);
    if (el) createRoot(el).render(render());
  }
}
