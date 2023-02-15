/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import { format, parseISO, add } from 'date-fns';

import classes from './ticket.module.scss';

function Ticket({ price, carrier, date, stops, backDate, backStops, departure, duration, backDuration, destination }) {
  const getTimeFromMins = (mins) => {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;

    if (minutes === 0) {
      return `${hours} ч.`;
    }

    return `${hours} ч. ${minutes} мин.`;
  };

  const getTransfers = (transfers) => {
    if (transfers.length > 0) {
      return transfers.join(', ');
    }

    return null;
  };

  const getValueTransfers = (stops) => {
    switch (stops.length) {
      case 0:
        return 'Без пересадок';
      case 1:
        return '1 пересадка';
      case 2:
        return '2 пересадки';
      case 3:
        return '3 пересадки';
      default:
        return null;
    }
  };

  const getDateDeparture = (date) => format(parseISO(date), 'hh:mm');

  const getDateDestination = (date, duration) =>
    format(add(parseISO(date), { hours: Math.trunc(duration / 60), minutes: duration % 60 }), 'hh:mm');

  const getPrice = (price) => {
    const thousands = Math.trunc(price / 1000);
    return `${thousands} ${String(price).slice(-3)}`;
  };

  return (
    <li className={classes.Ticket}>
      <div className={classes.Ticket__container}>
        <div className={classes.Ticket__price}>{getPrice(price)} Р</div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Airline Logo" className={classes.Ticket__logo} />
        <div className={classes.Ticket__cell__1}>
          <div className={classes.Ticket__titel}>
            {departure} — {destination}
          </div>
          <div className={classes.Ticket__data}>
            {getDateDeparture(date, duration)}–{getDateDestination(date, duration)}
          </div>
        </div>
        <div className={classes.Ticket__cell__2}>
          <div className={classes.Ticket__titel}>В ПУТИ</div>
          <div className={classes.Ticket__data}>{getTimeFromMins(duration)}</div>
        </div>
        <div className={classes.Ticket__cell__3}>
          <div className={classes.Ticket__titel}>{getValueTransfers(stops)}</div>
          <div className={classes.Ticket__data}>{getTransfers(stops)}</div>
        </div>
        <div className={classes.Ticket__cell__4}>
          <div className={classes.Ticket__titel}>
            {destination} — {departure}
          </div>
          <div className={classes.Ticket__data}>
            {getDateDeparture(backDate, backDuration)}–{getDateDestination(backDate, backDuration)}
          </div>
        </div>
        <div className={classes.Ticket__cell__5}>
          <div className={classes.Ticket__titel}>В ПУТИ</div>
          <div className={classes.Ticket__data}>{getTimeFromMins(backDuration)}</div>
        </div>
        <div className={classes.Ticket__cell__6}>
          <div className={classes.Ticket__titel}>{getValueTransfers(backStops)}</div>
          <div className={classes.Ticket__data}>{getTransfers(backStops)}</div>
        </div>
      </div>
    </li>
  );
}

Ticket.defaultProps = {
  price: 0,
  duration: 0,
  backDuration: 0,
  date: '',
  carrier: '',
  backDate: '',
  departure: '',
  destination: '',
  stops: [],
  backStops: [],
};

Ticket.propTypes = {
  price: PropTypes.number,
  duration: PropTypes.number,
  backDuration: PropTypes.number,
  date: PropTypes.string,
  carrier: PropTypes.string,
  backDate: PropTypes.string,
  departure: PropTypes.string,
  destination: PropTypes.string,
  stops: PropTypes.arrayOf(PropTypes.string),
  backStops: PropTypes.arrayOf(PropTypes.string),
};

export default Ticket;
