import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import authReducer from './auth.reducer';

export default combineReducers({
  counter: counterReducer,
  auth: authReducer,
});
