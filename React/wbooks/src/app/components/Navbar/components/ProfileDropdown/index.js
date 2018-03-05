import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import * as sessionActions from '../../../../../redux/session/actions';

import ProfileDropdown from './layout.js';

class ProfileDropdownContainer extends Component {
  handleSessionClick = event => this.props.dispatch(sessionActions.closeSession());

  render() {
    return <ProfileDropdown isLogged={this.props.isLogged} onSessionClick={this.handleSessionClick}/>
  }
}

const getIsLogged = createSelector(
  [state => state.session.isLogged],
  (isLogged) => isLogged
)

const mapStateToProps = state => (
  { isLogged: getIsLogged(state) }
);

export default connect(mapStateToProps)(ProfileDropdownContainer);
