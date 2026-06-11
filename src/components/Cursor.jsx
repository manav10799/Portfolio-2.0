import { useEffect, useRef } from "react";

const RING_LERP = 0.16;

/* Dot follows the pointer 1:1; ring trails with a lerp.
   Mounted only on fine pointers — touch devices keep native behavior. */
export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    document.documentElement.classList.add("has-cursor");

    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let raf = 0;

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const onOver = (e) => {
      const hover = !!e.target.closest("a, button, [data-cursor]");
      dot.classList.toggle("cursor-dot--hover", hover);
      ring.classList.toggle("cursor-ring--hover", hover);
    };

    const tick = () => {
      ringPos.x += (pos.x - ringPos.x) * RING_LERP;
      ringPos.y += (pos.y - ringPos.y) * RING_LERP;
      dot.style.translate = `${pos.x}px ${pos.y}px`;
      ring.style.translate = `${ringPos.x}px ${ringPos.y}px`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="cursor-dot hidden md:block" />
      <div ref={ringRef} className="cursor-ring hidden md:block" />
    </div>
  );
}
