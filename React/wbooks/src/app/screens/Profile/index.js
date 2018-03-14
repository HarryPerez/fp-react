import React from 'react';

import ProfileSummary from './components/ProfileSummary';
import BookSummary from './components/BookSummary';
import styles from './styles.scss';

const Profile = () => (
  <div className={styles.profileContainer}>
    <ProfileSummary />
    <BookSummary title="Leídos" />
    <div className={styles.containerSeparator}>
      <BookSummary title="Wishlist" />
    </div>
    <div className={styles.commentContainer} />
  </div>
);

export default Profile;
