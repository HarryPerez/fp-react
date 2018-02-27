import React, { Component } from 'react';
import { Redirect } from 'react-router';

import AccessError from '../../../../components/AccessError';
import regexs from '../../../../../utils/regexs';
import {registerUser} from '../../../../../services/authService';

import styles from './styles.scss';

class SignupForm extends Component {
  state = { name: '', password: '', confirmPassword: '', firstName: '', lastName: '', hasErrors: '', registeredSuccesfully: '' };

  handleNameInput = event => {
    this.setState({ name : event.target.value });
  }

  handlePasswordInput = event => {
    this.setState({ password : event.target.value });
  }

  handleConfirmPasswordInput = event => {
    this.setState({ confirmPassword : event.target.value });
  }

  handleFirstName = event => {
    this.setState({ firstName : event.target.value });
  }

  handleLastName = event => {
    this.setState({ lastName : event.target.value });
  }

  registerUser = async () => {
    await registerUser(this.state.name, this.state.password, this.state.confirmPassword, this.state.firstName, this.state.lastName).then(() => {this.setState({ registeredSuccesfully : true })})
    .catch(() => this.setState({ hasErrors : 'El email y password ingresados no estan registrados en nuestra base de datos.' }));
  }

  handleSubmit = () => {
    if(this.state.name === '' || this.state.password === '' || this.state.confirmPassword === '' || this.state.firstName === '' || this.state.lastName === ''){
      this.setState({ hasErrors : 'Todos los campos son requeridos' });
    }else if(!regexs.isValidEmail(this.state.name)){
      this.setState({ hasErrors : 'El email ingresado no es correcto' });
    }else if(!regexs.isValidPassword(this.state.password)){
      this.setState({ hasErrors : 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero' });
    }else if(this.state.password !== this.state.confirmPassword){
      this.setState({ hasErrors : 'La contraseña ingresada debe coincidir con la confirmacion de la contraseña' });
    }else if(!regexs.isString(this.state.firstName) || !regexs.isString(this.state.lastName)){
      this.setState({ hasErrors : 'Los campos primer y segundo nombre deben contener solo letras' });
    }else {
      this.registerUser();
    }
  }

  render() {
    if(this.state.registeredSuccesfully){
      return <Redirect to='/'/>;
    }else{
      return (
        <div className={styles.inputContainer}>
          <div className={styles.dataContainer}>
            <input className={`${styles.input} ${styles.inputText}`} placeholder='Username' onChange={this.handleNameInput}/>
          </div>
          <div className={styles.dataContainer}>
            <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password' onChange={this.handlePasswordInput}/>
          </div>
          <div className={styles.dataContainer}>
            <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Confirm password' onChange={this.handleConfirmPasswordInput}/>
          </div>
          <div className={styles.dataContainer}>
            <input className={`${styles.input} ${styles.inputText}`} placeholder='Firstname' onChange={this.handleFirstName}/>
          </div>
          <div className={styles.dataContainer}>
            <input className={`${styles.input} ${styles.inputText}`} placeholder='Lastname' onChange={this.handleLastName}/>
          </div>
          <div className={styles.signupButton} onClick={this.handleSubmit}>
            <h1 className={styles.signupText}>Registrar</h1>
          </div>
          {this.state.hasErrors && <AccessError errors={this.state.hasErrors}/>}
        </div>
      );
    }
  }
}

export default SignupForm;
