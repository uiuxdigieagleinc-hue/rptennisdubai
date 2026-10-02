import Image from "next/image";
import Link from "next/link";
import { locations, nav, site } from "@/content/site";
import { img } from "@/content/images";
import { FacebookIcon, InstagramIcon } from "./Icons";
import { DiscoverRobinHood } from "./RobinHoodLink";
import RobinHoodSignup from "./RobinHoodSignup";

// The live footer shows a dead "Other" item; here its children are listed instead.
const links = nav.flatMap((i) => (i.href === "#" && i.children ? i.children : [i]));

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link href="/" aria-label="RP Tennis — home">
              <Image src={img.logo} alt="RP Tennis" width={100} height={100} />
            </Link>
            <p className="site-footer__rh">
              Coach Mahendra is Tennis Director at Robin Hood Camp, Maine, USA.{" "}
              <Link href="/robin-hood-camp/">Summer 2027 →</Link>
            </p>
            <div className="site-footer__rh-btns">
              <DiscoverRobinHood className="btn" />
              <RobinHoodSignup className="btn btn--outline-light">Submit a Robin Hood Camp inquiry</RobinHoodSignup>
            </div>
          </div>

          <div className="site-footer__cols">
            <div className="site-footer__col">
              <h2 className="site-footer__title">Location</h2>
              <ul className="site-footer__list site-footer__list--locations">
                {locations.map((l) => (
                  <li key={l.name}>
                    {l.name} - {l.area}
                  </li>
                ))}
              </ul>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__title">Links</h2>
              <nav aria-label="Footer">
                <ul className="site-footer__list site-footer__list--links">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="site-footer__col">
              <h2 className="site-footer__title">Get in Touch</h2>
              <div className="social">
                <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                  <InstagramIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
          <p>
            Designed and Developed By{" "}
            <a href={site.designer.url} target="_blank" rel="noopener">
              {site.designer.name}.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
