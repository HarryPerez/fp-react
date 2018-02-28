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
      <h2 className={styles.bookTitle}>{props.bookTitle}</h2>
      <p className={styles.bookAuthor}>{props.bookAuthor}</p>
      {props.bookWarning && <p className={styles.bookWarning}>{props.bookWarning}</p>}
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
