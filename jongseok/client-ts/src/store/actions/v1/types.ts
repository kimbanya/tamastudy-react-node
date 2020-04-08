import { Action } from 'redux';

// Auth

export interface IAuthState {
  isLoggedIn: boolean;
  currentUserId: string | null;
  error: string | null;
  loading: boolean;
}

export const LOAD_USER = 'LOAD_USER' as const;
export const SIGN_IN = 'SIGN_IN' as const;
export const SIGN_UP = 'SIGN_UP' as const;
export const AUTH_ERROR = 'AUTH_ERROR' as const;

export interface LoadUserAction extends Action<typeof LOAD_USER> {
  payload: {
    currentUserId: string;
  };
}
export interface SignInAction extends Action<typeof SIGN_IN> {
  payload: {
    token: string;
  };
}
export interface SignUpAction extends Action<typeof SIGN_UP> {
  payload: {
    token: string;
  };
}
export interface AuthErrorAction extends Action<typeof AUTH_ERROR> {
  payload: {
    error: any;
  };
}

// End of Auth

// Post

export interface IPost {
  _id: string;
  title: string;
  description: string;
  imgUrl: string;
  user: string;
  view: number;
  postComments: string[];
  createdAt: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost | null;
  error: string | null;
  loading: boolean;
  total: number;
  pageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
}

export const GET_POSTS = 'GET_POSTS' as const;
export const GET_MORE_POSTS = 'GET_MORE_POSTS' as const;
export const GET_SEARCH_POSTS_BY_TITLE = 'GET_SEARCH_POSTS_BY_TITLE' as const;
export const CREATE_POST = 'CREATE_POST' as const;
export const GET_POST_BY_ID = 'GET_POST_BY_ID' as const;
export const CLEAR_POST = 'CLEAR_POST' as const;
export const POST_ERROR = 'POST_ERROR' as const;

export interface GetPostsAction extends Action<typeof GET_POSTS> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface GetMorePostsAction extends Action<typeof GET_MORE_POSTS> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface GetSearchPostsByTitleAction extends Action<typeof GET_SEARCH_POSTS_BY_TITLE> {
  payload: {
    posts: IPost[];
    total: number;
    pageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface CreatePostAction extends Action<typeof CREATE_POST> {
  payload: {
    post: IPost;
  };
}

export interface GetPostByIdAction extends Action<typeof GET_POST_BY_ID> {
  payload: {
    post: IPost;
  };
}

export interface ClearPostAction extends Action<typeof CLEAR_POST> {}

export interface PostErrorAction extends Action<typeof POST_ERROR> {
  payload: {
    error: any;
  };
}

// End of Post
