import Image from "next/image";
import { img } from "@/content/images";

// "Meet your coach" block — Home and About Us.
export default function CoachIntro() {
  return (
    <section className="coach wrap" aria-labelledby="coach-title">
      <div className="coach__left">
        <div>
          {/* Live site reads "Meet your couch" — typo fixed */}
          <p className="eyebrow" data-reveal>
            Meet your coach
          </p>
          <h2 id="coach-title" className="h2" data-reveal>
            Hi, I’m Mahendra
          </h2>
        </div>
        <Image
          className="coach__portrait"
          src={img.coachPortrait}
          alt="Coach Mahendra Marvadi"
          sizes="(max-width: 992px) 100vw, 540px"
          placeholder="blur"
          data-reveal
        />
      </div>
      <div className="coach__right">
        <Image
          className="coach__court"
          src={img.coachCourt}
          alt="Coach Mahendra coaching on court in Dubai"
          sizes="(max-width: 992px) 100vw, 660px"
          placeholder="blur"
          data-reveal
        />
        <div className="text" data-reveal>
          <p>
            I’m Mahendra Marvadi, the founder and head coach of Rally Point Tennis Academy. With 22 years of experience in
            professional tennis coaching, I’ve dedicated my career to developing players of all levels — from beginners to
            competitive athletes.
          </p>
          <p>
            I also serve as Tennis Director at Robin Hood Summer Camp, Maine, USA, where I help young athletes thrive in a
            fun, engaging environment.
          </p>
        </div>
      </div>
    </section>
  );
}
