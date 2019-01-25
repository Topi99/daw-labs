import React, { useState, useEffect } from 'react';
import * as Consts from '../../constants';

const ListLabs = props => {
  const [labs, setLabs] = useState([]);

  useEffect(() => {
    props.firebase.db
      .ref(Consts.LABS_DB_REF)
      .once('value')
      .then(snapshot => {
        setLabs(snapshot.val());
      });
  }, []);

  
  
  return(
    <section>
      {
        labs.map((lab, index) => {
          return(
            <a href={Consts.LAB_ROUTE+'/'+index} className="card">
              <p className="card--title">{lab.nombre}</p>
            </a>
          )
        })
      }
    </section>
  );
}

export default ListLabs;