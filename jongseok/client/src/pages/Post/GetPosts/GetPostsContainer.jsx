import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/actions/post.action';

const GetPostsContainer = ({ auth, history, getPosts, postState }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  const posts = postState.posts;
  const isLoggedIn = auth.isLoggedIn;

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  const onClickMoveToCreatePost = () => {
    history.push('/post/create');
  };

  if (auth.loading) {
    return <div>Loading ...</div>;
  }
  if (postState.loading) {
    return <div>Loading ...</div>;
  }

  return (
    <GetPostsPresenter
      isLoggedIn={isLoggedIn}
      posts={posts}
      handleToastAlert={handleToastAlert}
      onClickMoveToCreatePost={onClickMoveToCreatePost}
    />
  );
};

const mapStateToProps = ({ auth, postState }) => ({
  auth,
  postState,
});

export default withRouter(connect(mapStateToProps, { getPosts })(GetPostsContainer));
