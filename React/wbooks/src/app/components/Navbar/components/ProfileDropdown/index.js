import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as sessionActions from '../../../../../redux/session/actions';

import ProfileDropdown from './layout.js';

class ProfileDropdownContainer extends Component {
  render() {
    console.log(sessionActions.closeSession());
    return <ProfileDropdown isLogged={this.props.isLogged} onSessionClick={this.props.closeSession}/>
  }
}

const mapStateToProps = state => (
  { isLogged: state.session.isLogged }
);

const mapDispatchToProps = dispatch => (
  { closeSession: () => dispatch(sessionActions.closeSession()) }
)

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdownContainer);
