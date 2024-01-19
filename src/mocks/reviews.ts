import type { Review } from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    date: '2019-04-24',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 4.1,
    user: {
      id: 1,
      name: 'Max',
      avatar: 'img/avatar-max.jpg',
      isPro: false,
    }
  },
  {
    id: 2,
    date: '2020-04-24',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Berlin. The building is green and from 18th century.',
    rating: 3.8,
    user: {
      id: 2,
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    }
  },
];
