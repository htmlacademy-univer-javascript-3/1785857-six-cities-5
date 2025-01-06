import { ReviewsType } from '../../types/review';
import Reviews from '../../components/reviews/reviews';
import Map from '../../components/map/map';
import { PointType } from '../../types/point';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OfferType } from '../../types/offer';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getNearbyOffersAction, getOfferAction, getReviewsAction, toggleFavouriteOffersAction } from '../../store/api-actions';
import { useCallback, useEffect } from 'react';
import { cleanCity, cleanNearbyOffers, cleanOffer, cleanReviews, setCity } from '../../store/actions';
import Nearby from '../../components/nearby/nearby';
import { CardsType, CardType } from '../../types/card';
import { CityType } from '../../types/city';
import { AuthorizationStatus, Path, ReducerTypes } from '../../utils/constants';
import Header from '../../components/header/header';

type OfferProps = {
  selectedPoint: PointType | undefined;
  onListItemHover: (listItemName: string) => void;
};

function Offer(props: OfferProps): JSX.Element {

  const { selectedPoint, onListItemHover } = props;

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const currentOfferId: string | undefined = useParams().id; // location.pathname.split('/').pop();

  const currentCity: CityType = useAppSelector((state) => state[ReducerTypes.CITY_REDUCER].city);

  const offers: CardsType = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offers);

  const reviews: ReviewsType = useAppSelector((state) => state[ReducerTypes.REVIEWS_REDUCER].reviews);

  const offersNearby: CardsType = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offersNearby);

  const currentOffer: OfferType | null = useAppSelector((state) => state[ReducerTypes.OFFER_REDUCER].offer);

  const currentOfferCard: CardType | undefined = offers.find((item) => item.id === currentOfferId);

  const offersNearbyPlusCurrent: CardsType = offersNearby.concat(currentOfferCard!);

  const error = useAppSelector((state) => state[ReducerTypes.ERROR_REDUCER].error);

  const authorizationStatus = useAppSelector(((state) => state[ReducerTypes.USER_REDUCER].authorizationStatus));

  useEffect(() => {
    if (currentOfferId) {
      dispatch(getOfferAction(currentOfferId));
    }
    return () => {
      dispatch(cleanOffer());
    };
  }, [dispatch, currentOfferId]);

  useEffect(() => {
    if (currentOfferId) {
      dispatch(getReviewsAction(currentOfferId));
    }
    return () => {
      dispatch(cleanReviews());
    };
  }, [dispatch, currentOfferId]);

  useEffect(() => {
    if (currentOfferId) {
      dispatch(getNearbyOffersAction(currentOfferId));
    }
    return () => {
      dispatch(cleanNearbyOffers());
    };
  }, [dispatch, currentOfferId]);

  useEffect(() => {
    if (currentOffer) {
      dispatch(setCity(currentOffer.city));
    }
    return () => {
      dispatch(cleanCity());
    };
  }, [dispatch, currentOffer]);

  const toggleFavouriteStatus = useCallback(() => {
    if (authorizationStatus === AuthorizationStatus.Auth && currentOffer) {
      dispatch(
        toggleFavouriteOffersAction({
          id: currentOffer.id,
          favState: !currentOffer.isFavorite,
        })
      );
    } else {
      navigate(Path.LoginPage);
    }
  }, [authorizationStatus, currentOffer, dispatch, navigate]);

  if (error) {
    return <Navigate to={'/404'} />;
  }

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                currentOffer?.images.map((image) => (
                  <div className="offer__image-wrapper" key={image}>
                    <img
                      className="offer__image"
                      src={image}
                      alt="Photo studio"
                    />
                  </div>
                )
                )
              }
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer?.isPremium ? <div className="offer__mark"><span>Premium</span></div> : ''}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer?.title}
                </h1>
                <button className={`offer__bookmark-button button ${currentOffer?.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button" onClick={toggleFavouriteStatus}>
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: `${Math.floor(!currentOffer ? 0 : currentOffer?.rating + 0.5) * 20}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer?.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer?.bedrooms}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {currentOffer?.maxAdults}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer?.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {
                    currentOffer?.goods.map((item) => (
                      <li className="offer__inside-item" key={item}>{item}</li>
                    )
                    )
                  }
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="offer__avatar user__avatar" src={currentOffer?.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {currentOffer?.host.name}
                  </span>
                  <span className="offer__user-status">
                    {currentOffer?.host.isPro}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer?.description}
                  </p>
                </div>
              </div>
              <Reviews reviews={reviews} />
            </div>
          </div>
          <section className="offer__map map">
            <Map selectedPoint={selectedPoint} offers={offersNearbyPlusCurrent} currentCity={currentCity} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Nearby onListItemHover={onListItemHover} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
