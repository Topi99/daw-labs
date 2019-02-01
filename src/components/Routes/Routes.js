import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../components/Home/Home';
import styles from './Routes.module.scss';
import * as Labs from '../Labs';
import * as Consts from '../../constants';

const IntroJS = props => {
  return(
    <Labs.Lab match={{params: {id:2}}} >
      <Labs.IntroJS/>
    </Labs.Lab>
  )
}

const EventsJS = props => {
  return(
    <Labs.Lab match={{params:{id:2}}}>
      <Labs.EventsJS />
    </Labs.Lab>
  );
}

const Routes = (...props) => {
  
  return(
    <main className={styles.main}>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path={ Consts.ROOT_ROUTE } component={ Home } />
        <Route path={ Consts.LABS_ROUTE } component={ Labs.List } />
        <Route exact path={ Consts.LAB_ROUTE+'/2' } component={ IntroJS } />
        <Route exact path={ Consts.LAB_ROUTE+'/3' } component={ EventsJS } />
        <Route path={ Consts.LAB_ROUTE+'/:id' } component={ Labs.Lab } />
      </Switch>
    </main>
  );
}

export default Routes;