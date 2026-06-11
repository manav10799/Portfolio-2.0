import { useEffect, useRef } from "react";

const REPEL_RADIUS = 120;
const REPEL_FORCE = 14;
const HOME_PULL = 0.06;
const MAX_PARTICLES = 420;

/* Canvas particle field shaped like a mountain ridgeline.
   Particles drift, repel from the cursor, and spring home.
   Paused offscreen; static single frame under reduced motion. */
export default function RidgeParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles = [];
    let raf = 0;
    let visible = true;
    let w = 0;
    let h = 0;
    let accent = "#00ff88";
    let muted = "#8b8b85";
    const mouse = { x: -9999, y: -9999 };

    const readColors = () => {
      const css = getComputedStyle(document.documentElement);
      accent = css.getPropertyValue("--accent").trim() || accent;
      muted = css.getPropertyValue("--muted").trim() || muted;
    };

    // layered sines fake a believable ridgeline silhouette
    const ridgeY = (x) =>
      h * 0.6 -
      h * 0.16 * Math.sin((x / w) * Math.PI * 1.7 + 0.6) -
      h * 0.09 * Math.sin((x / w) * Math.PI * 4.3 + 2.1) -
      h * 0.04 * Math.sin((x / w) * Math.PI * 9.7 + 1.3);

    const build = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      const ridgeCount = Math.min(MAX_PARTICLES, Math.floor(w / 3.5));
      for (let i = 0; i < ridgeCount; i++) {
        // ridge body: dense at the crest, thinning toward the bottom
        const hx = (i / ridgeCount) * w + (Math.random() - 0.5) * 10;
        const crest = ridgeY(hx);
        const hy = crest + Math.pow(Math.random(), 2.2) * (h - crest);
        const onCrest = hy - crest < 14;
        particles.push({
          hx,
          hy,
          x: hx,
          y: hy,
          size: onCrest ? 2.2 : 1.4,
          color: onCrest ? accent : muted,
          alpha: onCrest ? 0.95 : 0.18 + Math.random() * 0.3,
          phase: Math.random() * Math.PI * 2,
          sway: 0.3 + Math.random() * 0.7,
        });
      }
      // sparse "stars" above the ridge
      const starCount = Math.floor(ridgeCount / 7);
      for (let i = 0; i < starCount; i++) {
        const hx = Math.random() * w;
        const hy = Math.random() * ridgeY(hx) * 0.85;
        particles.push({
          hx,
          hy,
          x: hx,
          y: hy,
          size: 1.1,
          color: muted,
          alpha: 0.1 + Math.random() * 0.25,
          phase: Math.random() * Math.PI * 2,
          sway: 0.2 + Math.random() * 0.4,
        });
      }
    };

    const draw = (t) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (!reduced) {
          // gentle idle drift
          const driftX = Math.sin(t * 0.0006 + p.phase) * p.sway;
          const driftY = Math.cos(t * 0.0008 + p.phase) * p.sway;
          // cursor repulsion with smooth falloff
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < REPEL_RADIUS && dist > 0.01) {
            const f = ((REPEL_RADIUS - dist) / REPEL_RADIUS) * REPEL_FORCE;
            p.x += (dx / dist) * f;
            p.y += (dy / dist) * f;
          }
          p.x += (p.hx + driftX - p.x) * HOME_PULL;
          p.y += (p.hy + driftY - p.y) * HOME_PULL;
        }
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (t) => {
      if (visible) draw(t);
      raf = requestAnimationFrame(loop);
    };

    const onPointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onPointerLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    readColors();
    build();

    const onTheme = () => {
      readColors();
      build();
      if (reduced) draw(0);
    };
    window.addEventListener("themechange", onTheme);

    const ro = new ResizeObserver(() => {
      build();
      if (reduced) draw(0);
    });
    ro.observe(canvas.parentElement);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(canvas);

    if (reduced) {
      draw(0);
    } else {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("pointerleave", onPointerLeave);
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("themechange", onTheme);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  );
}
