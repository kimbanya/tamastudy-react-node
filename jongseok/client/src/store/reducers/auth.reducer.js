import { LOAD_USER, LOGGED_IN, LOGGED_OUT, AUTH_ERROR } from '../types';

const initialState = {
  isLoggedIn: false,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGGED_IN:
      return { ...state, isLoggedIn: true, loading: false };
    case LOGGED_OUT:
      return { ...state, isLoggedIn: false, loading: false };
    case AUTH_ERROR:
      return { ...state, error: payload };
    default:
      return state;
  }
};
