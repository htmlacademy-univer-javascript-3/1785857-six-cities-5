import { createAction } from '@reduxjs/toolkit';
import { Actions, AuthorizationStatus } from '../utils/constants';
import { CityType } from '../types/city';
import { CardsType } from '../types/card';

const setCityAction = createAction<CityType>(Actions.SET_CITY);

const getOffers = createAction<CardsType>(Actions.GET_OFFERS);

const requireAuthorization = createAction<AuthorizationStatus>(Actions.REQUIRE_AUTH);

const setError = createAction<string | null>(Actions.SET_ERROR);

const showLoader = createAction<boolean>(Actions.SHOW_LOADER);

export { setCityAction, getOffers, requireAuthorization, setError, showLoader };
