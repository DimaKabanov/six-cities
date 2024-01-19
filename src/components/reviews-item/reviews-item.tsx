import type { Review } from '../../types/review';
import { getStarWidth, formatDate } from '../../utils';

function ReviewsItem(props: Review): JSX.Element {
  const { user, text, date, rating } = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatar} width={54} height={54} alt={user.name} />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${getStarWidth(rating)}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={date}>{formatDate(date)}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
