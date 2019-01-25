import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = (...props) => {
  return(
    <nav className={styles.nav}>
      <Link to="/daw-labs" className={[styles.navElement, styles.mainNavE].join(' ')}>Home</Link>
      <div className={styles.navRight}>
        <Link to="/daw-labs/labs" className={[styles.navElement].join(' ')} >Laboratorios</Link>
        <Link to="/daw-labs/questionarios" className={[styles.navElement].join(' ')} >Questionarios</Link>
        <Link to="/daw-labs/about" className={[styles.navElement].join(' ')} >Sobre Mi</Link>
      </div>
    </nav>
  );
}

export default Navigation;