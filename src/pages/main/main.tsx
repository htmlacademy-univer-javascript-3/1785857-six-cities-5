import { JSX } from 'react/jsx-runtime';
import Cards from '../../components/cards/cards';
import Map from '../../components/map/map';
import { PointType } from '../../types/point';
import { CitiesType, CityType } from '../../types/city';
import Cities from '../../components/cities/cities';
import { useAppSelector } from '../../hooks';
import { FilterType } from '../../types/filter';
import { CardsType } from '../../types/card';
import Filter from '../../components/filter/filter';
import Header from '../../components/header/header';
import { ReducerTypes } from '../../utils/constants';
import MainEmpty from './main-empty';

type MainProps = {
  onListItemHover: (listItemName: string) => void;
  selectedPoint: PointType | undefined;
  cities: CitiesType;
  currentSort: FilterType;
  sortOffers: (offersList: CardsType) => CardsType;
  onChange: (newFilter: FilterType) => void;
};

function Main(props: MainProps): JSX.Element {

  const { onListItemHover, selectedPoint, cities, currentSort, sortOffers, onChange } = props;

  const currentCity: CityType = useAppSelector((state) => state[ReducerTypes.CITY_REDUCER].city);

  const currentCityTitle: string = currentCity.name;

  const offers: CardsType = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offers);

  const currentPlaces = offers.filter((elem) => elem.city.name === currentCityTitle);

  const currentPlacesNumber: number = currentPlaces.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <Cities cities={cities} />
            </ul>
          </section>
        </div>
        {currentPlacesNumber === 0 ? <MainEmpty currentCity={currentCity} />
          :
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2><b className="places__found">{currentPlacesNumber} places to stay in {currentCityTitle}</b>
                <Filter onChange={onChange} currentSort={currentSort} />
                <div className="cities__places-list places__list tabs__content">
                  <Cards onListItemHover={onListItemHover} sortOffers={sortOffers} />
                </div>

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map selectedPoint={selectedPoint} offers={offers} currentCity={currentCity} />
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
}

export default Main;
