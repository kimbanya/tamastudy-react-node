import { GET_POSTS, POST_ERROR } from '../../type';

const initialState = {
  posts: [],
  post: {},
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
