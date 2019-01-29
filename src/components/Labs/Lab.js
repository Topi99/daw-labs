import React, { useState, useEffect } from 'react';
import styles from '../Home/Home.module.scss';
import { QuestionsElements } from './QuestionsElements';
import { FirebaseContext } from '../Firebase';
import * as Consts from '../../constants';
import LabStyles from './QuestionsElements.module.scss';

const Lab = props => {
  return(
    <FirebaseContext.Consumer>
      {firebase => <LabBase match={props.match} firebase={firebase} children={props.children}/>}
    </FirebaseContext.Consumer>
  );
}

const LabBase = props => {
  const [lab, setLab] = useState({preguntas:[]});

  useEffect(() => {
    props.firebase.db.ref(Consts.LABS_DB_REF)
      .once('value')
      .then(snapshot => {
        setLab(snapshot.val()[props.match.params.id]);
      });
  });
  
  return(
    <section className="card">
      <h2 className={styles.subTitle}>{lab.nombre}</h2>
      <p className={styles.biggerFont}>Topiltzin Hernández Mares</p>
      <p>{lab.descripcion}</p>

      <article className={LabStyles.labChildren}>
        { props.children }
      </article>

      <article>
        <h3 className={styles.biggerFont}>Preguntas</h3>
        <ol>
          <QuestionsElements questions={lab.preguntas ? lab.preguntas : []} />
        </ol>
      </article>
    </section>
  );
};

export default Lab;