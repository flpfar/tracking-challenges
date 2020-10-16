import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from '../../components/Layout';
import { login, clearErrors } from '../../actions/user';
import styles from './styles.module.css';

const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ user: { email, password } }));
  }

  return (
    <Layout current="Tracking Challenges" footer>
      <div className={styles.Login}>
        <div className={styles.LoginContainer}>
          <h2>Log In</h2>

          <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
            <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
            <button type="submit">Log In</button>
          </form>

          <p className={styles.error}>{ userData.errors }</p>
        </div>
        <Link to="/signup" className={styles.signupLink} onClick={() => dispatch(clearErrors())}>Sign Up</Link>
      </div>
    </Layout>
  );
};

export default Login;
