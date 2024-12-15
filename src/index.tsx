import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { offersNearby } from './mocks/offers';
import reviews from './mocks/reviews';
import { points, pointsNearby } from './mocks/points';
import { cities } from './utils/constants';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App points={points} cities={cities} reviews={reviews} /* offersNearby={offersNearby}*/ pointsNearby={pointsNearby} />
    </Provider>
  </React.StrictMode>
);
