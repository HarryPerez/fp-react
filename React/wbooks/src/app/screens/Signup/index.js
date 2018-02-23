import React, { Component } from 'react';

import signupPicture from '../../assets/wbooks_logo.svg';

import SignupForm from './components/SignupForm/index.js';
import styles from './styles.scss';

class Signup extends Component {
  render() {
    return (
      <div className={styles.signupContainer}>
        <div className={styles.signup}>
          <div className={styles.pictureContainer}>
            <img src={signupPicture} className={styles.signupPicture} alt='signupPicture'/>
          </div>
          <SignupForm/>
        </div>
      </div>
    );
  }
}

export default Signup;
