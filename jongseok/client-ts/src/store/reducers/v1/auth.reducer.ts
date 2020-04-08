import * as types from '../../actions/v1/types';

type AuthReducerActions =
  | types.LoadUserAction
  | types.SignInAction
  | types.SignUpAction
  | types.AuthErrorAction;

const initialState: types.IAuthState = {
  isLoggedIn: false,
  currentUserId: null,
  error: null,
  loading: true,
};

export default (prevState = initialState, action: AuthReducerActions): types.IAuthState => {
  const { type, payload } = action;
  switch (type) {
    case types.LOAD_USER:
      return {
        ...prevState,
        isLoggedIn: true,
        currentUserId: payload.currentUserId,
        loading: false,
      };
    case types.SIGN_IN:
      if (payload.token) {
        localStorage.setItem('token', payload.token);
      }
      return { ...prevState, isLoggedIn: true, loading: false };
    case types.SIGN_UP:
      if (payload.token) {
        localStorage.setItem('token', payload.token);
      }
      return { ...prevState, isLoggedIn: true, loading: false };
    case types.AUTH_ERROR:
      localStorage.removeItem('token');
      return { ...prevState, isLoggedIn: false, currentUserId: null, loading: false };
    default:
      return prevState;
  }
};
