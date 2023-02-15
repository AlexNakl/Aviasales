import AsApiServices from '../services/AsApiServices';

import {
  GET_TICKETS,
  FILTER_TICKETS,
  SWITCHING_TABS,
  SHOW_MORE,
  SHOW_LOADING,
  PUT_QUANTITY_TICKETS,
  ERROR_STATUS,
} from './actions';

const AsApi = new AsApiServices();

export const filterTickets = (checkBoxId) => ({ type: FILTER_TICKETS, payload: checkBoxId });
export const switchingTabs = (tabId) => ({ type: SWITCHING_TABS, payload: tabId });
export const showMore = (quantityShowMore) => ({ type: SHOW_MORE, payload: quantityShowMore });
export const putQuantityTickets = (quantityTickets) => ({ type: PUT_QUANTITY_TICKETS, payload: quantityTickets });
export const updateError = (error) => ({ type: ERROR_STATUS, payload: error });

export const getTickets = () => async (dispatch) => {
  try {
    await AsApi.getSearchId();
  } catch (err) {
    dispatch(updateError({ active: true, message: `${err.message}` }));
    dispatch({ type: SHOW_LOADING, payload: false });
    console.error(err, err.message);
  }

  const recursiveQueryGetTickets = async () => {
    try {
      if (AsApi.searchId !== null) {
        const response = await AsApi.getTickets();
        if (response.stop === false) {
          recursiveQueryGetTickets();
        }
        if (response.stop === true) {
          dispatch({ type: SHOW_LOADING, payload: false });
        }
        dispatch({ type: GET_TICKETS, payload: response.tickets });
      }
    } catch (err) {
      if (err.message >= 500) {
        recursiveQueryGetTickets();
      } else {
        console.error(err, err.message);
        dispatch(updateError({ active: true, message: `Код ${err.message}: Что-то пошло не так.` }));
        dispatch({ type: SHOW_LOADING, payload: false });
      }
    }
  };

  await recursiveQueryGetTickets();
};
