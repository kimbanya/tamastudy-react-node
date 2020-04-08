import { ClearPostAction } from '../../actions/v1/types';
import {
  GetPostsAction,
  GetSearchPostsByTitleAction,
  GetMorePostsAction,
  CreatePostAction,
  GetPostByIdAction,
  PostErrorAction,
  IPostState,
  GET_POSTS,
  GET_SEARCH_POSTS_BY_TITLE,
  GET_MORE_POSTS,
  CREATE_POST,
  GET_POST_BY_ID,
  CLEAR_POST,
  POST_ERROR,
} from './../../actions/v1/types';

type PostReducerActions =
  | GetPostsAction
  | GetSearchPostsByTitleAction
  | GetMorePostsAction
  | CreatePostAction
  | GetPostByIdAction
  | ClearPostAction
  | PostErrorAction;

const initialState: IPostState = {
  posts: [],
  total: 0,
  pageInfo: {
    nextPageCursor: '',
    hasNextPage: false,
  },
  post: null,
  error: null,
  loading: true,
};

export default (prevState = initialState, action: PostReducerActions): IPostState => {
  switch (action.type) {
    case GET_POSTS:
    case GET_SEARCH_POSTS_BY_TITLE:
      const { posts, total, pageInfo } = action.payload;
      return {
        ...prevState,
        posts,
        total,
        pageInfo,
        loading: false,
      };
    case GET_MORE_POSTS:
      const { posts: morePosts, total: moreTotal, pageInfo: morePageInfo } = action.payload;
      return {
        ...prevState,
        posts: [...prevState.posts, ...morePosts],
        total: moreTotal,
        pageInfo: morePageInfo,
        loading: false,
      };
    case CREATE_POST:
      return { ...prevState, loading: false };
    case GET_POST_BY_ID:
      const { post } = action.payload;
      return { ...prevState, post, loading: false };
    case CLEAR_POST:
      return { ...prevState, post: null };
    case POST_ERROR:
      const { error } = action.payload;
      return { ...prevState, loading: false, error };

    default:
      return prevState;
  }
};
