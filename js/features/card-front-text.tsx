// Vymova — js/features/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import { useEffect, useState } from 'react';
import { useAppState } from '../../src/store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t, tLang, type Lang } from './i18n.ts';
import { srsStatusInfo, forgettingCurveTooltip, type SrsEntry } from '../core/card-helpers.ts';
import {
  getResolvedMode, computeCardView,
  esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry,
} from './mode-utils.ts';
import { speakEnAccent, speakEsAccent, speakPtAccent } from './voice.tsx';
import { speak } from './speech.ts';
import { SENSES } from '../../data/senses.ts';
import { InfoIcon, InfoNote } from './info-icon.tsx';
import { TRANSCRIPTION_LEGEND } from './transcription-legend.ts';

function getRangeVal(): string {
  return (document.getElementById('sel-range') as HTMLSelectElement | null)?.value ?? '';
}

export function WordText() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { frontWord, frontRtl } = computeCardView(cw, getResolvedMode());
  return <span className="word-text" id="wword" dir={frontRtl ? 'rtl' : undefined}>{frontWord}</span>;
}

const LOCAL_ENTRY_LOOKUP: Partial<Record<string, (word: string) => readonly [string, string, string?] | null>> = {
  ES: esEntry, FR: frEntry, IT: itEntry, PT: ptEntry, DE: deEntry, HE: heEntry,
  AR: arEntry, PL: plEntry, ZH: zhEntry, EL: elEntry, JA: jaEntry, TR: trEntry, NL: nlEntry,
};

export function Transcription() {
  const { cw } = useAppState();
  const [legendOpen, setLegendOpen] = useState(false);
  useEffect(() => { setLegendOpen(false); }, [cw?.[0]]);
  if (!cw) return null;
  const { FRONT_LANG, frontWord } = computeCardView(cw, getResolvedMode());
  const lookup = LOCAL_ENTRY_LOOKUP[FRONT_LANG];
  const localTranscription = lookup ? lookup(cw[0])?.[2] : undefined;
  const trans = FRONT_LANG === 'EN'
    ? decodeIpa(cw[4] || '')
    : (localTranscription ? decodeIpa(localTranscription) : '');
  if (FRONT_LANG !== 'EN' && !trans) return <div className="transcription" id="wtrans" style={{ display: 'none' }} />;
  const legend = TRANSCRIPTION_LEGEND[FRONT_LANG];
  return (
    <div className="transcription-wrap">
      <div className="transcription" id="wtrans" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {trans && <span>{trans}</span>}
        {FRONT_LANG === 'EN' && (
          <>
            <button type="button" className="accent-btn" title="British" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'GB', e.currentTarget); }}>GB</button>
            <button type="button" className="accent-btn" title="American" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'US', e.currentTarget); }}>US</button>
          </>
        )}
        {FRONT_LANG === 'ES' && (
          <>
            <button type="button" className="accent-btn" title="España" onClick={e => { e.stopPropagation(); speakEsAccent(frontWord, 'ES', e.currentTarget); }}>ES</button>
            <button type="button" className="accent-btn" title="Latinoamérica" onClick={e => { e.stopPropagation(); speakEsAccent(frontWord, 'MX', e.currentTarget); }}>MX</button>
          </>
        )}
        {FRONT_LANG === 'PT' && (
          <>
            <button type="button" className="accent-btn" title="Portugal" onClick={e => { e.stopPropagation(); speakPtAccent(frontWord, 'PT', e.currentTarget); }}>PT</button>
            <button type="button" className="accent-btn" title="Brasil" onClick={e => { e.stopPropagation(); speakPtAccent(frontWord, 'BR', e.currentTarget); }}>BR</button>
          </>
        )}
        {legend && <InfoIcon open={legendOpen} onToggle={() => setLegendOpen(o => !o)} label={t('cards.transcriptionInfo')} />}
      </div>
      {legend && legendOpen && (
        <InfoNote>
          <div className="info-note-title">{t('cards.transcriptionInfo')}</div>
          <ul className="info-note-list">
            {legend.map((row, i) => <li key={i}><b>{row.symbol}</b> — {row.desc}</li>)}
          </ul>
        </InfoNote>
      )}
    </div>
  );
}

export function PosTag() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { FRONT_LANG } = computeCardView(cw, getResolvedMode());
  const posCode = cw[5] || '';
  const posLang: Lang = FRONT_LANG === 'EN' ? 'en' : FRONT_LANG === 'UA' ? 'ua' : FRONT_LANG === 'FR' ? 'fr'
    : FRONT_LANG === 'IT' ? 'it' : FRONT_LANG === 'PT' ? 'pt' : FRONT_LANG === 'DE' ? 'de'
    : FRONT_LANG === 'ES' ? 'es' : 'en'; // HE/AR have no dedicated UI locale yet — fall back to English pos labels
  const posText = posCode ? tLang('pos.' + posCode, posLang) : '';
  return <div className="pos-tag" id="wpos" style={{ display: posCode ? 'block' : 'none' }}>{posText}</div>;
}

export function SrsBadge() {
  const { cw, srsData, TODAY } = useAppState();
  if (!cw) return null;
  const sd = (srsData as Record<string, SrsEntry>)[cw[0]];
  const info = srsStatusInfo(sd, TODAY, getRangeVal());
  if (!info) return <div id="srs-next" className="srs-next" style={{ display: 'none' }} />;
  return <div id="srs-next" className={info.className} title={forgettingCurveTooltip(sd)}>{info.text}</div>;
}

export function Translation() {
  const { cw, flipped } = useAppState();
  if (!cw) return null;
  const { backWord, backRtl } = computeCardView(cw, getResolvedMode());
  return <div className={'transl' + (flipped ? ' show' : '')} id="wtransl" dir={backRtl ? 'rtl' : undefined}>{backWord}</div>;
}

export function ExEn() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { exenHtml, frontRtl } = computeCardView(cw, getResolvedMode());
  return <span className="ex-en" id="exen" dir={frontRtl ? 'rtl' : undefined} dangerouslySetInnerHTML={{ __html: exenHtml }} />;
}

export function ExUa() {
  const { cw, flipped } = useAppState();
  if (!cw) return null;
  const { exuaHtml, backRtl } = computeCardView(cw, getResolvedMode());
  return <div className={'ex-ua' + (flipped ? ' show' : '')} id="exua" dir={backRtl ? 'rtl' : undefined} dangerouslySetInnerHTML={{ __html: exuaHtml }} />;
}

export function CardHint() {
  const { flipped } = useAppState();
  if (flipped) return null;
  return <p className="hint">{t('cards.hint')}</p>;
}

export function OtherMeanings() {
  const { cw, flipped } = useAppState();
  if (!cw || !flipped) return null;
  const senses = SENSES[cw[0].toLowerCase()];
  if (!senses || senses.length < 2) return null;

  return (
    <div className="similar-section" id="cb-senses" style={{ margin: '8px 0' }}>
      <div className="similar-title" data-i18n="cards.sensesTitle">📖 Усі значення</div>
      <ol className="senses-list" id="cb-senses-list">
        {senses.map((s, i) => (
          <li key={i}>
            <span className="sense-pos">{s.pos}</span>{' '}
            <span className="sense-translation">{s.translation}</span>
            <div className="sense-example">
              {s.exEn} <i>— {s.exUa}</i>
              <button type="button" className="speak-btn sense-speak-btn" title="Вимовити приклад" onClick={e => { e.stopPropagation(); speak(s.exEn, e.currentTarget); }}>🔊</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

