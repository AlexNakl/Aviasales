import React from 'react';

import classes from './tiket.module.scss';
import S7Logo from './S7Logo.png';

function Tiket() {
  return (
    <li className={classes.Tiket}>
      <div className={classes.Tiket__container}>
        <div className={classes.Tiket__price}>13 400 Р</div>
        <img src={S7Logo} alt="S7Logo" className={classes.Tiket__logo} />
        <div className={classes.Tiket__cell__1}>
          <div className={classes.Tiket__titel}>MOW – HKT</div>
          <div className={classes.Tiket__data}>10:45 – 08:00</div>
        </div>
        <div className={classes.Tiket__cell__2}>
          <div className={classes.Tiket__titel}>В ПУТИ</div>
          <div className={classes.Tiket__data}>21ч 15м</div>
        </div>
        <div className={classes.Tiket__cell__3}>
          <div className={classes.Tiket__titel}>2 ПЕРЕСАДКИ</div>
          <div className={classes.Tiket__data}>HKG, JNB</div>
        </div>
        <div className={classes.Tiket__cell__4}>
          <div className={classes.Tiket__titel}>MOW – HKT</div>
          <div className={classes.Tiket__data}>11:20 – 00:50</div>
        </div>
        <div className={classes.Tiket__cell__5}>
          <div className={classes.Tiket__titel}>В ПУТИ</div>
          <div className={classes.Tiket__data}>13ч 30м</div>
        </div>
        <div className={classes.Tiket__cell__6}>
          <div className={classes.Tiket__titel}>1 ПЕРЕСАДКА</div>
          <div className={classes.Tiket__data}>HKG</div>
        </div>
      </div>
    </li>
  );
}

export default Tiket;
