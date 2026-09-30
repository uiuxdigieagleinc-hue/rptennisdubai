"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

// Elementor background slideshow: slide_right transition 500ms, 5s per slide, loop.
export default function HeroSlideshow({ slides }: { slides: StaticImageData[] }) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (document.visibilityState === "visible") setI((v) => (v + 1) % slides.length);
    }, 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <div className="hero__slides" aria-hidden="true">
      {slides.map((s, k) => (
        <div
          key={s.src}
          className={`hero__slide${k === i ? " is-active" : ""}${k === (i - 1 + slides.length) % slides.length ? " is-prev" : ""}`}
        >
          <Image src={s} alt="" fill priority={k === 0} sizes="100vw" placeholder="blur" />
        </div>
      ))}
    </div>
  );
}
