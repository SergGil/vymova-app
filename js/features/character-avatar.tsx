// Vymova — js/features/character-avatar.tsx
// Full-body SVG character avatar with swappable skin/hair/eyes/outfit layers,
// soft gradient shading for a less flat look, and a subtle idle animation
// (breathing + blinking).
import { useId, type ReactElement } from 'react';
import type { CharacterAppearance } from '../../src/types.ts';

export const BODY_TYPES  = ['masc', 'fem'] as const;
export const SKIN_TONES  = ['#FFE0BD', '#FFDBAC', '#F1C27D', '#E0AC69', '#C68642', '#8D5524', '#5C3A21', '#3B2219'];
export const HAIR_COLORS = ['#2C2C2C', '#5A3825', '#A0522D', '#D4A017', '#E8B4B8', '#9B9B9B', '#1F4E79', '#27AE60'];
export const EYE_COLORS  = ['#3B2412', '#2E5E8C', '#3F6B35', '#555555', '#6B3FA0', '#8B5E3C'];
export const HAIR_STYLES = ['bald', 'short', 'long', 'curly', 'mohawk', 'ponytail', 'bun', 'spiky'] as const;
export const OUTFIT_STYLES = ['tshirt', 'hoodie', 'jacket', 'dress', 'overalls'] as const;
export const OUTFIT_COLORS = ['#e74c3c', '#2980b9', '#27ae60', '#9b59b6', '#f1c40f', '#2c3e50', '#e67e22', '#1abc9c'];

export const DEFAULT_APPEARANCE: CharacterAppearance = {
  bodyType: 0, skinTone: 1, hairStyle: 1, hairColor: 0, eyeColor: 0, outfitStyle: 0, outfitColor: 0,
};

function clampIdx(i: number, len: number): number { return ((i % len) + len) % len; }

// Darkens a "#rrggbb" hex color by the given fraction (0-1), for shading/eyebrows.
function shade(hex: string, amount: number): string {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.max(0, Math.round(((n >> 16) & 255) * (1 - amount)));
  const g = Math.max(0, Math.round(((n >> 8) & 255) * (1 - amount)));
  const b = Math.max(0, Math.round((n & 255) * (1 - amount)));
  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
}

// Shared dome covering the top of the head down to ear height — the base
// every style sits on, so face-framing pieces (bob panels, curl cascades,
// ponytail) only have to add what sticks out past it.
const HAIR_CAP_D = 'M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z';

// One spike as a standalone wide-based triangle (rounded shoulders, pointed
// tip) rather than a zigzag outline — overlapping several of these hides the
// gaps between them, so the silhouette doesn't read as a uniform comb/crown.
function spikePath(cx: number, peakY: number, lean: number, baseHalf: number): string {
  const baseY = 50;
  const midY = (baseY + peakY) / 2;
  return `M${cx - baseHalf} ${baseY} Q${cx - baseHalf * 0.4} ${midY} ${cx + lean} ${peakY} Q${cx + baseHalf * 0.4} ${midY} ${cx + baseHalf} ${baseY} Z`;
}

// Deliberately irregular heights/widths/spacing (not an even comb) so the
// silhouette reads as tousled spiky hair, not a symmetric crown.
const MASC_SPIKES = [
  { cx: 64, peakY: 32, lean: -5, baseHalf: 9 },
  { cx: 75, peakY: 14, lean: 5, baseHalf: 10 },
  { cx: 91, peakY: 23, lean: -7, baseHalf: 8 },
  { cx: 103, peakY: 6, lean: 4, baseHalf: 12 },
  { cx: 118, peakY: 19, lean: -4, baseHalf: 9 },
  { cx: 130, peakY: 29, lean: 6, baseHalf: 10 },
  { cx: 139, peakY: 35, lean: -3, baseHalf: 8 },
];

const FEM_SPIKES = [
  { cx: 64, peakY: 40, lean: -3, baseHalf: 7 },
  { cx: 76, peakY: 27, lean: 3, baseHalf: 9 },
  { cx: 90, peakY: 37, lean: -4, baseHalf: 7 },
  { cx: 103, peakY: 22, lean: 3, baseHalf: 9 },
  { cx: 117, peakY: 35, lean: -2, baseHalf: 7 },
  { cx: 132, peakY: 31, lean: 4, baseHalf: 8 },
];

function Hair({ style, color, bodyType }: { style: string; color: string; bodyType: number }): ReactElement | null {
  const fem = bodyType === 1;
  const cap = <path d={HAIR_CAP_D} fill={color} />;

  if (style === 'bald') return null;

  if (style === 'short') {
    if (!fem) return cap; // clean crew cut
    // Chin-length bob: cap plus two side panels that flare out at the jaw.
    return (
      <>
        {cap}
        <path d="M58 56 Q50 78 53 96 Q56 104 66 100 Q60 80 62 56 Z" fill={color} />
        <path d="M142 56 Q150 78 147 96 Q144 104 134 100 Q140 80 138 56 Z" fill={color} />
      </>
    );
  }

  if (style === 'long') {
    return (
      <>
        {cap}
        {fem ? (
          // Single flowing lock per side — narrow at the temple, bellies
          // out, tapers to a point past the shoulder.
          <>
            <path d="M56 54 Q34 70 38 110 Q40 132 54 136 Q46 100 58 58 Z" fill={color} />
            <path d="M144 54 Q166 70 162 110 Q160 132 146 136 Q154 100 142 58 Z" fill={color} />
          </>
        ) : (
          // Straighter, slimmer shoulder-length hair — less volume than the fem cut.
          <>
            <path d="M58 54 Q50 64 52 100 Q53 118 60 116 Q56 90 60 56 Z" fill={color} />
            <path d="M142 54 Q150 64 148 100 Q147 118 140 116 Q144 90 140 56 Z" fill={color} />
          </>
        )}
      </>
    );
  }

  if (style === 'curly') {
    const topBumps = [62, 78, 100, 122, 138].map(cx => <circle key={cx} cx={cx} cy="36" r={fem ? 9 : 6.5} fill={color} />);
    if (!fem) return <>{cap}{topBumps}</>;
    // Fuller curls cascading down both sides to the jaw, framing the face.
    return (
      <>
        {cap}
        {topBumps}
        <circle cx="52" cy="62" r="8" fill={color} />
        <circle cx="50" cy="82" r="8" fill={color} />
        <circle cx="55" cy="100" r="7" fill={color} />
        <circle cx="148" cy="62" r="8" fill={color} />
        <circle cx="150" cy="82" r="8" fill={color} />
        <circle cx="145" cy="100" r="7" fill={color} />
      </>
    );
  }

  if (style === 'mohawk') {
    // A tapered crest rather than a plain rectangle; shorter (fauxhawk) for fem.
    return fem
      ? <path d="M90 22 Q87 38 90 48 L110 48 Q113 38 110 22 Z" fill={color} />
      : <path d="M90 14 Q86 38 90 60 L110 60 Q114 38 110 14 Z" fill={color} />;
  }

  if (style === 'ponytail') {
    if (fem) {
      // High side ponytail sweeping out and down.
      return (
        <>
          {cap}
          <path d="M138 44 Q160 60 152 110 Q148 118 140 112 Q146 70 130 46 Z" fill={color} />
        </>
      );
    }
    // Short tied-back stub poking out from behind the ear — a low ponytail
    // reads mostly hidden from the front, unlike the fem side-swoop.
    return (
      <>
        {cap}
        <path d="M136 64 Q150 66 148 80 Q145 88 136 82 Q138 72 136 64 Z" fill={color} />
      </>
    );
  }

  if (style === 'bun') {
    return (
      <>
        {cap}
        {fem ? (
          <>
            <circle cx="132" cy="30" r="14" fill={color} />
            <path d="M122 36 Q115 30 119 23" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
            <path d="M144 40 Q151 34 148 27" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
          </>
        ) : (
          <circle cx="100" cy="20" r="9" fill={color} />
        )}
      </>
    );
  }

  // spiky — overlapping individual spikes on a short-hair base, not one
  // continuous zigzag outline (that reads as a crown, not hair).
  if (fem) {
    return (
      <>
        {cap}
        {FEM_SPIKES.map((s, i) => <path key={i} d={spikePath(s.cx, s.peakY, s.lean, s.baseHalf)} fill={color} />)}
        {/* one longer side-swept piece over the brow for asymmetry */}
        <path d="M72 42 Q58 32 48 40 Q60 48 73 52 Z" fill={color} />
      </>
    );
  }
  return (
    <>
      {cap}
      {MASC_SPIKES.map((s, i) => <path key={i} d={spikePath(s.cx, s.peakY, s.lean, s.baseHalf)} fill={color} />)}
    </>
  );
}

interface OutfitSpec { style: string; color: string; }

function Outfit({ outfit, skinFill, outfitFill, bodyType }: { outfit: OutfitSpec; skinFill: string; outfitFill: string; bodyType: number }): ReactElement {
  const legs = outfit.style === 'dress'
    ? <path d="M70 200 L130 200 L142 300 L58 300 Z" fill={outfitFill} />
    : (
      <>
        <rect x="62" y="200" width="30" height="100" rx="10" fill="#34495e" />
        <rect x="108" y="200" width="30" height="100" rx="10" fill="#34495e" />
        <rect x="58" y="295" width="36" height="16" rx="7" fill="#1c2833" />
        <rect x="106" y="295" width="36" height="16" rx="7" fill="#1c2833" />
      </>
    );
  // Same 80×88 bounding box as the masc torso, just tapered at the waist —
  // keeps arm/leg/collar coordinates valid for either body type.
  const torso = bodyType === 1
    ? <path d="M60 122 L140 122 Q140 145 128 166 Q140 185 136 210 L64 210 Q60 185 72 166 Q60 145 60 122 Z" fill={outfitFill} />
    : <rect x="60" y="122" width="80" height="88" rx="22" fill={outfitFill} />;
  return (
    <>
      {/* arms */}
      <rect x="38" y="128" width="24" height="78" rx="12" fill={outfitFill} />
      <rect x="138" y="128" width="24" height="78" rx="12" fill={outfitFill} />
      <circle cx="50" cy="210" r="11" fill={skinFill} />
      <circle cx="150" cy="210" r="11" fill={skinFill} />
      {/* torso */}
      {torso}
      {outfit.style === 'hoodie' && <path d="M78 122 Q100 138 122 122" fill="none" stroke="#00000022" strokeWidth="4" />}
      {outfit.style === 'jacket' && <path d="M100 122 L92 200 M100 122 L108 200" stroke="#00000033" strokeWidth="3" fill="none" />}
      {outfit.style === 'overalls' && (
        <>
          <rect x="72" y="150" width="56" height="60" rx="6" fill="#00000022" />
          <rect x="68" y="122" width="10" height="34" fill={outfit.color} />
          <rect x="122" y="122" width="10" height="34" fill={outfit.color} />
        </>
      )}
      {legs}
    </>
  );
}

export interface CharacterAvatarProps {
  appearance: CharacterAppearance;
  size?: number;
  /** 'full' = whole body (profile page); 'head' = cropped head+shoulders (small thumbnails). */
  variant?: 'full' | 'head';
  /** Idle breathing + blinking animation. Disable for many small thumbnails rendered at once. */
  animated?: boolean;
}

export function CharacterAvatar({ appearance, size = 220, variant = 'full', animated = true }: CharacterAvatarProps): ReactElement {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const bodyType = clampIdx(appearance.bodyType ?? 0, BODY_TYPES.length);
  const skin     = SKIN_TONES[clampIdx(appearance.skinTone, SKIN_TONES.length)];
  const hairCol  = HAIR_COLORS[clampIdx(appearance.hairColor, HAIR_COLORS.length)];
  const hairStyl = HAIR_STYLES[clampIdx(appearance.hairStyle, HAIR_STYLES.length)];
  const eyeCol   = EYE_COLORS[clampIdx(appearance.eyeColor, EYE_COLORS.length)];
  const outfit: OutfitSpec = {
    style: OUTFIT_STYLES[clampIdx(appearance.outfitStyle, OUTFIT_STYLES.length)],
    color: OUTFIT_COLORS[clampIdx(appearance.outfitColor, OUTFIT_COLORS.length)],
  };
  const viewBox = variant === 'head' ? '34 8 132 130' : '0 0 200 320';
  const [, , vbW, vbH] = viewBox.split(' ').map(Number);
  const breathe = animated ? 'char-breathe' : '';
  const blink = animated ? 'char-blink' : '';

  const skinGradId = `skinGrad-${uid}`;
  const outfitGradId = `outfitGrad-${uid}`;
  const skinFill = `url(#${skinGradId})`;
  const outfitFill = `url(#${outfitGradId})`;
  const eyebrowColor = shade(hairCol, 0.25);

  return (
    <svg viewBox={viewBox} width={size} height={size * (vbH / vbW)} role="img" aria-label="character avatar">
      <defs>
        {/* Hard-edged two-tone "cel shading" bands rather than a smooth blend —
            closer to the bold flat-shaded game-art look than a soft gradient. */}
        <radialGradient id={skinGradId} cx="38%" cy="30%" r="80%">
          <stop offset="0%" stopColor={shade(skin, -0.12)} />
          <stop offset="58%" stopColor={shade(skin, -0.12)} />
          <stop offset="59%" stopColor={shade(skin, 0.16)} />
          <stop offset="100%" stopColor={shade(skin, 0.16)} />
        </radialGradient>
        <linearGradient id={outfitGradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={shade(outfit.color, -0.1)} />
          <stop offset="44%" stopColor={shade(outfit.color, -0.1)} />
          <stop offset="45%" stopColor={shade(outfit.color, 0.2)} />
          <stop offset="100%" stopColor={shade(outfit.color, 0.2)} />
        </linearGradient>
      </defs>

      {/* soft contact shadow */}
      <ellipse cx="100" cy="312" rx="46" ry="7" fill="#000" opacity="0.16" />

      <g className={breathe} style={{ transformOrigin: '100px 200px' }}>
        {/* Bold outline around the body silhouette + hair, like the chunky
            black ink lines on flat-shaded game-art characters. */}
        <g stroke="#1a1626" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
          <Outfit outfit={outfit} skinFill={skinFill} outfitFill={outfitFill} bodyType={bodyType} />
          {/* neck */}
          <rect x="88" y="100" width="24" height="22" fill={skinFill} />
          {/* ears */}
          <circle cx="58" cy="72" r="8" fill={skinFill} />
          <circle cx="142" cy="72" r="8" fill={skinFill} />
          {/* head */}
          <circle cx="100" cy="68" r="42" fill={skinFill} />
          <Hair style={hairStyl} color={hairCol} bodyType={bodyType} />
        </g>
        {/* eyebrows — thinner and a touch higher-arched for the feminine body type */}
        {bodyType === 1 ? (
          <>
            <path d="M73 56 Q84 49 95 55" fill="none" stroke={eyebrowColor} strokeWidth="2" strokeLinecap="round" />
            <path d="M105 55 Q116 49 127 56" fill="none" stroke={eyebrowColor} strokeWidth="2" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M74 57 Q84 52 94 56" fill="none" stroke={eyebrowColor} strokeWidth="3" strokeLinecap="round" />
            <path d="M106 56 Q116 52 126 57" fill="none" stroke={eyebrowColor} strokeWidth="3" strokeLinecap="round" />
          </>
        )}
        {/* eyes */}
        <g className={blink} style={{ transformOrigin: '84px 64px' }}>
          <circle cx="84" cy="64" r="6" fill="#fff" stroke="#1a1626" strokeWidth="1.2" />
          <circle cx="84" cy="65" r="3.2" fill={eyeCol} />
          <circle cx="82.3" cy="63.2" r="1.1" fill="#fff" opacity="0.9" />
          {bodyType === 1 && (
            <g stroke="#1a1626" strokeWidth="1.3" strokeLinecap="round">
              <path d="M79 59 L74 55" />
              <path d="M78 62 L72 60" />
            </g>
          )}
        </g>
        <g className={blink} style={{ transformOrigin: '116px 64px' }}>
          <circle cx="116" cy="64" r="6" fill="#fff" stroke="#1a1626" strokeWidth="1.2" />
          <circle cx="116" cy="65" r="3.2" fill={eyeCol} />
          <circle cx="114.3" cy="63.2" r="1.1" fill="#fff" opacity="0.9" />
          {bodyType === 1 && (
            <g stroke="#1a1626" strokeWidth="1.3" strokeLinecap="round">
              <path d="M121 59 L126 55" />
              <path d="M122 62 L128 60" />
            </g>
          )}
        </g>
        {/* mouth — fuller, tinted lips for the feminine body type; a simple smile line otherwise */}
        {bodyType === 1 ? (
          <path d="M84 85 Q100 96 116 85 Q108 91.5 100 91.5 Q92 91.5 84 85 Z" fill="#c0667a" stroke="#1a1626" strokeWidth="1.5" strokeLinejoin="round" />
        ) : (
          <path d="M86 84 Q100 94 114 84" fill="none" stroke="#1a1626" strokeWidth="3" strokeLinecap="round" />
        )}
      </g>
    </svg>
  );
}
