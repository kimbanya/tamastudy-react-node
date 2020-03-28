import {
  GET_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  POST_ERROR,
} from '../types';

const initialState = {
  posts: [],
  post: {},
  postComments: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_POSTS:
      return { ...state, posts: payload, loading: false };
    case CREATE_POST:
      return state;
    case GET_POST_BY_ID:
      return state;
    case DELETE_POST_BY_ID:
      return state;
    case UPDATE_POST_BY_ID:
      return state;
    case POST_ERROR:
      return state;
    default:
      return state;
  }
};
