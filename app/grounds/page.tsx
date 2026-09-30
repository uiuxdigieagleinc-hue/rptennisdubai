import type { Metadata } from "next";
import Image from "next/image";
import { StarIcon } from "@/components/Icons";
import CtaContact from "@/components/sections/CtaContact";
import { img } from "@/content/images";
import { facilityFeatures } from "@/content/programs";
import { locations, whatsapp } from "@/content/site";

export const metadata: Metadata = {
  title: "Grounds — Tennis Courts in Dubai",
  description:
    "Train at Safa British School (Al Wasl Road) or Global Indian International School, Dubai. Professional courts, year-round play and equipment provided.",
  alternates: { canonical: "/grounds/" },
};

const groundImages = [img.groundSafa, img.groundGiis];

export default function GroundsPage() {
  return (
    <>
      <section className="grounds wrap" aria-labelledby="grounds-title">
        <h1 id="grounds-title" className="h2 h2--sm-mobile center grounds__title" data-reveal>
          Premier Facilities. Year-Round Excellence.
        </h1>
        <div className="grounds__row">
          {locations.map((l, i) => (
            <article key={l.name} className="ground">
              <h2 className="ground__name">{l.name}</h2>
              <p className="ground__area">{l.area}</p>
              <Image className="ground__img" src={groundImages[i]} alt={`Tennis court at ${l.name}`} sizes="(max-width: 992px) 100vw, 620px" placeholder="blur" />
              <a className="btn" href={whatsapp.base} target="_blank" rel="noopener">
                Book Now
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="features wrap" aria-labelledby="features-title">
        <p className="eyebrow center" data-reveal>
          Facility Features
        </p>
        <h2 id="features-title" className="h2 h2--sm-mobile center features__title" data-reveal>
          What to Expect on Court
        </h2>
        <div className="features__row">
          <div className="features__media">
            <Image src={img.facility} alt="Rally Point Tennis court facilities" sizes="(max-width: 992px) 100vw, 640px" placeholder="blur" />
          </div>
          <div className="features__grid">
            {facilityFeatures.map((f) => (
              <div key={f.title} className="feature">
                <StarIcon className="feature__icon" />
                <div>
                  <h3 className="feature__title">{f.title}</h3>
                  <p className="feature__text">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaContact />
    </>
  );
}
