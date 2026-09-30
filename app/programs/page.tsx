import type { Metadata } from "next";
import { PlusIcon, MinusIcon } from "@/components/Icons";
import CtaContact from "@/components/sections/CtaContact";
import PageTitle from "@/components/sections/PageTitle";
import ProgramList from "@/components/sections/ProgramList";
import { faqs } from "@/content/programs";

export const metadata: Metadata = {
  title: "Coaching Programs",
  description:
    "Tennis coaching programs in Dubai: 1-on-1 coaching, semi-private partner training and group sessions for kids and adults. Book on WhatsApp or claim a free 45-min trial.",
  alternates: { canonical: "/programs/" },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ProgramsPage() {
  return (
    <>
      <PageTitle>Coaching Programs</PageTitle>

      <section className="wrap programs-page" aria-label="Programs">
        <ProgramList />
      </section>

      <section className="faq wrap" aria-labelledby="faq-title">
        <p className="eyebrow center" data-reveal>
          Common questions
        </p>
        <h2 id="faq-title" className="h2 h2--sm-mobile center faq__title" data-reveal>
          Frequently asked questions
        </h2>
        <div className="faq__list">
          {faqs.map((f, i) => (
            <details key={f.q} className="faq__item" open={i === 0}>
              <summary>
                <span>{f.q}</span>
                <PlusIcon className="faq__icon faq__icon--closed" />
                <MinusIcon className="faq__icon faq__icon--open" />
              </summary>
              <div className="faq__answer">{f.a}</div>
            </details>
          ))}
        </div>
      </section>

      <CtaContact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
