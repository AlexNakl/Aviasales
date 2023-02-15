import React from 'react';
import PropTypes from 'prop-types';
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

Tab.defaultProps = {
  id: 0,
  label: '',
  isActive: false,
};

Tab.propTypes = {
  id: PropTypes.number,
  label: PropTypes.string,
  isActive: PropTypes.bool,
};

export default Tab;
