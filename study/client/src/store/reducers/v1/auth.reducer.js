import { LOAD_USER, SIGN_UP, SIGN_IN, LOGGED_OUT, AUTH_ERROR } from '../../type';

const initialState = {
  isLoggedIn: false,
  token: null,
  currentUserId: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return { ...state, isLoggedIn: true, loading: false, currentUserId: action.payload };
    case SIGN_UP:
    case SIGN_IN:
      return { ...state, isLoggedIn: true, loading: false, token: action.payload };
    case LOGGED_OUT:
      return state;
    case AUTH_ERROR:
      return { ...state, isLoggedIn: false, loading: false, error: action.payload };
    default:
      return state;
  }
};
