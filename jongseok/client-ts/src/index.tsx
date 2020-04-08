import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import AppRouter from './app';
import store from './store';

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppRouter />
  </ReduxProvider>,
  document.getElementById('root'),
);
