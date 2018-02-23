import React, { Component } from 'react';

import wbooksIcon from '../../assets/wbooks_logo.svg';
import addIcon from '../../assets/add_book.svg';
import notificationIcon from '../../assets/notifications.svg';
import profilePicture from '../../assets/profile_picture.png';
import styles from './styles.scss';

class Navbar extends Component {
  render() {
    return (
      <div className={styles.navbarContainer}>
        <div className={styles.wbookContainer}>
          <img src={wbooksIcon} className={styles.navbarIcon} alt='navbarIcon'/>
        </div>
        <div  className={styles.iconsContainer}>
          <img src={notificationIcon} className={styles.buttonIcon} alt='navbarIcon'/>
          <img src={addIcon} className={styles.buttonIcon} alt='navbarIcon'/>
          <img src={profilePicture} className={styles.buttonIcon} alt='navbarIcon'/>
        </div>
      </div>
    );
  }
}

export default Navbar;
