/* eslint-disable no-shadow */
import React from 'react';
import { format, parseISO, add } from 'date-fns';

import classes from './tiket.module.scss';

function Tiket({ price, carrier, date, stops, backDate, backStops, departure, duration, backDuration, destination }) {
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
    const thousands = String(price).split('').slice(0, 2).join('');
    return `${thousands} ${String(price).split('').slice(2).join('')}`;
  };

  return (
    <li className={classes.Tiket}>
      <div className={classes.Tiket__container}>
        <div className={classes.Tiket__price}>{getPrice(price)} Р</div>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="Airline Logo" className={classes.Tiket__logo} />
        <div className={classes.Tiket__cell__1}>
          <div className={classes.Tiket__titel}>
            {departure} — {destination}
          </div>
          <div className={classes.Tiket__data}>
            {getDateDeparture(date, duration)}–{getDateDestination(date, duration)}
          </div>
        </div>
        <div className={classes.Tiket__cell__2}>
          <div className={classes.Tiket__titel}>В ПУТИ</div>
          <div className={classes.Tiket__data}>{getTimeFromMins(duration)}</div>
        </div>
        <div className={classes.Tiket__cell__3}>
          <div className={classes.Tiket__titel}>{getValueTransfers(stops)}</div>
          <div className={classes.Tiket__data}>{getTransfers(stops)}</div>
        </div>
        <div className={classes.Tiket__cell__4}>
          <div className={classes.Tiket__titel}>
            {destination} — {departure}
          </div>
          <div className={classes.Tiket__data}>
            {getDateDeparture(backDate, backDuration)}–{getDateDestination(backDate, backDuration)}
          </div>
        </div>
        <div className={classes.Tiket__cell__5}>
          <div className={classes.Tiket__titel}>В ПУТИ</div>
          <div className={classes.Tiket__data}>{getTimeFromMins(backDuration)}</div>
        </div>
        <div className={classes.Tiket__cell__6}>
          <div className={classes.Tiket__titel}>{getValueTransfers(backStops)}</div>
          <div className={classes.Tiket__data}>{getTransfers(backStops)}</div>
        </div>
      </div>
    </li>
  );
}

export default Tiket;
