import Image from "next/image";
import Link from "next/link";
import RobinHoodActivities from "@/components/RobinHoodActivities";
import RobinHoodSignup from "@/components/RobinHoodSignup";
import { img } from "@/content/images";
import { rhFacts } from "@/content/robinHood";

// Robin Hood Camp — follows the site's section patterns (eyebrow + heading row, divider rows, lime accents).
// Home: intro + activities preview. /robin-hood-camp/: intro only, the page adds the detail sections.
export default function RobinHoodCamp({ variant = "home" }: { variant?: "home" | "page" }) {
  const Title = variant === "page" ? "h1" : "h2";
  return (
    <section className="rh" id="robin-hood-camp" aria-labelledby="rh-title">
      <div className="wrap">
        <div className="rh__head">
          <p className="eyebrow rh__eyebrow" data-reveal>
            Robin Hood Camp · Maine, USA · Summer 2027
          </p>
          <Title id="rh-title" className="h2 rh__title" data-reveal>
            Tennis with Coach Mahendra and 35+ other activities.
          </Title>
        </div>

        <div className="rh__row">
          <div className="rh__media" data-reveal>
            {/* Swap for an approved photo of Coach Mahendra at Robin Hood */}
            <Image
              className="rh__photo"
              src={img.coachPortrait}
              alt="Coach Mahendra Marvadi, Tennis Director at Robin Hood Camp"
              sizes="(max-width: 767px) 100vw, 560px"
              placeholder="blur"
              priority={variant === "page"}
            />
            <span className="rh__tag">Tennis Director · Robin Hood Camp</span>
          </div>

          <div className="rh__body">
            <div className="text rh__intro" data-reveal>
              <p>
                Our founder Mahendra Marvadi is Tennis Director at Robin Hood Camp, a traditional co-ed overnight
                camp in Brooksville, Maine, and the only camp in the world on both a freshwater lake and the ocean.
              </p>
              <p>
                It isn&apos;t only a tennis camp. While your tennis player trains with Coach Mahendra, brothers and sisters can
                sail, ride, climb, act or play soccer, choosing their own activities every day.
              </p>
            </div>

            <ul className="rh__facts">
              {rhFacts.map((f) => (
                <li key={f.value} className="rh__fact" data-reveal>
                  <span className="rh__value">{f.value}</span>
                  <span className="rh__label">{f.label}</span>
                </li>
              ))}
            </ul>

            <div className="rh__actions" data-reveal>
              <RobinHoodSignup>Request camp info</RobinHoodSignup>
              {variant === "home" ? (
                <Link href="/robin-hood-camp/" className="btn btn--outline">
                  Explore the camp
                </Link>
              ) : (
                <RobinHoodSignup enquiry className="btn btn--outline">
                  Enquire now
                </RobinHoodSignup>
              )}
            </div>
          </div>
        </div>

        {variant === "home" && (
          <div className="rh__academy">
            <div className="rh__academy-head">
              <p className="eyebrow" data-reveal>
                More than tennis
              </p>
              <div data-reveal>
                <h3 className="h3 rh__academy-title">Something for every child in the family</h3>
                <p className="text rh__academy-text">
                  Robin Hood is a 100% elective camp: each camper builds their own programme from more than 35 daily
                  activities, open to all ages and skill levels.
                </p>
              </div>
            </div>
            <RobinHoodActivities limit={4} />
            <div className="rh__more" data-reveal>
              <Link href="/robin-hood-camp/" className="rh__link">
                See all activities, dates and the camp gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
