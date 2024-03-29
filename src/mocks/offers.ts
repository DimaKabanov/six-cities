import type { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    id: 1,
    isPremium: true,
    image: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.1,
    title: 'Beautiful &amp; luxurious apartment at great location',
    inFavorites: false,
    type: 'apartment',
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
  },
  {
    id: 2,
    isPremium: false,
    image: 'img/room.jpg',
    price: 80,
    rating: 2,
    title: 'Wood and stone place',
    inFavorites: true,
    type: 'room',
    city: 'Amsterdam',
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 1
    },
  },
  {
    id: 3,
    isPremium: false,
    image: 'img/apartment-02.jpg',
    price: 132,
    rating: 1,
    title: 'Canal View Prinsengracht',
    inFavorites: true,
    type: 'house',
    city: 'Amsterdam',
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 1
    },
  },
  {
    id: 4,
    isPremium: true,
    image: 'img/apartment-03.jpg',
    price: 182,
    rating: 3,
    title: 'Nice, cozy, warm big bed apartment',
    inFavorites: true,
    type: 'hotel',
    city: 'Cologne',
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 1
    },
  },
];
