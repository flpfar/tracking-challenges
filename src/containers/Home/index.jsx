import React, { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../api';
import MetricsForm from '../../components/MetricsForm';
import Loading from '../../components/Loading';
import Layout from '../../components/Layout';
import { updateTotals } from '../../actions/user';
import MetricButton from '../../components/MetricButton';
import styles from './styles.module.css';
import Statistics from '../../components/Statistics';
import ErrorPage from '../../components/ErrorPage';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user);
  const [today, setToday] = useState({});
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const [currentMetric, setCurrentMetric] = useState('');
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setLoading(true);
    api.get('/today')
      .then(async response => {
        const { day } = response.data;
        setApiError(false);
        setToday(day);
      })
      .catch(() => {
        setApiError(true);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  function handleVisibleMetrics(type) {
    setCurrentMetric(type);
    setVisibleMetrics(true);
  }

  function submitMetrics(metric, value) {
    api.patch('/today', { [metric]: value })
      .then(response => {
        const { day, user } = response.data;
        dispatch(updateTotals(user));
        setToday(day);
        setApiError(false);
      })
      .catch(() => {
        setApiError(true);
      });
  }

  function handleMetricsSubmit(event) {
    event.preventDefault();
    const { value } = event.target[0];
    const metric = event.target[0].name;
    setVisibleMetrics(false);
    submitMetrics(metric, value);
  }

  function totalToday() {
    return today.reviewed + today.learned;
  }

  if (loading) {
    return <Loading />;
  }

  if (apiError) {
    return <ErrorPage />;
  }

  return (
    <Layout current="Track it">
      { visibleMetrics ? (
        <MetricsForm
          handleMetricsSubmit={handleMetricsSubmit}
          metric={currentMetric}
          metricValue={today[currentMetric]}
          setVisibleMetrics={setVisibleMetrics}
        />
      ) : (
        <div>
          <Statistics
            todayDate={today.date}
            totalChallenges={user.total_challenges}
            dailyGoal={user.daily_goal}
            totalToday={totalToday()}
            dailyAverage={Math.round((user.total_challenges / user.total_working_days) * 10) / 10}
          />

          <div className={styles.metricsGrid}>
            <MetricButton handleVisibleMetrics={handleVisibleMetrics} label="reviewed" metrics={today.reviewed} />
            <MetricButton handleVisibleMetrics={handleVisibleMetrics} label="learned" metrics={today.learned} />
          </div>

        </div>
      )}
    </Layout>
  );
};

export default Home;
