import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import AppNavButton from '../components/organisms/AppNavButton/index';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Main from '../pages/Main';
import PageError from '../pages/PageError';
import Register from '../pages/Register';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Main} />
        <Route path={'/register'} exact component={Register} />
        <Route path={'/login'} exact component={Login} />
        <Route path={'/Logout'} exact component={Logout} />
        <Route path={'/404'} exact component={PageError} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
      <AppNavButton />
    </Router>
  );
};

export default AppPresenter;
