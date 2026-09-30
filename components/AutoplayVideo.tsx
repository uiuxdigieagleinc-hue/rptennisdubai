"use client";

import { useEffect, useRef } from "react";

// Plays only while at least 25% visible (same as the live site's custom.js).
export default function AutoplayVideo({ src, poster, label }: { src: string; poster?: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      className="video"
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      controls
      controlsList="nodownload"
      preload="metadata"
      aria-label={label}
    />
  );
}
