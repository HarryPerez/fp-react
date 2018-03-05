import React from 'react';
import { Redirect } from 'react-router';

const SessionLoader = (Component) => {
  return function LoadingComponent({ isLogged, ...props }) {
    if (!isLogged) return (<Component {...props} />);
    return (
      <Redirect to='/'/>
    );
  }
}

export default SessionLoader;
