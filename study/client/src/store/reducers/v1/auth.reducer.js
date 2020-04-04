const initialState = {
  isLoggedIn: false,
  token: null,
  currentUserId: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      console.log('sign up reducer');
      return state;
    case 'SIGN_IN':
      console.log('sign in reducer');
      return { ...state, isLoggedIn: true, loading: false, token: action.payload };
    case 'LOGGED_OUT':
      console.log('Logged out reducer');
      return state;
    default:
      return state;
  }
};
