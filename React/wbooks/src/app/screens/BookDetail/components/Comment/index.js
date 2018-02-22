import React from 'react';

import profilePicture from '../../../../assets/profile_picture.png';

import styles from './styles.scss';

const Comment = () => (
  <div className={styles.commentContainer}>
      <div className={styles.pictureContainer}>
        <img src={profilePicture} className={styles.profilePicture} alt="svg" />
      </div>
      <div className={styles.commentDetail}>
        <h1 className={styles.commentTitle}>Perez Franco</h1>
        <h2 className={styles.commentDate}> xx/xx/xx </h2>
        <span className={styles.commentDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </span>
      </div>
  </div>
);

export default Comment;
