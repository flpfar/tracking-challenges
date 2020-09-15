import React, { useEffect, useState } from 'react';
import api from '../../api';
import Navbar from '../../components/Navbar';

const Progress = () => {
  const [days, setDays] = useState([]);

  useEffect(() => {
    api.get('/days')
      .then(response => {
        setDays(response.data.days);
      })
      .catch(error => {
        console.dir(error);
      });
  }, [])

  return (
    <>
      <section>
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