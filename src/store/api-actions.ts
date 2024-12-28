import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { CardsType } from '../types/card.js';
import { getOffers, requireAuthorization, setError, showLoader } from './actions';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../utils/constants.js';
import { Actions } from '../utils/constants';
import { AuthType } from '../types/auth.js';
import { UserType } from '../types/user.js';
import { saveToken, dropToken } from '../services/token';
import { store } from './index.ts';

export const getOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.GET_OFFERS,
  async (_arg, {dispatch, extra: api}) => {
    dispatch(showLoader(true));
    const {data} = await api.get<CardsType>(APIRoute.Offers);
    dispatch(showLoader(false));
    dispatch(getOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.USER_CHECK_AUTH,
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.USER_LOGIN,
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserType>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  Actions.USER_LOGOUT,
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  Actions.CLEAR_ERROR,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

