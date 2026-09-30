import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/Counter";
import CoachIntro from "@/components/sections/CoachIntro";
import PageTitle from "@/components/sections/PageTitle";
import RecentArticles from "@/components/sections/RecentArticles";
import { img } from "@/content/images";
import { programs } from "@/content/programs";
import { stats } from "@/content/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Rally Point Tennis Academy was founded by Mahendra “Mahi” Marvadi — USPTR certified, AITA Level 3, with 22+ years of coaching in Dubai and the USA.",
  alternates: { canonical: "/about-us/" },
};

export default function AboutPage() {
  return (
    <>
      <PageTitle>About Us</PageTitle>

      <section className="split wrap split--about" aria-labelledby="our-story">
        <div className="split__media" data-reveal>
          <Image src={img.coachAbout} alt="Coach Mahi at Rally Point Tennis Academy" sizes="(max-width: 992px) 100vw, 600px" placeholder="blur" />
        </div>
        <div className="split__body">
          <p className="eyebrow" data-reveal>
            Our Story
          </p>
          <h2 id="our-story" className="h2" data-reveal>
            Built on a Passion for Tennis
          </h2>
          <div className="text split__text" data-reveal>
            <p>
              Rally Point Tennis Academy was founded by Mahendra “Mahi” Marvadi — a USPTR Certified, AITA Level 3 professional
              with 22+ years of coaching experience across Dubai and the United States.
            </p>
            <p>
              Our academy was built on a single belief: every player, at every level, deserves world-class coaching. What began
              as a small group of passionate beginners has grown into one of Dubai’s most trusted tennis coaching programs.
            </p>
            <p>Our mission is to develop skill, strategy, and confidence — both on and off the court.</p>
          </div>
          <div data-reveal>
            <Link className="btn" href="/programs/">
              See Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="numbers wrap" aria-labelledby="by-the-numbers">
        <h2 id="by-the-numbers" className="numbers__title" data-reveal>
          By the numbers
        </h2>
        <div className="numbers__row">
          {stats.map((s) => (
            <div key={s.label} className="numbers__item" data-reveal>
              <Counter {...s} label={s.label === "Locations" ? "Location" : s.label} className="counter--left" />
            </div>
          ))}
        </div>
      </section>

      <CoachIntro />

      <div className="wide-photo" data-reveal>
        <Image src={img.hero1} alt="Tennis training in Dubai" sizes="100vw" placeholder="blur" />
      </div>

      <section className="training wrap" aria-labelledby="training-levels">
        <h2 id="training-levels" className="h2 training__title" data-reveal>
          Comprehensive Training for All Levels
        </h2>
        {programs.map((p) => (
          <div key={p.id} className="training__row" data-reveal>
            <h3 className="training__name">{p.title}</h3>
            <p className="training__text">{p.text}</p>
          </div>
        ))}
      </section>

      <RecentArticles />
    </>
  );
}
