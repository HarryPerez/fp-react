import React from 'react';

import profileIcon from '../../../../assets/profile_picture.png';

import styles from './styles.scss';

const ProfileSummary = () => (
  <div className={styles.profileContainer}>
    <div className={styles.profileSummary}>
      <img src={profileIcon} className={styles.profileIcon} alt="profileIcon" />
      <div className={styles.infoContainer}>
        <div className={styles.userContainer}>
          <h1 className={styles.nameTitle}>Franco Perez</h1>
          <h2 className={styles.emailTitle}>lorem.ipsum@wolox.com.ar</h2>
        </div>
        <div className={styles.summaryContainer}>
          <div className={styles.readedContainer}>
            <h2 className={styles.summaryText}>4 leidos</h2>
          </div>
          <div className={styles.commentsContainer}>
            <h2 className={styles.summaryText}>10 comentarios</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProfileSummary;
