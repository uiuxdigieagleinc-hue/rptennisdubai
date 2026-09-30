"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, whatsapp, type NavItem } from "@/content/site";
import { img } from "@/content/images";
import { AngleDownIcon, BarsIcon, CloseIcon, WhatsAppIcon } from "./Icons";

const path = (href: string) => href.split("#")[0];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [subOpen, setSubOpen] = useState<string | null>(null);

  // Close the mobile menu when a link in it is followed
  const closeOnLink = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("a")) {
      setOpen(false);
      setSubOpen(null);
    }
  };

  const current = (href: string) => (!href.includes("#") && pathname === href ? "page" : undefined);
  const inSection = (item: NavItem) =>
    pathname === item.href || !!item.children?.some((c) => path(c.href) === pathname);

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
          {nav.map((item) => {
            if (!item.children)
              return (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current(item.href)}>
                    {item.label}
                  </Link>
                </li>
              );
            const isOpen = subOpen === item.label;
            const toggle = () => setSubOpen(isOpen ? null : item.label);
            return (
              <li key={item.label}>
                {item.href === "#" ? (
                  <button type="button" aria-expanded={isOpen} onClick={toggle}>
                    {item.label}
                    <AngleDownIcon />
                  </button>
                ) : (
                  <div className="mobile-menu__parent">
                    <Link href={item.href} aria-current={current(item.href)}>
                      {item.label}
                    </Link>
                    <button type="button" aria-expanded={isOpen} aria-label={`Show ${item.label} submenu`} onClick={toggle}>
                      <AngleDownIcon />
                    </button>
                  </div>
                )}
                {isOpen && (
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
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
