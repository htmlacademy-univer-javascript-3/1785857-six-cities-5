import { createReducer } from '@reduxjs/toolkit';
import { cleanUserData, requireAuthorization, setUserData } from '../actions';
import { UserState } from '../../types/state';
import { AuthorizationStatus } from '../../utils/constants';

const initialState: UserState = {
  userData: null,
  authorizationStatus: AuthorizationStatus.Unknown
};

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUserData, (state, action) => {
      state.userData = action.payload;
    })
    .addCase(cleanUserData, (state) => {
      state.userData = null;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { userReducer };
