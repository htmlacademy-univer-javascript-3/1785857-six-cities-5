import { CardsType } from './card';
import { CityType } from './city';
import { ReviewsType } from './review';
import { store } from '../store/index';
import { AuthorizationStatus } from '../utils/constants';
import { OfferType } from './offer';

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
}

type State = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export type { StateType, State, AppDispatch };
