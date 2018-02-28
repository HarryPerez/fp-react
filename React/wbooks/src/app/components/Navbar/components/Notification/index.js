import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss'

const Notification = props => (
  <div className={styles.notificationContainer}>
    <div className={styles.bookImage}>
      <img src={props.bookImage} className={styles.defaultSvg} alt='bookImage' />
    </div>
    <div className={styles.bookDescription}>
      <h1 className={styles.notificationTitle}>{props.notificiationTitle}</h1>
      <h1 className={styles.bookTitle}>{props.bookTitle}</h1>
      <h1 className={styles.bookAuthor}>{props.bookAuthor}</h1>
      {props.bookWarning && <h1 className={styles.bookWarning}>{props.bookWarning}</h1>}
    </div>
  </div>
);

Notification.propTypes = {
  notificiationTitle: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookAuthor: PropTypes.string.isRequired,
  bookImage: PropTypes.string.isRequired,
  bookWarning: PropTypes.string
};

export default Notification;
