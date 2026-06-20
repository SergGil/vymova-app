// Vymova — js/core/confetti.tsx
// Canvas confetti animation for goal completion
import { useEffect, useRef, type ReactElement } from 'react';

let _canvas: HTMLCanvasElement | null = null;
let _done = false;

export function ConfettiCanvas(): ReactElement {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => { _canvas = ref.current; return () => { _canvas = null; }; }, []);
  return <canvas ref={ref} id="confetti-canvas" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 99990, display: 'block' }} />;
}

export function launchConfetti(): void {
  if (_done) return;
  const canvas = _canvas;
  if (!canvas) return;
  _done = true;
  const ctx = canvas.getContext('2d')!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  type Piece = { x:number; y:number; w:number; h:number; r:number; vx:number; vy:number; vr:number; color:string; opacity:number };
  const colors = ['#4ecca3','#e67e22','#3498db','#e74c3c','#f1c40f','#9b59b6','#27ae60'];
  const pieces: Piece[] = Array.from({ length: 120 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 100,
    w: 8 + Math.random() * 8,
    h: 4 + Math.random() * 4,
    r: Math.random() * Math.PI * 2,
    vx: (Math.random() - 0.5) * 4,
    vy: 2 + Math.random() * 4,
    vr: (Math.random() - 0.5) * 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
    opacity: 1,
  }));

  let frame = 0;
  function animate(): void {
    ctx.clearRect(0, 0, canvas!.width, canvas!.height);
    for (const p of pieces) {
      p.x += p.vx; p.y += p.vy; p.r += p.vr;
      if (frame > 60) p.opacity = Math.max(0, p.opacity - 0.012);
      ctx.save();
      ctx.globalAlpha = p.opacity;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    frame++;
    if (frame < 140) requestAnimationFrame(animate);
    else { ctx.clearRect(0, 0, canvas!.width, canvas!.height); _done = false; }
  }
  animate();
}
