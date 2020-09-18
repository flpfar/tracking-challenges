import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout, updateGoal } from '../../actions/user';
import Layout from '../../components/Layout';
import styles from './styles.module.css';


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
    <Layout current="Profile">
      <div className={styles.ProfileContainer}>
        <div className={styles.userInfo}>
          <p className={styles.userName}>{user.name}</p>
          <p>Email: <span>{user.email}</span></p>
          <p>Days worked: <span>{user.total_working_days}</span></p>
          <p>Total challenges: <span>{user.total_challenges}</span></p>
        </div>
        <div className={styles.goalFormContainer}>
          <h3>Daily goal</h3>
          <form onSubmit={handleGoalSubmit}>
            <div className={styles.goalController}>
              <button type="button" className={[styles.addSubBtn, styles.subBtn].join(' ')} value="-" onClick={handleAddOrSubtractButtonClick} disabled={ inputGoal <= 1 ? true : false }>-</button>
              <input type="number" value={inputGoal} min="1" onChange={(e) => setInputGoal(parseInt(e.target.value))} required />
              <button type="button" className={[styles.addSubBtn, styles.addBtn].join(' ')} value="+" onClick={handleAddOrSubtractButtonClick} >+</button>
            </div>
            <button type="submit" disabled={user.daily_goal !== inputGoal ? false : true } >Set goal</button>
          </form>
        </div>
        <div className={styles.logoutContainer}>
          <button type="button" onClick={handleLogout}>Log out</button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
