import React from 'react';
import PropTypes from 'prop-types';
import { Book, Clipboard } from 'react-feather';
import styles from './styles.module.css';

function iconChooser(label) {
  if (label === 'reviewed') {
    return <Book size="56" className={styles.icon} />;
  }
  return <Clipboard size="56" className={styles.icon} />;
}

const MetricButton = ({ label, metrics, handleVisibleMetrics }) => (
  <button type="button" onClick={() => handleVisibleMetrics(label)} className={styles.MetricButton}>
    { iconChooser(label) }
    <div className={styles.info}>
      <span>{ label }</span>
      <span className={styles.metrics}>{ metrics }</span>
    </div>
  </button>
);

MetricButton.propTypes = {
  label: PropTypes.string.isRequired,
  metrics: PropTypes.number.isRequired,
  handleVisibleMetrics: PropTypes.func.isRequired,
};

export default MetricButton;
