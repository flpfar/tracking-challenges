import React from 'react';
import styles from './styles.module.css';

const Loading = () => (
  <div className={styles.loading}>
    <div className={styles.ldsRing}>
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

export default Loading;
