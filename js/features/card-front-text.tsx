// English Words App — js/features/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import { useAppState } from '../../src/store.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t, tLang, type Lang } from './i18n.ts';
import { srsStatusInfo, forgettingCurveTooltip, type SrsEntry } from '../core/card-helpers.ts';
import { getResolvedMode, computeCardView } from './mode-utils.ts';
import { speakEnAccent } from './voice.tsx';
import { speak } from './speech.ts';
import { SENSES } from '../../data/senses.ts';

function getRangeVal(): string {
  return (document.getElementById('sel-range') as HTMLSelectElement | null)?.value ?? '';
}

export function WordText() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { frontWord } = computeCardView(cw, getResolvedMode());
  return <span className="word-text" id="wword">{frontWord}</span>;
}

export function Transcription() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { FRONT_LANG, frontWord } = computeCardView(cw, getResolvedMode());
  const trans = decodeIpa(cw[4] || '');
  const isEn = FRONT_LANG === 'EN';
  if (!isEn) return <div className="transcription" id="wtrans" style={{ display: 'none' }} />;
  return (
    <div className="transcription" id="wtrans" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      {trans && <span>{trans}</span>}
      <button type="button" className="accent-btn" title="British" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'GB', e.currentTarget); }}>GB</button>
      <button type="button" className="accent-btn" title="American" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'US', e.currentTarget); }}>US</button>
    </div>
  );
}

export function PosTag() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { FRONT_LANG } = computeCardView(cw, getResolvedMode());
  const posCode = cw[5] || '';
  const posLang: Lang = FRONT_LANG === 'EN' ? 'en' : FRONT_LANG === 'UA' ? 'ua' : FRONT_LANG === 'FR' ? 'fr'
    : FRONT_LANG === 'IT' ? 'it' : FRONT_LANG === 'PT' ? 'pt' : FRONT_LANG === 'DE' ? 'de' : 'es';
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
  const { backWord } = computeCardView(cw, getResolvedMode());
  return <div className={'transl' + (flipped ? ' show' : '')} id="wtransl">{backWord}</div>;
}

export function ExEn() {
  const { cw } = useAppState();
  if (!cw) return null;
  const { exenHtml } = computeCardView(cw, getResolvedMode());
  return <span className="ex-en" id="exen" dangerouslySetInnerHTML={{ __html: exenHtml }} />;
}

export function ExUa() {
  const { cw, flipped } = useAppState();
  if (!cw) return null;
  const { exuaHtml } = computeCardView(cw, getResolvedMode());
  return <div className={'ex-ua' + (flipped ? ' show' : '')} id="exua" dangerouslySetInnerHTML={{ __html: exuaHtml }} />;
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

