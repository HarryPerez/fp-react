import React from 'react';

import notificationIcon from '../../../../assets/notifications.svg';

import styles from './styles.scss';

const NotificationIcon = (props) => (
  <div className={styles.iconContainer}>
    <img src={notificationIcon} className={styles.notificationIcon} alt='notificationIcon' onClick={props.onClick}/>
    <div className={styles.notifContainer}>
      <p className={styles.notifText}>1</p>
    </div>
  </div>
);

export default NotificationIcon;
