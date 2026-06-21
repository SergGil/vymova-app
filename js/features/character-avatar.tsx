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

function Hair({ style, color }: { style: string; color: string }): ReactElement | null {
  const cap = <path d="M58 58 A42 42 0 0 1 142 58 L142 38 Q100 16 58 38 Z" fill={color} />;
  if (style === 'bald') return null;
  if (style === 'short') return cap;
  if (style === 'long') {
    return (
      <>
        {cap}
        <rect x="50" y="50" width="14" height="70" rx="6" fill={color} />
        <rect x="136" y="50" width="14" height="70" rx="6" fill={color} />
      </>
    );
  }
  if (style === 'curly') {
    return (
      <>
        {cap}
        {[62, 78, 100, 122, 138].map(cx => <circle key={cx} cx={cx} cy="38" r="9" fill={color} />)}
      </>
    );
  }
  if (style === 'mohawk') return <rect x="90" y="14" width="20" height="48" rx="8" fill={color} />;
  if (style === 'ponytail') {
    return (
      <>
        {cap}
        <path d="M138 44 Q160 60 152 110 Q148 118 140 112 Q146 70 130 46 Z" fill={color} />
      </>
    );
  }
  if (style === 'bun') {
    return (
      <>
        {cap}
        <circle cx="138" cy="34" r="14" fill={color} />
      </>
    );
  }
  // spiky
  return (
    <path
      d="M58 58 L62 30 L74 50 L80 22 L92 48 L100 18 L108 48 L120 22 L126 50 L138 30 L142 58 Q100 38 58 58 Z"
      fill={color}
    />
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
          <Hair style={hairStyl} color={hairCol} />
        </g>
        {/* eyebrows */}
        <path d="M74 57 Q84 52 94 56" fill="none" stroke={eyebrowColor} strokeWidth="3" strokeLinecap="round" />
        <path d="M106 56 Q116 52 126 57" fill="none" stroke={eyebrowColor} strokeWidth="3" strokeLinecap="round" />
        {/* eyes */}
        <g className={blink} style={{ transformOrigin: '84px 64px' }}>
          <circle cx="84" cy="64" r="6" fill="#fff" stroke="#1a1626" strokeWidth="1.2" />
          <circle cx="84" cy="65" r="3.2" fill={eyeCol} />
          <circle cx="82.3" cy="63.2" r="1.1" fill="#fff" opacity="0.9" />
        </g>
        <g className={blink} style={{ transformOrigin: '116px 64px' }}>
          <circle cx="116" cy="64" r="6" fill="#fff" stroke="#1a1626" strokeWidth="1.2" />
          <circle cx="116" cy="65" r="3.2" fill={eyeCol} />
          <circle cx="114.3" cy="63.2" r="1.1" fill="#fff" opacity="0.9" />
        </g>
        {/* mouth */}
        <path d="M86 84 Q100 94 114 84" fill="none" stroke="#1a1626" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
