import { SIGN_UP, SIGN_IN, LOGGED_OUT } from '../../type';

const initialState = {
  isLoggedIn: false,
  token: null,
  currentUserId: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
    case SIGN_IN:
      console.log('sign reducer');
      return { ...state, isLoggedIn: true, loading: false, token: action.payload };
    case LOGGED_OUT:
      console.log('Logged out reducer');
      return state;
    default:
      return state;
  }
};
