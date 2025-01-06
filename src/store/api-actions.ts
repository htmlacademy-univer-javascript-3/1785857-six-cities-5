import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { CardsType, CardType } from '../types/card.js';
import { setOffers, requireAuthorization, setError, showCardsLoader, showOfferLoader, redirectToRoute, setOffer, setReviews, setNearbyOffers, showReviewsLoader, showNearbyLoader, setUserData, cleanUserData, setFavouriteOffers, showFavouriteLoader, cleanFavouriteOffers } from './actions';
import { APIRoute, AuthorizationStatus, ReducerTypes, TIMEOUT_SHOW_ERROR } from '../utils/constants.js';
import { APIActions } from '../utils/constants';
import { AuthType } from '../types/auth.js';
import { UserType } from '../types/user.js';
import { saveToken, dropToken, getToken } from '../services/token';
import { store } from './index.ts';
import { OfferType } from '../types/offer.ts';
import { ReviewsType, ReviewType } from '../types/review.ts';
import { CommentType } from '../types/comment.ts';
import { StatusCodes } from 'http-status-codes';

export const getOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.GET_OFFERS,
  async (_arg, { dispatch, extra: api }) => {
    dispatch(showCardsLoader(true));
    const { data } = await api.get<CardsType>(APIRoute.Offers);
    dispatch(showCardsLoader(false));
    dispatch(setOffers(data));
  },
);

export const getOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.GET_OFFER,
  async (id, { dispatch, extra: api }) => {
    dispatch(showOfferLoader(true));
    const { data } = await api.get<OfferType>(`${APIRoute.Offers}/${id}`);
    dispatch(showOfferLoader(false));
    dispatch(setOffer(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.CHECK_AUTH,
  async (_arg, { dispatch, extra: api }) => {
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
  APIActions.LOGIN,
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserType>(APIRoute.Login, { email, password });
    saveToken(data.token);
    dispatch(setUserData(data));
    localStorage.setItem('email', data.email);
    localStorage.setItem('avatarUrl', data.avatarUrl);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(APIRoute.Main));
    dispatch(getOffersAction());
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.LOGOUT,
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(cleanUserData());
    localStorage.removeItem('email');
    localStorage.removeItem('avatarUrl');
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(cleanFavouriteOffers());
    dispatch(getOffersAction());
  },
);

export const getReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.GET_REVIEWS,
  async (id, { dispatch, extra: api }) => {
    dispatch(showReviewsLoader(true));
    const { data } = await api.get<ReviewsType>(`${APIRoute.Comments}/${id}`);
    dispatch(showReviewsLoader(false));
    dispatch(setReviews(data.slice(0, 10)));
  }
);

export const createCommentAction = createAsyncThunk<void, CommentType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.CREATE_COMMENT,
  async ({ id, comment, rating }, { dispatch, getState, extra: api }) => {
    const { status } = await api.post<ReviewType>(`${APIRoute.Comments}/${id}`, { comment, rating });
    const state = getState();
    if (status === Number(StatusCodes.CREATED) && state[ReducerTypes.OFFER_REDUCER].offer) {
      dispatch(getReviewsAction(state[ReducerTypes.OFFER_REDUCER].offer?.id));
    }
  },
);

export const getNearbyOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.GET_NEARBY_OFFERS,
  async (id, { dispatch, extra: api }) => {
    dispatch(showNearbyLoader(true));
    const { data } = await api.get<CardsType>(`${APIRoute.Offers}/${id}/nearby`);
    dispatch(showNearbyLoader(false));
    dispatch(setNearbyOffers(data.slice(0, 3)));
  }
);

export const clearErrorAction = createAsyncThunk(
  APIActions.GET_ERROR_CLEANED,
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const getFavouriteOffersAction = createAsyncThunk<CardsType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.GET_FAVOURITE,
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<CardsType>(APIRoute.Favourite, {params: { 'X-Token': getToken()}});
    dispatch(showFavouriteLoader(false));
    dispatch(setFavouriteOffers(data));
    return data;
  },
);

export const toggleFavouriteOffersAction = createAsyncThunk<void, { id: string; favState: boolean }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  APIActions.TOGGLE_FAVOURITE,
  async ({ id, favState }, { dispatch, extra: api }) => {
    const { status } = await api.post<CardType>(`${APIRoute.Favourite}/${id}/${favState ? 1 : 0}`);
    if ((status === Number(StatusCodes.CREATED) || status === Number(StatusCodes.OK))) {
      dispatch(getFavouriteOffersAction());
      dispatch(getOffersAction());
    }
  },
);

