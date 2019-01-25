import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';
import styles from './Routes.module.scss';
import Labs, { Lab } from '../Labs';
import * as Consts from '../../constants';

const Routes = (...props) => {
  return(
    <main className={styles.main}>
      <Route exact path="/" component={Home} />
      <Route exact path={Consts.ROOT_ROUTE} component={Home} />
      <Route path={Consts.LABS_ROUTE} component={Labs} />
      <Route path={Consts.LAB_ROUTE+'/:id'} component={Lab} />
    </main>
  );
}

export default Routes;