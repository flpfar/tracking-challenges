import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import formatDate from '../../utils/dateUtils';
import styles from './styles.module.css';

const Statistics = ({
  todayDate, totalChallenges, dailyGoal, totalToday, dailyAverage,
}) => (
  <div className={styles.statisticsContainer}>
    <p>
      {formatDate(todayDate)}
    </p>
    <div className={styles.statisticsGrid}>
      <div className={styles.statisticsItem}>
        <CircularProgressbarWithChildren
          minValue="0"
          maxValue={totalChallenges}
          value={totalChallenges}
          text={totalChallenges || '0'}
          styles={buildStyles({
            pathColor: '#00CC00',
            textColor: '#00CC00',
          })}
        >
          <span className={styles.perMetric}>Solved</span>
        </CircularProgressbarWithChildren>
        <p>Total Challenges</p>
      </div>
      <div className={styles.statisticsItem}>
        <CircularProgressbarWithChildren
          minValue={0}
          value={totalToday}
          maxValue={dailyGoal}
          text={totalToday || '0'}
          styles={buildStyles({
            pathColor: `${totalToday >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
            textColor: `${totalToday >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
          })}
        >
          <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
        </CircularProgressbarWithChildren>
        <p>Total Today</p>
      </div>
      <div className={styles.statisticsItem}>
        <CircularProgressbarWithChildren
          maxValue={dailyGoal}
          value={dailyAverage}
          text={dailyAverage || '0'}
          styles={buildStyles({
            pathColor: `${dailyAverage >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
            textColor: `${dailyAverage >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
          })}
        >
          <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
        </CircularProgressbarWithChildren>
        <p>Averge / Day</p>
      </div>
    </div>
  </div>
);

Statistics.propTypes = {
  todayDate: PropTypes.string.isRequired,
  totalChallenges: PropTypes.number.isRequired,
  dailyGoal: PropTypes.number.isRequired,
  totalToday: PropTypes.number.isRequired,
  dailyAverage: PropTypes.number.isRequired,
};

export default Statistics;
