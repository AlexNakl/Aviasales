import React from 'react';

import Header from '../Header';
import Filter from '../Filter';
import Tabs from '../Tabs';
import TiketsList from '../TiketsList';
import ShowMore from '../ShowMore';
import Spinner from '../Spinner';
// import ShowMore from '../ShowMore';

import classes from './app.module.scss';

function App() {
  return (
    <section className={classes['Aviasales-app']}>
      <Header />
      <div className={classes['Aviasales-app__container']}>
        <Filter />
        <main className={classes['Aviasales-app__main']}>
          <Tabs />
          <Spinner />
          <TiketsList />
          <ShowMore />
        </main>
      </div>
    </section>
  );
}

export default App;
