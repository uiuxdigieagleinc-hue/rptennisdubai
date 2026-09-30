"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AngleDownIcon, CloseIcon } from "./Icons";

type Item = { src: StaticImageData; alt: string };

// Elementor gallery: 4/2/2 columns, square tiles, dark overlay on hover, lightbox.
export default function GalleryGrid({ items, className = "" }: { items: Item[]; className?: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className={`gallery ${className}`}>
        {items.map((it, i) => (
          <a
            key={it.src.src}
            href={it.src.src}
            className="gallery__item"
            onClick={(e) => {
              e.preventDefault();
              setOpen(i);
            }}
            aria-label={`Open image ${i + 1}: ${it.alt}`}
          >
            <Image src={it.src} alt={it.alt} sizes="(max-width: 992px) 50vw, 320px" placeholder="blur" />
          </a>
        ))}
      </div>

      {open !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer" onClick={close}>
          <button type="button" className="lightbox__close" onClick={close} aria-label="Close" autoFocus>
            <CloseIcon />
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous image"
          >
            <AngleDownIcon />
          </button>
          <div className="lightbox__img" onClick={(e) => e.stopPropagation()}>
            <Image src={items[open].src} alt={items[open].alt} sizes="100vw" placeholder="blur" />
          </div>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next image"
          >
            <AngleDownIcon />
          </button>
          <p className="lightbox__count">
            {open + 1} / {items.length}
          </p>
        </div>
      )}
    </>
  );
}
