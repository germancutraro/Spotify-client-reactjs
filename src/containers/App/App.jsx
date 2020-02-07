import React from 'react';
// Router
import { Route, Switch } from 'react-router-dom';
// Views Component
import Songs from '../Songs/Songs';

const App = () => (
  <Switch>
    <Route exact path='/' component={Songs} />
  </Switch>
);

export default App;
