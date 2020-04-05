export interface IAuthAction {
  type: 'LOAD_USER' | 'SIGN_IN' | 'SIGN_UP' | 'LOGGED_OUT' | 'AUTH_ERROR';
  payload?: any;
}

export interface IAuthState {
  isLoggedIn: boolean;
  currentUserId: string | null;
  error: string | null;
  loading: boolean;
}

const initialState: IAuthState = {
  isLoggedIn: false,
  currentUserId: null,
  error: null,
  loading: true,
};

export default (state = initialState, action: IAuthAction): IAuthState => {
  const { type, payload } = action;
  switch (type) {
    case 'LOAD_USER':
      return { ...state, isLoggedIn: true, currentUserId: payload, loading: false };
    case 'SIGN_IN':
      return { ...state, isLoggedIn: true, loading: false };
    case 'AUTH_ERROR':
      return { ...initialState, loading: false };
    default:
      return state;
  }
};
