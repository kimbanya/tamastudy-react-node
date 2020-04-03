import { combineReducers } from 'redux';
import postReducer from './v1/post.reducer';
import { IPostState } from './v1/post.reducer';

export interface IRootState {
  postState: IPostState;
}

export default combineReducers<IRootState>({
  postState: postReducer,
});
