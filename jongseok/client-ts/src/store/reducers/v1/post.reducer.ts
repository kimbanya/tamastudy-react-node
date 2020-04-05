export interface IPostAction {
  type: 'GET_POSTS' | 'POST_ERROR';
  payload?: any;
}

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
  post: IPost | {};
  error: string | null;
  loading: boolean;
}

const initialState: IPostState = {
  posts: [],
  post: {},
  error: null,
  loading: true,
};

export default (state = initialState, action: IPostAction): IPostState => {
  switch (action.type) {
    case 'GET_POSTS':
      return { ...state, posts: action.payload, loading: false };
    case 'POST_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
