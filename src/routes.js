import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from './containers/Home';
import Login from './containers/Login';
import SignUp from './containers/SignUp';

const Routes = () => {
  const loggedIn = useSelector(state => state.userData.loggedIn);

  return (<BrowserRouter>
    <Switch>
      <Route path="/" exact>
        { loggedIn ? <Home /> : <Redirect to="/login" /> }
      </Route>
      <Route path="/login" exact>
        { loggedIn ? <Redirect to="/" /> : <Login /> }
      </Route>
      <Route path="/signup" exact>
        { loggedIn ? <Redirect to="/" /> : <SignUp /> }
      </Route>
    </Switch>
  </BrowserRouter>)
};

export default Routes;
