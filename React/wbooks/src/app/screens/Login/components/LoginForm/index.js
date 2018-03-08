import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as regexs from '../../../../../utils/regexs';
import * as sessionActions from '../../../../../redux/session/actions';
import * as booksActions from '../../../../../redux/books/actions';

import LoginForm from './layout';

class LoginFormContainer extends Component {
  handleSubmit = async () => {
    const user = await this.props.handleSubmit(this.props.userName, this.props.password);
    this.props.loadBooks(user);
  };

  render() {
    return (
      <LoginForm
        hasErrors={this.props.hasErrors}
        handleUserNameInput={this.props.handleUserNameInput}
        handlePasswordInput={this.props.handlePasswordInput}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const validateInput = createSelector(
  [state => state.session.userName, state => state.session.password, state => state.session.loginFailed],
  (userName, password, loginFailed) => {
    if (userName === '' || password === '') {
      return 'Ambos campos son requeridos.';
    } else if (!regexs.isValidEmail(userName)) {
      return 'El email ingresado no es correcto.';
    } else if (!regexs.isValidPassword(password)) {
      return 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero.';
    } else if (loginFailed) {
      return 'Los datos ingresados no figuran en nuestra base de datos.';
    }
    return '';
  }
);

const mapStateToProps = state => ({
  isLogged: state.session.isLogged,
  loginFailed: state.session.loginFailed,
  hasErrors: validateInput(state),
  userName: state.session.userName,
  password: state.session.password
});

const mapDispatchToProps = dispatch => ({
  handleUserNameInput: event => dispatch(sessionActions.saveUserName(event.target.value)),
  handlePasswordInput: event => dispatch(sessionActions.savePassword(event.target.value)),
  handleSubmit: (userName, password) => dispatch(sessionActions.saveSession(userName, password)),
  loadBooks: user => dispatch(booksActions.fetchBooks(user))
});

LoginFormContainer.propTypes = {
  handleUserNameInput: PropTypes.func.isRequired,
  handlePasswordInput: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  loadBooks: PropTypes.func.isRequired,
  hasErrors: PropTypes.string,
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
