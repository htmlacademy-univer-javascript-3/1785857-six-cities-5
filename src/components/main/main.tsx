import { JSX } from 'react/jsx-runtime';
import Cards from '../cards/cards';
import Map from '../map/map';
import { PointType } from '../../types/point';
import { CitiesType, CityType } from '../../types/city';
import Cities from '../cities/cities';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { FilterType } from '../../types/filter';
import { CardsType } from '../../types/card';
import Filter from '../filter/filter';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { APIRoute, AuthorizationStatus } from '../../utils/constants';


type MainProps = {
  onListItemHover: (listItemName: string) => void;
  selectedPoint: PointType | undefined;
  cities: CitiesType;
  currentSort: FilterType;
  sortOffers: (offersList: CardsType) => CardsType;
  onChange: (newFilter: FilterType) => void;
  currentCity: CityType;
};

function Main(props: MainProps): JSX.Element {

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { onListItemHover, selectedPoint, cities, currentSort, sortOffers, onChange, currentCity } = props;

  const currentCityTitle: string = currentCity.name;

  const offers: CardsType = useAppSelector((state) => state.offers);

  const authStatus: AuthorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const currentPlaces = offers.filter((elem) => elem.city.name === currentCityTitle);

  const currentPlacesNumber: number = currentPlaces.length;

  const userEmail: string | null = localStorage.getItem('email');

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();
    dispatch(logoutAction());
    navigate(APIRoute.Login);
    localStorage.removeItem('email');
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            {authStatus === AuthorizationStatus.Auth ?
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">{userEmail}</span>
                      <span className="header__favorite-count">3</span>
                    </a>
                  </li>
                  <li className="header__nav-item">
                    <Link className="header__nav-link" onClick={handleLogout} to="/" >
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                </ul>
              </nav> :
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to="/login" >
                      <span className="header__signout">Sign in</span>
                    </Link>
                  </li>
                </ul>
              </nav>}
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Cities cities={cities} />
            </ul>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{currentPlacesNumber} places to stay in {currentCityTitle}</b>
              <Filter onChange={onChange} currentSort={currentSort} />
              <div className="cities__places-list places__list tabs__content">
                <Cards onListItemHover={onListItemHover} sortOffers={sortOffers} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map selectedPoint={selectedPoint} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
