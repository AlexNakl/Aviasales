import { SHOW_MORE } from '../actions';

const initialState = 5;

const displayTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE:
      return state + action.payload;
    default:
      return state;
  }
};

export default displayTicketsReducer;
