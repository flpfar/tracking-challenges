import React, { useLayoutEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import api from '../../api';
import MetricsForm from '../../components/MetricsForm';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';
import { updateTotals } from '../../actions/user';

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user);
  const [today, setToday] = useState({});
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const [currentMetric, setCurrentMetric] = useState('');
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
    api.get('/today')
      .then(async response => {
        const { day } = response.data
        // await new Promise(resolve => setTimeout(resolve, 3000));
        setToday(day);
      })
      .catch(error => {
        console.dir(error);
      })
      .then(async() => {
        setLoading(false);
      });
  }, [])

  function handleVisibleMetrics(type) {
    setCurrentMetric(type);
    setVisibleMetrics(true);
  }

  function submitMetrics(metric, value) {
    api.patch('/today', { [metric]: value } )
      .then(response => {
        const { day, user } = response.data;
        dispatch(updateTotals(user));
        setToday(day);
      })
      .catch(error => {
        console.dir(error);
      });
  }

  function handleMetricsSubmit(event) {
    event.preventDefault();
    const value = event.target[0].value;
    const metric = event.target[0].name;
    setVisibleMetrics(false);
    submitMetrics(metric, value);
  }

  return (
    <div>
      { loading ? <Loading /> : null }
      { visibleMetrics ? (
        <div>
          <MetricsForm handleMetricsSubmit={handleMetricsSubmit} metric={currentMetric} metricValue={today[currentMetric]} />

          <button onClick={() => setVisibleMetrics(false)}>Voltar</button>
        </div> 
      ) : (
        <div>
          <h1>Hello, {user.name}!</h1>
          <p>Challenges: {user.total_challenges}</p>
          <p>Daily Goal: {user.daily_goal}</p>
          <p>Today is: {today.date}</p>
          <button onClick={() => handleVisibleMetrics('learned')}>Learned: {today.learned}</button>
          <button onClick={() => handleVisibleMetrics('reviewed')}>Reviewed: {today.reviewed}</button>

        </div>
      )}
      <Navbar />
    </div>
  );
};

export default Home;