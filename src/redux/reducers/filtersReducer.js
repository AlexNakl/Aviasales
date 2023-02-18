/* eslint-disable no-fallthrough */
import { FILTER_TICKETS } from '../actions';

const initialState = [
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
    checked: false,
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
];

const filtersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TICKETS:
      // Если включается/снимается галочка "Все" - проставляются/снимаются галочки всем остальным фильтрам
      if (action.payload === 1) {
        return state.map((filter) => ({ ...filter, checked: !state[0].checked }));
      }
      // Если при включенной галочке "Все" снимается любая другая галочка - галочка "Все" тоже снимается
      if (action.payload !== 1 && state[0].checked) {
        return state.map((filter) =>
          action.payload === filter.id || filter.id === 1 ? { ...filter, checked: !filter.checked } : filter
        );
      }
      // Если проставить каждую галочку по пересадкам - галочка "Все" автоматически включится
      // Если проставить/снять галочку по пересадкам - галочка проставляется/снимается
      if (action.payload !== 1 && !state[0].checked) {
        let onLastFilter = 0;

        for (let i = 1; i < state.length; i += 1) {
          if (state[i].id !== action.payload && state[i].checked === true) {
            onLastFilter += 1;
          } else if (state[i].id === action.payload && state[i].checked === false) {
            onLastFilter += 1;
          } else {
            onLastFilter -= 1;
          }
        }

        return state.map((filter) =>
          action.payload === filter.id || (filter.id === 1 && onLastFilter === 4)
            ? { ...filter, checked: !filter.checked }
            : filter
        );
      }
    default:
      return state;
  }
};

export default filtersReducer;
