import React from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from './authActions';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(({ auth }) => auth.isAuth);

  const history = useHistory();

  const handleClick = () => {
    dispatch(signIn());
  };

  if (isAuth) history.push('/app');

  return (
    <div>
      <h1>Spotify</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
