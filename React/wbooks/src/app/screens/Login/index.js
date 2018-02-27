import React, { Component } from 'react';

import loginPicture from '../../assets/wbooks_logo.svg';

import LoginForm from './components/LoginForm/index.js';
import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <div className={styles.pictureContainer}>
            <img src={loginPicture} className={styles.loginPicture} alt='loginPicture'/>
          </div>
          <LoginForm/>
        </div>
      </div>
    );
  }
}

export default Login;
