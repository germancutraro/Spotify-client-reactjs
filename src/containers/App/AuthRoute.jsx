import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector(({ auth: { isAuth } }) => isAuth);

  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to='/' />
      }
    />
  );
};

export default AuthRoute;
