// Vymova — js/features/video-player.tsx
// Dual-screen local video player: video on one side, the live subtitle
// cue on the other, every word clickable for an instant translation —
// reuses reading.tsx's English-keyed dictionary lookup and popup pattern,
// just synced to video playback instead of a static paragraph.
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { state } from '../../src/state.ts';
import { useStateVersion } from '../../src/store.ts';
import { saveKnown } from '../core/storage.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { onWordLearned } from '../core/card-engine.ts';
import { speak } from './speech.ts';
import { t } from './i18n.ts';
import { lookupEnglishWord, getWordTrans } from '../modes/reading.tsx';
import { getKnowLang } from './lang-pair-select.tsx';
import { parseSubtitles, findActiveCue, type Cue } from './subtitle-parser.ts';
import { bindOverlayDismiss } from './overlay-utils.ts';
import type { WordEntry } from '../../src/types.js';

type PopupWord = { word: string; trans: string; ipa: string; known: boolean };

function renderCueHtml(text: string): string {
  const chunks = text.split(/(\s+|[,\.!?;:'"()\-—]+)/);
  return chunks.map(chunk => {
    if (/^\s+$/.test(chunk) || /^[,\.!?;:'"()\-—]+$/.test(chunk)) return chunk;
    const w = lookupEnglishWord(chunk);
    if (!w) return chunk;
    const isKnown = state.known.has(w[0]);
    return `<span class="rd-word ${isKnown ? 'rd-known' : 'rd-unknown'}" data-word="${w[0]}">${chunk}</span>`;
  }).join('');
}

export function VideoPlayerPage(): ReactElement | null {
  useStateVersion();
  const target = document.getElementById('video-player-content');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [cues, setCues] = useState<Cue[]>([]);
  const [activeCue, setActiveCue] = useState<Cue | null>(null);
  const [popup, setPopup] = useState<PopupWord | null>(null);
  const videoUrlRef = useRef<string | null>(null);

  useEffect(() => () => { if (videoUrlRef.current) URL.revokeObjectURL(videoUrlRef.current); }, []);

  useEffect(() => {
    function onDocClick(e: MouseEvent): void {
      const el = e.target as HTMLElement;
      if (!el.closest('.rd-word-popup') && !el.closest('.rd-word')) setPopup(null);
    }
    document.addEventListener('click', onDocClick);
    return () => document.removeEventListener('click', onDocClick);
  }, []);

  if (!target) return null;

  const onVideoFile = (e: { target: HTMLInputElement }): void => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    if (videoUrlRef.current) URL.revokeObjectURL(videoUrlRef.current);
    const url = URL.createObjectURL(file);
    videoUrlRef.current = url;
    setVideoUrl(url);
  };

  const onSubtitleFile = (e: { target: HTMLInputElement }): void => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    file.text().then(text => { setCues(parseSubtitles(text)); setActiveCue(null); }).catch(() => {});
  };

  const onTimeUpdate = (e: { currentTarget: HTMLVideoElement }): void => {
    setActiveCue(findActiveCue(cues, e.currentTarget.currentTime));
  };

  const showPopup = (w: WordEntry): void => {
    const knowLang = getKnowLang();
    const trans = getWordTrans(w, knowLang) || w[1];
    setPopup({ word: w[0], trans, ipa: decodeIpa(w[4] ?? ''), known: state.known.has(w[0]) });
  };

  const onCueClick = (e: { target: EventTarget | null; stopPropagation: () => void }): void => {
    const targetEl = (e.target as HTMLElement).closest<HTMLElement>('.rd-word');
    if (!targetEl) return;
    e.stopPropagation();
    const w = lookupEnglishWord(targetEl.dataset.word ?? '');
    if (w) showPopup(w);
  };

  const markKnown = (): void => {
    if (!popup) return;
    if (!popup.known) { state.known.add(popup.word); saveKnown(state.known); onWordLearned(); }
    setPopup(null);
  };

  const speakPopup = (): void => { if (popup) speak(popup.word, null); };

  return createPortal(
    <div className="video-player-panel">
      <div className="video-player-uploads">
        <button className="backup-btn primary" onClick={() => document.getElementById('vp-video-input')?.click()}>{t('videoPlayer.uploadVideo')}</button>
        <input id="vp-video-input" type="file" accept="video/*" style={{ display: 'none' }} onChange={onVideoFile} />
        <button className="backup-btn" onClick={() => document.getElementById('vp-sub-input')?.click()}>{t('videoPlayer.uploadSubs')}</button>
        <input id="vp-sub-input" type="file" accept=".srt,.vtt" style={{ display: 'none' }} onChange={onSubtitleFile} />
        {cues.length > 0 && <span className="video-player-cue-count">{t('videoPlayer.cueCount', { n: cues.length })}</span>}
      </div>

      <div className="video-player-stage">
        <div className="video-player-video-col">
          {videoUrl ? (
            <video className="video-player-el" src={videoUrl} controls onTimeUpdate={onTimeUpdate} />
          ) : (
            <div className="video-player-placeholder">{t('videoPlayer.noVideo')}</div>
          )}
        </div>
        <div className="video-player-subs-col">
          {cues.length === 0 ? (
            <div className="ai-tutor-hint">{t('videoPlayer.noSubs')}</div>
          ) : activeCue ? (
            <div className="rd-text video-player-cue" onClick={onCueClick} dangerouslySetInnerHTML={{ __html: renderCueHtml(activeCue.text) }} />
          ) : (
            <div className="ai-tutor-hint">{t('videoPlayer.silentHint')}</div>
          )}
          {popup && (
            <div className="rd-word-popup" style={{ display: 'block' }} onClick={(e) => e.stopPropagation()}>
              <div className="rd-popup-word">{popup.word}</div>
              <div className="rd-popup-ipa">{popup.ipa}</div>
              <div className="rd-popup-trans">{popup.trans}</div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                <button className="backup-btn" style={{ padding: '5px 12px' }} onClick={speakPopup}>🔊</button>
                <button className="backup-btn primary" style={{ flex: 1, padding: 5 }} onClick={markKnown}>{popup.known ? t('reading.popupKnow') : t('reading.popupLearn')}</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    target,
  );
}

bindOverlayDismiss('video-player-overlay', 'video-player-close');
