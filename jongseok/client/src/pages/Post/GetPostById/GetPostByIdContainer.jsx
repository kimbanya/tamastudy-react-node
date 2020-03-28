import React, { useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPostById, deletePostById } from '../../../store/actions/post.action';

const GetPostByIdContainer = ({ history, match, getPostById, deletePostById, postState }) => {
  const postId = match.params.postId;

  useEffect(() => {
    getPostById(postId);
  }, []);

  const onClickMoveToBack = () => {
    history.goBack();
  };

  const onClickMoveToUpdate = () => {
    history.push(`/post/${postId}/update`);
  };

  const handleDeletePostById = () => {
    deletePostById(postId, history);
  };

  return (
    <div>
      <GetPostByIdPresenter
        post={postState.post}
        deletePostById={handleDeletePostById}
        onClickMoveToBack={onClickMoveToBack}
        onClickMoveToUpdate={onClickMoveToUpdate}
      />
    </div>
  );
};

const mapStateToProps = ({ postState }) => ({
  postState,
});

export default withRouter(
  connect(mapStateToProps, { getPostById, deletePostById })(GetPostByIdContainer),
);
