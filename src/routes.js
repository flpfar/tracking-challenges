import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './containers/Home';
import Progress from './containers/Progress';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Profile from './containers/Profile';
import About from './containers/About';

const Routes = () => {
  const loggedIn = useSelector(state => state.userData.loggedIn);

  return (<BrowserRouter>
    <Switch>
      <Route path="/" exact>
        { loggedIn ? <Home /> : <Redirect to="/login" /> }
      </Route>

      <Route path="/progress">
        { loggedIn ? <Progress /> : <Redirect to="/login" /> }
      </Route>

      <Route path="/profile">
        { loggedIn ? <Profile /> : <Redirect to="/login" /> }
      </Route>

      <Route path="/about">
        { loggedIn ? <About /> : <Redirect to="/login" /> }
      </Route>

      <Route path="/login">
        { loggedIn ? <Redirect to="/" /> : <Login /> }
      </Route>

      <Route path="/signup">
        { loggedIn ? <Redirect to="/" /> : <SignUp /> }
      </Route>

      <Redirect to="/" />
    </Switch>
  </BrowserRouter>)
};

export default Routes;
