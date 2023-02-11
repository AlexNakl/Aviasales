import React from 'react';

import Tiket from '../Tiket';

import classes from './tiketsList.module.scss';

function TiketsList() {
  return (
    <ul className={classes['Tikets-list']}>
      <Tiket />
      <Tiket />
      <Tiket />
      <Tiket />
      <Tiket />
    </ul>
  );
}

export default TiketsList;
