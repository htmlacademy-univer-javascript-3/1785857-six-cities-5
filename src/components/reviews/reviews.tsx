import { ReviewsType } from '../../types/review';
import ReviewForm from '../review-form/review-form';
import Review from '../review/review';

type ReviewsProps = {
  reviews: ReviewsType;
};

function Reviews(props: ReviewsProps): JSX.Element {

  const pathname: string = window.location.pathname;

  const pathnameParts: string[] = pathname.split('/').filter(Boolean);

  const objectId: number = Number(pathnameParts.slice(1).join('/'));

  const {reviews} = props;

  const currentObjectReviews = Object.values(reviews).filter((x) => x.offerId === objectId);

  const arrayReviewItems = currentObjectReviews.map((review) =>
    (
      <Review key = {review.id} {...reviews} review = {review} />)
  );

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{arrayReviewItems.length}</span></h2>
      <ul className="reviews__list">
        {arrayReviewItems}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
