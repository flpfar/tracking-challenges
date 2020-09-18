import React, { useState } from 'react';
import styles from './styles.module.css';

const MetricsForm = ({ handleMetricsSubmit, metric, metricValue, setVisibleMetrics }) => {
  const [currentValue, setCurrentValue] = useState(metricValue);

  return (
    <div className={styles.MetricsFormContainer}>
      <h2>Challenges <span>{metric}</span> today</h2>
      <form onSubmit={handleMetricsSubmit}>
        <div className={styles.inputsContainer}>
          <input type="number" name={metric} value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} min="0" required/>
          <input type="range" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} min="0" max="20" />
        </div>
        <div className={styles.buttonsContainer}>
          <div>
            <button type="button" className={styles.backBtn} onClick={() => setVisibleMetrics(false)}>Voltar</button>
          </div>
          <button type="submit" className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default MetricsForm;
