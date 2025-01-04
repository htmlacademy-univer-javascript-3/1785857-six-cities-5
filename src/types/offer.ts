import { CityType } from './city';
import { PointType } from './point';

type OfferType = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: CityType;
  location: PointType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: [string];
  host: {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  };
  images: [string];
  maxAdults: number;
  previewImage?: string;
}

type OffersType = OfferType[];

export type { OfferType, OffersType };
