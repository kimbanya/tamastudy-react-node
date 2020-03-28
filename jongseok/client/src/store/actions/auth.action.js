import axios from 'axios';
import { toast } from 'react-toastify';
import { LOAD_USER, LOGGED_IN, LOGGED_OUT, AUTH_ERROR } from '../types';

// 로그인
export const loginFn = (loginData, history) => async (dispatch) => {
  try {
    const response = await axios.post('/api/v1/user/signin', loginData);
    const token = response.data.data;
    localStorage.setItem('token', token);
    dispatch({ type: LOGGED_IN });
    toast.success('로그인 성공');
    history.push('/');
  } catch (err) {
    console.log(err);
    dispatch({ type: AUTH_ERROR, payload: err });
    toast.error('로그인 실패');
  }
};

// 로그아웃
export const logoutFn = () => async (dispatch) => {
  try {
    // Todo : logout api
    localStorage.removeItem('token');
    dispatch({ type: LOGGED_OUT });
    toast.success('로그아웃 되었습니다.');
  } catch (err) {
    console.log(err);
    dispatch({ type: AUTH_ERROR, payload: err });
    toast.error('로그아웃 실패');
  }
};
