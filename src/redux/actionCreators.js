import AsApiServices from '../services/AsApiServices';

import { GET_TICKETS, FILTER_TICKETS, SWITCHING_TABS } from './actions';

const AsApi = new AsApiServices();

export const filterTickets = (checkBoxId) => ({ type: FILTER_TICKETS, payload: checkBoxId });
export const switchingTabs = (tabId) => ({ type: SWITCHING_TABS, payload: tabId });
export const getTikets = () => async (dispatch) => {
  await AsApi.getSearchId();

  const recursiveQueryGetTickets = async () => {
    try {
      if (AsApi.searchId !== null) {
        const response = await AsApi.getTickets();
        console.log(response);
        if (response.stop === false) {
          recursiveQueryGetTickets();
        }
        dispatch({ type: GET_TICKETS, payload: response.tickets });
      }
    } catch (err) {
      console.error(err, err.message);
      if (err.message === '500') {
        recursiveQueryGetTickets();
      }
    }
  };

  await recursiveQueryGetTickets();
};
