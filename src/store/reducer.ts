import { createReducer } from '@reduxjs/toolkit';
import { StateType } from '../types/state';
import { AuthorizationStatus, cities } from '../utils/constants';
import { setCity, setOffers, requireAuthorization, setError, showCardsLoader, showOfferLoader, setOffer, setReviews, setNearbyOffers, cleanNearbyOffers, cleanReviews, cleanOffer, showNearbyLoader, showReviewsLoader, cleanCity } from './actions';

const initialState: StateType = {
  city: cities[0],
  offers: [],
  offersNearby: [],
  reviews: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  areCardsLoading: false,
  isOfferLoading: false,
  areReviewsLoading: false,
  isNearbyLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(showCardsLoader, (state, action) => {
      state.areCardsLoading = action.payload;
    })
    .addCase(showOfferLoader, (state, action) => {
      state.isOfferLoading = action.payload;
    })
    .addCase(showReviewsLoader, (state, action) => {
      state.areReviewsLoading = action.payload;
    })
    .addCase(showNearbyLoader, (state, action) => {
      state.isNearbyLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(cleanOffer, (state) => {
      state.offer = null;
    })
    .addCase(cleanReviews, (state) => {
      state.reviews = [];
    })
    .addCase(cleanNearbyOffers, (state) => {
      state.offersNearby = [];
    })
    .addCase(cleanCity, (state) => {
      state.city = cities[0];
    });
});

export { reducer };
