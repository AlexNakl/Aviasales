import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  displayTicketsReducer,
  errorReducer,
  filtersReducer,
  loadingReducer,
  quantityTicketsReducer,
  tabsReducer,
  ticketsReducer,
} from './reducers';

const rootReducer = combineReducers({
  quantityTickets: quantityTicketsReducer,
  displayTickets: displayTicketsReducer,
  loading: loadingReducer,
  error: errorReducer,
  tabs: tabsReducer,
  filters: filtersReducer,
  tickets: ticketsReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
