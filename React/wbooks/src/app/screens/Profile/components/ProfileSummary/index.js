import React from 'react';
import PropTypes from 'prop-types';

import profileIcon from '../../../../assets/profile_picture.png';

import styles from './styles.scss';

const ProfileSummary = props => (
  <div className={styles.profileContainer}>
    <div className={styles.profileSummary}>
      <img src={profileIcon} className={styles.profileIcon} alt="profileIcon" />
      <div className={styles.infoContainer}>
        <div className={styles.userContainer}>
          <h1 className={styles.nameTitle}>{`${props.user.first_name} ${props.user.last_name}`}</h1>
          <h2 className={styles.emailTitle}>{props.user.email}</h2>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.readedContainer}>
            <h2 className={styles.summaryText}>{props.readed} leidos</h2>
          </div>
          <div className={styles.commentsContainer}>
            <h2 className={styles.summaryText}>{props.comments} comentarios</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProfileSummary.propTypes = {
  readed: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  user: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
};

export default ProfileSummary;
