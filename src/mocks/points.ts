import { PointsType } from '../types/point';
import { offers, offersNearby } from './offers';

const points: PointsType = offers.map((elem) => ({title: elem.header, lat: elem.lat, lng: elem.lng}));

const pointsNearby: PointsType = offersNearby.map((elem) => ({title: elem.header, lat: elem.lat, lng: elem.lng}));

export { points, pointsNearby };
