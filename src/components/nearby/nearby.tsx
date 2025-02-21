import { Link } from 'react-router-dom';
import { APIRoute, cssClass, ReducerTypes } from '../../utils/constants';
import { useAppSelector } from '../../hooks';
import { MouseEvent } from 'react';
import Bookmark from '../bookmark/bookmark';

type NearbyProps = {
  onListItemHover: (listItemName: string) => void;
};

function Nearby(props: NearbyProps): JSX.Element {

  const { onListItemHover } = props;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const offerId = event.currentTarget.id;
    onListItemHover(offerId);
  };

  const handleMouseLeave = () => {
    onListItemHover('');
  };

  const offersNearby = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offersNearby);

  const offersNearbyCards = Object.values(offersNearby).map((offer) =>
    (
      <article className="near-places__card place-card" key={offer.id} id={offer.id} onMouseEnter={handleListItemHover} onMouseLeave={handleMouseLeave}>
        <div className="near-places__image-wrapper place-card__image-wrapper">
          <Link to={`${APIRoute.Offer}/${offer.id}`}>
            <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
          </Link>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <Bookmark offer={offer} sectionClass={cssClass.PlaceCard} />
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: `${Math.floor(offer.rating + 0.5) * 20}%` }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <Link to={`${APIRoute.Offer}/${offer.id}`}>{offer.title}</Link>
          </h2>
          <p className="place-card__type">{offer.type}</p>
        </div>
      </article>)
  );

  return (
    <> {offersNearbyCards} </>);
}

export default Nearby;
