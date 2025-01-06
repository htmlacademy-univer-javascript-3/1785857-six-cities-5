import { CardsType } from './card';
import { CityType } from './city';
import { ReviewsType } from './review';
import { store } from '../store/index';
import { AuthorizationStatus } from '../utils/constants';
import { OfferType } from './offer';
import { UserType } from './user';

type StateType = {
  city: CityType;
  offers: CardsType;
  offersNearby: CardsType;
  reviews: ReviewsType;
  offer: OfferType | null;
  authorizationStatus: AuthorizationStatus;
  areCardsLoading: boolean;
  isOfferLoading: boolean;
  areReviewsLoading: boolean;
  isNearbyLoading: boolean;
  error: string | null;
  favourite: CardsType;
  isFavouriteLoading: boolean;
  userData: UserType | null;
}

type OffersState = {
  offers: CardsType;
  offersNearby: CardsType;
  areCardsLoading: boolean;
  isNearbyLoading: boolean;
};

type ReviewsState = {
  reviews: ReviewsType;
  areReviewsLoading: boolean;
}

type OfferState = {
  offer: OfferType | null;
  isOfferLoading: boolean;
}

type UserState = {
  userData: UserType | null;
  authorizationStatus: AuthorizationStatus;
}

type FavouriteState = {
  favourite: CardsType;
  isFavouriteLoading: boolean;
}

type CityState = {
  city: CityType;
}

type ErrorState = {
  error: string | null;
}


type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { StateType, State, AppDispatch, OffersState, ReviewsState, OfferState, UserState, FavouriteState, CityState, ErrorState };
