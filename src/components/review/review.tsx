import { ReviewType } from '../../types/review';

type ReviewProps = {
  review: ReviewType;
};

function Review(props: ReviewProps): JSX.Element {

  const {review} = props;

  const {id, offerId, avatarUrl, userName, rating, text, dateTime} = review;

  const month = dateTime.toLocaleString('en-EN', { month: 'long' });

  return (
    <li className="reviews__item" key={ `${id} + ${offerId}` }>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: '80%'}}>{rating}</span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time">{dateTime.getDate()} {month} {dateTime.getFullYear()}</time>
      </div>
    </li>
  );
}

export default Review;
