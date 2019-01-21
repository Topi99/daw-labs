import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import styles from './Routes.module.scss';

const Routes = (...props) => {
  return(
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route exact path="/daw-labs/" component={Home} />
    </main>
  );
}

export default Routes;