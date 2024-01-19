export type User = {
  id: number;
  name: string;
  avatar: string;
  isPro: boolean;
}

export type Review = {
  id: number;
  date: string;
  text: string;
  rating: number;
  user: User;
}
