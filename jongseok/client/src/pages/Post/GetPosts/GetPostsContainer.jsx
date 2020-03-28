import React from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { toast } from 'react-toastify';
import { withRouter } from 'react-router-dom';
import useCustomFetch from '../../../hooks/useCustomFetch';

const initialState = [];

const GetPostsContainer = (props) => {
  const posts = useCustomFetch(initialState, '/api/v1/post');

  const handleToastAlert = (type, message) => {
    toast[type](message);
  };

  const onClickMoveToCreatePost = () => {
    props.history.push('/post/create');
  };

  if (posts === initialState) {
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

export default withRouter(GetPostsContainer);
