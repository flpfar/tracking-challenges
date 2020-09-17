import React from 'react';
import { Book, Clipboard } from 'react-feather';
import styles from './styles.module.css';

function iconChooser(label) {
  if(label === 'reviewed') {
    return <Book size="56" className={styles.icon} />;
  } else {
    return <Clipboard size="56" className={styles.icon}  />;
  }
}

const MetricButton = ({ label, metrics, handleVisibleMetrics }) => {
  return (
    <button type="button" onClick={() => handleVisibleMetrics(label)} className={styles.MetricButton}>
      { iconChooser(label) }
      <div className={styles.info}>
        <span>{ label }</span>
        <span className={styles.metrics}>{ metrics }</span>
      </div>
    </button>
  );
};

export default MetricButton;