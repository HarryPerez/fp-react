import React, { Component } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';

import ErrorContainer from '../../../../components/ErrorContainer';

import styles from './styles.scss';

class SignupForm extends Component {
  state = { name: '', password: '', confirmPassword: '', firstName: '', lastName: '', hasErrors: '', registeredSuccesfully: '' };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,52}$/;
  stringRegex = /^[a-zA-Z]+$/;

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

  registerUser = () =>{
    const me = this;
    axios.post('https://wbooks-api-stage.herokuapp.com/api/v1/users', {
      user: {
        email: this.state.name,
        password: this.state.password,
        confirm_password: this.state.confirmPassword,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        locale: 'en'
      }
    })
    .then(function (response) {
      console.log(response);
      me.setState({ hasErrors : '' });
      me.setState({ registeredSuccesfully: true });
    })
    .catch(function (error) {
      console.log(error);
      me.setState({ hasErrors : 'El email ya esta registrado en nuestra base de datos' });
    });
  }

  handleSubmit = () => {
    if(this.state.name === '' || this.state.password === '' || this.state.confirmPassword === '' || this.state.firstName === '' || this.state.lastName === ''){
      this.setState({ hasErrors : 'Todos los campos son requeridos' });
    }else if(!this.emailRegex.test(this.state.name)){
      this.setState({ hasErrors : 'El email ingresado no es correcto' });
    }else if(!this.passwordRegex.test(this.state.password)){
      this.setState({ hasErrors : 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero' });
    }else if(this.state.password !== this.state.confirmPassword){
      this.setState({ hasErrors : 'La contraseña ingresada debe coincidir con la confirmacion de la contraseña' });
    }else if(!this.stringRegex.test(this.state.firstName) || !this.stringRegex.test(this.state.lastName)){
      this.setState({ hasErrors : 'Los campos primer y segundo nombre deben contener solo letras' });
    }else {
      this.registerUser();
    }
  }

  render() {
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
        {this.state.hasErrors && <ErrorContainer errors={this.state.hasErrors}/>}
        {this.state.registeredSuccesfully && <Redirect push to="/" />}
      </div>
    );
  }
}

export default SignupForm;
