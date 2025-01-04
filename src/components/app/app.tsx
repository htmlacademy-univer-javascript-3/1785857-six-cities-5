import Main from '../main/main';
import Login from '../login/login';
import Favourites from '../favourites/favourites';
import Offer from '../offer/offer';
import PageNotFound from '../404/404';
import { Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Filters, Path } from '../../utils/constants';
import PrivateRoute from '../private-route/private-route';
import { PointsType, PointType } from '../../types/point';
import { useState } from 'react';
import { CitiesType } from '../../types/city';
import { CardsType } from '../../types/card';
import { FilterType } from '../../types/filter';
import { useAppSelector } from '../../hooks';
import Loader from '../component/loader';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../utils/browser-history';

type AppProps = {
  cities: CitiesType;
};

function App(props: AppProps): JSX.Element {

  const offers = useAppSelector((state) => state.offers);

  const points: PointsType = offers.map((elem) => ({title: elem.title, latitude: elem.location.latitude, longitude: elem.location.longitude, zoom: elem.location.zoom, id: elem.id}));

  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const isOffersDataLoading = useAppSelector((state) => state.areCardsLoading);

  const [selectedPoint, setSelectedPoint] = useState<PointType | undefined>(
    undefined
  );

  const [sortType, setSortType] = useState<FilterType>(Filters.Popular);

  const {cities} = props;

  const handleListItemHover = (listItemId: string) => {
    const currentPoint = points.find((point) => point.id === listItemId);
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
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path = {Path.MainPage} element = {<Main cities = {cities} onListItemHover = {handleListItemHover} selectedPoint = {selectedPoint} currentSort = {sortType} sortOffers = {sortOffers} onChange = {setSortType} />} />
        <Route path = {authorizationStatus === AuthorizationStatus.Auth ? Path.MainPage : Path.LoginPage} element = {<Login/>} />
        <Route path = {Path.FavPage} element = {<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><Favourites /></PrivateRoute>} />
        <Route path = {Path.OfferPage} element = {<Offer selectedPoint = {selectedPoint} onListItemHover = {handleListItemHover} />} />
        <Route path = '*' element = {<PageNotFound/>} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
