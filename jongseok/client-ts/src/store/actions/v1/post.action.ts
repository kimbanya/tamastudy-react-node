import { RouteComponentProps } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { IPostCreateInitialState } from '../../../components/pages/Post/post-types';
import { API } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
import { IPost, IPostState } from '../../store-types';
import {
  GET_POSTS,
  GET_SEARCH_POSTS_BY_TITLE,
  GET_MORE_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  CLEAR_POST,
  POST_ERROR,
  GetPostsAction,
  GetSearchPostsByTitleAction,
  GetMorePostsAction,
  CreatePostAction,
  GetPostByIdAction,
  ClearPostAction,
  PostErrorAction,
} from '../../store-types';

export const getPostsFn = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetPostsAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get('/v1/post');
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_POSTS,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getMorePostsFn = (
  cursor: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetMorePostsAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get(`/v1/post?cursor=${cursor}`);
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_MORE_POSTS,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getSearchPostsFn = (
  title: string,
): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  GetSearchPostsByTitleAction | PostErrorAction
> => async (dispatch) => {
  try {
    const response = await API.get(title ? `/v1/post?title=${title}` : '/v1/post');
    const posts: IPost[] = response.data.result;
    const total: number = response.data.total;
    const pageInfo: IPostState['pageInfo'] = response.data.pageInfo;
    dispatch({
      type: GET_SEARCH_POSTS_BY_TITLE,
      payload: {
        posts,
        total,
        pageInfo,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const createPostFn = (
  formData: IPostCreateInitialState,
  history: RouteComponentProps<any>['history'],
): ThunkAction<Promise<void>, IRootState, undefined, CreatePostAction | PostErrorAction> => async (
  dispatch,
) => {
  try {
    const res = await API.post('/v1/post/create', formData);
    const post: IPost = res.data.result;
    dispatch({ type: CREATE_POST, payload: { post } });
    localStorage.removeItem('recent-content');
    history.push('/posts');
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const getPostByIdFn = (
  postId: string,
): ThunkAction<Promise<void>, IRootState, undefined, GetPostByIdAction | PostErrorAction> => async (
  dispatch,
) => {
  try {
    const response = await API.get(`/v1/post/${postId}`);
    const post: IPost = response.data.result;
    dispatch({
      type: GET_POST_BY_ID,
      payload: {
        post,
      },
    });
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    toast.error(err.response.data.error);
  }
};

export const clearPostFn = (): ThunkAction<void, IRootState, undefined, ClearPostAction> => (
  dispatch,
) => {
  dispatch({
    type: CLEAR_POST,
  });
};
