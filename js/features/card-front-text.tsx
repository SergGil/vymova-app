// Vymova — js/features/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import { useEffect, useState } from 'react';
import { useDeckState } from '../../src/deck-store.ts';
import { useSrsData } from '../../src/srs-store.ts';
import { today } from '../core/today.ts';
import { decodeIpa } from '../core/ui-helpers.ts';
import { t, tLang, type Lang } from './i18n.ts';
import { srsStatusInfo, forgettingCurveTooltip, boldHead, type SrsEntry } from '../core/card-helpers.ts';
import {
  getResolvedMode,
  computeCardView,
  parsePair,
  headwordFor,
  entryFor,
  isTargetLang,
  langConfig,
  type Code,
} from './mode-utils.ts';
import { speakEnAccent, speakEsAccent, speakPtAccent, hasEsAccent, hasPtAccent } from './voice/voice.tsx';
import { flagUrl } from '../core/flags.ts';
import { speakForCode } from './voice/speak-lang.ts';
import { ensureSensesLoaded, getSensesForLang, type SenseEntry } from './senses-loader.ts';
import { InfoIcon, InfoNote } from './info-icon.tsx';
import { TRANSCRIPTION_LEGEND } from './transcription-legend.ts';

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
  const { cw, deck } = useDeckState();
  if (!cw) {
    // deck.length === 0 means a tag/category filter genuinely narrowed the
    // deck to zero words (see card-engine.ts's render()) — surface that
    // instead of leaving the card silently blank. Any other cw:null moment
    // (e.g. before the very first render()) is transient and shows nothing,
    // same as before.
    if (deck.length === 0) {
      return (
        <span className="word-text word-text-empty" id="wword">
          {t('cards.emptyDeck')}
        </span>
      );
    }
    return null;
  }
  const { frontWord, frontRtl } = computeCardView(cw, getResolvedMode());
  return (
    <span className="word-text" id="wword" dir={frontRtl ? 'rtl' : undefined}>
      {frontWord}
    </span>
  );
}

export function Transcription() {
  const { cw } = useDeckState();
  const [legendOpen, setLegendOpen] = useState(false);
  const cwHead = cw?.[0];
  useEffect(() => {
    setLegendOpen(false);
  }, [cwHead]);
  if (!cw) return null;
  const { FRONT_LANG, frontWord } = computeCardView(cw, getResolvedMode());
  const frontCode = FRONT_LANG.toLowerCase() as Code;
  const localTranscription = entryFor(frontCode, cw).translit;
  const trans =
    FRONT_LANG === 'EN'
      ? decodeIpa(cw[4] || '')
      : localTranscription
        ? decodeIpa(localTranscription)
        : '';
  if (FRONT_LANG !== 'EN' && !trans)
    return <div className="transcription" id="wtrans" style={{ display: 'none' }} />;
  const legend = TRANSCRIPTION_LEGEND[FRONT_LANG];
  return (
    <div className="transcription-wrap">
      <div
        className="transcription"
        id="wtrans"
        style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
      >
        {trans && <span>{trans}</span>}
        {((FRONT_LANG as string) === 'QYA' ||
          (FRONT_LANG as string) === 'SJN' ||
          (FRONT_LANG as string) === 'TLH' ||
          (FRONT_LANG as string) === 'VAL' ||
          (FRONT_LANG as string) === 'DTH') &&
          (() => {
            const isCanon = isTargetLang(frontCode)
              ? langConfig(frontCode).entry(cw[0])?.[3]
              : undefined;
            if (isCanon === undefined) return null;
            return (
              <span
                className={`canon-badge ${isCanon ? 'canon-badge-attested' : 'canon-badge-neo'}`}
                title={isCanon ? t('cards.canonAttested') : t('cards.canonNeo')}
              >
                {isCanon ? '📜' : '🔧'}
              </span>
            );
          })()}
        {FRONT_LANG === 'EN' && (
          <>
            <button
              type="button"
              className="accent-btn"
              title="British"
              onClick={(e) => {
                e.stopPropagation();
                speakEnAccent(frontWord, 'GB', e.currentTarget);
              }}
            >
              <AccentFlag code="GB" />
            </button>
            <button
              type="button"
              className="accent-btn"
              title="American"
              onClick={(e) => {
                e.stopPropagation();
                speakEnAccent(frontWord, 'US', e.currentTarget);
              }}
            >
              <AccentFlag code="US" />
            </button>
          </>
        )}
        {FRONT_LANG === 'ES' && (
          <>
            {hasEsAccent('ES') && (
              <button
                type="button"
                className="accent-btn"
                title="España"
                onClick={(e) => {
                  e.stopPropagation();
                  speakEsAccent(frontWord, 'ES', e.currentTarget);
                }}
              >
                <AccentFlag code="ES" />
              </button>
            )}
            {hasEsAccent('MX') && (
              <button
                type="button"
                className="accent-btn"
                title="Latinoamérica"
                onClick={(e) => {
                  e.stopPropagation();
                  speakEsAccent(frontWord, 'MX', e.currentTarget);
                }}
              >
                <AccentFlag code="MX" />
              </button>
            )}
          </>
        )}
        {FRONT_LANG === 'PT' && (
          <>
            {hasPtAccent('PT') && (
              <button
                type="button"
                className="accent-btn"
                title="Portugal"
                onClick={(e) => {
                  e.stopPropagation();
                  speakPtAccent(frontWord, 'PT', e.currentTarget);
                }}
              >
                <AccentFlag code="PT" />
              </button>
            )}
            {hasPtAccent('BR') && (
              <button
                type="button"
                className="accent-btn"
                title="Brasil"
                onClick={(e) => {
                  e.stopPropagation();
                  speakPtAccent(frontWord, 'BR', e.currentTarget);
                }}
              >
                <AccentFlag code="BR" />
              </button>
            )}
          </>
        )}
        {legend && (
          <InfoIcon
            open={legendOpen}
            onToggle={() => setLegendOpen((o) => !o)}
            label={t('cards.transcriptionInfo')}
          />
        )}
      </div>
      {legend && legendOpen && (
        <InfoNote>
          <div className="info-note-title">{t('cards.transcriptionInfo')}</div>
          <ul className="info-note-list">
            {legend.map((row, i) => (
              <li key={i}>
                <b>{row.symbol}</b> — {row.desc}
              </li>
            ))}
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
  const posLang: Lang =
    FRONT_LANG === 'EN'
      ? 'en'
      : FRONT_LANG === 'UA'
        ? 'ua'
        : FRONT_LANG === 'FR'
          ? 'fr'
          : FRONT_LANG === 'IT'
            ? 'it'
            : FRONT_LANG === 'PT'
              ? 'pt'
              : FRONT_LANG === 'DE'
                ? 'de'
                : FRONT_LANG === 'ES'
                  ? 'es'
                  : 'en'; // HE/AR have no dedicated UI locale yet — fall back to English pos labels
  const posText = posCode
    ? posCode
        .split('/')
        .map((code) => tLang('pos.' + code, posLang))
        .join('/')
    : '';
  return (
    <div className="pos-tag" id="wpos" style={{ display: posCode ? 'block' : 'none' }}>
      {posText}
    </div>
  );
}

export function SrsBadge() {
  const { cw } = useDeckState();
  const srsData = useSrsData();
  if (!cw) return null;
  const sd = (srsData as Record<string, SrsEntry>)[cw[0]];
  const info = srsStatusInfo(sd, today(), getRangeVal());
  if (!info)
    return (
      <div
        id="srs-next"
        className="srs-next mt-1 inline-flex items-center gap-[3px] rounded-[20px] px-2 py-0.5 text-[0.72rem] font-semibold"
        style={{ display: 'none' }}
      />
    );
  return (
    <div id="srs-next" className={info.className} title={forgettingCurveTooltip(sd)}>
      {info.text}
    </div>
  );
}

function BackSpeakBtn({
  code,
  text,
  fallbackEnText,
  translit,
  className,
  style,
}: {
  code: Code;
  text: string;
  fallbackEnText: string;
  translit?: string;
  className: string;
  style?: React.CSSProperties;
}) {
  if (code === 'ua' || !text) return null;
  return (
    <button
      type="button"
      className={className}
      style={style}
      title={t('cards.pronounce')}
      onClick={(e) => {
        e.stopPropagation();
        speakForCode(code, text, fallbackEnText, e.currentTarget, translit);
      }}
    >
      🔊
    </button>
  );
}

export function Translation() {
  const { cw, flipped } = useDeckState();
  if (!cw) return null;
  const { backWord, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  return (
    <div
      className={'transl' + (flipped ? ' show' : '')}
      id="wtransl"
      dir={backRtl ? 'rtl' : undefined}
    >
      {backWord}
      {flipped && (
        <BackSpeakBtn
          code={back}
          text={backWord}
          fallbackEnText={cw[0]}
          translit={entryFor(back, cw).translit}
          className="speak-btn"
          style={{ marginLeft: 6, width: 20, height: 20, fontSize: 11, verticalAlign: 'middle' }}
        />
      )}
    </div>
  );
}

export function ExEn() {
  const { cw } = useDeckState();
  if (!cw) return null;
  const { exenHtml, frontRtl } = computeCardView(cw, getResolvedMode());
  return (
    <span
      className="ex-en"
      id="exen"
      dir={frontRtl ? 'rtl' : undefined}
      dangerouslySetInnerHTML={{ __html: exenHtml }}
    />
  );
}

export function ExUa() {
  const { cw, flipped } = useDeckState();
  if (!cw) return null;
  const { exuaHtml, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  const backExText = entryFor(back, cw).ex;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
      <div
        className={'ex-ua' + (flipped ? ' show' : '')}
        id="exua"
        dir={backRtl ? 'rtl' : undefined}
        dangerouslySetInnerHTML={{ __html: exuaHtml }}
      />
      {flipped && (
        <BackSpeakBtn
          code={back}
          text={backExText}
          fallbackEnText={cw[2] || ''}
          className="speak-btn speak-ex-btn"
          style={{ marginTop: 2, flexShrink: 0 }}
        />
      )}
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
function findSenses(
  dict: Record<string, SenseEntry[]>,
  frontWord: string,
): SenseEntry[] | undefined {
  const tokens = frontWord
    .toLowerCase()
    .split(/[,;]/)
    .map((s) => s.replace(/\s*\([^)]*\)\s*$/, '').trim());
  for (const tok of tokens) {
    if (tok && dict[tok]) return dict[tok];
  }
  return undefined;
}

export function OtherMeanings() {
  const { cw, flipped } = useDeckState();
  const { front } = parsePair(getResolvedMode());
  // "Other meanings" is bonus, flip-side-only content — loaded lazily per
  // front language (see js/features/senses-loader.ts) instead of eagerly
  // shipping every language's sense data to every user. Silently shows
  // nothing until loaded, same as the existing "no data for this word"
  // fallback below — no spinner needed for a supplementary section.
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    if (!flipped) return;
    let cancelled = false;
    ensureSensesLoaded(front).then(() => {
      if (!cancelled) forceUpdate((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [flipped, front]);

  if (!cw || !flipped) return null;
  const dict = getSensesForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const senses = findSenses(dict, frontWord);
  if (!senses || senses.length < 2) return null;

  return (
    <div
      className="similar-section w-full text-left"
      id="cb-senses"
      style={{ margin: '8px 0' }}
    >
      <div className="similar-title mb-1.5 flex items-center gap-[5px] text-[.6rem] font-extrabold tracking-[0.1em] text-[var(--text3)] uppercase max-[480px]:text-[.58rem]">
        {t('cards.sensesTitle')}
      </div>
      <ol className="senses-list m-0 flex flex-col gap-1.5 pl-[1.1em]" id="cb-senses-list">
        {senses.map((s, i) => (
          <li key={i} className="text-[.82rem]">
            <span className="sense-pos text-[.72rem] text-[var(--text2)] italic">{s.pos}</span>{' '}
            <span className="sense-translation font-bold text-[var(--text)]">
              {s.translation}
            </span>
            <div className="sense-example mt-px text-[.74rem] leading-[1.4] text-[var(--text3)]">
              <span dangerouslySetInnerHTML={{ __html: boldHead(s.exTarget, frontWord) }} />{' '}
              {s.exKnow ? <i className="italic">— {s.exKnow}</i> : null}
              <button
                type="button"
                className="speak-btn sense-speak-btn !px-[3px] !py-px !text-[12px] align-middle"
                title="Вимовити приклад"
                onClick={(e) => {
                  e.stopPropagation();
                  speakForCode(front, s.exTarget, '', e.currentTarget);
                }}
              >
                🔊
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
