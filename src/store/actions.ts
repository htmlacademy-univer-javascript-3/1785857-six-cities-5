import { createAction } from '@reduxjs/toolkit';
import { Actions } from '../utils/constants';
import { CityType } from '../types/city';

const setCityAction = createAction<CityType>(Actions.SET_CITY);

const getOffers = createAction(Actions.GET_OFFERS);

export { setCityAction, getOffers };

