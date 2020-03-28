import {
  GET_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  POST_ERROR,
} from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/v1/post');
    const pageInfo = response.data.pageInfo;
    const posts = response.data.result;
    const payload = {
      data: posts,
      pageInfo,
    };
    dispatch({ type: GET_POSTS, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR, payload: err });
    toast.error('포스트 요청에 실패하였습니다. ');
  }
};

export const createPost = (formData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('invalid token');
    }
    await axios.post('/api/v1/post/create', formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    toast.success('작성이 완료 되었습니다.');
    history.push('/posts');
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR, payload: err });
    toast.error('포스트 작성에 실패하였습니다. ');
  }
};

export const getPostById = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/post/${postId}`);
    const payload = response.data.result;
    dispatch({ type: GET_POST_BY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR, payload: err });
    toast.error('포스트 요청에 실패하였습니다. ');
  }
};

export const deletePostById = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR, payload: err });
    toast.error('포스트 삭제에 실패하였습니다. ');
  }
};

export const updatePostById = () => async (dispatch) => {
  try {
  } catch (err) {
    console.log(err);
    dispatch({ type: POST_ERROR, payload: err });
    toast.error('포스트 업데이트에 실패하였습니다. ');
  }
};
