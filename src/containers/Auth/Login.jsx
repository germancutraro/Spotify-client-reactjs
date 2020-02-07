import React from 'react';
// redux
import { useDispatch } from 'react-redux';
import { signIn } from './authActions';

const Login = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(signIn());
  };
  return (
    <div>
      <h1>Spotify</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
