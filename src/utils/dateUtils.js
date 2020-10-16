const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

const formatDate = dateString => {
  const day = new Date(dateString);
  return `${day.getUTCDate()} ${monthNames[day.getUTCMonth()]} ${day.getUTCFullYear()}`;
};

export default formatDate;
