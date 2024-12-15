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
import { ReviewsType } from '../../types/review';
import { CitiesType, CityType } from '../../types/city';
import { CardsType } from '../../types/card';
import { FilterType } from '../../types/filter';
import { useAppSelector } from '../../hooks';

type AppProps = {
  // offersNearby: CardsType;
  points: PointsType;
  reviews: ReviewsType;
  pointsNearby: PointsType;
  cities: CitiesType;
};

function App(props: AppProps): JSX.Element {

  const {points, reviews, /* offersNearby, */ pointsNearby, cities} = props;

  const [selectedPoint, setSelectedPoint] = useState<PointType | undefined>(
    undefined
  );

  const currentCity: CityType = useAppSelector((state) => state.city);

  const handleListItemHover = (listItemName: string | null | undefined) => {
    const currentPoint = points.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };

  const [sortType, setSortType] = useState<FilterType>(Filters.Popular);

  const sortOffers = (offers: CardsType) => [...offers].sort((a, b) => {
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

  return (
    <BrowserRouter>
      <Routes>
        <Route path = {Path.MainPage} element = {<Main currentCity={currentCity} points = {points} cities = {cities} onListItemHover={handleListItemHover} selectedPoint={selectedPoint} currentSort = {sortType} sortOffers = {sortOffers} onChange = {setSortType} />} />
        <Route path = {Path.LoginPage} element = {<Login/>} />
        <Route path = {Path.FavPage} element = {<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><Favourites /></PrivateRoute>} />
        <Route path = {Path.OfferPage} element = {<Offer currentCity={currentCity} reviews = {reviews} selectedPoint = {selectedPoint} sortOffers={sortOffers} /*offersNearby = {offersNearby}*/ onListItemHover={handleListItemHover} pointsNearby = {pointsNearby} />} />
        <Route path = '*' element = {<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
