import * as types from './../../actions/v1/types';

type PostReducerActions =
  | types.GetPostsAction
  | types.GetSearchPostsByTitleAction
  | types.GetMorePostsAction
  | types.CreatePostAction
  | types.GetPostByIdAction
  | types.PostErrorAction;

const initialState: types.IPostState = {
  posts: [],
  total: 0,
  pageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
  post: {},
  error: null,
  loading: true,
};

export default (prevState = initialState, action: PostReducerActions): types.IPostState => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_POSTS:
    case types.GET_SEARCH_POSTS_BY_TITLE:
      return {
        ...prevState,
        posts: payload.posts!,
        total: payload.total!,
        pageInfo: payload.pageInfo!,
        loading: false,
      };
    case types.GET_MORE_POSTS:
      return {
        ...prevState,
        posts: [...prevState.posts, ...payload.posts!],
        total: payload.total!,
        pageInfo: payload.pageInfo!,
        loading: false,
      };
    case types.CREATE_POST:
      return { ...prevState, loading: false };
    case types.GET_POST_BY_ID:
      return { ...prevState, post: payload.post!, loading: false };
    case types.POST_ERROR:
      return { ...prevState, loading: false, error: payload.error! };
    default:
      return prevState;
  }
};
