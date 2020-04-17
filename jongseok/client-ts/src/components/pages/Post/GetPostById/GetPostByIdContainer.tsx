import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { postActions } from '../../../../store/actions';
import { IRootState } from '../../../../store/reducers/index';
import CommonLayout from '../../../CommonLayout/index';

interface Props extends RouteComponentProps<any> {}

const GetPostByIdContainer = ({ history, match }: Props) => {
  const postState = useSelector((state: IRootState) => state.postState);
  const dispatch = useDispatch();

  useEffect(() => {
    // 페이지 이동 시에 redux store의 post를 삭제하여, 다른 post 페이지 방문 시 깜빡임 방지
    history.listen(() => {
      dispatch(postActions.clearPostFn());
    });
  }, [history, dispatch]);

  useEffect(() => {
    dispatch(postActions.getPostByIdFn(match.params.postId));
  }, [dispatch, match.params.postId]);

  const handleDeletePost = (postId: string) => () => {
    dispatch(postActions.deletePostByIdFn(postId, history));
  };

  if (postState.loading) return <div>Loading ...</div>;
  if (!postState.post) return <div>Loading ...</div>;

  return (
    <CommonLayout noFooter>
      <GetPostByIdPresenter post={postState.post} handleDeletePost={handleDeletePost} />
    </CommonLayout>
  );
};

export default withRouter(GetPostByIdContainer);
