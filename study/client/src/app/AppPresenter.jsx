import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Route page
import Home from '../components/pages/Home';
import Sign from '../components/pages/Sign';
import GetPosts from '../components/pages/Post/GetPosts';

// hoc
import requireAuth from '../components/hoc/requireAuth';
import notRequireAuth from '../components/hoc/notRequireAuth';

const AppPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signup'} exact component={notRequireAuth(Sign)} />
        <Route path={'/signin'} exact component={notRequireAuth(Sign)} />
        <Route path={'/posts'} exact component={requireAuth(GetPosts)} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
