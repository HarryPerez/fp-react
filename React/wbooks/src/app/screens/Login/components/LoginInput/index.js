import React, { Component } from 'react';

import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';

import LoginError from './LoginError/index.js';
import styles from './styles.scss';

class LoginInput extends Component {
  state = { name: '', password: '' , hasErrors: '' };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,52}$/;

  handleNameInput = event => {
    this.setState({ name : event.target.value });
  }

  handlePasswordInput = event => {
    this.setState({ password : event.target.value });
  }

  validatePassword = () => {

  }

  handleSubmit = event => {
    if(this.state.name === '' || this.state.password === ''){
      this.setState({ hasErrors : 'Ambos campos son requeridos' });
    }else if(!this.emailRegex.test(this.state.name)){
      this.setState({ hasErrors : 'El email ingresado no es correcto' });
    }else if(!this.passwordRegex.test(this.state.password)){
      this.setState({ hasErrors : 'La contraseña ingresada debe tener entre 8 y 52 caracteres, y una letra y numero.' });
    }else {
      this.setState({ hasErrors : '' });
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
        {this.state.hasErrors ? <LoginError errors={this.state.hasErrors} /> : null}
      </div>
    );
  }
}

export default LoginInput;
