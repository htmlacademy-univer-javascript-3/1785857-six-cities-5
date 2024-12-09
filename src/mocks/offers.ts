import { CardType } from '../types/card.ts';
import { OfferType } from '../utils/constants';

const offers: CardType[] = [
  {
    id: 1,
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661964071015-d97428970584',
    isPremium: true,
    price: 10000,
    header: 'Super Luxury Village 5*',
    type: OfferType.Hotel,
    isFavourite: false,
    rating: 5,
    lat: 52.3909553943508,
    lng: 4.85309666406198
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1517541866997-ea18e32ea9e9',
    isPremium: false,
    price: 1500,
    header: 'Sunset House 3*',
    type: OfferType.House,
    isFavourite: false,
    rating: 4,
    lat: 52.3609553943508,
    lng: 4.85309666406198
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4',
    isPremium: true,
    price: 8500,
    header: 'Laguna Beach Royal Tree 5*',
    type: OfferType.Apartment,
    isFavourite: false,
    rating: 5,
    lat: 52.3909553943508,
    lng: 4.929309666406198
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688',
    isPremium: false,
    price: 300,
    header: 'City Centre Apartment',
    type: OfferType.Apartment,
    isFavourite: false,
    rating: 3,
    lat: 52.3809553943508,
    lng: 4.939309666406198
  },
];

export default offers;
