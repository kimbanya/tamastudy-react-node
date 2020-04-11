import axios from 'axios';
import { toast } from 'react-toastify';
import { GET_POSTS, POST_ERROR } from '../../type';

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/v1/post');
    dispatch({
      type: GET_POSTS,
      payload: response.data,
    });
  } catch (err) {
    console.error(err.response.data.err);
    dispatch({
      type: POST_ERROR,
      payload: err.response.data.err,
    });
    toast.error(err.response.data.err);
  }
};
