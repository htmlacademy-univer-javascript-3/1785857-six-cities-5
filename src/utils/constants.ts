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

export { Path, AuthorizationStatus };
