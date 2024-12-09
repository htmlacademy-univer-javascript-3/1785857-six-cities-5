import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { offers, offersNearby } from './mocks/offers';
import reviews from './mocks/reviews';
import { points, city, pointsNearby } from './mocks/points';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offers = {offers} points = {points} city = {city} reviews = {reviews} offersNearby = {offersNearby} pointsNearby = {pointsNearby} />
  </React.StrictMode>
);
