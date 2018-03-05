import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import * as regexs from '../../../../../utils/regexs';
import * as sessionActions from '../../../../../redux/session/actions';

import LoginForm from './layout.js'

class LoginFormContainer extends Component {
  handleSubmit = () => {
    if(!this.props.hasErrors){
      this.props.handleSubmit(this.props.userName, this.props.password);
    }
  }

  render() {
    return <LoginForm isLogged={this.props.isLogged} hasErrors={this.props.hasErrors} handleUserNameInput={this.props.handleUserNameInput} handlePasswordInput={this.props.handlePasswordInput} handleSubmit={this.handleSubmit}/>
  }
}

const validateInput = createSelector(
  [state => state.session.userName,
  state => state.session.password,
  state => state.session.isLogged],
  (userName, password, isLogged) => {
    if(userName === '' || password === ''){
      return 'Ambos campos son requeridos.';
    }else if(!regexs.isValidEmail(userName)){
      return 'El email ingresado no es correcto.';
    }else if(!regexs.isValidPassword(password)){
      return 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero.';
    }else if(isLogged === false){
      return 'Los datos ingresados no figuran en nuestra base de datos.';
    }else{
      return '';
    }
  })

const mapStateToProps = state => (
  { isLogged: state.session.user,
    hasErrors: validateInput(state),
    userName: state.session.userName,
    password: state.session.password }
);

const mapDispatchToProps = (dispatch) => (
  { handleUserNameInput: event => dispatch(sessionActions.saveUserName(event.target.value)),
    handlePasswordInput: event => dispatch(sessionActions.savePassword(event.target.value)),
    handleSubmit: (userName, password) => dispatch(sessionActions.saveSession(userName, password)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);
