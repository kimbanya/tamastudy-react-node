import * as reactToastify from 'react-toastify';
import { ThunkAction } from 'redux-thunk';
import { ISignFormData } from '../../../components/pages/Sign/SignContainer';
import { API, setAuthToken } from '../../../utils/axios';
import { IRootState } from '../../reducers/index';
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
export const loadUserFn = (): ThunkAction<
  Promise<void>,
  IRootState,
  undefined,
  LoadUserAction | AuthErrorAction
> => async (dispatch, getState) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  console.log(getState, 'get State');
  try {
    const res = await API.get('/user/loaduser');
    const currentUserId: string = res.data.result;
    dispatch({
      type: LOAD_USER,
      payload: {
        currentUserId,
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
export const signinFn = (
  formData: ISignFormData,
): ThunkAction<Promise<void>, IRootState, undefined, SignInAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    const res = await API.post('/user/signin', formData);
    const token: string = res.data.result;
    dispatch({
      type: SIGN_IN,
      payload: {
        token,
      },
    });
    reactToastify.toast.success('로그인 성공');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(err.response.data.error);
  }
};

// 회원가입
export const signupFn = (
  formData: ISignFormData,
): ThunkAction<Promise<void>, IRootState, undefined, SignUpAction | AuthErrorAction> => async (
  dispatch,
  getState,
) => {
  try {
    const res = await API.post('/user/signup', formData);
    const token: string = res.data.result;
    dispatch({
      type: SIGN_UP,
      payload: {
        token,
      },
    });
    reactToastify.toast.success('회원가입이 완료되었습니다. ');
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: {
        error: err.response.data.error,
      },
    });
    reactToastify.toast.error(err.response.data.error);
  }
};
