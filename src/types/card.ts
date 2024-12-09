import { OfferType } from '../utils/constants';

type CardType = {
  id: number;
  imageUrl: string;
  isPremium: boolean;
  price: number;
  header: string;
  type: OfferType;
  isFavourite: boolean;
  rating: number;
  lat: number;
  lng: number;
}

type CardsType = CardType[];

export type { CardType, CardsType };
