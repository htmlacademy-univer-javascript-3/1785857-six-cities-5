import { OfferType } from '../utils/constants';
import { CityType } from './city';
import { PointType } from './point';

type CardType = {
  id: number;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: OfferType;
  isFavourite: boolean;
  rating: number;
  location: PointType;
  city: CityType;
}

type CardsType = CardType[];

export type { CardType, CardsType };
