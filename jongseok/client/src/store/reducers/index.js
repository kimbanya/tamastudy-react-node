import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import authReducer from './auth.reducer';
import postReducer from './post.reducer';
import studyReducer from './study.reducer';
import studyTodoReducer from './studyTodo.reducer';

export default combineReducers({
  counter: counterReducer,
  auth: authReducer,
  postState: postReducer,
  studyState: studyReducer,
  studyTodoState: studyTodoReducer,
});
