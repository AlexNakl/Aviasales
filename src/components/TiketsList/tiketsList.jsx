import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Tiket from '../Tiket';
import { getTikets } from '../../redux/actionCreators';
import { getTickets } from '../../redux/selectors';

import classes from './tiketsList.module.scss';

function TiketsList() {
  const tickets = useSelector(getTickets);
  // console.log(tickets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTikets());
  }, [dispatch]);

  return (
    <ul className={classes['Tikets-list']}>
      {tickets.slice(0, 5).map((ticket) => (
        <Tiket
          key={uuid()}
          price={ticket.price}
          carrier={ticket.carrier}
          date={ticket.segments[0].date}
          stops={ticket.segments[0].stops}
          backDate={ticket.segments[1].date}
          backStops={ticket.segments[1].stops}
          departure={ticket.segments[0].origin}
          duration={ticket.segments[0].duration}
          backDuration={ticket.segments[1].duration}
          destination={ticket.segments[0].destination}
        />
      ))}
    </ul>
  );
}

export default TiketsList;
