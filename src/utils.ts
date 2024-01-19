import { maxPercentRatingStarsWidth, maxRatingCount } from './const';

export const getStarWidth = (rating: number): number => (
  (maxPercentRatingStarsWidth * rating) / maxRatingCount
);

export const formatDate = (date: string): string => {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  return formattedDate;
};
