import React from 'react';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.css';

const Statistics = ({ todayDate, totalChallenges, dailyGoal, totalToday, dailyAverage }) => {
  return (
    <div className={styles.statisticsContainer}>
      <p>{todayDate}</p>
      <div className={styles.statisticsInfo}>
        <div>
          <CircularProgressbarWithChildren
            minValue="0"
            maxValue={totalChallenges}
            value={totalChallenges}
            text={totalChallenges}
            styles={buildStyles({
              pathColor: '#00CC00',
              textColor: '#00CC00',
            })}>
              <span className={styles.perMetric}>Solved</span>
            </CircularProgressbarWithChildren>
          <p>Total Challenges</p>
        </div>
        <div>
          <CircularProgressbarWithChildren minValue={0} value={totalToday} maxValue={dailyGoal}  text={totalToday}>
            <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
          </CircularProgressbarWithChildren>
          <p>Total Today</p>
        </div>
        <div>
          <CircularProgressbarWithChildren maxValue={dailyGoal} value={dailyAverage} text={dailyAverage}>
            <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
          </CircularProgressbarWithChildren>
          <p>Averge / Day</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;