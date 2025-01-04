import { Link } from 'react-router-dom';
import { APIRoute } from '../../utils/constants';
import { useAppSelector } from '../../hooks';
import { MouseEvent } from 'react';

type NearbyProps = {
  onListItemHover: (listItemName: string) => void;
};

function Nearby(props: NearbyProps): JSX.Element {

  const {onListItemHover} = props;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const offerId = event.currentTarget.id;
    onListItemHover(offerId);
  };

  const offersNearby = useAppSelector((state) => state.offersNearby);

  const offersNearbyCards = Object.values(offersNearby).map((offer) =>
    (
      <article className="near-places__card place-card" key = {offer.id} id = {offer.id} onMouseEnter = {handleListItemHover}>
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
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${Math.floor(offer.rating + 0.5) * 20}%`}}></span>
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
    <> { offersNearbyCards } </>);
}

export default Nearby;
