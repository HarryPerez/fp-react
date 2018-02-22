import React, { Component } from 'react';

import loginPicture from '../../assets/wbooks_logo.svg';

import LoginInput from './components/LoginInput';
import styles from './styles.scss';

class Login extends Component {
  render() {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.login}>
          <div className={styles.pictureContainer}>
            <img src={loginPicture} className={styles.loginPicture} alt='loginPicture'/>
          </div>
          <LoginInput/>
        </div>
      </div>
    );
  }
}

export default Login;
