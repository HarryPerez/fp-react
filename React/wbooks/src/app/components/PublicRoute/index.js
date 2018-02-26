import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

class PrivateRoute extends Component {
  render() {
    if(!sessionStorage.getItem('user')){
      return <Route component={this.props.component}/>;
    }else{
      return <Redirect to='/dashboard'/>
    }
  }
}

export default PrivateRoute;
