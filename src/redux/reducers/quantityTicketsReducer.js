import { PUT_QUANTITY_TICKETS } from '../actions';

const initialState = 0;

const quantityTicketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_QUANTITY_TICKETS:
      return action.payload;
    default:
      return state;
  }
};

export default quantityTicketsReducer;
