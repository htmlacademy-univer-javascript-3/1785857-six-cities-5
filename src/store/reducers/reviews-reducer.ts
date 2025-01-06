import { createReducer } from '@reduxjs/toolkit';
import { cleanReviews, setReviews, showReviewsLoader } from '../actions';
import { ReviewsState } from '../../types/state';

const initialState: ReviewsState = {
  reviews: [],
  areReviewsLoading: false,
};

const reviewsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(cleanReviews, (state) => {
      state.reviews = [];
    })
    .addCase(showReviewsLoader, (state, action) => {
      state.areReviewsLoading = action.payload;
    });
});

export { reviewsReducer };
