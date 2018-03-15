import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as booksActions from '../../../../../redux/books/actions';
import * as sessionActions from '../../../../../redux/session/actions';

import ProfileDropdown from './layout';

const ProfileDropdownContainer = props => (
  <ProfileDropdown userId={props.userId} isLogged={props.isLogged} onSessionClick={props.closeSession} />
);

const mapStateToProps = state => ({
  isLogged: state.session.isLogged,
  userId: state.session.loggedUser.id
});

const mapDispatchToProps = dispatch => ({
  closeSession: () => {
    dispatch(booksActions.cleanBooks());
    dispatch(sessionActions.closeSession());
  }
});

ProfileDropdownContainer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  closeSession: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdownContainer);
