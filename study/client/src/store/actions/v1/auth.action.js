import { SIGN_IN } from '../../type';

export const signinFn = () => async (dispatch) => {
  try {
    dispatch({ type: SIGN_IN, payload: 'sfjdslkfdskjf' });
  } catch (err) {
    console.log(err);
  }
};
