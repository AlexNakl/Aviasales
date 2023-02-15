import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import Ticket from '../Ticket';
import { getTickets, putQuantityTickets } from '../../redux/actionCreators';
import { getStateTickets, getDisplayTickets, getTabs, getFilters } from '../../redux/selectors';
import { sortTicketsList, filterTicketsList } from '../../helpers';

import classes from './ticketsList.module.scss';

function TicketsList() {
  const tickets = useSelector(getStateTickets);
  const displayTickets = useSelector(getDisplayTickets);
  const tabs = useSelector(getTabs);
  const filters = useSelector(getFilters);
  const dispatch = useDispatch();

  const resultTicketsList = filterTicketsList(sortTicketsList(tickets, tabs), filters);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(putQuantityTickets(resultTicketsList.length));
  }, [resultTicketsList]);

  return (
    <ul className={classes['Tickets-list']}>
      {resultTicketsList.slice(0, displayTickets).map((ticket) => (
        <Ticket
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

export default TicketsList;
