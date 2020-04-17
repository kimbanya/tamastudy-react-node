import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostCommentsPresenter from './PostCommentsPresenter';
import { IRootState } from '../../../store/reducers/index';
import {
  getPostCommentsByPostId,
  deletePostCommentByPostId,
} from '../../../store/actions/v1/post.action';

interface Props {}

const PostCommentsContainer = (props: Props) => {
  const params = useParams<{ postId: string }>();
  const postState = useSelector(({ postState }: IRootState) => postState);
  const authState = useSelector(({ authState }: IRootState) => authState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostCommentsByPostId(params.postId));
  }, [dispatch, params.postId]);

  const handleDeleteComment = (postCommentId: string) => {
    dispatch(deletePostCommentByPostId(params.postId, postCommentId));
  };

  if (postState.loading) {
    return <div>Loading ...</div>;
  }

  if (postState.postComments.length === 0) {
    return <div>Comment가 존재하지 않습니다. </div>;
  }

  return (
    <PostCommentsPresenter
      comments={postState.postComments}
      currentUserId={authState.currentUserId}
      author={postState.post?.user!}
      handleDeleteComment={handleDeleteComment}
    />
  );
};

export default PostCommentsContainer;
