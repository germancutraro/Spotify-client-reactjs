import React from 'react';
// Router
import { Route, Switch } from 'react-router-dom';
import AuthRoute from './AuthRoute';
// Views Component
import Login from '../Auth/Login';
import Songs from '../Songs/Songs';

const App = () => (
  <Switch>
    <Route exact path='/' component={Login} />
    <AuthRoute exact path='/app' component={Songs} />
  </Switch>
);

export default App;
