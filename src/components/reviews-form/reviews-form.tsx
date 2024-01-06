import { useState, Fragment } from 'react';
import type { ChangeEvent } from 'react';
import { maxRatingCount } from '../../const';

function ReviewsForm(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [rating, setRating] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [review, setReview] = useState<string>('');

  const handleChangeRating = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));
  const handleChangeReview = (evt: ChangeEvent<HTMLTextAreaElement>) => setReview(evt.target.value);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Array.from(Array(maxRatingCount).keys()).reverse().map((ratingNumber) => {
          const nextRating = ratingNumber + 1;

          return (
            <Fragment key={nextRating}>
              <input
                id={`${nextRating}-stars`}
                defaultValue={nextRating}
                onChange={handleChangeRating}
                checked={nextRating === rating}
                className="form__rating-input visually-hidden"
                name="rating"
                type="radio"
              />
              <label htmlFor={`${nextRating}-stars`} className="reviews__rating-label form__rating-label">
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        defaultValue={''}
        onChange={handleChangeReview}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
