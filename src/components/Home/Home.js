import React from 'react';
import './Home.module.scss';
import styles from './Home.module.scss';
import {questions} from './questions';
import { QuestionsElements } from './QuestionsElements';

const Home = (...props) => {

  return(
    <section>
      <h2 className={styles.subTitle}>Laboratorio 1</h2>
      <p className={styles.biggerFont}>Topiltzin Hernández Mares</p>
      <p>Soy desarrollador Full Stack JavaScript con las tecnologías NodeJS, Express y MongoDB en el backend. En frontend desarrollo principalmente ReactJS y algunas veces PUG.</p>

      <article>
        <h2 className={styles.biggerFont}>Preguntas y Respuestas</h2>
        <ol>
          <QuestionsElements questions={questions} />
        </ol>
      </article>
    </section>
  );
}

export default Home;