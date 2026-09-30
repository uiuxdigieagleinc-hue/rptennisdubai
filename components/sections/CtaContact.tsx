import ContactForm from "@/components/ContactForm";
import { whatsapp } from "@/content/site";

// "Ready to Level Up Your Game?" + enquiry form — end of Home, Programs, Grounds, Reviews.
export default function CtaContact() {
  return (
    <section className="cta" data-reveal="fade" aria-labelledby="cta-title">
      <div className="wrap cta__row">
        <div className="cta__left" data-reveal>
          <h2 id="cta-title" className="h-display">
            Ready to Level Up Your Game?
          </h2>
          <p className="cta__text">Book a session or claim your free 45-minute trial — no commitment needed.</p>
          <div className="btn-row">
            <a className="btn" href={whatsapp.base} target="_blank" rel="noopener">
              Book Now
            </a>
          </div>
        </div>
        <div className="cta__right">
          <div className="cta__card" data-reveal>
            <h2 className="cta__card-title">Have questions? Get in touch!</h2>
            <ContactForm id="cta" />
          </div>
        </div>
      </div>
    </section>
  );
}
