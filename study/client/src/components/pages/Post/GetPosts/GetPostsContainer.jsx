import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../../store/actions/v1/post.action';

const GetPostsContainer = () => {
  const postState = useSelector(({ postState }) => postState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, getPosts]);

  return (
    <div>
      <GetPostsPresenter />
    </div>
  );
};

export default GetPostsContainer;
