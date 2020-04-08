import * as reactToastify from 'react-toastify';
import { Dispatch } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { ISignFormData } from '../../../components/pages/Sign/SignContainer';
import { API, setAuthToken } from '../../../utils/axios';
import {
  LOAD_USER,
  SIGN_IN,
  SIGN_UP,
  AUTH_ERROR,
  LoadUserAction,
  SignInAction,
  SignUpAction,
  AuthErrorAction,
} from './types';

// 유저 아이디 가져오기
export const loadUserFn = () => async (
  dispatch: ThunkDispatch<any, any, LoadUserAction | AuthErrorAction>,
) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await API.get('/user/loaduser');
    dispatch({
      type: LOAD_USER,
      payload: {
        currentUserId: res.data.result,
      },
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(`비정상적인 접근으로 인해 3초후에 새로고침됩니다. `, {
      autoClose: 3000,
    });
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
};

// 로그인
export const signinFn = (formData: ISignFormData) => async (
  dispatch: ThunkDispatch<any, any, SignInAction | AuthErrorAction>,
) => {
  try {
    const res = await API.post('/user/signin', formData);
    dispatch({ type: SIGN_IN, payload: { token: res.data.result } });
    reactToastify.toast.success('로그인 성공');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: { error: err.response.data.error } });
    reactToastify.toast.error(err.response.data.error);
  }
};

// 회원가입
export const signupFn = (formData: ISignFormData) => async (
  dispatch: ThunkDispatch<any, any, SignUpAction | AuthErrorAction>,
) => {
  try {
    const res = await API.post('/user/signup', formData);
    dispatch({ type: SIGN_UP, payload: { token: res.data.result } });
    reactToastify.toast.success('회원가입이 완료되었습니다. ');
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: { error: err.response.data.error } });
    reactToastify.toast.error(err.response.data.error);
  }
};
