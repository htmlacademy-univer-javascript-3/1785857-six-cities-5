import Main from '../main/main';
import Login from '../login/login';
import Favourites from '../favourites/favourites';
import Offer from '../offer/offer';
import PageNotFound from '../404/404';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthorizationStatus, Path } from '../../utils/constants';
import PrivateRoute from '../private-route/private-route';


type AppProps = {
  placesNumber: number;
}

function App({placesNumber}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = {Path.MainPage} element = {<Main placesNumber={placesNumber}/>} />
        <Route path = {Path.LoginPage} element = {<Login/>} />
        <Route path = {Path.FavPage} element = {<PrivateRoute authorizationStatus = {AuthorizationStatus.NoAuth}><Favourites/></PrivateRoute>} />
        <Route path = {Path.OfferPage} element = {<Offer/>} />
        <Route path = '*' element = {<PageNotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
