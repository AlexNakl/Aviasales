import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filterTickets } from '../../redux/actionCreators';
import { getFilters } from '../../redux/selectors';

import classes from './filter.module.scss';

function Filter() {
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  return (
    <aside className={classes['container-filter']}>
      <h3 className={classes.title}>Количество пересадок</h3>
      <ul className={classes['filter-list']}>
        {filters.map((filter) => (
          <li key={filter.id} className={classes['filter-list__item']}>
            <input
              id={filter.label}
              name={filter.label}
              className={classes['filter-checkbox']}
              type="checkbox"
              checked={filter.checked}
              onChange={() => dispatch(filterTickets(filter.id))}
            />
            <label htmlFor={filter.label} className={classes['filter-label']}>
              {filter.label}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Filter;
