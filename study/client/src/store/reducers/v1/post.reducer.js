import {
  GET_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  DELETE_POST_BY_ID,
  UPDATE_POST_BY_ID,
  CLEAR_POST,
  POST_ERROR,
} from '../../type';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: null,
  total: 0,
  pageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...prevState,
        posts: action.payload.result,
        total: action.payload.total,
        pageInfo: action.payload.pageInfo,
        loading: false,
      };
    case CREATE_POST:
      return {
        ...prevState,
        post: action.payload,
        loading: false,
      };
    case GET_POST_BY_ID:
      return {
        ...prevState,
        post: action.payload,
        loading: false,
      };
    case DELETE_POST_BY_ID:
      return {
        ...prevState,
        post: null,
        posts: prevState.posts.filter((post) => post._id !== action.payload),
        loading: false,
      };
    case UPDATE_POST_BY_ID:
      return {
        ...prevState,
        post: action.payload,
        loading: false,
      };
    case CLEAR_POST:
      return {
        ...prevState,
        post: null,
        loading: false,
      };
    case POST_ERROR:
      return {
        ...prevState,
        error: action.payload,
        loading: false,
      };
    default:
      return prevState;
  }
};
