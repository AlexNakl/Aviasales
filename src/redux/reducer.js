/* eslint-disable no-fallthrough */
import { GET_TICKETS, FILTER_TICKETS, SWITCHING_TABS } from './actions';

const initialState = {
  loading: true,
  tickets: [],
  tabs: [
    {
      id: 1,
      label: 'Самый дешёвый',
      active: true,
    },
    {
      id: 2,
      label: 'Самый быстрый',
      active: false,
    },
    {
      id: 3,
      label: 'Оптимальный',
      active: false,
    },
  ],
  filters: [
    {
      id: 1,
      label: 'Все',
      checked: false,
    },
    {
      id: 2,
      label: 'Без пересадок',
      checked: true,
    },
    {
      id: 3,
      label: '1 пересадка',
      checked: true,
    },
    {
      id: 4,
      label: '2 пересадки',
      checked: false,
    },
    {
      id: 5,
      label: '3 пересадки',
      checked: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TICKETS:
      // Если включается/снимается галочка "Все" - проставляются/снимаются галочки всем остальным фильтрам
      if (action.payload === 1) {
        return {
          ...state,
          filters: state.filters.map((filter) => ({ ...filter, checked: !state.filters[0].checked })),
        };
      }
      // Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
      if (action.payload !== 1 && state.filters[0].checked) {
        return {
          ...state,
          filters: state.filters.map((filter) =>
            action.payload === filter.id || filter.id === 1 ? { ...filter, checked: !filter.checked } : filter
          ),
        };
      }
      // Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
      // Если проставить/снять галочку по пересадкам - галочка проставляется/снимается
      if (action.payload !== 1 && !state.filters[0].checked) {
        let onLastFilter = 0;

        for (let i = 1; i < state.filters.length; i += 1) {
          if (state.filters[i].id !== action.payload && state.filters[i].checked === true) {
            onLastFilter += 1;
          } else if (state.filters[i].id === action.payload && state.filters[i].checked === false) {
            onLastFilter += 1;
          } else {
            onLastFilter -= 1;
          }
        }

        return {
          ...state,
          filters: state.filters.map((filter) =>
            action.payload === filter.id || (filter.id === 1 && onLastFilter === 4)
              ? { ...filter, checked: !filter.checked }
              : filter
          ),
        };
      }
    case GET_TICKETS:
      return { ...state, tickets: [...state.tickets, ...action.payload] };
    case SWITCHING_TABS:
      return {
        ...state,
        tabs: state.tabs.map((tab) =>
          action.payload === tab.id ? { ...tab, active: true } : { ...tab, active: false }
        ),
      };
    default:
      return state;
  }
};

export default reducer;
