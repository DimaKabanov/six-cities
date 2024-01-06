export type Offer = {
  id: number;
  isPremium: boolean;
  image: string;
  price: number;
  rating: number;
  title: string;
  inFavorites: boolean;
  type: 'apartment' | 'room' | 'house' | 'hotel';
  city: string;
}
