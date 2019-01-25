import React from 'react';
import './Home.module.scss';
import styles from './Home.module.scss';

const Home = (...props) => {

  return(
    <section>
      <h2 className={styles.subTitle}>Topiltzin Hernández Mares</h2>
      <p>Soy desarrollador Full Stack JavaScript con las tecnologías NodeJS, Express y MongoDB en el backend. En frontend desarrollo principalmente ReactJS y algunas veces PUG.</p>

    </section>
  );
}

export default Home;