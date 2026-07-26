// Vymova — js/features/card/card-front-text.tsx
// Текстові поля лицьової сторони картки: #wword, #wtrans, #wpos, #srs-next,
// #wtransl, #exen, #exua. Частина item 28b (Фаза 4).
import { useEffect, useState } from 'react';
import { useDeckState } from '../../../src/deck-store.ts';
import { useSrsData } from '../../../src/srs-store.ts';
import { today } from '../../core/today.ts';
import { decodeIpa } from '../../core/ui-helpers.ts';
import { t, tLang, type Lang } from '../i18n.ts';
import { srsStatusInfo, forgettingCurveTooltip, boldHead, type SrsEntry } from '../../core/card-helpers.ts';
import {
  getResolvedMode,
  computeCardView,
  parsePair,
  headwordFor,
  entryFor,
  isTargetLang,
  langConfig,
  type Code,
} from '../mode/mode-utils.ts';
import { speakEnAccent, speakEsAccent, speakPtAccent, hasEsAccent, hasPtAccent } from '../voice/voice.tsx';
import { flagUrl } from '../../core/flags.ts';
import { speakForCode } from '../voice/speak-lang.ts';
import { ensureSensesLoaded, getSensesForLang, findSenses } from '../word-data/senses-loader.ts';
import { InfoIcon, InfoNote } from '../info-icon.tsx';
import { TRANSCRIPTION_LEGEND } from '../transcription-legend.ts';
import { CefrBadge } from './cefr-badge.tsx';
import { useIsCardKnown } from './card-known-visuals.tsx';

// senses_*.ts data uses "noun" (spelled out) where the pos.* locale keys use
// the same abbreviation as the main word table's pos column ("n") — every
// other value (adj/adv/prep/v) already matches its locale key directly.
const SENSE_POS_KEY: Record<string, string> = { noun: 'n' };

// Mirrors PosTag's FRONT_LANG ternary below, just keyed off the lowercase
// `front` code (from parsePair) instead of the uppercase display code —
// HE/AR and other target languages with no dedicated UI locale fall back to
// English pos labels, same as PosTag.
const SENSE_POS_LANGS: readonly Lang[] = ['en', 'ua', 'es', 'fr', 'it', 'pt', 'de'];
function posLangForFront(front: string): Lang {
  return (SENSE_POS_LANGS as readonly string[]).includes(front) ? (front as Lang) : 'en';
}

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
  const isKnown = useIsCardKnown();
  if (!cw) {
    // deck.length === 0 means a tag/category filter genuinely narrowed the
    // deck to zero words (see card-engine.ts's render()) — surface that
    // instead of leaving the card silently blank. Any other cw:null moment
    // (e.g. before the very first render()) is transient and shows nothing,
    // same as before.
    if (deck.length === 0) {
      return (
        <span
          className="word-text word-text-empty text-[var(--word-text-color)] [text-shadow:var(--word-text-glow-shadow)]"
          id="wword"
        >
          {t('cards.emptyDeck')}
        </span>
      );
    }
    return null;
  }
  const { frontWord, frontRtl } = computeCardView(cw, getResolvedMode());
  return (
    <span
      className={
        'word-text [text-shadow:var(--word-text-glow-shadow)]' +
        (isKnown ? ' !text-[var(--known-c1)]' : ' text-[var(--word-text-color)]')
      }
      id="wword"
      dir={frontRtl ? 'rtl' : undefined}
    >
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
  const isKnown = useIsCardKnown();
  if (!cw) return null;
  const { backWord, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  return (
    <div
      className={'transl' + (flipped ? ' show' : '') + (isKnown ? ' !text-[var(--known-c1)]' : '')}
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
          className={'speak-btn' + (isKnown ? ' !text-[var(--known-c3)]' : '')}
          style={{ marginLeft: 6, width: 20, height: 20, fontSize: 11, verticalAlign: 'middle' }}
        />
      )}
    </div>
  );
}

export function ExEn() {
  const { cw } = useDeckState();
  const isKnown = useIsCardKnown();
  if (!cw) return null;
  const { exenHtml, frontRtl } = computeCardView(cw, getResolvedMode());
  return (
    <span
      className={'ex-en' + (isKnown ? ' !text-[var(--known-c2)]' : '')}
      id="exen"
      dir={frontRtl ? 'rtl' : undefined}
      dangerouslySetInnerHTML={{ __html: exenHtml }}
    />
  );
}

export function ExUa() {
  const { cw, flipped } = useDeckState();
  const isKnown = useIsCardKnown();
  if (!cw) return null;
  const { exuaHtml, backRtl } = computeCardView(cw, getResolvedMode());
  const back = parsePair(getResolvedMode()).back;
  const backExText = entryFor(back, cw).ex;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 5 }}>
      <div
        className={'ex-ua' + (flipped ? ' show' : '') + (isKnown ? ' !text-[var(--known-c2)]' : '')}
        id="exua"
        dir={backRtl ? 'rtl' : undefined}
        dangerouslySetInnerHTML={{ __html: exuaHtml }}
      />
      {flipped && (
        <BackSpeakBtn
          code={back}
          text={backExText}
          fallbackEnText={cw[2] || ''}
          className={'speak-btn speak-ex-btn' + (isKnown ? ' !text-[var(--known-c3)]' : '')}
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

export function OtherMeanings() {
  const { cw, flipped } = useDeckState();
  const isKnown = useIsCardKnown();
  const { front } = parsePair(getResolvedMode());
  // "Other meanings" data is loaded lazily per front language (see
  // js/features/word-data/senses-loader.ts) instead of eagerly shipping
  // every language's sense data to every user. Loading is triggered as soon
  // as the card shows (not gated on `flipped` — card-meta.tsx's CEFR badges
  // need this same data at the same time, to show one badge per distinct
  // sense level instead of always cefr.ts's single word-level badge).
  const [, forceUpdate] = useState(0);
  useEffect(() => {
    let cancelled = false;
    ensureSensesLoaded(front).then(() => {
      if (!cancelled) forceUpdate((x) => x + 1);
    });
    return () => {
      cancelled = true;
    };
  }, [front]);

  if (!cw) return null;
  const dict = getSensesForLang(front);
  if (!dict) return null;
  const frontWord = headwordFor(front, cw);
  if (!frontWord) return null;
  const senses = findSenses(dict, frontWord);
  if (!senses || senses.length < 2) return null;
  const posLang = posLangForFront(front);

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
            <span className="sense-pos-row inline-flex items-center gap-1">
              <span
                className={
                  'sense-pos text-[.72rem] italic ' +
                  (isKnown ? 'text-[var(--known-c3)]' : 'text-[var(--text2)]')
                }
              >
                {tLang('pos.' + (SENSE_POS_KEY[s.pos] ?? s.pos), posLang)}
              </span>
              {s.level && <CefrBadge level={s.level} small />}
            </span>{' '}
            {/* sense-translation is the "answer" for this meaning, same as
                the main word's #wtransl — masked via .show like .transl,
                not gated out of the DOM, so it fades in on flip instead of
                popping in once senses finish loading. */}
            <span
              className={
                'sense-translation font-bold ' +
                (isKnown ? 'text-[var(--known-c1)]' : 'text-[var(--text)]') +
                (flipped ? ' show' : '')
              }
            >
              {s.translation}
            </span>
            {s.gloss && (
              <div className={'sense-gloss mt-px text-[.74rem] leading-[1.4] text-[var(--text2)]' + (flipped ? ' show' : '')}>
                {s.gloss}
              </div>
            )}
            <div
              className={
                'sense-example mt-px text-[.74rem] leading-[1.4] ' +
                (isKnown ? 'text-[var(--known-c2)]' : 'text-[var(--text3)]')
              }
            >
              <span dangerouslySetInnerHTML={{ __html: boldHead(s.exTarget, frontWord) }} />{' '}
              <button
                type="button"
                className={
                  'speak-btn sense-speak-btn !px-[3px] !py-px !text-[12px] align-middle' +
                  (isKnown ? ' !text-[var(--known-c3)]' : '')
                }
                title="Вимовити приклад"
                // onClickCapture, not onClick: #card's own click-to-flip
                // listener is a plain addEventListener('click', ...) bound
                // directly to #card (card-actions.ts), which sits BELOW
                // React's root in the DOM and so fires during the real
                // bubble phase before React's delegated onClick ever gets a
                // chance to run stopPropagation() — too late by then. React
                // does attach a real capture-phase listener at its root,
                // which fires before the event reaches #card at all, so
                // doing the stopPropagation (and the action) in the capture
                // handler pre-empts the flip. Same trick would be needed for
                // any other button rendered inside #card via React.
                onClickCapture={(e) => {
                  e.stopPropagation();
                  speakForCode(front, s.exTarget, '', e.currentTarget);
                }}
              >
                🔊
              </button>{' '}
              {s.exKnow ? (
                <i className={'italic know' + (flipped ? ' show' : '')}>— {s.exKnow}</i>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
