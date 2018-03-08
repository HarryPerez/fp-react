import React from 'react';
import PropTypes from 'prop-types';

import notificationIcon from '../../../../assets/notifications.svg';

import styles from './styles.scss';

const NotificationIcon = props => (
  <div className={styles.iconContainer}>
    <button onClick={props.onClick} className={styles.buttonIcon}>
      <img src={notificationIcon} className={styles.notificationIcon} alt="notificationIcon" />
    </button>
    <div className={styles.notifContainer}>
      <p className={styles.notifText}>1</p>
    </div>
  </div>
);

NotificationIcon.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default NotificationIcon;
