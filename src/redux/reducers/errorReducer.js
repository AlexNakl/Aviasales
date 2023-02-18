import { ERROR_STATUS } from '../actions';

const initialState = {
  active: false,
  message: '',
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ERROR_STATUS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default errorReducer;
