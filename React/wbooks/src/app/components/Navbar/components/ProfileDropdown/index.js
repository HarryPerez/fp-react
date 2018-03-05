import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as sessionActions from '../../../../../redux/session/actions';

import ProfileDropdown from './layout.js';

class ProfileDropdownContainer extends Component {
  handleSessionClick = event => this.props.dispatch(sessionActions.closeSession());

  render() {
    return <ProfileDropdown isLogged={this.props.isLogged} onSessionClick={this.handleSessionClick}/>
  }
}

const mapStateToProps = state => (
  { isLogged: state.session.isLogged }
);

export default connect(mapStateToProps)(ProfileDropdownContainer);
