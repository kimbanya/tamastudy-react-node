import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../../../store/actions/post.action';

const GetPostsContainer = ({ history, getPosts, postState }) => {
  useEffect(() => {
    getPosts();
  }, []);

  const posts = postState.posts.data;

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  const onClickMoveToCreatePost = () => {
    history.push('/post/create');
  };

  if (postState.loading) {
    return <div>Loading ...</div>;
  }

  return (
    <GetPostsPresenter
      posts={posts}
      handleToastAlert={handleToastAlert}
      onClickMoveToCreatePost={onClickMoveToCreatePost}
    />
  );
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(connect(mapStateToProps, { getPosts })(GetPostsContainer));
