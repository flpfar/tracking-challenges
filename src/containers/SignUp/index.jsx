import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../../actions/user';

const SignUp = () => {
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(signUp({ user: { name, email, password } }));
  }

  return (
    <div className="">
      <h1>SignUp</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Submit</button>
      </form>

      <p>{ userData.errors }</p>
    </div>
  );
}

export default SignUp;