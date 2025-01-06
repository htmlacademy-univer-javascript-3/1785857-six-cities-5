import { createAction } from '@reduxjs/toolkit';
import { Actions, AuthorizationStatus } from '../utils/constants';
import { CityType } from '../types/city';
import { CardsType } from '../types/card';
import { APIRoute } from '../utils/constants';
import { OfferType } from '../types/offer';
import { ReviewsType } from '../types/review';
import { UserType } from '../types/user';

const setCity = createAction<CityType>(Actions.SET_CITY);

const setOffers = createAction<CardsType>(Actions.SET_OFFERS);

const requireAuthorization = createAction<AuthorizationStatus>(Actions.REQUIRE_AUTH);

const setError = createAction<string | null>(Actions.SET_ERROR);

const showCardsLoader = createAction<boolean>(Actions.SHOW_CARDS_LOADER);

const showOfferLoader = createAction<boolean>(Actions.SHOW_OFFER_LOADER);

const showReviewsLoader = createAction<boolean>(Actions.SHOW_REVIEWS_LOADER);

const showNearbyLoader = createAction<boolean>(Actions.SHOW_NEARBY_LOADER);

const redirectToRoute = createAction<APIRoute>(Actions.REDIRECT_TO_ROOT);

const setOffer = createAction<OfferType>(Actions.SET_OFFER);

const setReviews = createAction<ReviewsType>(Actions.SET_REVIEWS);

const setNearbyOffers = createAction<CardsType>(Actions.SET_NEARBY_OFFERS);

const cleanCity = createAction(Actions.CLEAN_CITY);

const cleanOffer = createAction(Actions.CLEAN_OFFER);

const cleanNearbyOffers = createAction(Actions.CLEAN_NEARBY_OFFERS);

const cleanReviews = createAction(Actions.CLEAN_REVIEWS);

const setFavourite = createAction<CardsType>(Actions.SET_FAVOURITE);

const showFavouriteLoader = createAction<boolean>(Actions.SHOW_FAVOURITE_LOADER);

const setUserData = createAction<UserType>(Actions.SET_USER_DATA);

const cleanUserData = createAction(Actions.CLEAN_USER_DATA);

export { setCity, setOffers, requireAuthorization, setError, showCardsLoader, showOfferLoader, redirectToRoute, setOffer, setReviews, setNearbyOffers, cleanOffer, cleanNearbyOffers, cleanReviews, showReviewsLoader, showNearbyLoader, cleanCity, setFavourite, showFavouriteLoader, setUserData, cleanUserData };
