import { useState } from 'react';
import { CardType } from '../../types/card';
import { Link } from 'react-router-dom';

function Card({...offers}: CardType): JSX.Element {

  const [isCardActive, setCardActive] = useState(false);
  // Вывод в консоль – это временное решение, чтобы линтер не ругался на неиспользуемую переменную isCardActive
  // eslint-disable-next-line no-console
  console.log(isCardActive);

  return(
    <article className="cities__card place-card" onMouseEnter={() => setCardActive(true)} onMouseLeave={() => setCardActive(false)} >
      {offers.isPremium ? <div className="place-card__mark"><span>Premium</span></div> : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offers.id}`}>
          <img className="place-card__image" src={offers.imageUrl} width="260" height="200" alt={offers.header} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offers.price}</b>
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
          <Link to={`/offer/${offers.id}`}>{offers.header}</Link>
        </h2>
        <p className="place-card__type">{offers.type}</p>
      </div>
    </article>
  );
}

export default Card;
