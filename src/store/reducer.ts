import { createReducer } from '@reduxjs/toolkit';
import { StateType } from '../types/state';
import { AuthorizationStatus, cities } from '../utils/constants';
import { setCityAction, getOffers, requireAuthorization, setError, showLoader } from './actions';

const initialState: StateType = {
  city: cities[0],
  offers: [],
  offersNearby: [],
  reviews: [],
  offer: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  isLoading: false,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(showLoader, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
