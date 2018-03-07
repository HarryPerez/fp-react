import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from '../Navbar/index.js'
import * as localstorageService from '../../../services/localstorageService';

class RouteHandler extends Component {
  isPublicRequest = props => props.location.pathname === '/' || props.location.pathname === '/signup';

  render(){
    const  { component: Component, ...rest } = this.props;
    return(
      <Route
        {...rest}
        render={ props =>
          this.props.isLogged ? (
            this.isPublicRequest(props) ? <Redirect to='/dashboard'/> : <div><Navbar/><Component {...props}/></div>
          ) : (
            !this.isPublicRequest(props) ? <Redirect to='/'/> : <Component {...props}/>
          )
        }
      />);
    }
}

const mapStateToProps = state => (
  { isLogged: state.session.isLogged }
);

export default connect(mapStateToProps)(RouteHandler);
