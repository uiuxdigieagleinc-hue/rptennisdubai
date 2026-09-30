"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, whatsapp } from "@/content/site";
import { img } from "@/content/images";
import { AngleDownIcon, BarsIcon, CloseIcon, WhatsAppIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  // Close the mobile menu when a link in it is followed
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(false);
      setSubOpen(false);
    }
  };

  const current = (href: string) => (pathname === href ? "page" : undefined);

  return (
    <header className="site-header">
      <div className="wrap site-header__row">
        <div className="site-header__logo">
          <Link href="/" aria-label="RP Tennis — home">
            <Image src={img.logo} alt="RP Tennis" width={70} height={70} priority />
          </Link>
        </div>

        <div className="site-header__nav">
          <nav aria-label="Main">
            <ul className="menu">
              {nav.map((item) =>
                item.children ? (
                  <li key={item.label}>
                    <button
                      type="button"
                      className={`menu__link${item.children.some((c) => c.href === pathname) ? " is-active" : ""}`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <span className="menu__arrow">
                        <AngleDownIcon />
                      </span>
                    </button>
                    <ul className="submenu">
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={current(c.href)}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="menu__link" aria-current={current(item.href)}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <button
            type="button"
            className="menu-toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <BarsIcon />}
          </button>
        </div>

        <div className="site-header__cta">
          <a className="btn" href={whatsapp.book} target="_blank" rel="noopener">
            <WhatsAppIcon />
            Contact
          </a>
        </div>
      </div>

      <nav id="mobile-menu" className={`mobile-menu${open ? " is-open" : ""}`} aria-label="Mobile" onClick={closeOnLink}>
        <ul>
          {nav.map((item) =>
            item.children ? (
              <li key={item.label}>
                <button type="button" aria-expanded={subOpen} onClick={() => setSubOpen((v) => !v)}>
                  {item.label}
                  <AngleDownIcon />
                </button>
                {subOpen && (
                  <ul className="mobile-menu__sub">
                    {item.children.map((c) => (
                      <li key={c.href}>
                        <Link href={c.href} aria-current={current(c.href)}>
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={item.href}>
                <Link href={item.href} aria-current={current(item.href)}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
}
