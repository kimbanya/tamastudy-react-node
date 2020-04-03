export interface IPost {
  _id?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  user?: string;
  view?: number;
  createdAt?: string;
}

export interface IPostState {
  posts: IPost[];
  post: IPost;
  error: string | null;
  loading: boolean;
}

const initialState: IPostState = {
  posts: [],
  post: {},
  error: null,
  loading: true,
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
