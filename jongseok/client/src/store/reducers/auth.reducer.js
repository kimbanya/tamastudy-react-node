import { LOAD_USER, LOGGED_IN, LOGGED_OUT, AUTH_ERROR } from '../types';

const initialState = {
  isLoggedIn: false,
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return state;
    case LOGGED_IN:
      return { ...state, isLoggedIn: true, loading: false };
    default:
      return state;
  }
};
