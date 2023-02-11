import React from 'react';

import Tab from '../Tab';

import classes from './tabs.module.scss';

function Tabs() {
  return (
    <div className={classes.tabs}>
      <Tab isActive />
      <Tab isActive={false} />
      <Tab isActive={false} />
    </div>
  );
}

export default Tabs;
