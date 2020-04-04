import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Route page
import Home from '../components/pages/Home';
import Sign from '../components/pages/Sign';

const AppPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signup'} exact component={Sign} />
        <Route path={'/signin'} exact component={Sign} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
