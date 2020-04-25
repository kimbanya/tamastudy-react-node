import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Route page
import Home from '../components/pages/Home';
import Sign from '../components/pages/Sign';
import GetPosts from '../components/pages/Post/GetPosts';
import CreatePost from '../components/pages/Post/CreatePost';
import GetPostById from '../components/pages/Post/GetPostById';
import UpdatePost from '../components/pages/Post/UpdatePostById';

// hoc
import requireAuth from '../components/hoc/requireAuth';

const AppPresenter = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signup'} exact component={requireAuth(Sign, false)} />
        <Route path={'/signin'} exact component={requireAuth(Sign, false)} />
        <Route path={'/posts'} exact component={GetPosts} />
        <Route path={'/post/create'} exact component={requireAuth(CreatePost, true)} />
        <Route path={'/post/:postId/update'} component={requireAuth(UpdatePost, true)} />
        <Route path={'/post/:postId'} component={GetPostById} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
