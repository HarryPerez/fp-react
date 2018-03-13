import React from 'react';

import ProfileSummary from './components/ProfileSummary';
import styles from './styles.scss';

const Profile = () => (
  <div className={styles.profileContainer}>
    <ProfileSummary />
    <div className={styles.readContainer}>
      <h1 className={styles.readedTitle}>Leídos</h1>
      <div className={styles.booksContainer} />
    </div>
    <div className={styles.wishContainer} />
    <div className={styles.commentContainer} />
  </div>
);

export default Profile;
