import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Route page
import Home from '../components/pages/Home';

const AppPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
