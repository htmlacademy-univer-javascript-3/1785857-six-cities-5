import { createReducer } from '@reduxjs/toolkit';
import { setFavourite } from '../actions';
import { FavouriteState } from '../../types/state';

const initialState: FavouriteState = {
  favourite: [],
  isFavouriteLoading: false
};

const favouriteReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setFavourite, (state, action) => {
      state.favourite = action.payload;
    });
});

export { favouriteReducer };
