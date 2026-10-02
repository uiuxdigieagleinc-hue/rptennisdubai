import { rhActivities } from "@/content/robinHood";

// Dark activity cards (same look as the site's .feature cards). `limit` shortens each list for the Home page.
export default function RobinHoodActivities({ limit }: { limit?: number }) {
  return (
    <div className="rh-acts">
      {rhActivities.map((a, i) => {
        const items = limit ? a.items.slice(0, limit) : a.items;
        const more = a.items.length - items.length;
        return (
          <div key={a.title} className="rh-act" data-reveal>
            <span className="rh-act__num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="rh-act__title">{a.title}</h3>
            <p className="rh-act__text">{a.text}</p>
            <ul className="rh-act__list">
              {items.map((it) => (
                <li key={it}>{it}</li>
              ))}
              {more > 0 && <li className="rh-act__more">+{more} more</li>}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
