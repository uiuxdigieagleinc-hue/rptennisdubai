"use client";

import Link from "next/link";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import GalleryGrid from "./GalleryGrid";

type Tab = { id: string; label: string; items: { src: StaticImageData; alt: string }[]; link?: { href: string; label: string } };

// Gallery page: one tab per gallery. /gallery/#robin-hood-camp opens the Robin Hood tab.
export default function GalleryTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);

  useEffect(() => {
    const fromHash = () => {
      const id = window.location.hash.slice(1);
      if (tabs.some((t) => t.id === id)) setActive(id);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [tabs]);

  const select = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };
  const tab = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <>
      <div className="gtabs" role="tablist" aria-label="Galleries">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`gtab-${t.id}`}
            aria-selected={t.id === tab.id}
            aria-controls={`gpanel-${t.id}`}
            className="gtabs__tab"
            onClick={() => select(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`gpanel-${tab.id}`} aria-labelledby={`gtab-${tab.id}`}>
        <GalleryGrid key={tab.id} items={tab.items} />
        {tab.link && (
          <p className="gtabs__more">
            <Link href={tab.link.href} className="rh__link">
              {tab.link.label}
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
