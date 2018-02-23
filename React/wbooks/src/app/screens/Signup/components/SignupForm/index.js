import React, { Component } from 'react';

import ErrorContainer from '../../../../components/ErrorContainer';

import styles from './styles.scss';

class SignupForm extends Component {
  state = {hasErrors: '' };

  render() {
    return (
      <div className={styles.inputContainer}>
        <div className={styles.dataContainer}>
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Username'/>
        </div>
        <div className={styles.dataContainer}>
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Password'/>
        </div>
        <div className={styles.dataContainer}>
          <input type='password' className={`${styles.input} ${styles.inputText}`} placeholder='Confirm password'/>
        </div>
        <div className={styles.dataContainer}>
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Firstname'/>
        </div>
        <div className={styles.dataContainer}>
          <input className={`${styles.input} ${styles.inputText}`} placeholder='Lastname'/>
        </div>
        <div className={styles.signupButton} onClick={this.handleSubmit}>
          <h1 className={styles.signupText}>Registrar</h1>
        </div>
        {this.state.hasErrors && <ErrorContainer errors={this.state.hasErrors}/>}
      </div>
    );
  }
}

export default SignupForm;
