import { createReducer } from '@reduxjs/toolkit';
import { setError } from '../actions';
import { ErrorState } from '../../types/state';

const initialState: ErrorState = {
  error: null,
};

const errorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { errorReducer };
