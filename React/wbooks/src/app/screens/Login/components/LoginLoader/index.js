import React from 'react';
import { Redirect } from 'react-router';

const LoginLoader = (Component) => {
  return function LoadingComponent({ isLogged, ...props }) {
    if (!isLogged) return (<Component {...props} />);
    return (
      <Redirect to='/dashboard'/>
    );
  }
}

export default LoginLoader;
