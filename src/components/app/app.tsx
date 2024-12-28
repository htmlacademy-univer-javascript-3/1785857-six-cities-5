import Main from '../main/main';
import Login from '../login/login';
import Favourites from '../favourites/favourites';
import Offer from '../offer/offer';
import PageNotFound from '../404/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Filters, Path } from '../../utils/constants';
import PrivateRoute from '../private-route/private-route';
import { PointsType, PointType } from '../../types/point';
import { useState } from 'react';
import { CitiesType, CityType } from '../../types/city';
import { CardsType } from '../../types/card';
import { FilterType } from '../../types/filter';
import { useAppSelector } from '../../hooks';
import Loader from '../component/loader';

type AppProps = {
  cities: CitiesType;
};

function App(props: AppProps): JSX.Element {

  const offers = useAppSelector((state) => state.offers);

  const reviews = useAppSelector((state) => state.reviews);

  // const offersNearby = useAppSelector((state) => state.offersNearby);

  // const pointsNearby: PointsType = offersNearby.map((elem) => ({title: elem.title, lat: elem.location.lat, lng: elem.location.lng}));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const points: PointsType = offers.map((elem) => ({title: elem.title, latitude: elem.location.latitude, longitude: elem.location.longitude, zoom: elem.location.zoom}));

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isOffersDataLoading = useAppSelector((state) => state.isLoading);

  const [selectedPoint, setSelectedPoint] = useState<PointType | undefined>(
    undefined
  );

  const [sortType, setSortType] = useState<FilterType>(Filters.Popular);

  const currentCity: CityType = useAppSelector((state) => state.city);

  const {cities} = props;

  const handleListItemHover = (listItemName: string | null | undefined) => {
    const currentPoint = points.find(() => 'point.title' === listItemName);
    setSelectedPoint(currentPoint);
  };

  const sortOffers = (array: CardsType) => [...array].sort((a, b) => {
    switch (sortType) {
      case 'LowToHigh':
        return a.price - b.price;
      case 'HighToLow':
        return b.price - a.price;
      case 'TopRated':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {Path.MainPage} element = {<Main currentCity={currentCity} cities = {cities} onListItemHover={handleListItemHover} selectedPoint={selectedPoint} currentSort = {sortType} sortOffers = {sortOffers} onChange = {setSortType} />} />
        <Route path = {Path.LoginPage} element = {<Login/>} />
        <Route path = {Path.FavPage} element = {<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><Favourites /></PrivateRoute>} />
        <Route path = {Path.OfferPage} element = {<Offer reviews = {reviews} selectedPoint = {selectedPoint} sortOffers={sortOffers} /*offersNearby = {offersNearby}*/ onListItemHover={handleListItemHover} />} />
        <Route path = '*' element = {<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
