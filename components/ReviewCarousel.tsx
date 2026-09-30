"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Review } from "@/content/reviews";
import ReviewCard from "./ReviewCard";

const perViewFor = (w: number) => (w <= 767 ? 1 : w <= 992 ? 2 : 3);

// Elementor loop carousel: 3/2/1 slides, 20px gap, autoplay 5s, pause on hover, infinite, bullets.
export default function ReviewCarousel({ reviews }: { reviews: Review[] }) {
  const count = reviews.length;
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const paused = useRef(false);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const onResize = () => setPerView(perViewFor(window.innerWidth));
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const go = useCallback(
    (next: number) => {
      setAnimate(true);
      if (next < 0) {
        // jump to the cloned set, then slide back one
        setAnimate(false);
        setIndex(count);
        requestAnimationFrame(() =>
          requestAnimationFrame(() => {
            setAnimate(true);
            setIndex(count - 1);
          })
        );
        return;
      }
      setIndex(next);
    },
    [count]
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => {
      if (!paused.current && document.visibilityState === "visible") go(index + 1);
    }, 5000);
    return () => clearInterval(t);
  }, [index, go]);

  // After sliding onto the cloned copy of slide 0, snap back without animation
  const onTransitionEnd = () => {
    if (index >= count) {
      setAnimate(false);
      setIndex(index - count);
    }
  };

  const slides = [...reviews, ...reviews];
  const active = index % count;

  return (
    <div
      className="carousel"
      style={{ "--per-view": perView } as React.CSSProperties}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(dx < 0 ? index + 1 : index - 1);
        touchX.current = null;
      }}
      role="region"
      aria-roledescription="carousel"
      aria-label="Player reviews"
    >
      <div className="carousel__viewport">
        <div
          className="carousel__track"
          style={{
            transform: `translateX(calc(${-index} * (100% + var(--gap)) / var(--per-view)))`,
            transition: animate ? "transform 500ms ease" : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((r, k) => (
            <div
              className="carousel__slide"
              key={k}
              aria-hidden={k < index || k >= index + perView}
              role="group"
              aria-roledescription="slide"
              aria-label={`${(k % count) + 1} of ${count}`}
            >
              <ReviewCard review={r} />
            </div>
          ))}
        </div>
      </div>
      <div className="carousel__dots">
        {reviews.map((r, k) => (
          <button
            key={r.name}
            type="button"
            className={k === active ? "is-active" : undefined}
            aria-label={`Go to review ${k + 1}`}
            aria-current={k === active}
            onClick={() => go(k)}
          />
        ))}
      </div>
    </div>
  );
}
