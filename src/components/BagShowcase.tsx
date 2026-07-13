import { useEffect, useRef } from "react";
import "./BagShowcase.css";

interface BagShowcaseProps {
  /** Path to the cutout image (import it like any other asset) */
  image: string;
  /** Alt text for accessibility */
  alt?: string;
  className?: string;
}

/**
 * Interactive pseudo-3D product showcase.
 * Built from a single cutout photo — there's no real depth data, so instead of a
 * literal 360° spin (which would reveal the flat photo at odd angles), this does
 * a believable turntable sway: a slow idle rotation + float, plus cursor-driven
 * tilt on hover, all blended smoothly via requestAnimationFrame.
 */
export default function BagShowcase({
  image,
  alt = "Handmade crochet bag",
  className = "",
}: BagShowcaseProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);

  const hover = useRef({ active: false, px: 0, py: 0 });
  const current = useRef({ rx: 0, ry: 0, ty: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsHover = window.matchMedia("(hover: hover)").matches;

    // No real hover on touch devices, so drive the same tilt from scroll
    // position instead: as the bag moves through the viewport, it sweeps
    // through the same tilt range a cursor would otherwise produce.
    let removeScroll: (() => void) | undefined;

    if (!supportsHover && !reduceMotion) {
      const onScroll = () => {
        const el = stageRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight;
        const centerY = rect.top + rect.height / 2;
        // -1 when element center is above viewport middle, +1 when below
        const progress = (centerY - viewportH / 2) / (viewportH / 2);
        const clamped = Math.max(-1, Math.min(1, progress));
        hover.current = {
          active: true,
          px: clamped * 0.8,
          py: -clamped * 0.4,
        };
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      removeScroll = () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
      };
    }

    let raf = 0;
    const start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) / 1000;

      const idleRy = reduceMotion ? 0 : Math.sin(t * 0.5) * 14;
      const idleRx = reduceMotion ? 0 : Math.sin(t * 0.7) * 3;
      const idleTy = reduceMotion ? 0 : Math.sin(t * 1.1) * 10;

      const h = hover.current;
      const targetRy = h.active ? idleRy * 0.3 + h.px * 22 : idleRy;
      const targetRx = h.active ? idleRx * 0.3 - h.py * 10 : idleRx;
      const targetTy = h.active ? idleTy * 0.5 - 6 : idleTy;

      const c = current.current;
      c.rx += (targetRx - c.rx) * 0.08;
      c.ry += (targetRy - c.ry) * 0.08;
      c.ty += (targetTy - c.ty) * 0.08;

      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${c.ty}px) rotateX(${c.rx}deg) rotateY(${c.ry}deg)`;
      }
      if (shadowRef.current) {
        const squash = 1 - Math.min(Math.abs(c.ry) / 90, 0.35);
        const fade = 1 - Math.min(Math.abs(c.ty) / 40, 0.3);
        shadowRef.current.style.transform = `translateX(-50%) scaleX(${squash})`;
        shadowRef.current.style.opacity = String(0.35 * fade);
      }

      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      removeScroll?.();
    };
  }, []);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    hover.current = {
      active: true,
      px: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      py: ((e.clientY - rect.top) / rect.height) * 2 - 1,
    };
  };

  const handlePointerLeave = () => {
    hover.current.active = false;
  };

  return (
    <div className={`bag-showcase ${className}`}>
      <div className="bag-glow" aria-hidden="true" />
      <div
        ref={stageRef}
        className="bag-stage"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <img
          ref={imgRef}
          src={image}
          alt={alt}
          className="bag-img"
          draggable={false}
        />
        <div ref={shadowRef} className="bag-shadow" aria-hidden="true" />
      </div>
    </div>
  );
}
