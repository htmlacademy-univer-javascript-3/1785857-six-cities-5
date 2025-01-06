import { createReducer } from '@reduxjs/toolkit';
import { setCity, cleanCity } from '../actions';
import { CityState } from '../../types/state';
import { cities } from '../../utils/constants';

const initialState: CityState = {
  city: cities[0],
};

const cityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(cleanCity, (state) => {
      state.city = cities[0];
    });
});

export { cityReducer };
