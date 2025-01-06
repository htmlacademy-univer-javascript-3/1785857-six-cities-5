import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favourite from '../../pages/favourite/favourite';
import Offer from '../../pages/offer/offer';
import PageNotFound from '../../pages/404/404';
import { Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Filters, Path, ReducerTypes } from '../../utils/constants';
import PrivateRoute from '../private-route/private-route';
import { PointsType, PointType } from '../../types/point';
import { useCallback, useState } from 'react';
import { CitiesType } from '../../types/city';
import { CardsType } from '../../types/card';
import { FilterType } from '../../types/filter';
import { useAppSelector } from '../../hooks';
import Loader from '../loader/loader';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../utils/browser-history';

type AppProps = {
  cities: CitiesType;
};

function App(props: AppProps): JSX.Element {

  const offers = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].offers);

  const points: PointsType = offers.map((elem) => ({ title: elem.title, latitude: elem.location.latitude, longitude: elem.location.longitude, zoom: elem.location.zoom, id: elem.id }));

  const authorizationStatus = useAppSelector((state) => state[ReducerTypes.USER_REDUCER].authorizationStatus);

  const isOffersDataLoading = useAppSelector((state) => state[ReducerTypes.OFFERS_REDUCER].areCardsLoading);

  const [selectedPoint, setSelectedPoint] = useState<PointType | undefined>(
    undefined
  );

  const [sortType, setSortType] = useState<FilterType>(Filters.Popular);

  const { cities } = props;

  const handleListItemHover = useCallback((listItemId: string) => {
    const currentPoint = points.find((point) => point.id === listItemId);
    setSelectedPoint(currentPoint);
  }, [points]);

  const sortOffers = useCallback((array: CardsType) => [...array].sort((a, b) => {
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
  }), [sortType]);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <Loader />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={Path.MainPage} element={<Main cities={cities} onListItemHover={handleListItemHover} selectedPoint={selectedPoint} currentSort={sortType} sortOffers={sortOffers} onChange={setSortType} />} />
        <Route path={authorizationStatus === AuthorizationStatus.Auth ? Path.MainPage : Path.LoginPage} element={<Login />} />
        <Route path={Path.FavPage} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Unknown}><Favourite /></PrivateRoute>} />
        <Route path={Path.OfferPage} element={<Offer selectedPoint={selectedPoint} onListItemHover={handleListItemHover} />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
