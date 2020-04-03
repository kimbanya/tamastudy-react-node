import { combineReducers } from 'redux';
import authReducer from './v1/auth.reducer';
import postReducer from './v1/post.reducer';
import { IAuthState } from './v1/auth.reducer';
import { IPostState } from './v1/post.reducer';

export interface IRootState {
  authState: IAuthState;
  postState: IPostState;
}

export default combineReducers<IRootState>({
  authState: authReducer,
  postState: postReducer,
});
