import React, { useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { useRouteMatch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostById } from '../../../../store/actions/v1/post.action';
import Spinner from '../../../atoms/Spinner';
import CommonLayout from '../../../layouts/CommonLayout';

const GetPostByIdContainer = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.postState);
  const match = useRouteMatch();

  useEffect(() => {
    dispatch(getPostById(match.params.postId));
  }, [dispatch, match.params.postId]);

  if (postState.loading) return <Spinner />;

  return (
    <CommonLayout noFooter>
      <GetPostByIdPresenter post={postState.post} />
    </CommonLayout>
  );
};

export default GetPostByIdContainer;
