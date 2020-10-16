import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';
import styles from './styles.module.css';
import ProgressDayItem from '../../components/ProgressDayItem';
import ErrorPage from '../../components/ErrorPage';

const Progress = () => {
  const user = useSelector(state => state.userData.user);
  const [otherDays, setOtherDays] = useState([]);
  const [today, setToday] = useState({});
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.get('/days')
      .then(response => {
        const { days } = response.data;
        const apiToday = days.shift();
        setApiError(false);
        setToday(apiToday);
        setOtherDays(days);
      })
      .catch(() => {
        setApiError(true);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (apiError) {
    return <ErrorPage />;
  }

  return (
    <Layout current="Progress">
      {today ? (
        <>
          <div className={styles.todayContainer}>
            <p className={styles.separatorParagraph}>Last activity</p>
            <ProgressDayItem day={today} user={user} />
            <p className={styles.separatorParagraph}>Past days</p>
          </div>
          <ul className={styles.daysList}>
            { otherDays.map(day => (
              <li key={day.date}>
                <ProgressDayItem day={day} user={user} />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={styles.noProgress}>No progress to show yet</p>
      )}
    </Layout>
  );
};

export default Progress;
