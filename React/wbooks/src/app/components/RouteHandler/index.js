import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from '../Navbar/index.js'
import * as localstorageService from '../../../services/localstorageService';

class RouteHandler extends Component {
  validateAuth = props => {
    return localstorageService.retrieveUserTokenFromLocalStorage();
  };

  isPublicRequest = props => {
    return props.location.pathname === '/' || props.location.pathname === '/signup';
  };

  render(){
    const  { component: Component, ...rest } = this.props;
    return(
      <Route
        {...rest}
        render={ props =>
          this.validateAuth(props) ? (
            this.isPublicRequest(props) ? <Redirect to='/dashboard'/> : <div><Navbar/><Component {...props}/></div>
          ) : (
            !this.isPublicRequest(props) ? <Redirect to='/'/> : <Component {...props}/>
          )
        }
      />);
    }
}

export default RouteHandler;
