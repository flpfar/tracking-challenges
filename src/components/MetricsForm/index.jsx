import React from 'react';

const MetricsForm = ({ handleMetricsSubmit, metric, metricValue }) => (
  <form onSubmit={handleMetricsSubmit}>
    <h1>{metric}</h1>
    <input type="number" name={metric} defaultValue={metricValue} min="0" />
    <button type="submit">Submit</button>
  </form>
);

export default MetricsForm;
