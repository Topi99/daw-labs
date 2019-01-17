import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../components/Home/Home';

const Routes = (...props) => {
  return(
    <main>
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default Routes;