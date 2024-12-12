import { PointsType, CityType } from '../types/point';
import { offers, offersNearby } from './offers';

const points: PointsType = offers.map((elem) => ({title: elem.header, lat: elem.lat, lng: elem.lng}));

const pointsNearby: PointsType = offersNearby.map((elem) => ({title: elem.header, lat: elem.lat, lng: elem.lng}));

const city: CityType = {
  title: 'Amsterdam',
  lat: 52.377956,
  lng: 4.897070,
  zoom: 10,
};

export {points, city, pointsNearby};
