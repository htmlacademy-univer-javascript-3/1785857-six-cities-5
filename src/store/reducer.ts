import { createReducer } from '@reduxjs/toolkit';
import { offers, offersNearby } from '../mocks/offers';
import reviews from '../mocks/reviews';
import { StateType } from '../types/state';
import { cities } from '../utils/constants';
import { setCityAction, getOffers } from './actions';

const initialState: StateType = {
  city: cities[0],
  offers: offers.filter((el) => el.city === cities[0].title),
  offersNearby: offersNearby,
  reviews: reviews,
  offer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(getOffers, (state) => {
      state.offers = offers.filter((el) => el.city === state.city.title);
    });
});

export { reducer };
