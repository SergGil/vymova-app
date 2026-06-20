// Vymova — js/features/character-avatar/live-avatar.tsx
// The one live, animated, drag-to-rotate 3D avatar view (profile page hero).
// Owns its own WebGLRenderer + render loop; disposed fully on unmount.
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { CharacterAppearance } from '../../../src/types.ts';
import { buildCharacterGroup } from './scene-builder.ts';
import { createLitScene, createCamera } from './scene-lighting.ts';
import { FallbackAvatar } from './fallback-avatar.tsx';

export interface LiveAvatarProps {
  appearance: CharacterAppearance;
  size: number;
  variant: 'full' | 'head';
}

const BREATHE_PERIOD_MS = 3400;
const BLINK_PERIOD_MS = 4800;
const BLINK_DURATION_MS = 180;

export function LiveAvatar({ appearance, size, variant }: LiveAvatarProps): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [unavailable, setUnavailable] = useState(false);
  const aspect = variant === 'head' ? 1 : 320 / 200;
  const height = Math.round(size * aspect);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let renderer: WebGLRenderer;
    try {
      renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true });
    } catch {
      setUnavailable(true);
      return;
    }

    const pixelRatio = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(size, height, false);

    const scene = createLitScene();
    const built = buildCharacterGroup(appearance);
    scene.add(built.group);
    const camera = createCamera(variant, built, size / height);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = !reducedMotion;
    controls.autoRotateSpeed = 1.2;
    controls.target.set(0, variant === 'head' ? built.headAnchor.position.y : 0.85, 0);

    let resumeTimer: number | undefined;
    const pauseAutoRotate = (): void => {
      controls.autoRotate = false;
      if (resumeTimer) window.clearTimeout(resumeTimer);
    };
    const scheduleResume = (): void => {
      if (reducedMotion) return;
      if (resumeTimer) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => { controls.autoRotate = true; }, 2500);
    };
    controls.addEventListener('start', pauseAutoRotate);
    controls.addEventListener('end', scheduleResume);

    const torsoBaseY = built.torso.position.y;
    const startTime = performance.now();
    let rafId = 0;

    const tick = (): void => {
      const t = performance.now() - startTime;

      if (!reducedMotion) {
        built.torso.position.y = torsoBaseY + Math.sin((t / BREATHE_PERIOD_MS) * Math.PI * 2) * 0.025;

        const phase = t % BLINK_PERIOD_MS;
        const scaleY = phase < BLINK_DURATION_MS
          ? Math.max(0.06, Math.abs(Math.cos((phase / BLINK_DURATION_MS) * Math.PI)))
          : 1;
        built.eyelids.forEach(eye => { eye.scale.y = scaleY; });
      }

      controls.update();
      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      if (resumeTimer) window.clearTimeout(resumeTimer);
      controls.removeEventListener('start', pauseAutoRotate);
      controls.removeEventListener('end', scheduleResume);
      controls.dispose();
      built.dispose();
      renderer.dispose();
      renderer.forceContextLoss?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- appearance changes are rare (profile edits); a full remount-on-change is acceptable and simpler than diffing the built scene.
  }, [appearance, size, variant, height]);

  if (unavailable) return <FallbackAvatar appearance={appearance} size={size} />;

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={height}
      role="img"
      aria-label="character avatar"
      style={{ touchAction: 'none', cursor: 'grab', width: size, height }}
    />
  );
}
