import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import MetricsForm from '../../components/MetricsForm';
import Navbar from '../../components/Navbar';

const Home = () => {
  const user = useSelector(state => state.userData.user);
  const [today, setToday] = useState({});
  const [visibleMetrics, setVisibleMetrics] = useState(false);
  const [currentMetric, setCurrentMetric] = useState('');

  useEffect(() => {
    api.get('/today')
      .then(response => {
        const { day } = response.data
        setToday(day);
      })
      .catch(error => {
        console.dir(error);
      });
  }, [])

  function handleVisibleMetrics(type) {
    setCurrentMetric(type);
    setVisibleMetrics(true);
  }

  function submitMetrics(metric, value) {
    api.patch('/today', { [metric]: value } )
      .then(response => {
        const { day } = response.data
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
      { visibleMetrics ? 
        <div>
          <MetricsForm handleMetricsSubmit={handleMetricsSubmit} metric={currentMetric} metricValue={today[currentMetric]} />

          <button onClick={() => setVisibleMetrics(false)}>Voltar</button>
        </div> :
        <div>
          <h1>Hello, {user.name}!</h1>
          <p>Today is: {today.date}</p>
          <button onClick={() => handleVisibleMetrics('learned')}>Learned: {today.learned}</button>
          <button onClick={() => handleVisibleMetrics('reviewed')}>Reviewed: {today.reviewed}</button>

        </div>
      }
      <Navbar />
    </div>
  );
};

export default Home;