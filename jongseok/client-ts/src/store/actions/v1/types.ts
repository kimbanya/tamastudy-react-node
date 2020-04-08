// Auth

export interface IAuthState {
  isLoggedIn: boolean;
  currentUserId: string | null;
  error: string | null;
  loading: boolean;
}

export interface IAuthPayload {
  isLoggedIn?: boolean;
  currentUserId?: string | null;
  token?: string | null;
  error?: string | null;
}

export const LOAD_USER = 'LOAD_USER' as const;
export const SIGN_IN = 'SIGN_IN' as const;
export const SIGN_UP = 'SIGN_UP' as const;
export const AUTH_ERROR = 'AUTH_ERROR' as const;

export interface LoadUserAction {
  type: typeof LOAD_USER;
  payload: IAuthPayload; // currentUserId
}

export interface SignInAction {
  type: typeof SIGN_IN;
  payload: IAuthPayload; // token
}

export interface SignUpAction {
  type: typeof SIGN_UP;
  payload: IAuthPayload; // token
}

export interface AuthErrorAction {
  type: typeof AUTH_ERROR;
  payload: IAuthPayload; // error message
}

// End of Auth

// Post

export interface IPost {
  _id?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  user?: string;
  view?: number;
  postComments?: string[];
  createdAt?: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost;
  error: string | null;
  loading: boolean;
  total: number;
  pageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
}

export interface IPostPayload {
  posts?: IPostState['posts'];
  post?: IPostState['post'];
  total?: IPostState['total'];
  pageInfo?: IPostState['pageInfo'];
  error?: IPostState['error'];
}

export const GET_POSTS = 'GET_POSTS' as const;
export const GET_MORE_POSTS = 'GET_MORE_POSTS' as const;
export const GET_SEARCH_POSTS_BY_TITLE = 'GET_SEARCH_POSTS_BY_TITLE' as const;
export const CREATE_POST = 'CREATE_POST' as const;
export const GET_POST_BY_ID = 'GET_POST_BY_ID' as const;
export const SET_LOADING = 'SET_LOADING' as const;
export const POST_ERROR = 'POST_ERROR' as const;

export interface GetPostsAction {
  type: typeof GET_POSTS;
  payload: IPostPayload;
}

export interface GetMorePostsAction {
  type: typeof GET_MORE_POSTS;
  payload: IPostPayload;
}

export interface GetSearchPostsByTitleAction {
  type: typeof GET_SEARCH_POSTS_BY_TITLE;
  payload: IPostPayload;
}

export interface CreatePostAction {
  type: typeof CREATE_POST;
  payload: IPostPayload;
}

export interface GetPostByIdAction {
  type: typeof GET_POST_BY_ID;
  payload: IPostPayload;
}

export interface PostErrorAction {
  type: typeof POST_ERROR;
  payload: IPostPayload;
}

// End of Post
