import { FILTER_TICKETS } from './actions';

export const filterTickets = (checkBoxId) => ({ type: FILTER_TICKETS, payload: checkBoxId });
export const gjg = () => ({ type: FILTER_TICKETS });
