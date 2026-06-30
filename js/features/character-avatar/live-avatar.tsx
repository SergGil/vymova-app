// Vymova — js/features/character-avatar/live-avatar.tsx
// The one live, animated, drag-to-rotate 3D avatar view (profile page hero).
// Owns its own WebGLRenderer + render loop, created ONCE per (size, variant)
// — changing appearance only swaps the character mesh inside the existing
// scene/context, it never recreates the WebGL context. (Recreating the
// context on every customization click could exhaust the browser's WebGL
// context limit and get permanently stuck on the fallback placeholder.)
import { useEffect, useRef, useState, type ReactElement } from 'react';
import { Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { CharacterAppearance } from '../../../src/types.ts';
import { buildCharacterGroup, type BuiltCharacter } from './scene-builder.ts';
import { createLitScene, createCamera } from './scene-lighting.ts';
import { BONE_WORLD } from './skeleton-builder.ts';
import { FallbackAvatar } from './fallback-avatar.tsx';

export interface LiveAvatarProps {
  appearance: CharacterAppearance;
  size: number;
  variant: 'full' | 'head';
}

const BREATHE_PERIOD_MS = 3400;
const BLINK_PERIOD_MS = 4800;
const BLINK_DURATION_MS = 180;
const SWAY_PERIOD_MS = 5200;
const WAVE_PERIOD_MS = 9000;
const WAVE_DURATION_MS = 1400;

export function LiveAvatar({ appearance, size, variant }: LiveAvatarProps): ReactElement {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<Scene | null>(null);
  const builtRef = useRef<BuiltCharacter | null>(null);
  const torsoBaseYRef = useRef(0);
  const [unavailable, setUnavailable] = useState(false);
  const aspect = variant === 'head' ? 1 : 320 / 200;
  const height = Math.round(size * aspect);

  // Renderer/scene/camera/controls + the render loop: created once per
  // (size, variant) and kept alive across appearance changes.
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
    setUnavailable(false);

    const pixelRatio = Math.min(Math.max(window.devicePixelRatio || 1, 1), 2);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(size, height, false);

    const scene = createLitScene();
    sceneRef.current = scene;
    const camera = createCamera(variant, size / height);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = !reducedMotion;
    controls.autoRotateSpeed = 1.2;
    controls.target.set(0, variant === 'head' ? BONE_WORLD.head[1] : 0.85, 0);

    let resumeTimer: number | undefined;
    const pauseAutoRotate = (): void => {
      controls.autoRotate = false;
      if (resumeTimer) window.clearTimeout(resumeTimer);
    };
    const scheduleResume = (): void => {
      if (reducedMotion) return;
      if (resumeTimer) window.clearTimeout(resumeTimer);
      resumeTimer = window.setTimeout(() => {
        controls.autoRotate = true;
      }, 2500);
    };
    controls.addEventListener('start', pauseAutoRotate);
    controls.addEventListener('end', scheduleResume);

    const startTime = performance.now();
    let rafId = 0;

    const tick = (): void => {
      const built = builtRef.current;
      const t = performance.now() - startTime;

      if (built && !reducedMotion) {
        built.torso.position.y =
          torsoBaseYRef.current + Math.sin((t / BREATHE_PERIOD_MS) * Math.PI * 2) * 0.025;

        const phase = t % BLINK_PERIOD_MS;
        const scaleY =
          phase < BLINK_DURATION_MS
            ? Math.max(0.06, Math.abs(Math.cos((phase / BLINK_DURATION_MS) * Math.PI)))
            : 1;
        built.eyelids.forEach((eye) => {
          eye.scale.y = scaleY;
        });

        // Subtle continuous weight-shift sway through the spine.
        built.rig.bones.spine.rotation.z = Math.sin((t / SWAY_PERIOD_MS) * Math.PI * 2) * 0.025;

        // Periodic short "wave" gesture: lift the shoulder/elbow, wiggle, return to rest.
        const wavePhase = t % WAVE_PERIOD_MS;
        const { shoulderR, forearmR } = built.rig.bones;
        if (wavePhase < WAVE_DURATION_MS) {
          const wave = Math.sin((wavePhase / WAVE_DURATION_MS) * Math.PI);
          const wiggle = Math.sin((wavePhase / WAVE_DURATION_MS) * Math.PI * 6) * 0.12;
          shoulderR.rotation.z = -wave * 1.9;
          forearmR.rotation.x = -wave * 0.5 + wiggle * wave;
        } else {
          shoulderR.rotation.z = 0;
          forearmR.rotation.x = 0;
        }
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
      builtRef.current?.dispose();
      builtRef.current = null;
      sceneRef.current = null;
      renderer.dispose();
      renderer.forceContextLoss?.();
    };
  }, [size, variant, height]);

  // Swaps the character mesh in place whenever appearance changes — no
  // renderer/context churn.
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const previous = builtRef.current;
    const next = buildCharacterGroup(appearance);
    scene.add(next.group);
    builtRef.current = next;
    torsoBaseYRef.current = next.torso.position.y;

    if (previous) {
      scene.remove(previous.group);
      previous.dispose();
    }
  }, [appearance]);

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
