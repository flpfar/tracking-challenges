import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const userData = useSelector(state => state.userData);

  return (
    <div>
      <h1>Hello, {userData.user.name}!</h1>
    </div>
  );
};

export default Home;