import React from 'react';
import PropTypes from 'prop-types';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import formatDate from '../../utils/dateUtils';
import colorPicker from '../../utils/circularProgressUtils';
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
            trailColor: '#f3f3f5',
            pathColor: colorPicker(totalChallenges, totalChallenges),
            textColor: colorPicker(totalChallenges, totalChallenges),
          })}
        >
          <span className={styles.perMetric}>Solved</span>
        </CircularProgressbarWithChildren>
        <p>Total Challenges</p>
      </div>
      <div className={styles.statisticsItem}>
        <CircularProgressbarWithChildren
          minValue={0}
          value={totalToday || 0}
          maxValue={dailyGoal}
          text={totalToday || '0'}
          styles={buildStyles({
            trailColor: '#f3f3f5',
            pathColor: colorPicker(dailyGoal, totalToday || 0),
            textColor: colorPicker(dailyGoal, totalToday || 0),
          })}
        >
          <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
        </CircularProgressbarWithChildren>
        <p>Total Today</p>
      </div>
      <div className={styles.statisticsItem}>
        <CircularProgressbarWithChildren
          minValue={0}
          value={dailyAverage || 0}
          maxValue={dailyGoal}
          text={dailyAverage || '0'}
          styles={buildStyles({
            trailColor: '#f3f3f5',
            pathColor: colorPicker(dailyGoal, dailyAverage || 0),
            textColor: colorPicker(dailyGoal, dailyAverage || 0),
          })}
        >
          <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
        </CircularProgressbarWithChildren>
        <p>Average / Day</p>
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
