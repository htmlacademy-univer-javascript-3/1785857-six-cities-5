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

const URL_MARKER_DEFAULT = '../../markup/img/pin.svg';

const URL_MARKER_CURRENT = '../../markup/img/pin-active.svg';

export { Path, AuthorizationStatus, OfferType, URL_MARKER_DEFAULT, URL_MARKER_CURRENT };
