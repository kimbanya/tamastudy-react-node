const initialState = {
  posts: [],
  post: {},
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return;
    case 'GET_POST_BY_ID':
      return;
    default:
      return state;
  }
};
