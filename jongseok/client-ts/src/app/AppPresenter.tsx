import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Post from '../pages/Post';
import Home from '../pages/Home';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/posts'} exact component={Post} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
