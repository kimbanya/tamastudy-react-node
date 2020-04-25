import React, { useEffect } from 'react';
import GetPostsPresenter from './GetPostsPresenter';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts } from '../../../../store/actions/v1/post.action';
import Spinner from '../../../atoms/Spinner';
import CommonLayout from '../../../layouts/CommonLayout';

const GetPostsContainer = () => {
  const postState = useSelector(({ postState }) => postState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (postState.loading) return <Spinner />;
  return (
    <CommonLayout noFooter>
      <GetPostsPresenter posts={postState.posts} />
    </CommonLayout>
  );
};

export default GetPostsContainer;
