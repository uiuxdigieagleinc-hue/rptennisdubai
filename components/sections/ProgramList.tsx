import Image from "next/image";
import { programs } from "@/content/programs";
import { whatsapp } from "@/content/site";

// Program rows: image | title + text | bullet points | Book Now.
// "home" variant uses the Home page titles and divider lines.
export default function ProgramList({ variant = "page" }: { variant?: "home" | "page" }) {
  return (
    <div className={`programs programs--${variant}`}>
      {programs.map((p) => (
        <article key={p.id} id={p.id} className="program" data-reveal>
          <div className="program__media">
            <Image src={p.image} alt={p.title} sizes="(max-width: 767px) 100vw, 310px" placeholder="blur" />
          </div>
          <div className="program__body">
            <h3 className="h3 program__title">{variant === "home" ? (p.homeTitle ?? p.title) : p.title}</h3>
            <p className="text">{p.text}</p>
          </div>
          <div className="program__points text">
            <ul>
              {p.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
          <div className="program__cta">
            <a className="btn" href={whatsapp.base} target="_blank" rel="noopener">
              Book Now
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
