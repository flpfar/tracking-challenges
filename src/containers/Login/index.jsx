import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function fetchData(user) {
    try {
      const response = await axios.post(`http://localhost:3001/api/login`, user);
      console.log(response)
    } catch (error) {

    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const user = { user: {email, password}}
    fetchData(user);
  }

  return (
    <div className="">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" name="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;