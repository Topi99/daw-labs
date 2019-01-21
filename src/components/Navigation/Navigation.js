import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = (...props) => {
  return(
    <nav className={styles.nav}>
      <Link to="/daw-labs" className={[styles.navElement, styles.mainNavE].join(' ')}>Home</Link>
    </nav>
  );
}

export default Navigation;