import React from 'react';

import classes from './filter.module.scss';

function Filter() {
  return (
    <aside className={classes['container-filter']}>
      <h3 className={classes.title}>Количество пересадок</h3>
      <ul className={classes['filter-list']}>
        <li className={classes['filter-list__item']}>
          <input id={1} name="1" className={classes['filter-checkbox']} type="checkbox" checked={false} />
          <label htmlFor={1} className={classes['filter-label']}>
            Все
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id={2} name="1" className={classes['filter-checkbox']} type="checkbox" checked />
          <label htmlFor={2} className={classes['filter-label']}>
            Без пересадок
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id={3} name="1" className={classes['filter-checkbox']} type="checkbox" checked={false} />
          <label htmlFor={3} className={classes['filter-label']}>
            1 пересадка
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id={4} name="1" className={classes['filter-checkbox']} type="checkbox" checked />
          <label htmlFor={4} className={classes['filter-label']}>
            2 пересадки
          </label>
        </li>
        <li className={classes['filter-list__item']}>
          <input id={5} name="1" className={classes['filter-checkbox']} type="checkbox" checked />
          <label htmlFor={5} className={classes['filter-label']}>
            3 пересадки
          </label>
        </li>
      </ul>
    </aside>
  );
}

export default Filter;
