"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site, whatsapp, type NavItem } from "@/content/site";
import { img } from "@/content/images";
import { AngleDownIcon, FacebookIcon, InstagramIcon, WhatsAppIcon } from "./Icons";

const path = (href: string) => href.split("#")[0];

export default function Header() {
  const pathname = usePathname();
  const header = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  const close = () => {
    setOpen(false);
    setSubOpen(null);
  };

  // Close the mobile menu after navigation
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    close();
  }

  // While open: panel starts under the header, page can't scroll, Esc closes
  useEffect(() => {
    if (!open) return;
    const setTop = () => {
      const bottom = header.current?.getBoundingClientRect().bottom ?? 0;
      document.documentElement.style.setProperty("--mnav-top", `${Math.max(bottom, 0)}px`);
    };
    setTop();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.body.style.overflow = "hidden";
    document.documentElement.classList.add("mnav-open");
    window.addEventListener("resize", setTop);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.documentElement.classList.remove("mnav-open");
      window.removeEventListener("resize", setTop);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the mobile menu when a link in it is followed (also covers same-page links)
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) close();
  };

  const current = (href: string) => (!href.includes("#") && pathname === href ? "page" : undefined);
  const inSection = (item: NavItem) =>
    pathname === item.href || !!item.children?.some((c) => path(c.href) === pathname);

  return (
    <header ref={header} className={`site-header${open ? " is-open" : ""}`}>
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
                    {item.href === "#" ? (
                      <button type="button" className={`menu__link${inSection(item) ? " is-active" : ""}`} aria-haspopup="true">
                        {item.label}
                        <span className="menu__arrow">
                          <AngleDownIcon />
                        </span>
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className={`menu__link${inSection(item) ? " is-active" : ""}`}
                        aria-current={current(item.href)}
                        aria-haspopup="true"
                      >
                        {item.label}
                        <span className="menu__arrow">
                          <AngleDownIcon />
                        </span>
                      </Link>
                    )}
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
            onClick={() => (open ? close() : setOpen(true))}
          >
            <span className="menu-toggle__lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>

        <div className="site-header__cta">
          <a className="btn" href={whatsapp.book} target="_blank" rel="noopener">
            <WhatsAppIcon />
            Contact
          </a>
        </div>
      </div>

      {/* Mobile menu: full-height dark panel under the header */}
      <div id="mobile-menu" className="mnav" aria-hidden={!open} inert={!open} onClick={closeOnLink}>
        <nav className="mnav__inner" aria-label="Mobile">
          <ul className="mnav__list">
            {nav.map((item, i) => {
              const num = String(i + 1).padStart(2, "0");
              const style = { "--i": i } as React.CSSProperties;
              const active = inSection(item);
              if (!item.children)
                return (
                  <li key={item.href} className="mnav__item" style={style}>
                    <Link href={item.href} className={`mnav__link${active ? " is-active" : ""}`} aria-current={current(item.href)}>
                      <span className="mnav__num">{num}</span>
                      <span className="mnav__label">{item.label}</span>
                      {item.href === "/robin-hood-camp/" && <span className="mnav__tag">Summer 2027</span>}
                    </Link>
                  </li>
                );
              const isOpen = subOpen === item.label;
              return (
                <li key={item.label} className={`mnav__item${isOpen ? " is-open" : ""}`} style={style}>
                  <button
                    type="button"
                    className={`mnav__link${active ? " is-active" : ""}`}
                    aria-expanded={isOpen}
                    aria-controls={`mnav-sub-${i}`}
                    onClick={() => setSubOpen(isOpen ? null : item.label)}
                  >
                    <span className="mnav__num">{num}</span>
                    <span className="mnav__label">{item.label}</span>
                    <span className="mnav__plus" aria-hidden="true" />
                  </button>
                  <div id={`mnav-sub-${i}`} className="mnav__sub">
                    <ul>
                      {item.href !== "#" && (
                        <li>
                          <Link href={item.href} aria-current={current(item.href)}>
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                      )}
                      {item.children.map((c) => (
                        <li key={c.href}>
                          <Link href={c.href} aria-current={current(c.href)}>
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="mnav__foot">
            <div className="mnav__btns">
              <a className="btn" href={whatsapp.base} target="_blank" rel="noopener">
                <WhatsAppIcon />
                Book a Session
              </a>
              <Link className="btn btn--white" href="/contact-us/">
                Free 45-min Trial
              </Link>
            </div>
            <div className="mnav__contact">
              <a href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            <div className="mnav__social">
              <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
