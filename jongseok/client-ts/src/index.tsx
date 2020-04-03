import React from 'react';
import ReactDOM from 'react-dom';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
// Router
import AppRouter from './app';

ReactDOM.render(
  <ReduxProvider store={store}>
    <AppRouter />
  </ReduxProvider>,
  document.getElementById('root'),
);
