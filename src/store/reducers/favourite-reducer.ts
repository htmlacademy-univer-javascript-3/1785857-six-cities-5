import { createReducer } from '@reduxjs/toolkit';
import { cleanFavouriteOffers, setFavouriteOffers } from '../actions';
import { FavouriteState } from '../../types/state';

const initialState: FavouriteState = {
  favourite: [],
  isFavouriteLoading: false
};

const favouriteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavouriteOffers, (state, action) => {
      state.favourite = action.payload;
    }).addCase(cleanFavouriteOffers, (state) => {
      state.favourite = [];
    });
});

export { favouriteReducer };
