import { GET_STUDIES_FAIL, GET_STUDIES_PENDING, GET_STUDIES_SUCCESS } from '../../store-types';
import {
  GET_STUDY_CATEGORIES_PENDING,
  GET_STUDY_CATEGORIES_SUCCESS,
  GET_STUDY_CATEGORIES_FAIL,
  CREATE_STUDY_CATEGORY_PENDING,
  CREATE_STUDY_CATEGORY_SUCCESS,
  CREATE_STUDY_CATEGORY_FAIL,
  JOIN_STUDY_PENDING,
  JOIN_STUDY_SUCCESS,
  JOIN_STUDY_FAIL,
  QUIT_STUDY_PENDING,
  QUIT_STUDY_SUCCESS,
  QUIT_STUDY_FAIL,
  IStudyState,
  StudyReducerActions,
} from '../../store-types';

const initialState: IStudyState = {
  categories: [],
  studies: [],
  study: null,
  error: null,
  loading: true,
};

export default (prevState: IStudyState = initialState, action: StudyReducerActions) => {
  switch (action.type) {
    case GET_STUDY_CATEGORIES_PENDING:
    case CREATE_STUDY_CATEGORY_PENDING:
    case GET_STUDIES_PENDING:
    case JOIN_STUDY_PENDING:
    case QUIT_STUDY_PENDING:
      return {
        ...prevState,
        loading: action.payload,
      };
    case GET_STUDY_CATEGORIES_SUCCESS:
      return {
        ...prevState,
        loading: false,
        categories: action.payload,
      };
    case CREATE_STUDY_CATEGORY_SUCCESS:
      return { ...prevState, loading: false, study: action.payload };
    case GET_STUDIES_SUCCESS:
      return { ...prevState, loading: false, studies: action.payload };
    case JOIN_STUDY_SUCCESS:
    case QUIT_STUDY_SUCCESS:
      return {
        ...prevState,
        loading: false,
        studies: prevState.studies.map((study) =>
          study._id === action.payload?._id ? action.payload : study,
        ),
      };
    case GET_STUDY_CATEGORIES_FAIL:
    case CREATE_STUDY_CATEGORY_FAIL:
    case GET_STUDIES_FAIL:
    case JOIN_STUDY_FAIL:
    case QUIT_STUDY_FAIL:
      return {
        ...prevState,
        loading: false,
        error: action.payload,
      };
    default:
      return prevState;
  }
};
