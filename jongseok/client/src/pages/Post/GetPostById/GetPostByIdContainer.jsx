import React, { useEffect } from 'react';
import GetPostByIdPresenter from './GetPostByIdPresenter';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { getPostById } from '../../../store/actions/post.action';

const GetPostByIdContainer = ({ history, match, getPostById, post }) => {
  const postId = match.params.postId;

  useEffect(() => {
    getPostById(postId);
  }, []);

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

const mapStateToProps = ({ post }) => ({
  post,
});

export default withRouter(connect(mapStateToProps, { getPostById })(GetPostByIdContainer));
