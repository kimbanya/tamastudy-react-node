import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThunkDispatch } from 'redux-thunk';
import { IPostCreateInitialState } from '../../../components/pages/Post/PostForm/PostFormContainer';
import { API } from '../../../utils/axios';
import {
  GET_POSTS,
  GET_SEARCH_POSTS_BY_TITLE,
  GET_MORE_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  POST_ERROR,
  GetPostsAction,
  GetSearchPostsByTitleAction,
  GetMorePostsAction,
  CreatePostAction,
  GetPostByIdAction,
  PostErrorAction,
} from './types';

export const getPostsFn = () => async (
  dispatch: ThunkDispatch<any, any, GetPostsAction | PostErrorAction>,
) => {
  try {
    const response = await API.get('/post');
    dispatch({
      type: GET_POSTS,
      payload: {
        posts: response.data.result,
        pageInfo: response.data.pageInfo,
        total: response.data.total,
      },
    });
  } catch (err) {
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getMorePostsFn = (cursor: string) => async (
  dispatch: ThunkDispatch<any, any, GetMorePostsAction | PostErrorAction>,
) => {
  try {
    const response = await API.get(`/post?cursor=${cursor}`);
    dispatch({
      type: GET_MORE_POSTS,
      payload: {
        posts: response.data.result,
        pageInfo: response.data.pageInfo,
        total: response.data.total,
      },
    });
  } catch (err) {
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getSearchPostsFn = (title: string) => async (
  dispatch: ThunkDispatch<any, any, GetSearchPostsByTitleAction | PostErrorAction>,
) => {
  try {
    const response = await API.get(title ? `/post?title=${title}` : '/post');
    dispatch({
      type: GET_SEARCH_POSTS_BY_TITLE,
      payload: {
        posts: response.data.result,
        pageInfo: response.data.pageInfo,
        total: response.data.total,
      },
    });
  } catch (err) {
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const createPostFn = (
  formData: IPostCreateInitialState,
  history: RouteComponentProps<any>['history'],
) => async (dispatch: ThunkDispatch<any, any, CreatePostAction | PostErrorAction>) => {
  try {
    await API.post('/post/create', formData);
    dispatch({ type: CREATE_POST, payload: {} });
    localStorage.removeItem('recent-content');
    history.push('/posts');
  } catch (err) {
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};

export const getPostByIdFn = (postId: string) => async (
  dispatch: ThunkDispatch<any, any, GetPostByIdAction | PostErrorAction>,
) => {
  try {
    const response = await API.get(`/post/${postId}`);
    dispatch({
      type: GET_POST_BY_ID,
      payload: {
        post: response.data.result,
      },
    });
  } catch (err) {
    dispatch({ type: POST_ERROR, payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
