import { combineReducers } from '@reduxjs/toolkit';
import { cityReducer } from './reducers/city-reducer';
import { userReducer } from './reducers/user-reducer';
import { offersReducer } from './reducers/offers-reducer';
import { offerReducer } from './reducers/offer-reducer';
import { reviewsReducer } from './reducers/reviews-reducer';
import { favouriteReducer } from './reducers/favourite-reducer';
import { ReducerTypes } from '../utils/constants';
import { errorReducer } from './reducers/error-reducer';

export type FullState = ReturnType<typeof reducer>;

const reducer = combineReducers({
  [ReducerTypes.USER_REDUCER]: userReducer,
  [ReducerTypes.CITY_REDUCER]: cityReducer,
  [ReducerTypes.OFFERS_REDUCER]: offersReducer,
  [ReducerTypes.OFFER_REDUCER]: offerReducer,
  [ReducerTypes.REVIEWS_REDUCER]: reviewsReducer,
  [ReducerTypes.FAVOURITE_REDUCER]: favouriteReducer,
  [ReducerTypes.ERROR_REDUCER]: errorReducer,
});

export {reducer};
