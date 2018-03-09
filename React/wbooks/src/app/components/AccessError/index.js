import React from 'react';
import PropTypes from 'prop-types';

import errorIcon from '../../assets/error.png';

import styles from './styles.scss';

const AccessError = props => (
  <div className={styles.errorContainer}>
    <img src={errorIcon} className={styles.errorIcon} alt="errorIcon" />
    <div className={styles.messageContainer}>
      <h1 className={styles.errorText}>{props.errors}</h1>
    </div>
  </div>
);

AccessError.propTypes = {
  errors: PropTypes.string.isRequired
};

export default AccessError;
