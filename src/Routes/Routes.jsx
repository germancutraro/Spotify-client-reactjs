import React from 'react';
// Views Component
import Home from '../components/Layout/Home/Home';
// Router
import { Route, Router } from 'react-router'

const Routes = props => {
  return (
    <Router history={ props.history }>
      <div>
        <Route exact path="/" component={ Home }/>
      </div>
  </Router>
  );
};

export default Routes;