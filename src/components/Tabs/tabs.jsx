import React from 'react';
import { useSelector } from 'react-redux';

import Tab from '../Tab';
import { getTabs } from '../../redux/selectors';

import classes from './tabs.module.scss';

function Tabs() {
  const tabs = useSelector(getTabs);

  return (
    <div className={classes.tabs}>
      {tabs.map((tab) => (
        <Tab key={tab.id} id={tab.id} isActive={tab.active} label={tab.label} />
      ))}
    </div>
  );
}

export default Tabs;
