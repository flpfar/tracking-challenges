import React from 'react';
import styles from './styles.module.css';

const Header = ({ title }) => {
  return (
    <header className={styles.Header}>
      <h1>
        { title }
      </h1>
    </header>
  );
};

export default Header;