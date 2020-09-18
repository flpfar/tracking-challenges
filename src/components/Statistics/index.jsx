import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styles from './styles.module.css';

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

const Statistics = ({ todayDate, totalChallenges, dailyGoal, totalToday, dailyAverage }) => {
  const day = new Date(todayDate);

  return (
    <div className={styles.statisticsContainer}>
      <p>{`${day.getDay()} ${monthNames[day.getMonth()]} ${day.getFullYear()}`} </p>
      <div className={styles.statisticsGrid}>
        <div className={styles.statisticsItem}>
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
        <div className={styles.statisticsItem}>
          <CircularProgressbarWithChildren
            minValue={0}
            value={totalToday}
            maxValue={dailyGoal}
            text={totalToday}
            styles={buildStyles({
              pathColor: `${totalToday >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
              textColor: `${totalToday >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
            })}>
            <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
          </CircularProgressbarWithChildren>
          <p>Total Today</p>
        </div>
        <div className={styles.statisticsItem}>
          <CircularProgressbarWithChildren
            maxValue={dailyGoal}
            value={dailyAverage}
            text={dailyAverage}
            styles={buildStyles({
              pathColor: `${dailyAverage >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
              textColor: `${dailyAverage >= dailyGoal ? '#00CC00' : '#3E99C7'}`,
            })}>
            <span className={styles.perMetric}>{`Goal: ${dailyGoal}`}</span>
          </CircularProgressbarWithChildren>
          <p>Averge / Day</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;