import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import api from '../../api';
import Navbar from '../../components/Navbar';


const Profile = () => {
  const user = useSelector(state => state.userData.user )
  const [inputGoal, setInputGoal] = useState(user.daily_goal);

  function handleGoalSubmit(){
    api.patch('/daily_goal', { daily_goal: inputGoal })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }

  function handleAddOrSubtractButtonClick(e){
    const operator = e.target.value;
    if(operator === '-') {
      setInputGoal(inputGoal - 1)
    } else {
      setInputGoal(inputGoal + 1)
    }
  }

  return (
    <> 
      <section>
        <h1>Profile</h1>
        <p>{user.name}</p>
        <p>{user.email}</p>

        <form onSubmit={handleGoalSubmit}>
          <button type="button" value="-" onClick={handleAddOrSubtractButtonClick} disabled={ inputGoal <= 1 ? true : false }>-</button>
          <input type="number" value={inputGoal} min="1" onChange={(e) => setInputGoal(parseInt(e.target.value))} />
          <button type="button" value="+" onClick={handleAddOrSubtractButtonClick} >+</button>
          { user.daily_goal !== inputGoal ? <button type="submit">Set goal</button> : null }
        </form>
      </section>
      <Navbar />
    </>
  );
};

export default Profile;
