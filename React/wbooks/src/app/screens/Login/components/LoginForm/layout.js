import React from 'react';
import { Link } from 'react-router-dom';

import AccessError from '../../../../components/AccessError/index.js';
import userIcon from '../../../../assets/user_icon.png';
import passwordIcon from '../../../../assets/password.png';
import SessionLoader from '../../../../components/SessionLoader/index.js';

import styles from './styles.scss';

const LoginForm = (props) => (
  <div className={styles.inputContainer}>
    <div className={styles.dataContainer}>
      <img src={userIcon} className={styles.icon} alt='userIcon' />
      <input className={`${styles.input} ${styles.inputText}`} placeholder='Username' onChange={props.handleUserNameInput}/>
    </div>
    <div className={styles.dataContainer}>
      <img src={passwordIcon} className={styles.icon} alt='passwordIcon' />
      <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password' onChange={props.handlePasswordInput}/>
    </div>
    <div className={styles.loginButton} onClick={props.handleSubmit}>
      <h1 className={styles.loginText}>Login</h1>
    </div>
    <div className={styles.signupContainer}>
      <Link className={styles.signupText} to='/signup'>
        Not a member?
      </Link>
    </div>
    {props.hasErrors && <AccessError errors={props.hasErrors}/>}
  </div>
);

export default SessionLoader(LoginForm);
