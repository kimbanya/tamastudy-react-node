import { combineReducers } from 'redux';
import authReducer from './v1/auth.reducer';
import postReducer from './v1/post.reducer';

const reducer = combineReducers({
  authState: authReducer,
  postState: postReducer,
});

export type IRootState = ReturnType<typeof reducer>;

export default reducer;
