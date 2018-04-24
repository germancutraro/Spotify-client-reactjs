import React from 'react';
// Views Component
import Home from '../components/Layout/Home/Home';
import Player from '../components/Layout/Player/Player';
// Router
import { Route, Router } from 'react-router'

const Routes = props => {
  return (
    <Router history={ props.history }>
      <div>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/player/:songId" component={ Player }/>
      </div>
  </Router>
  );
};

export default Routes;