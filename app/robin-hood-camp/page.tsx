import type { Metadata } from "next";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import { MinusIcon, PlusIcon } from "@/components/Icons";
import RobinHoodActivities from "@/components/RobinHoodActivities";
import { DiscoverRobinHood } from "@/components/RobinHoodLink";
import RobinHoodSignup from "@/components/RobinHoodSignup";
import RobinHoodCamp from "@/components/sections/RobinHoodCamp";
import { robinHoodGallery } from "@/content/images";
import { rhAcademies, rhCampLife, rhDay, rhFaqs, rhTennisAcademy } from "@/content/robinHood";

export const metadata: Metadata = {
  title: "Robin Hood Summer Camp with Coach Mahendra",
  description:
    "Robin Hood Summer Camp in Maine, USA: Coach Mahendra leads the Tennis Academy, and the camp offers 35+ daily activities for the whole family, from sailing and riding to drama and trips. Camp life, gallery and FAQ.",
  alternates: { canonical: "/robin-hood-camp/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: rhFaqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function RobinHoodCampPage() {
  return (
    <>
      <RobinHoodCamp variant="page" />

      {/* Activities */}
      <section className="rh-sec wrap" id="activities" aria-labelledby="rh-acts-title">
        <div className="rh-sec__head">
          <p className="eyebrow" data-reveal>
            More than tennis
          </p>
          <div data-reveal>
            <h2 id="rh-acts-title" className="h2 h2--sm-mobile">
              Something for every child
            </h2>
            <p className="text rh-sec__text">
              Coming with a sibling who doesn&apos;t play tennis? Robin Hood offers more than 35 activities every day, open
              to all ages and skill levels. Campers pick everything themselves.
            </p>
          </div>
        </div>
        <RobinHoodActivities />
      </section>

      {/* Academies */}
      <section className="rh-sec wrap" id="academies" aria-labelledby="rh-acad-title">
        <div className="rh-sec__head">
          <p className="eyebrow" data-reveal>
            Specialist academies
          </p>
          <div data-reveal>
            <h2 id="rh-acad-title" className="h2 h2--sm-mobile">
              Six intensive academy weeks
            </h2>
            <p className="text rh-sec__text">
              For campers who want to go deeper in one sport, with daily coaching from specialists, and still enjoy the rest
              of camp life.
            </p>
          </div>
        </div>
        <ul className="rh__facts rh-acad">
          {rhAcademies.map((a) => (
            <li key={a.name} className="rh__fact" data-reveal>
              <span className="rh__value">{a.name}</span>
              <span className="rh__label">
                {a.text}
                {a.coach && <span className="rh-pill">Coach Mahendra</span>}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tennis Academy */}
      <section className="rh-sec wrap" id="tennis-academy" aria-labelledby="rh-ta-title">
        <div className="rh-sec__head">
          <p className="eyebrow" data-reveal>
            Inside the Tennis Academy
          </p>
          <div data-reveal>
            <h2 id="rh-ta-title" className="h2 h2--sm-mobile">
              The Robin Hood Tennis Academy
            </h2>
            <p className="text rh-sec__text">
              A week-long intensive inside camp. Campers train on six plexi-pave courts with Coach Mahendra&apos;s team, mixing
              small-group drills, match play and fitness. They can book more than one Academy week.
            </p>
          </div>
        </div>
        <div className="rh__cards">
          {rhTennisAcademy.map((a, i) => (
            <div key={a.title} className="feature rh__card" data-reveal>
              <span className="rh-act__num">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="feature__title">{a.title}</h3>
                <p className="feature__text">{a.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* A day at camp */}
      <section className="rh-life" aria-labelledby="rh-day-title">
        <div className="wrap">
          <div className="rh-sec__head">
            <p className="eyebrow" data-reveal>
              Camp life
            </p>
            <div data-reveal>
              <h2 id="rh-day-title" className="h2 h2--sm-mobile">
                How a camp day works
              </h2>
            </div>
          </div>
          <ol className="rh-day">
            {rhDay.map((d, i) => (
              <li key={d.title} className="rh-day__step" data-reveal>
                <span className="rh-day__num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="rh-day__title">{d.title}</h3>
                <p className="rh-day__text">{d.text}</p>
              </li>
            ))}
          </ol>
          <ul className="rh-checks">
            {rhCampLife.map((c) => (
              <li key={c} data-reveal>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="rh-sec wrap" id="gallery" aria-labelledby="rh-gal-title">
        <div className="rh-sec__head">
          <p className="eyebrow" data-reveal>
            Robin Hood gallery
          </p>
          <div data-reveal>
            <h2 id="rh-gal-title" className="h2 h2--sm-mobile">
              Life at camp
            </h2>
          </div>
        </div>
        <div data-reveal>
          <GalleryGrid items={robinHoodGallery.slice(0, 9)} className="gallery--mosaic" />
        </div>
        <div className="rh__more" data-reveal>
          <Link href="/gallery/#robin-hood-camp" className="rh__link">
            See all Robin Hood Summer Camp photos
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq wrap" aria-labelledby="rh-faq-title">
        <p className="eyebrow center" data-reveal>
          Questions from parents
        </p>
        <h2 id="rh-faq-title" className="h2 h2--sm-mobile center faq__title" data-reveal>
          Robin Hood Summer Camp FAQ
        </h2>
        <div className="faq__list">
          {rhFaqs.map((f, i) => (
            <details key={f.q} className="faq__item" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <PlusIcon className="faq__icon faq__icon--closed" />
                <MinusIcon className="faq__icon faq__icon--open" />
              </summary>
              <div className="faq__answer">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rh-cta" aria-labelledby="rh-cta-title">
        <div className="wrap rh-cta__row">
          <div data-reveal>
            <p className="eyebrow rh-cta__eyebrow">Robin Hood Summer Camp</p>
            <h2 id="rh-cta-title" className="h2 h2--sm-mobile rh-cta__title">
              Plan a summer for the whole family
            </h2>
          </div>
          <div className="rh__actions" data-reveal>
            <DiscoverRobinHood className="btn" />
            <RobinHoodSignup className="btn btn--white">Submit a Robin Hood Summer Camp inquiry</RobinHoodSignup>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
