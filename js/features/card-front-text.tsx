// Vymova — js/features/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import { useEffect, useState } from 'react';
import { useDeckState } from '../../src/deck-store.ts';
import { useSrsData } from '../../src/srs-store.ts';
import { today } from '../core/today.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t, tLang, type Lang } from './i18n.ts';
import { srsStatusInfo, forgettingCurveTooltip, type SrsEntry } from '../core/card-helpers.ts';
import {
  getResolvedMode, computeCardView, parsePair, headwordFor, type Code,
  esEntry, frEntry, itEntry, ptEntry, deEntry, heEntry, arEntry, plEntry, zhEntry, elEntry, jaEntry, trEntry, nlEntry,
} from './mode-utils.ts';
import { speakEnAccent, speakEsAccent, speakPtAccent, hasEsAccent, hasPtAccent } from './voice.tsx';
import { flagUrl } from '../core/flags.ts';
import { speakForCode } from './speak-lang.ts';
import { SENSES_BY_LANG, type SenseEntry } from '../../data/senses.ts';
import { InfoIcon, InfoNote } from './info-icon.tsx';
import { TRANSCRIPTION_LEGEND } from './transcription-legend.ts';
import type { WordEntry } from '../../src/types.js';

function getRangeVal(): string {
  return (document.getElementById('sel-range') as HTMLSelectElement | null)?.value ?? '';
}

// Accent-toggle button content: a flag icon when we have one locally,
// otherwise the plain 2-letter code (e.g. for accents flags.ts doesn't cover).
function AccentFlag({ code }: { code: string }) {
  const url = flagUrl(code);
  return url ? <img src={url} alt={code} width={16} height={16} /> : <>{code}</>;
}

export function WordText() {
  const { cw } = useDeckState();
  if (!cw) return null;
  const { frontWord, frontRtl } = computeCardView(cw, getResolvedMode());
  return <span className="word-text" id="wword" dir={frontRtl ? 'rtl' : undefined}>{frontWord}</span>;
}

const LOCAL_ENTRY_LOOKUP: Partial<Record<string, (word: string) => readonly [string, string, string?] | null>> = {
  ES: esEntry, FR: frEntry, IT: itEntry, PT: ptEntry, DE: deEntry, HE: heEntry,
  AR: arEntry, PL: plEntry, ZH: zhEntry, EL: elEntry, JA: jaEntry, TR: trEntry, NL: nlEntry,
};

export function Transcription() {
  const { cw } = useDeckState();
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
            <button type="button" className="accent-btn" title="British" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'GB', e.currentTarget); }}><AccentFlag code="GB" /></button>
            <button type="button" className="accent-btn" title="American" onClick={e => { e.stopPropagation(); speakEnAccent(frontWord, 'US', e.currentTarget); }}><AccentFlag code="US" /></button>
          </>
        )}
        {FRONT_LANG === 'ES' && (
          <>
            {hasEsAccent('ES') && <button type="button" className="accent-btn" title="España" onClick={e => { e.stopPropagation(); speakEsAccent(frontWord, 'ES', e.currentTarget); }}><AccentFlag code="ES" /></button>}
            {hasEsAccent('MX') && <button type="button" className="accent-btn" title="Latinoamérica" onClick={e => { e.stopPropagation(); speakEsAccent(frontWord, 'MX', e.currentTarget); }}><AccentFlag code="MX" /></button>}
          </>
        )}
        {FRONT_LANG === 'PT' && (
          <>
            {hasPtAccent('PT') && <button type="button" className="accent-btn" title="Portugal" onClick={e => { e.stopPropagation(); speakPtAccent(frontWord, 'PT', e.currentTarget); }}><AccentFlag code="PT" /></button>}
            {hasPtAccent('BR') && <button type="button" className="accent-btn" title="Brasil" onClick={e => { e.stopPropagation(); speakPtAccent(frontWord, 'BR', e.currentTarget); }}><AccentFlag code="BR" /></button>}
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
  const { cw } = useDeckState();
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
  const { cw } = useDeckState();
  const srsData = useSrsData();
  if (!cw) return null;
  const sd = (srsData as Record<string, SrsEntry>)[cw[0]];
  const info = srsStatusInfo(sd, today(), getRangeVal());
  if (!info) return <div id="srs-next" className="srs-next" style={{ display: 'none' }} />;
  return <div id="srs-next" className={info.className} title={forgettingCurveTooltip(sd)}>{info.text}</div>;
}

// Raw (non-highlighted) example text for `code`'s language — used to feed
// the back-side speak buttons, mirroring entryFor()'s logic in mode-utils.ts.
function exampleTextFor(code: Code, cw: WordEntry): string {
  if (code === 'en') return cw[2] || '';
  if (code === 'ua') return cw[3] || '';
  const lookup = LOCAL_ENTRY_LOOKUP[code.toUpperCase()];
  return lookup ? (lookup(cw[0])?.[1] ?? '') : '';
}

function BackSpeakBtn({ code, text, fallbackEnText, className, style }: {
  code: Code; text: string; fallbackEnText: string; className: string; style?: React.CSSProperties;
}) {
  if (code === 'ua' || !text) return null;
  return (
    <button
      type="button"
      className={className}
      style={style}
      title={t('cards.pronounce')}
      onClick={(e) => { e.stopPropagation(); speakForCode(code, text, fallbackEnText, e.currentTarget); }}
    >🔊</button>
  );
}

export function Translation() {
  const { cw, flipped } = useDeckState();
  if (!cw) return null;
  const { backWord, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  return (
    <div className={'transl' + (flipped ? ' show' : '')} id="wtransl" dir={backRtl ? 'rtl' : undefined}>
      {backWord}
      {flipped && <BackSpeakBtn code={back} text={backWord} fallbackEnText={cw[0]}
        className="speak-btn" style={{ marginLeft: 6, width: 20, height: 20, fontSize: 11, verticalAlign: 'middle' }} />}
    </div>
  );
}

export function ExEn() {
  const { cw } = useDeckState();
  if (!cw) return null;
  const { exenHtml, frontRtl } = computeCardView(cw, getResolvedMode());
  return <span className="ex-en" id="exen" dir={frontRtl ? 'rtl' : undefined} dangerouslySetInnerHTML={{ __html: exenHtml }} />;
}

export function ExUa() {
  const { cw, flipped } = useDeckState();
  if (!cw) return null;
  const { exuaHtml, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  const backExText = exampleTextFor(back, cw);
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
      <div className={'ex-ua' + (flipped ? ' show' : '')} id="exua" dir={backRtl ? 'rtl' : undefined} dangerouslySetInnerHTML={{ __html: exuaHtml }} />
      {flipped && <BackSpeakBtn code={back} text={backExText} fallbackEnText={cw[2] || ''}
        className="speak-btn speak-ex-btn" style={{ marginTop: 2, flexShrink: 0 }} />}
    </div>
  );
}

// #speak-word / #speak-ex (index.html) are the front-side pronunciation
// buttons, always present in the static markup — hide them when the front
// language is Ukrainian, mirroring the back-side BackSpeakBtn's rule.
export function FrontSpeakBtnsToggle() {
  const { cw } = useDeckState();
  const front = cw ? parsePair(getResolvedMode()).front : null;
  const hide = front === 'ua';
  useEffect(() => {
    const wordBtn = document.getElementById('speak-word');
    const exBtn = document.getElementById('speak-ex');
    wordBtn?.classList.toggle('lang-hide', hide);
    exBtn?.classList.toggle('lang-hide', hide);
  }, [hide]);
  return null;
}

export function CardHint() {
  const { flipped } = useDeckState();
  if (flipped) return null;
  return <p className="hint">{t('cards.hint')}</p>;
}

// Translation fields often list several variants ("orilla; banco", "vela
// (будівля)") — a homonym key like "banco" only ever matches one variant
// of one headword's display, so look it up by trying each comma/
// semicolon-separated, parenthetical-stripped token rather than the whole string.
function findSenses(dict: Record<string, SenseEntry[]>, frontWord: string): SenseEntry[] | undefined {
  const tokens = frontWord.toLowerCase().split(/[,;]/).map(s => s.replace(/\s*\([^)]*\)\s*$/, '').trim());
  for (const tok of tokens) {
    if (tok && dict[tok]) return dict[tok];
  }
  return undefined;
}

export function OtherMeanings() {
  const { cw, flipped } = useDeckState();
  if (!cw || !flipped) return null;
  const { front } = parsePair(getResolvedMode());
  const dict = SENSES_BY_LANG[front];
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const senses = findSenses(dict, frontWord);
  if (!senses || senses.length < 2) return null;

  return (
    <div className="similar-section" id="cb-senses" style={{ margin: '8px 0' }}>
      <div className="similar-title">{t('cards.sensesTitle')}</div>
      <ol className="senses-list" id="cb-senses-list">
        {senses.map((s, i) => (
          <li key={i}>
            <span className="sense-pos">{s.pos}</span>{' '}
            <span className="sense-translation">{s.translation}</span>
            <div className="sense-example">
              {s.exEn} {s.exUa ? <i>— {s.exUa}</i> : null}
              <button type="button" className="speak-btn sense-speak-btn" title="Вимовити приклад" onClick={e => { e.stopPropagation(); speakForCode(front, s.exEn, '', e.currentTarget); }}>🔊</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

