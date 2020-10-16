import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUp, clearErrors } from '../../actions/user';
import Layout from '../../components/Layout';
import styles from './styles.module.css';

const SignUp = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp({ user: { name, email, password } }));
  }

  return (
    <Layout current="Tracking Challenges" footer>
      <div className={styles.SignUp}>
        <div className={styles.signupContainer}>
          <h2>Sign Up</h2>

          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" onChange={e => setName(e.target.value)} value={name} required />
            <input type="email" name="email" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} required />
            <input type="password" name="password" placeholder="Password" onChange={e => setPassword(e.target.value)} value={password} required />
            <button type="submit">Sign Up</button>
          </form>

          { userData.errors ? userData.errors.map(error => (
            <p className={styles.error} key={error}>{error}</p>
          )) : null }

        </div>
        <Link to="/login" className={styles.loginLink} onClick={() => dispatch(clearErrors())}>Login</Link>
      </div>
    </Layout>
  );
};

export default SignUp;
