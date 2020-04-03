import {
  GET_STUDY_TODOS_BY_STUDY_ID,
  CREATE_STUDY_TODO_BY_STUDY_ID,
  UPDATE_STUDY_TODO_BY_STUDY_ID,
  DELETE_STUDY_TODO_BY_STUDY_ID,
  STUDY_TODO_ERROR,
} from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getStudyTodosByStudyId = (studyId) => async (dispatch) => {
  try {
    const response = await axios.get(`/api/v1/study/${studyId}/studyTodo`);
    const payload = response.data.result;
    dispatch({ type: GET_STUDY_TODOS_BY_STUDY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_TODO_ERROR });
    toast.error(err.response.data.error);
  }
};

export const createStudyTodoByStudyId = (studyId, formData) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return toast.error('정상적인 경로가 아닙니다. ');
    }
    const response = await axios.post(`/api/v1/study/${studyId}/studyTodo/create`, formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const payload = response.data.result;
    dispatch({ type: CREATE_STUDY_TODO_BY_STUDY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_TODO_ERROR });
    toast.error(err.response.data.error);
  }
};

export const updateStudyTodoByStudyId = (studyId, studyTodoId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return toast.error('정상적인 경로가 아닙니다. ');
    }
    const response = await axios.put(
      `/api/v1/study/${studyId}/studyTodo/status/${studyTodoId}`,
      {},
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const payload = response.data.result;
    dispatch({
      type: UPDATE_STUDY_TODO_BY_STUDY_ID,
      payload,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_TODO_ERROR });
    toast.error(err.response.data.error);
  }
};

export const deleteStudyTodoByStudyId = (studyId, studyTodoId) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return toast.error('정상적인 경로가 아닙니다. ');
    }
    const response = await axios.delete(
      `/api/v1/study/${studyId}/studyTodo/delete/${studyTodoId}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      },
    );
    const payload = response.data.result;
    dispatch({
      type: DELETE_STUDY_TODO_BY_STUDY_ID,
      payload,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_TODO_ERROR });
    toast.error(err.response.data.error);
  }
};
