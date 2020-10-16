import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import formatDate from '../../utils/dateUtils';
import colorPicker from '../../utils/circularProgressUtils';
import styles from './styles.module.css';

const ProgressDayItem = ({ day, user }) => (
  <div className={styles.dayItem}>
    <div className={styles.progressCircle}>
      <CircularProgressbar
        minValue="0"
        maxValue={user.daily_goal}
        value={day.reviewed + day.learned}
        styles={buildStyles({
          trailColor: '#f3f3f5',
          pathColor: colorPicker(user.daily_goal, day.reviewed + day.learned),
        })}
      />
    </div>
    <div className={styles.dayTextInfo}>
      <p>
        {formatDate(day.date)}
      </p>
      <p className={styles.dayNumbers}>
        <span>
          Reviewed:
          {' '}
          {day.reviewed}
        </span>
        <span>
          Learned:
          {' '}
          {day.learned}
        </span>
      </p>
    </div>
    <div className={styles.totalSolved}>
      <p>{day.reviewed + day.learned}</p>
      <p>solved</p>
    </div>
  </div>
);

ProgressDayItem.propTypes = {
  day: PropTypes.shape({
    reviewed: PropTypes.number,
    learned: PropTypes.number,
    date: PropTypes.string,
  }).isRequired,

  user: PropTypes.shape({
    daily_goal: PropTypes.number,
  }).isRequired,
};

export default ProgressDayItem;
