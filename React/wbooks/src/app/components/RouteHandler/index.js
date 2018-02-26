import React from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import localStorageService from '../../../services/localstorageService';

const validateAuth = (props) => {
  return localStorageService.retrieveUserFromLocalStorage();
};

const isPublicRequest = (props) => {
  return props.location.pathname === '' || props.location.pathname === '/';
};

const RouteHandler = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      validateAuth(props) ? (
        isPublicRequest(props) ? <Redirect to='/dashboard'/> : <Component {...props}/>
      ) : (
        !isPublicRequest(props) ? <Redirect to='/'/> : <Component {...props}/>
      )
    }
  />
);

export default RouteHandler;
