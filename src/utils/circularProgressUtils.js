const colorPicker = (total, current) => {
  const half = total / 2;
  if (current < half) {
    return '#e3242b';
  }
  if (current < total) {
    return '#41b5e8';
  }
  return '#97e393';
};

export default colorPicker;
