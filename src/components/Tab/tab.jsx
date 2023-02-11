import React from 'react';

import classes from './tab.module.scss';

function Tab({ isActive }) {
  const onClick = () => {};
  let clazz = classes.tab;

  if (isActive) {
    clazz += ` ${classes['tab--active']}`;
  }

  return (
    <button onClick={onClick} className={clazz} type="button">
      Самый дешевый
    </button>
  );
}

export default Tab;
