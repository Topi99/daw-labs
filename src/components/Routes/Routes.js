import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import styles from './Routes.module.scss';
import Lab1 from '../Labs/Lab1';
import Lab3 from '../Labs/Lab3';

const Routes = (...props) => {
  return(
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route exact path="/daw-labs/" component={Home} />
      <Route exact path="/daw-labs/1" component={Lab1} />
      <Route exact path="/daw-labs/3" component={Lab3} />
    </main>
  );
}

export default Routes;