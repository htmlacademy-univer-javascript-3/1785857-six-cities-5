import { createReducer } from '@reduxjs/toolkit';
import { setOffers, showCardsLoader, setNearbyOffers, cleanNearbyOffers, showNearbyLoader } from '../actions';
import { OffersState } from '../../types/state';

const initialState: OffersState = {
  offers: [],
  offersNearby: [],
  areCardsLoading: false,
  isNearbyLoading: false
};

const offersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(cleanNearbyOffers, (state) => {
      state.offersNearby = [];
    })
    .addCase(showNearbyLoader, (state, action) => {
      state.isNearbyLoading = action.payload;
    })
    .addCase(showCardsLoader, (state, action) => {
      state.areCardsLoading = action.payload;
    });
});

export { offersReducer };
