import React from 'react';
import { useDispatch } from 'react-redux';

import { switchingTabs } from '../../redux/actionCreators';

import classes from './tab.module.scss';

function Tab({ isActive, label, id }) {
  const dispatch = useDispatch();
  let clazz = classes.tab;

  if (isActive) {
    clazz += ` ${classes['tab--active']}`;
  }

  return (
    <button onClick={!isActive ? () => dispatch(switchingTabs(id)) : () => {}} className={clazz} type="button">
      {label}
    </button>
  );
}

export default Tab;
