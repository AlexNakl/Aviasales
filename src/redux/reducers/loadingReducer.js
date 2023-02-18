import { SHOW_LOADING } from '../actions';

const initialState = true;

const loadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default loadingReducer;
