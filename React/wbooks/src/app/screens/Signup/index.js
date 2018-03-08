import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import signupPicture from '../../assets/wbooks_logo.svg';

import SignupForm from './components/SignupForm';
import styles from './styles.scss';

class Signup extends Component {
  backTitle = '<Volver';

  render() {
    return (
      <div className={styles.signupContainer}>
        <Link className={styles.backLink} to="/dashboard" href="/dashboard">
          {this.backTitle}
        </Link>
        <div className={styles.signup}>
          <div className={styles.pictureContainer}>
            <img src={signupPicture} className={styles.signupPicture} alt="signupPicture" />
          </div>
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default Signup;
