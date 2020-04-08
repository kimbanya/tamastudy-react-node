import {
  IAuthState,
  LoadUserAction,
  SignInAction,
  SignUpAction,
  AuthErrorAction,
  LOAD_USER,
  SIGN_IN,
  SIGN_UP,
  AUTH_ERROR,
} from '../../actions/v1/types';

type AuthReducerActions = LoadUserAction | SignInAction | SignUpAction | AuthErrorAction;

const initialState: IAuthState = {
  isLoggedIn: false,
  currentUserId: null,
  error: null,
  loading: true,
};

export default (prevState: IAuthState = initialState, action: AuthReducerActions): IAuthState => {
  switch (action.type) {
    case LOAD_USER:
      const { currentUserId } = action.payload;
      return {
        ...prevState,
        isLoggedIn: true,
        currentUserId,
        loading: false,
      };
    case SIGN_IN:
    case SIGN_UP:
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return { ...prevState, isLoggedIn: true, loading: false };
    case AUTH_ERROR:
      const { error } = action.payload;
      localStorage.removeItem('token');
      return {
        ...prevState,
        isLoggedIn: false,
        currentUserId: null,
        loading: false,
        error: error,
      };
    default:
      return prevState;
  }
};
