import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ Home } exact />
      <Route path="/login" component={ Login } exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
