import React, { useEffect, useState } from 'react';
import api from '../../api';
import Navbar from '../../components/Navbar';
import Loading from '../../components/Loading';
import Header from '../../components/Header';

const Progress = () => {
  const [days, setDays] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api.get('/days')
      .then(response => {
        setDays(response.data.days);
      })
      .catch(error => {
        console.dir(error);
      })
      .then(() => {
        setLoading(false);
      });
  }, []);

  if(loading) {
    return <Loading />
  }

  return (
    <>
      <section>
        <Header title="Progress" />
        <ul>
          {
            days.map(day => (
              <li key={day.date}>{day.date}</li>
            ))
          }
        </ul>
      </section>
      <Navbar />
    </>
  );
}

export default Progress;