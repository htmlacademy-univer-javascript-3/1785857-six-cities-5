import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { APIRoute, cssClass, Path, ReducerTypes } from '../../utils/constants';
import Header from '../../components/header/header';
import FavouriteEmpty from './favourite-empty';
import Bookmark from '../../components/bookmark/bookmark';
import { useMemo } from 'react';

function Favourite(): JSX.Element {

  const favOffers = useAppSelector((state) => state[ReducerTypes.FAVOURITE_REDUCER].favourite);

  const favOffersMemo = useMemo(() => favOffers, [favOffers]);

  const citiesSet = new Set<string>;

  favOffersMemo.forEach((favourite) => {
    citiesSet.add(favourite.city.name);
  });

  const favCities = [...citiesSet];

  const favOffersCards = Object.values(favOffersMemo).map((offer) =>
    (
      <article className="favorites__card place-card" key={offer.city.name + offer.id}>
        <div className="place-card__mark">
          <span>{offer.isPremium}</span>
        </div>
        <div className="favorites__image-wrapper place-card__image-wrapper">
          <Link to={`${APIRoute.Offer}/${offer.id}`}>
            <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place image" />
          </Link>
        </div>
        <div className="favorites__card-info place-card__info">
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
      </article>
    )
  );

  const favCitiesList = Object.values(favCities).map((city) => (
    <li className="favorites__locations-items" key={city}>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={Path.MainPage}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {favOffersCards.filter((elem) => elem.key?.includes(city))}
      </div>
    </li>
  )
  );

  return (

    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {favOffers.length > 0 ? (
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {favCitiesList}
              </ul>
            </section>
          ) : (
            <FavouriteEmpty />
          )}
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={Path.MainPage}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favourite;
