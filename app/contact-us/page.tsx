import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/Icons";
import PageTitle from "@/components/sections/PageTitle";
import { locations, site, whatsapp } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Rally Point Tennis Academy Dubai. WhatsApp +971 56 859 7401 or email us to book a session or your free 45-minute trial.",
  alternates: { canonical: "/contact-us/" },
};

const info: { label: string; value: React.ReactNode }[] = [
  { label: "General Inquiries", value: <a href={`mailto:${site.email}`}>{site.email}</a> },
  { label: "WhatsApp", value: <a href={whatsapp.base} target="_blank" rel="noopener">{site.phoneDisplay}</a> },
  { label: "Locations", value: `${locations.length} Locations Across Dubai` },
  { label: "Hours", value: site.hours },
  { label: "Free Trial", value: "45 Minutes — Complimentary" },
];

export default function ContactPage() {
  return (
    <>
      <PageTitle>Contact us</PageTitle>

      <section className="contact wrap" aria-label="Contact details and form">
        <div className="contact__info">
          {info.map((i) => (
            <div key={i.label} className="contact__block">
              <h2 className="contact__label" data-reveal>
                {i.label}
              </h2>
              <p className="contact__value" data-reveal>
                {i.value}
              </p>
            </div>
          ))}
          <div className="contact__block">
            <h2 className="contact__label" data-reveal>
              Socials
            </h2>
            <div className="social social--light">
              <a href={site.social.instagram} target="_blank" rel="noopener" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={site.social.facebook} target="_blank" rel="noopener" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={whatsapp.base} target="_blank" rel="noopener" aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__form" data-reveal>
          <h2 className="contact__form-title">Send us a message</h2>
          <ContactForm id="contact" />
        </div>
      </section>
    </>
  );
}
