export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'noAuth',
  Unknown = 'unknown',
}
