import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, updateGoal } from '../../actions/user';
import Navbar from '../../components/Navbar';
import Header from '../../components/Header';


const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userData.user )
  const [inputGoal, setInputGoal] = useState(user.daily_goal);

  function handleGoalSubmit(e){
    e.preventDefault();
    dispatch(updateGoal(inputGoal));
  }

  function handleAddOrSubtractButtonClick(e){
    const operator = e.target.value;
    if(operator === '-') {
      setInputGoal(inputGoal - 1)
    } else {
      setInputGoal(inputGoal + 1)
    }
  }

  function handleLogout(){
    dispatch(logout());
  }

  return (
    <> 
      <section>
        <Header title="Profile" />

        <p>{user.name}</p>
        <p>{user.email}</p>

        <form onSubmit={handleGoalSubmit}>
          <button type="button" value="-" onClick={handleAddOrSubtractButtonClick} disabled={ inputGoal <= 1 ? true : false }>-</button>
          <input type="number" value={inputGoal} min="1" onChange={(e) => setInputGoal(parseInt(e.target.value))} />
          <button type="button" value="+" onClick={handleAddOrSubtractButtonClick} >+</button>
          { user.daily_goal !== inputGoal ? <button type="submit">Set goal</button> : null }
        </form>

        <button type="button" onClick={handleLogout}>Logout</button>
      </section>
      <Navbar />
    </>
  );
};

export default Profile;
