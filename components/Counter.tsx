"use client";

import { useEffect, useRef, useState } from "react";

type Props = { value: number; suffix?: string; label: string; className?: string; duration?: number };

// Counts up from 0 when scrolled into view (Elementor counter, 2s).
// The final number is server-rendered so crawlers and no-JS users see it.
export default function Counter({ value, suffix = "", label, className = "", duration = 2000 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const run = () => {
      const start = performance.now();
      const tick = (t: number) => {
        const p = Math.min(1, (t - start) / duration);
        setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          io.disconnect();
          run();
        }
      },
      { threshold: 0.3 }
    );
    raf = requestAnimationFrame(() => setN(0));
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value, duration]);

  return (
    <div ref={ref} className={`counter ${className}`}>
      <div className="counter__number" aria-hidden="true">
        <span>{n}</span>
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="counter__title">{label}</div>
      <span className="sr-only">
        {value}
        {suffix} {label}
      </span>
    </div>
  );
}
