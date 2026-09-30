import Image from "next/image";
import Link from "next/link";
import GalleryGrid from "@/components/GalleryGrid";
import { StarIcon } from "@/components/Icons";
import RobinHoodSignup from "@/components/RobinHoodSignup";
import { img, robinHoodGallery } from "@/content/images";

// Facts from the Robin Hood section brief (../robin-hood-section.html)
const facts = [
  { value: "6", label: "Plexi-pave courts" },
  { value: "3–6 hrs", label: "On court every day during Tennis Academy weeks" },
  { value: "75 min", label: "Small-group drills with pro coaches" },
  { value: "35+", label: "Daily camp activities off court" },
];

const academy = [
  { title: "Seven-day intensive", text: "At least 3 hours of tennis every day of the Academy week." },
  { title: "Pro coaching team", text: "Small-group drills with four pro coaches and assistant coaches." },
  { title: "Daily private lesson", text: "Optional private or semi-private lesson every day." },
  { title: "Match play & fitness", text: "Conditioning, footwork and daily match play for tournament strategy." },
];

// Robin Hood Camp — follows the site's section patterns (eyebrow + heading row, divider rows, lime accents).
export default function RobinHoodCamp({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  const Title = headingLevel;
  return (
    <section className="rh" id="robin-hood-camp" aria-labelledby="rh-title">
      <div className="wrap">
        <div className="rh__head">
          <p className="eyebrow rh__eyebrow" data-reveal>
            Robin Hood Camp · Summer 2027
          </p>
          <Title id="rh-title" className="h2 rh__title" data-reveal>
            Train with Coach Mahi in Maine, USA
          </Title>
        </div>

        <div className="rh__row">
          <div className="rh__media" data-reveal>
            {/* Swap for an approved photo of Coach Mahi at Robin Hood */}
            <Image
              className="rh__photo"
              src={img.coachPortrait}
              alt="Coach Mahi Marvadi, Tennis Director at Robin Hood Camp"
              sizes="(max-width: 767px) 100vw, 560px"
              placeholder="blur"
            />
            <span className="rh__tag">Tennis Director · Robin Hood Camp</span>
          </div>

          <div className="rh__body">
            <div className="text rh__intro" data-reveal>
              <p>
                Our founder Mahendra “Mahi” Marvadi is Tennis Director at Robin Hood Camp, a traditional co-ed overnight
                camp in Brooksville, Maine, set between a freshwater lake and the ocean.
              </p>
              <p>
                Players from Dubai can join him for intensive Tennis Academy weeks. Camp sessions run from 2 to 7 weeks,
                and campers can book more than one Academy week.
              </p>
            </div>

            <ul className="rh__facts">
              {facts.map((f) => (
                <li key={f.value} className="rh__fact" data-reveal>
                  <span className="rh__value">{f.value}</span>
                  <span className="rh__label">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="rh__actions" data-reveal>
              <RobinHoodSignup>Request camp info</RobinHoodSignup>
              <Link href="/about-us/" className="btn btn--outline">
                Know more about us
              </Link>
            </div>
          </div>
        </div>

        <div className="rh__academy">
          <div className="rh__academy-head">
            <p className="eyebrow" data-reveal>
              Inside Robin Hood Academy
            </p>
            <div data-reveal>
              <h3 className="h3 rh__academy-title">The Robin Hood Tennis Academy</h3>
              <p className="text rh__academy-text">
                A week-long intensive inside camp for players who want to take their game further. Campers train on six
                plexi-pave courts with a team of pro coaches, mixing small-group drills, match play and fitness, and still
                enjoy everything else camp life has to offer.
              </p>
            </div>
          </div>
          <div className="rh__cards">
            {academy.map((a) => (
              <div key={a.title} className="feature rh__card" data-reveal>
                <StarIcon className="feature__icon" />
                <div>
                  <h3 className="feature__title">{a.title}</h3>
                  <p className="feature__text">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rh__gallery">
          <div className="rh__gallery-head">
            <p className="eyebrow" data-reveal>
              Coach Mahi on court
            </p>
            <Link href="/gallery/" className="rh__link" data-reveal>
              View full gallery
            </Link>
          </div>
          <div data-reveal>
            <GalleryGrid items={robinHoodGallery} className="gallery--mosaic" />
          </div>
        </div>
      </div>
    </section>
  );
}
