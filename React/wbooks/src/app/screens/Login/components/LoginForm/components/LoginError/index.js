import React, { Component } from 'react';

import errorIcon from '../../../../../../assets/error.png';

import styles from './styles.scss';

class LoginError extends Component {
  render() {
    return (
      <div className={styles.errorContainer}>
        <img src={errorIcon} className={styles.errorIcon} alt='errorIcon' />
        <div className={styles.messageContainer}>
          <p className={styles.errorText}>{this.props.errors}</p>
        </div>
      </div>
    );
  }
}

export default LoginError;
