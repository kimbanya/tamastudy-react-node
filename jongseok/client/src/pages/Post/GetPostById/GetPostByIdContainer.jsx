import React from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import useCustomFetch from '../../../hooks/useCustomFetch';

const initialState = {};

const GetPostByIdContainer = ({ history, match }) => {
  const postId = match.params.postId;

  //

  const post = useCustomFetch(initialState, `/api/v1/post/${postId}`);

  //

  const deletePostById = async () => {
    try {
      if (window.confirm('삭제하시겠습니까?')) {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.delete(`/api/v1/post/delete/${postId}`, config);
        toast.success(response.data.result);
        history.push('/posts');
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  const onClickMoveToBack = () => {
    history.goBack();
  };

  return (
    <div>
      <GetPostByIdPresenter
        post={post}
        deletePostById={deletePostById}
        onClickMoveToBack={onClickMoveToBack}
      />
    </div>
  );
};

export default withRouter(GetPostByIdContainer);
