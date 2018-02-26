import React, { Component } from 'react';
import { Redirect } from 'react-router';

import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';
import { emailRegex, passwordRegex } from '../../../../../utils/regexs';
import retrieveUserData from '../../../../../services/authService.js';

import LoginError from './components/LoginError/index.js';
import styles from './styles.scss';

class LoginForm extends Component {
  state = { name: '', password: '' , hasErrors: ''};

  handleNameInput = event => {
    this.setState({ name : event.target.value });
  }

  handlePasswordInput = event => {
    this.setState({ password : event.target.value });
  }

  validateUser = async () => {
    await retrieveUserData(this.state.name, this.state.password).then(() => {window.location.reload()})
    .catch(() => this.setState({ hasErrors : 'El email y password ingresados no estan registrados en nuestra base de datos.' }));
  }

  handleSubmit = event => {
    if(this.state.name === '' || this.state.password === ''){
      this.setState({ hasErrors : 'Ambos campos son requeridos' });
    }else if(!emailRegex.test(this.state.name)){
      this.setState({ hasErrors : 'El email ingresado no es correcto' });
    }else if(!passwordRegex.test(this.state.password)){
      this.setState({ hasErrors : 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero.' });
    }else {
      this.validateUser();
    }
  }

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dataContainer}>
          <img src={userIcon} className={styles.icon} alt='userIcon' />
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Username' onChange={this.handleNameInput}/>
        </div>
        <div className={styles.dataContainer}>
          <img src={passwordIcon} className={styles.icon} alt='passwordIcon' />
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password' onChange={this.handlePasswordInput}/>
        </div>
        <div className={styles.loginButton} onClick={this.handleSubmit}>
          <h1 className={styles.loginText}>Login</h1>
        </div>
        {this.state.hasErrors && <LoginError errors={this.state.hasErrors}/>}
      </div>
    );
  }
}

export default LoginForm;
