import { SIGN_UP, SIGN_IN } from '../../type';
import { toast } from 'react-toastify';
import axios from 'axios';

// Curry 방식

// 회원가입
export const signupFn = (formData) => async (dispatch) => {
  try {
    // 서버에 데이터를 주고, 받은 데이터를 가공하는 단계
    const response = await axios.post('http://localhost:5000/v1/user/signup', formData);

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_UP, payload: response.data.result });

    // 그냥 알람
    toast.success('회원가입이 완료 되었습니다. 홈으로 이동합니다.');
  } catch (err) {
    toast.error(err.response.data.error);
  }
};

// 로그인
export const signinFn = (formData) => async (dispatch) => {
  try {
    // 서버에 데이터를 주고, 받은 데이터를 가공하는 단계
    const response = await axios.post('http://localhost:5000/v1/user/signin', formData);

    // 가공된 데이터를 리듀서에 주는 단계
    dispatch({ type: SIGN_IN, payload: response.data.result });

    // 그냥 알람
    toast.success('로그인이 완료 되었습니다. 홈으로 이동합니다.');
  } catch (err) {
    toast.error(err.response.data.error);
  }
};
