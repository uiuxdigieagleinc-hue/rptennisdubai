import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AutoplayVideo from "@/components/AutoplayVideo";
import Counter from "@/components/Counter";
import HeroSlideshow from "@/components/HeroSlideshow";
import ReviewCarousel from "@/components/ReviewCarousel";
import CoachIntro from "@/components/sections/CoachIntro";
import CtaContact from "@/components/sections/CtaContact";
import ProgramList from "@/components/sections/ProgramList";
import RecentArticles from "@/components/sections/RecentArticles";
import RobinHoodCamp from "@/components/sections/RobinHoodCamp";
import { heroSlides, img } from "@/content/images";
import { reviews } from "@/content/reviews";
import { stats, whatsapp } from "@/content/site";

export const metadata: Metadata = {
  title: { absolute: "RP Tennis Dubai | Rally Point Tennis Academy — Tennis Coaching by Coach Mahendra" },
  description:
    "World-class tennis coaching in Dubai for beginners to competitive players. 1-on-1, semi-private and group sessions with Coach Mahendra — 22+ years experience, AITA & USPTR certified. Book a free 45-min trial.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const [years, locs, fiveStar, students] = stats;
  return (
    <>
      {/* Hero */}
      <section className="hero anim-fade-in">
        <HeroSlideshow slides={heroSlides} />
        <div className="wrap hero__row">
          <div className="hero__content anim-fade-in-up">
            <Link className="hero__rh" href="/robin-hood-camp/">
              Coach Mahendra × Robin Hood Camp, USA →
            </Link>
            <h1 className="h-display hero__title">Serve Big. Rally Point Tennis Dubai.</h1>
            <p className="hero__text">
              Creating champions — world-class coaching for beginners to competitive players. 3 Dubai locations, 22+ years
              experience, AITA &amp; USPTR certified.
            </p>
            <div className="btn-row hero__btns">
              <a className="btn" href={whatsapp.base} target="_blank" rel="noopener">
                Book a Session
              </a>
              <Link className="btn btn--white" href="/contact-us/">
                Free 45-min Trial
              </Link>
            </div>
          </div>
          <div className="hero__spacer" />
        </div>
      </section>

      {/* Stats + video */}
      <section className="stats wrap" aria-label="Rally Point Tennis in numbers">
        <div className="stats__col">
          <div data-reveal>
            <Counter {...years} />
          </div>
          <div data-reveal>
            <Counter {...locs} />
          </div>
        </div>
        <div className="stats__video" data-reveal>
          <AutoplayVideo src="/video/coach-mahi.mp4" label="Coach Mahendra training players in Dubai" />
        </div>
        <div className="stats__col">
          <div data-reveal>
            <Counter {...fiveStar} />
          </div>
          <div data-reveal>
            <Counter {...students} />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="split wrap split--home-about" aria-labelledby="home-about">
        <div className="split__media" data-reveal>
          <Image src={img.coachAbout} alt="Coach Mahendra at Rally Point Tennis Academy" sizes="(max-width: 767px) 100vw, 600px" placeholder="blur" />
        </div>
        <div className="split__body">
          <p className="eyebrow" data-reveal>
            About Us
          </p>
          <h2 id="home-about" className="h2" data-reveal>
            Creating Tomorrow&apos;s Tennis Champions
          </h2>
          <div className="text split__text" data-reveal>
            <p>
              Welcome to Rally Point Tennis Academy — where champions are made! Whether you are a beginner or an advanced
              player, our academy is dedicated to helping you reach your full potential with world-class coaching, top-notch
              facilities, and a passion for excellence.
            </p>
            <p>
              Our mission is to develop skill, strategy, and confidence both on and off the court. With experienced coaches and
              structured training programs, we provide an environment where players of all levels can thrive.
            </p>
          </div>
          <div data-reveal>
            <Link className="btn" href="/contact-us/">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="home-programs" data-reveal="fade" aria-labelledby="home-programs">
        <div className="wrap">
          <div className="home-programs__head">
            <p className="eyebrow" data-reveal>
              Programs
            </p>
            <h2 id="home-programs" className="h2" data-reveal>
              Comprehensive Training for All Levels
            </h2>
          </div>
          <ProgramList variant="home" />
        </div>
      </section>

      {/* Robin Hood Camp (see HANDOFF.md) */}
      <RobinHoodCamp />

      {/* Full-width photo */}
      <div className="wide-photo" data-reveal>
        <Image src={img.hero3} alt="Tennis court in Dubai" sizes="100vw" placeholder="blur" />
      </div>

      {/* Reviews */}
      <section className="reviews-band" aria-labelledby="home-reviews">
        <p className="eyebrow" data-reveal>
          Player Reviews
        </p>
        <h2 id="home-reviews" className="h2 center reviews-band__title" data-reveal>
          Exciting Tennis Experiences
        </h2>
        <div className="wrap">
          <ReviewCarousel reviews={reviews} />
        </div>
      </section>

      <CoachIntro />
      <RecentArticles />
      <CtaContact />
    </>
  );
}
