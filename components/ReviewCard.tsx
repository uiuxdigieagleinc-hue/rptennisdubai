import type { Review } from "@/content/reviews";
import { StarIcon } from "./Icons";

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="review">
      <span className="review__avatar" aria-hidden="true">
        {review.name.charAt(0)}
      </span>
      <figcaption>
        <span className="review__name">{review.name}</span>
        <span className="review__role">{review.role}</span>
      </figcaption>
      <blockquote className="review__text">{review.text}</blockquote>
      <div className="review__rating" role="img" aria-label={`Rated ${review.rating} out of 5`}>
        {Array.from({ length: 5 }, (_, k) => (
          <StarIcon key={k} className={k < review.rating ? "is-on" : undefined} />
        ))}
      </div>
    </figure>
  );
}
