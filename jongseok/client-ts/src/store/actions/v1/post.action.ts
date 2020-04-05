import { Dispatch } from 'redux';
import { IPostAction } from '../../reducers/v1/post.reducer';
import { toast } from 'react-toastify';
import { API } from '../../../utils/axios';

export const getPostsFn = () => async (dispatch: Dispatch<IPostAction>) => {
  try {
    const response = await API.get('/post');
    dispatch({ type: 'GET_POSTS', payload: response.data.result });
  } catch (err) {
    dispatch({ type: 'POST_ERROR', payload: err.response.data.error });
    toast.error(err.response.data.error);
  }
};
