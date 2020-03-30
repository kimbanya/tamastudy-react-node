import {
  GET_STUDIES,
  CREATE_STUDY,
  GET_STUDY_BY_ID,
  DELETE_STUDY_BY_ID,
  UPDATE_STUDY_BY_ID,
  STUDY_ERROR,
} from '../types';
import axios from 'axios';
import { toast } from 'react-toastify';

export const getStudies = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/v1/study');
    const payload = response.data.result;
    dispatch({ type: GET_STUDIES, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_ERROR });
    toast.error(err.response.data.err);
  }
};

export const createStudy = (formData, history) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
      return toast.error('정상적인 경로가 아닙니다. ');
    }
    const response = await axios.post('/api/v1/study/create', formData, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    const payload = response.data.result;
    dispatch({ type: CREATE_STUDY, payload });
    history.push('/study');
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_ERROR });
    toast.error(err.response.data.error);
  }
};

export const getStudyById = (studyId) => async (dispatch) => {
  try {
    let payload;
    dispatch({ type: GET_STUDY_BY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_ERROR });
    toast.error(err.response.data.error);
  }
};

export const deleteStudyById = (studyId) => async (dispatch) => {
  try {
    let payload;
    dispatch({ type: DELETE_STUDY_BY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_ERROR });
    toast.error(err.response.data.error);
  }
};

export const updateStudyById = (studyId) => async (dispatch) => {
  try {
    let payload;
    dispatch({ type: UPDATE_STUDY_BY_ID, payload });
  } catch (err) {
    console.log(err);
    dispatch({ type: STUDY_ERROR });
    toast.error(err.response.data.error);
  }
};
