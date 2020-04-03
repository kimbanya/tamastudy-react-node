import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GetPosts from '../components/pages/Post/GetPosts';
import Home from '../components/pages/Home';
import Sign from '../components/pages/Sign';
import nonmemberComponent from '../hoc/nonmemberComponent';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signin'} exact component={nonmemberComponent(Sign)} />
        <Route path={'/signup'} exact component={nonmemberComponent(Sign)} />
        <Route path={'/posts'} exact component={GetPosts} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
