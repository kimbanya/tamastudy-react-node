import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import withAuth from '../components/hoc/withAuth';
import AppNavButton from '../components/organisms/AppNavButton/index';
import Main from '../pages/Main';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={withAuth(Main, false)} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
      <AppNavButton />
    </Router>
  );
};

export default AppPresenter;
