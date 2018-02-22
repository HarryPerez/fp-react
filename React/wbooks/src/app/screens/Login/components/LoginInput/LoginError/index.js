import React, { Component } from 'react';

import errorIcon from '../../../../../assets/error.png';

import styles from './styles.scss';

class LoginError extends Component {
  render() {
    return (
      <div className={styles.errorContainer}>
        <img src={errorIcon} className={styles.errorIcon} alt='errorIcon' />
        <div className={styles.messageContainer}>
          <h1 className={styles.errorText}>{this.props.errors}</h1>
        </div>
      </div>
    );
  }
}

export default LoginError;
