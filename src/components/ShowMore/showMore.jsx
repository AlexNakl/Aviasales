import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { showMore } from '../../redux/actionCreators';
import { getQuantityTickets, getDisplayTickets } from '../../redux/selectors';

import classes from './showMore.module.scss';

function ShowMore() {
  const displayTickets = useSelector(getDisplayTickets);
  const quantityTickets = useSelector(getQuantityTickets);
  const dispatch = useDispatch();
  const quantityShowMore = quantityTickets - displayTickets >= 5 ? 5 : quantityTickets - displayTickets;

  return (
    <button onClick={() => dispatch(showMore(quantityShowMore))} className={classes.showMore} type="button">
      {`Показать ещё ${quantityShowMore} билетов!`}
    </button>
  );
}

export default ShowMore;
