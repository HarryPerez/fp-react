import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AccessError from '../../../../components/AccessError/index.js';
import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';
import LoginLoader from '../LoginLoader';

import styles from './styles.scss';

class LoginForm extends Component {
  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dataContainer}>
          <img src={userIcon} className={styles.icon} alt='userIcon' />
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Username' onChange={this.props.handleUserNameInput}/>
        </div>
        <div className={styles.dataContainer}>
          <img src={passwordIcon} className={styles.icon} alt='passwordIcon' />
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password' onChange={this.props.handlePasswordInput}/>
        </div>
        <div className={styles.loginButton} onClick={this.props.handleSubmit}>
          <h1 className={styles.loginText}>Login</h1>
        </div>
        <div className={styles.signupContainer}>
          <Link className={styles.signupText} to='/signup'>
            Not a member?
          </Link>
        </div>
        {this.props.hasErrors && <AccessError errors={this.props.hasErrors}/>}
      </div>
    );
  }
}

export default LoginLoader(LoginForm);
