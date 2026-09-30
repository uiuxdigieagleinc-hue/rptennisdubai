import Image from "next/image";
import RobinHoodLink from "@/components/RobinHoodLink";
import RobinHoodSignup from "@/components/RobinHoodSignup";
import { img } from "@/content/images";

// Facts from the Robin Hood section brief (../robin-hood-section.html)
const facts = [
  { value: "6", label: "Plexi-pave courts" },
  { value: "3–6 hrs", label: "On court every day during Tennis Academy weeks" },
  { value: "75 min", label: "Small-group drills with pro coaches" },
  { value: "35+", label: "Daily camp activities off court" },
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
                Players from Dubai can join him for intensive Tennis Academy weeks, with daily match play, footwork and an
                optional private lesson every day.
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
              <RobinHoodLink type="academy" className="rh__link">
                About the Tennis Academy
              </RobinHoodLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
