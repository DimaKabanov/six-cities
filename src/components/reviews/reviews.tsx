import ReviewsItem from '../reviews-item/reviews-item';
import ReviewsForm from '../reviews-form/reviews-form';

import type { Review } from '../../types/review';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({ reviews }: ReviewsProps): JSX.Element {
  const reviewsAmount = reviews.length;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviewsAmount}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={review.id} {...review} />)}
      </ul>
      {<ReviewsForm />}
    </section>
  );
}

export default Reviews;
