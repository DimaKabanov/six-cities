export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
}

export enum AuthorizationStatus {
  Auth = 'auth',
  NoAuth = 'noAuth',
  Unknown = 'unknown',
}

export const maxRatingCount = 5;
export const maxPercentRatingStarsWidth = 100;

export const cities = ['Amsterdam', 'Cologne', 'Brussels', 'Hamburg', 'Dusseldorf'] as const;

export const urlMarkerDefault =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const urlMarkerCurrent =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';
