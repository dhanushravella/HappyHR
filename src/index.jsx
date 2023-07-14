import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';
import './style/app.less';
import { createRoot } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Router as RouterHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from '@/utils/history';
import store from '@/redux/store';
import { AppContextProvider } from '@/context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterHistory history={history}>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </Provider>
  </RouterHistory>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
