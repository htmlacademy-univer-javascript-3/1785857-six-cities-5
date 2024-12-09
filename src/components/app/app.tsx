import Main from '../main/main';
import Login from '../login/login';
import Favourites from '../favourites/favourites';
import Offer from '../offer/offer';
import PageNotFound from '../404/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../utils/constants';
import PrivateRoute from '../private-route/private-route';
import { CardsType } from '../../types/card';
import { CityType, PointsType, PointType } from '../../types/point';
import { useState } from 'react';
import { ReviewsType } from '../../types/review';

type AppProps = {
  offers: CardsType;
  offersNearby: CardsType;
  city: CityType;
  points: PointsType;
  reviews: ReviewsType;
  pointsNearby: PointsType;
};

function App(props: AppProps): JSX.Element {
  const {offers, city, points, reviews, offersNearby, pointsNearby} = props;
  const [selectedPoint, setSelectedPoint] = useState<PointType | undefined>(
    undefined
  );
  const handleListItemHover = (listItemName: string | null | undefined) => {
    const currentPoint = points.find((point) => point.title === listItemName);
    setSelectedPoint(currentPoint);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {Path.MainPage} element = {<Main offers = {offers} points = {points} city = {city} onListItemHover={handleListItemHover} selectedPoint={selectedPoint} />} />
        <Route path = {Path.LoginPage} element = {<Login/>} />
        <Route path = {Path.FavPage} element = {<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><Favourites /></PrivateRoute>} />
        <Route path = {Path.OfferPage} element = {<Offer city = {city} reviews = {reviews} selectedPoint = {selectedPoint} offersNearby = {offersNearby} onListItemHover={handleListItemHover} pointsNearby = {pointsNearby} />} />
        <Route path = '*' element = {<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
