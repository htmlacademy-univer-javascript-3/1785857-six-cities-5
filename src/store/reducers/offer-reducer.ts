import { createReducer } from '@reduxjs/toolkit';
import { setOffer, cleanOffer, showOfferLoader } from '../actions';
import { OfferState } from '../../types/state';

const initialState: OfferState = {
  offer: null,
  isOfferLoading: false,
};

const offerReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(cleanOffer, (state) => {
      state.offer = null;
    })
    .addCase(showOfferLoader, (state, action) => {
      state.isOfferLoading = action.payload;
    });
});

export { offerReducer };
