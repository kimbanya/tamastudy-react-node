import axios from 'axios';
import { toast } from 'react-toastify';
import { LOAD_USER, LOGGED_IN, LOGGED_OUT, AUTH_ERROR } from '../types';

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
    toast.error('로그인 실패');
  }
};
