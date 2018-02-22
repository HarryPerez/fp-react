import React, { Component } from 'react';

import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';
import styles from './styles.scss';

class LoginInput extends Component {


  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dataContainer}>
          <img src={userIcon} className={styles.icon} alt='userIcon' />
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Username'/>
        </div>
        <div className={styles.dataContainer}>
          <img src={passwordIcon} className={styles.icon} alt='passwordIcon' />
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password'/>
        </div>
        <div className={styles.loginButton}>
          <h1 className={styles.loginText}>Login</h1>
        </div>
      </div>
    );
  }
}

export default LoginInput;
