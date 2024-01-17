import { cities } from '../const';

export type CityName = typeof cities[number];

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type City = {
  name: CityName;
  location: Location;
}

export type Offer = {
  id: number;
  isPremium: boolean;
  image: string;
  price: number;
  rating: number;
  title: string;
  inFavorites: boolean;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  location: Location;
  city: CityName;
}
