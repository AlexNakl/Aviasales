import React from 'react';

import classes from './showMore.module.scss';

function ShowMore() {
  const onClick = () => {};

  return (
    <button onClick={onClick} className={classes.showMore} type="button">
      Показать ещё 5 билетов!
    </button>
  );
}

export default ShowMore;
