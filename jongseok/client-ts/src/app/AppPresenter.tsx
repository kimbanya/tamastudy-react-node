import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
  } from 'react-router-dom';
import CommonLayout from '../components/CommonLayout/index';
import Home from '../components/pages/Home';
import GetPostById from '../components/pages/Post/GetPostById';
import GetPosts from '../components/pages/Post/GetPosts';
import PostForm from '../components/pages/Post/PostForm';
import Sign from '../components/pages/Sign';

interface IProps {}

const AppPresenter: React.SFC<IProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={Home} />
        <Route path={'/signin'} exact component={Sign} />
        <Route path={'/signup'} exact component={Sign} />
        <Route path={'/posts'} exact component={GetPosts} />
        <Route path={'/post/create'} exact component={PostForm} />
        <Route path={'/post/:postId/update'} component={PostForm} />
        <Route path={'/post/:postId'} component={GetPostById} />
        <Route path={'/studies'} exact component={() => <CommonLayout>studies</CommonLayout>} />
        <Route path={'/contact'} exact component={() => <CommonLayout>contact</CommonLayout>} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
};

export default AppPresenter;
