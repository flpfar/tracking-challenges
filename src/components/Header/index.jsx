import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Header = ({ title }) => (
  <header className={styles.Header}>
    <h1>
      { title }
    </h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
