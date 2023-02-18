import { SWITCHING_TABS } from '../actions';

const initialState = [
  {
    id: 1,
    label: 'Самый дешёвый',
    code: 'price',
    active: true,
  },
  {
    id: 2,
    label: 'Самый быстрый',
    code: 'fastest',
    active: false,
  },
  {
    id: 3,
    label: 'Оптимальный',
    code: 'optimal',
    active: false,
  },
];

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCHING_TABS:
      return state.map((tab) => (action.payload === tab.id ? { ...tab, active: true } : { ...tab, active: false }));
    default:
      return state;
  }
};

export default tabsReducer;
