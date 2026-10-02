import type { Metadata } from "next";
import ReviewCard from "@/components/ReviewCard";
import CtaContact from "@/components/sections/CtaContact";
import PageTitle from "@/components/sections/PageTitle";
import { reviews } from "@/content/reviews";
import { SITE_URL, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Reviews",
  description: "What players and parents say about tennis coaching with Coach Mahendra at Rally Point Tennis Academy, Dubai.",
  alternates: { canonical: "/reviews/" },
};

const reviewsLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  "@id": `${SITE_URL}/#business`,
  name: site.legalName,
  review: reviews.map((r) => ({
    "@type": "Review",
    author: { "@type": "Person", name: r.name },
    reviewBody: r.text,
    reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
  })),
};

export default function ReviewsPage() {
  return (
    <>
      <PageTitle>Reviews</PageTitle>
      <section className="wrap reviews-page" aria-label="Player reviews">
        <div className="reviews-grid" data-reveal>
          {reviews.map((r) => (
            <ReviewCard key={r.name} review={r} />
          ))}
        </div>
      </section>
      <CtaContact />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsLd) }} />
    </>
  );
}
