import { CitiesType } from '../types/city';

enum Path {
  MainPage = '/',
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
    title: 'Paris',
    lat: 48.85341,
    lng: 2.3488,
    zoom: 10,
  },
  {
    id: 2,
    title: 'Cologne',
    lat: 50.935173,
    lng: 6.953101,
    zoom: 10,
  },
  {
    id: 3,
    title: 'Brussels',
    lat: 50.85045,
    lng: 4.34878,
    zoom: 10,
  },
  {
    id: 4,
    title: 'Amsterdam',
    lat: 52.377956,
    lng: 4.897070,
    zoom: 10,
  },
  {
    id: 5,
    title: 'Hamburg',
    lat: 53.551086,
    lng: 9.993682,
    zoom: 10,
  },
  {
    id: 6,
    title: 'Dusseldorf',
    lat: 51.233334,
    lng: 6.783333,
    zoom: 10,
  },
];

const URL_MARKER_DEFAULT = '../../markup/img/pin.svg';

const URL_MARKER_CURRENT = '../../markup/img/pin-active.svg';

enum Actions {
  SET_CITY = 'SET_CITY',
  GET_OFFERS = 'GET_OFFERS',
}

export { Path, AuthorizationStatus, OfferType, URL_MARKER_DEFAULT, URL_MARKER_CURRENT, cities, Actions };
