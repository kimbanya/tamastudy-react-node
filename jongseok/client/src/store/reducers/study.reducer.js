import {
  GET_STUDIES,
  CREATE_STUDY,
  GET_STUDY_BY_ID,
  DELETE_STUDY_BY_ID,
  UPDATE_STUDY_BY_ID,
  STUDY_ERROR,
} from '../types';

const initialState = {
  studies: [],
  study: {},
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDIES:
      return { ...state, studies: payload, loading: false };
    case CREATE_STUDY:
      return { ...state, studies: [...state.studies, payload] };
    case GET_STUDY_BY_ID:
      return state;
    case DELETE_STUDY_BY_ID:
      return state;
    case UPDATE_STUDY_BY_ID:
      return state;
    case STUDY_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
