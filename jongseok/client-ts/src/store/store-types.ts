import { Action } from 'redux';

/**
 * Table of Contents:
 *
 * VERSION 1 - auth, post
 * VERSION 2 - 미정
 *
 * --------------------------------------------------------------------------
 */

/* ==========================================================================
   VERSION 1 (v1)
   ========================================================================== */

// 1. Auth
export interface IUserState {
  _id: string;
  username: string;
}

export interface IAuthState {
  isLoggedIn: boolean;
  user: IUserState | null;
  error: string | null;
  loading: boolean;
}

export const LOAD_USER = 'LOAD_USER' as const;
export const LOGIN = 'LOGIN' as const;
export const LOGOUT = 'LOGOUT' as const;
export const REGISTER = 'REGISTER' as const;
export const AUTH_ERROR = 'AUTH_ERROR' as const;

export interface LoadUserAction extends Action<typeof LOAD_USER> {
  payload: {
    user: IUserState;
  };
}
export interface LoginAction extends Action<typeof LOGIN> {
  payload: {
    user: IUserState;
  };
}

export interface LogoutAction extends Action<typeof LOGOUT> {}

export interface RegisterAction extends Action<typeof REGISTER> {}

export interface AuthErrorAction extends Action<typeof AUTH_ERROR> {
  payload: {
    error: any;
  };
}

export type AuthReducerActions =
  | LoadUserAction
  | LoginAction
  | LogoutAction
  | RegisterAction
  | AuthErrorAction;

// End of Auth

// 2. Post

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

export interface IPostComment {
  _id: string;
  text: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost | null;
  postComments: IPostComment[];
  postComment: IPostComment | null;
  error: string | null;
  loading: boolean;
  total: number;
  pageInfo: {
    nextPageCursor: string;
    hasNextPage: boolean;
  };
  commentTotal: number;
  commentPageInfo: {
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
export const CREATE_POST_COMMENT_BY_POST_ID = 'CREATE_POST_COMMENT_BY_POST_ID' as const;
export const DELETE_POST_BY_ID = 'DELETE_POST_BY_ID' as const;
export const GET_POST_COMMENTS_BY_POST_ID = 'GET_POST_COMMENTS_BY_POST_ID' as const;
export const DELETE_POST_COMMENT_BY_COMMENT_ID = 'DELETE_POST_COMMENT_BY_COMMENT_ID' as const;
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

export interface CreatePostCommentByPostId extends Action<typeof CREATE_POST_COMMENT_BY_POST_ID> {
  payload: {
    postComment: IPostComment;
  };
}

export interface GetPostCommentsByPostId extends Action<typeof GET_POST_COMMENTS_BY_POST_ID> {
  payload: {
    postComments: IPostComment[];
    commentTotal: number;
    commentPageInfo: {
      nextPageCursor: string;
      hasNextPage: boolean;
    };
  };
}

export interface DeletePostById extends Action<typeof DELETE_POST_BY_ID> {
  payload: string;
}
export interface DeletePostCommentByCommentId
  extends Action<typeof DELETE_POST_COMMENT_BY_COMMENT_ID> {
  payload: string;
}

export interface PostErrorAction extends Action<typeof POST_ERROR> {
  payload: {
    error: any;
  };
}

export type PostReducerActions =
  | GetPostsAction
  | GetSearchPostsByTitleAction
  | GetMorePostsAction
  | CreatePostAction
  | GetPostByIdAction
  | ClearPostAction
  | CreatePostCommentByPostId
  | DeletePostById
  | GetPostCommentsByPostId
  | DeletePostCommentByCommentId
  | PostErrorAction;

// End of Post

// Study

export interface ICategory {
  _id: string;
  name: string;
}

export interface IStudy {
  view: number;
  likes: any[];
  minParticipants: number;
  maxParticipants: number;
  participants: any[];
  todos: any[];
  comments: string[];
  _id: string;
  category: {
    name: string;
  };
  title: string;
  description: string;
  thumbnail: string;
  lat: number;
  lng: number;
  address: string;
  user: string;
  createdAt: string;
  updatedAt: string;
}

export interface IStudyState {
  categories: ICategory[];
  studies: IStudy[];
  study: IStudy | null;
  error: string | null;
  loading: boolean;
}

// Get Categories
export const GET_STUDY_CATEGORIES_PENDING = 'GET_STUDY_CATEGORIES_PENDING' as const;
export const GET_STUDY_CATEGORIES_SUCCESS = 'GET_STUDY_CATEGORIES_SUCCESS' as const;
export const GET_STUDY_CATEGORIES_FAIL = 'GET_STUDY_CATEGORIES_FAIL' as const;

export interface GetStudyCategoriesPendingAction
  extends Action<typeof GET_STUDY_CATEGORIES_PENDING> {
  payload: true;
}

export interface GetStudyCategoriesSuccessAction
  extends Action<typeof GET_STUDY_CATEGORIES_SUCCESS> {
  payload: {
    _id: string;
    name: string;
  }[];
}

export interface GetStudyCategoriesFailAction extends Action<typeof GET_STUDY_CATEGORIES_FAIL> {
  payload: string;
}

// Create Study
export const CREATE_STUDY_CATEGORY_PENDING = 'CREATE_STUDY_CATEGORY_PENDING' as const;
export const CREATE_STUDY_CATEGORY_SUCCESS = 'CREATE_STUDY_CATEGORY_SUCCESS' as const;
export const CREATE_STUDY_CATEGORY_FAIL = 'CREATE_STUDY_CATEGORY_FAIL' as const;

export interface CreateStudyPendingAction extends Action<typeof CREATE_STUDY_CATEGORY_PENDING> {
  payload: true;
}

export interface CreateStudySuccessAction extends Action<typeof CREATE_STUDY_CATEGORY_SUCCESS> {
  payload: IStudyState['study'];
}

export interface CreateStudyFailAction extends Action<typeof CREATE_STUDY_CATEGORY_FAIL> {
  payload: string;
}

// Create Study
export const GET_STUDIES_PENDING = 'GET_STUDIES_PENDING' as const;
export const GET_STUDIES_SUCCESS = 'GET_STUDIES_SUCCESS' as const;
export const GET_STUDIES_FAIL = 'GET_STUDIES_FAIL' as const;

export interface GetStudiesPendingAction extends Action<typeof GET_STUDIES_PENDING> {
  payload: true;
}

export interface GetStudiesSuccessAction extends Action<typeof GET_STUDIES_SUCCESS> {
  payload: IStudyState['studies'];
}

export interface GetStudiesFailAction extends Action<typeof GET_STUDIES_FAIL> {
  payload: string;
}

// Join Study
export const JOIN_STUDY_PENDING = 'JOIN_STUDY_PENDING' as const;
export const JOIN_STUDY_SUCCESS = 'JOIN_STUDY_SUCCESS' as const;
export const JOIN_STUDY_FAIL = 'JOIN_STUDY_FAIL' as const;

export interface JoinStudyPendingAction extends Action<typeof JOIN_STUDY_PENDING> {
  payload: true;
}

export interface JoinStudySuccessAction extends Action<typeof JOIN_STUDY_SUCCESS> {
  payload: any;
}

export interface JoinStudyFailAction extends Action<typeof JOIN_STUDY_FAIL> {
  payload: string;
}

// QuitStudy
export const QUIT_STUDY_PENDING = 'QUIT_STUDY_PENDING' as const;
export const QUIT_STUDY_SUCCESS = 'QUIT_STUDY_SUCCESS' as const;
export const QUIT_STUDY_FAIL = 'QUIT_STUDY_FAIL' as const;

export interface QuitStudyPendingAction extends Action<typeof QUIT_STUDY_PENDING> {
  payload: true;
}

export interface QuitStudySuccessAction extends Action<typeof QUIT_STUDY_SUCCESS> {
  payload: any;
}

export interface QuitStudyFailAction extends Action<typeof QUIT_STUDY_FAIL> {
  payload: string;
}

export type StudyReducerActions =
  | GetStudyCategoriesPendingAction
  | GetStudyCategoriesSuccessAction
  | GetStudyCategoriesFailAction
  | CreateStudyPendingAction
  | CreateStudySuccessAction
  | CreateStudyFailAction
  | GetStudiesPendingAction
  | GetStudiesSuccessAction
  | GetStudiesFailAction
  | JoinStudyPendingAction
  | JoinStudySuccessAction
  | JoinStudyFailAction
  | QuitStudyPendingAction
  | QuitStudySuccessAction
  | QuitStudyFailAction;
