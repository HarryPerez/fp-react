import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as sessionActions from '../../../../../redux/session/actions';

import ProfileDropdown from './layout';

const ProfileDropdownContainer = props => (
  <ProfileDropdown isLogged={props.isLogged} onSessionClick={props.closeSession} />
);

const mapStateToProps = state => ({ isLogged: state.session.isLogged });

const mapDispatchToProps = dispatch => ({ closeSession: () => dispatch(sessionActions.closeSession()) });

ProfileDropdownContainer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  closeSession: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdownContainer);
