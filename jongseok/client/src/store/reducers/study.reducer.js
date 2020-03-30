import { INCREMENT, DECREMENT } from '../types';

const initialState = {
  studies: [],
  study: {},
  loading: true,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload;
    case DECREMENT:
      return state + payload;
    default:
      return state;
  }
};
