import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/user';

const Login = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(login({ user: { email, password } }));
  }

  return (
    <div className="">
      <h1>Login</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Submit</button>
      </form>

      <p>{ userData.errors }</p>
    </div>
  );
}

export default Login;