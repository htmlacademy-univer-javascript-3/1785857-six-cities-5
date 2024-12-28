import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { cities } from './utils/constants';
import { Provider } from 'react-redux';
import { store } from './store';
import Error from './components/error/error';
import { checkAuthAction, getOffersAction } from './store/api-actions';

store.dispatch(checkAuthAction());
store.dispatch(getOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Error />
      <App cities={cities} />
    </Provider>
  </React.StrictMode>
);
