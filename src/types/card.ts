import { ObjectType } from '../utils/constants';
import { CityType } from './city';
import { PointType } from './point';

type CardType = {
  id: string;
  previewImage: string;
  isPremium: boolean;
  price: number;
  title: string;
  type: ObjectType;
  isFavourite: boolean;
  rating: number;
  location: PointType;
  city: CityType;
}

type CardsType = CardType[];

export type { CardType, CardsType };

