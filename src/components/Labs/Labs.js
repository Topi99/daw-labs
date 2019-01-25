import React from 'react';
import { FirebaseContext } from '../Firebase';
import ListLabs from './ListLabs';

const Labs = props => {
  return(
    <FirebaseContext.Consumer >
      {firebase => <ListLabs firebase={firebase} />}
    </FirebaseContext.Consumer>
  );
}

export default Labs;