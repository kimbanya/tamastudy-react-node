import {
  GET_STUDY_TODOS_BY_STUDY_ID,
  CREATE_STUDY_TODO_BY_STUDY_ID,
  UPDATE_STUDY_TODO_BY_STUDY_ID,
  DELETE_STUDY_TODO_BY_STUDY_ID,
  STUDY_TODO_ERROR,
} from '../types';

const initialState = {
  todos: [],
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_STUDY_TODOS_BY_STUDY_ID:
      return { ...state, todos: payload, loading: false };
    case CREATE_STUDY_TODO_BY_STUDY_ID:
      return { ...state, todos: [...state.todos, payload], loading: false };
    case UPDATE_STUDY_TODO_BY_STUDY_ID:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo._id === payload._id ? payload : todo)),
        loading: false,
      };
    case DELETE_STUDY_TODO_BY_STUDY_ID:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== payload),
        loading: false,
      };
    case STUDY_TODO_ERROR:
      return { ...state, error: payload, loading: false };
    default:
      return state;
  }
};
