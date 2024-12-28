import { CitiesType } from '../types/city';

enum Path {
  MainPage = '/offers',
  LoginPage = '/login',
  FavPage = '/favourites',
  OfferPage = '/offer/:id'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

enum OfferType {
  Apartment = 'apartment',
  Room = 'room',
  House = 'house',
  Hotel = 'hotel'
}

const cities: CitiesType = [
  {
    id: 1,
    name: 'Paris',
    location: {
      latitude: 48.85341,
      longitude: 2.3488,
      zoom: 10,
    }
  },
  {
    id: 2,
    name: 'Cologne',
    location: {
      latitude: 50.935173,
      longitude: 6.953101,
      zoom: 10,
    }
  },
  {
    id: 3,
    name: 'Brussels',
    location: {
      latitude: 50.85045,
      longitude: 4.34878,
      zoom: 10,
    }
  },
  {
    id: 4,
    name: 'Amsterdam',
    location: {
      latitude: 52.377956,
      longitude: 4.897070,
      zoom: 10,
    }
  },
  {
    id: 5,
    name: 'Hamburg',
    location: {
      latitude: 53.551086,
      longitude: 9.993682,
      zoom: 10,
    }
  },
  {
    id: 6,
    name: 'Dusseldorf',
    location: {
      latitude: 51.233334,
      longitude: 6.783333,
      zoom: 10,
    }
  },
];

const URL_MARKER_DEFAULT = '../../markup/img/pin.svg';

const URL_MARKER_CURRENT = '../../markup/img/pin-active.svg';

enum Actions {
  SET_CITY = 'SET_CITY',
  GET_OFFERS = 'GET_OFFERS',
  REQUIRE_AUTH = 'REQUIRE_AUTH',
  SET_ERROR = 'SET_ERROR',
  CLEAR_ERROR = 'CLEAR_ERROR',
  SHOW_LOADER = 'SHOW_LOADER',
  USER_CHECK_AUTH = 'USER_CHECK_AUTH',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT'
}

enum Filters {
  Popular = 'Popular',
  TopRated = 'Top rated first',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low'
}

enum APIRoute {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
}

const TIMEOUT_SHOW_ERROR = 2000;

export { Path, AuthorizationStatus, OfferType, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, cities, Actions, Filters, APIRoute, TIMEOUT_SHOW_ERROR };

