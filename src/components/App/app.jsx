import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'antd';

import { getQuantityTickets, getDisplayTickets, getLoading, getError } from '../../redux/selectors';
import Header from '../Header';
import Filter from '../Filter';
import Tabs from '../Tabs';
import TicketsList from '../TicketsList';
import ShowMore from '../ShowMore';
import Spinner from '../Spinner';

import classes from './app.module.scss';

function App() {
  const displayTickets = useSelector(getDisplayTickets);
  const quantityTickets = useSelector(getQuantityTickets);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  const hasShowMore = displayTickets !== quantityTickets && displayTickets < quantityTickets;

  return (
    <section className={classes['Aviasales-app']}>
      <Header />
      <div className={classes['Aviasales-app__container']}>
        <Filter />
        <main className={classes['Aviasales-app__main']}>
          <Tabs />
          {loading && !error.active ? <Spinner /> : null}
          {error.active ? <Alert message="Error" description={error.message} type="error" showIcon /> : null}
          {quantityTickets === 0 && !loading && !error.active ? (
            <Alert description="Билеты, по указанным фильтрам, не найдены." type="info" showIcon />
          ) : null}
          {!error.active && <TicketsList />}
          {hasShowMore ? <ShowMore /> : null}
        </main>
      </div>
    </section>
  );
}

export default App;
