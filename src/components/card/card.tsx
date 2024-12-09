import { CardType } from '../../types/card';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

type CardProps = {
  offer: CardType;
  onListItemHover: (listItemName: string) => void;
};

function Card(props: CardProps): JSX.Element {

  const {offer, onListItemHover} = props;

  const {header, price, isPremium, imageUrl, id, type} = offer;

  const handleListItemHover = (event: MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const offerHeader = event.currentTarget.lastChild?.childNodes[2].textContent;
    onListItemHover(`${offerHeader}`);
  };

  return(
    <article className="cities__card place-card" onMouseEnter={handleListItemHover} >
      {isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={imageUrl} width="260" height="200" alt={header} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
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
            <span style={{width: '80%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{header}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
