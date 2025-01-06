import { useAppSelector } from '../../hooks';
import { ReviewsType } from '../../types/review';
import { AuthorizationStatus, ReducerTypes } from '../../utils/constants';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type ReviewsProps = {
  reviews: ReviewsType;
};

function Reviews(props: ReviewsProps): JSX.Element {

  const { reviews } = props;

  const authStatus: AuthorizationStatus = useAppSelector((state) => state[ReducerTypes.USER_REDUCER].authorizationStatus);

  const sortedReviewsArray = [...reviews].sort((first, second) => new Date(second.date).getTime() - new Date(first.date).getTime());

  const arrayReviewItems = sortedReviewsArray.map((review) =>
    (
      <Review key={review.id} {...reviews} review={review} />)
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{arrayReviewItems.length}</span></h2>
      <ul className="reviews__list">
        {arrayReviewItems}
      </ul>
      {authStatus === AuthorizationStatus.Auth ? <ReviewForm /> : ''}
    </section>
  );
}

export default Reviews;
