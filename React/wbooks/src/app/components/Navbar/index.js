import React from 'react';
import { Link } from 'react-router-dom';

import wbooksIcon from '../../assets/wbooks_logo.svg';
import addIcon from '../../assets/add_book.svg';

import ProfileDropdownContainer from './components/ProfileDropdown';
import NotificationDropdown from './components/NotificationDropdown';
import styles from './styles.scss';

const Navbar = () => (
  <div className={styles.navbarContainer}>
    <div className={styles.wbookContainer}>
      <Link to="/dashboard" href="/dashboard">
        <img src={wbooksIcon} className={styles.navbarIcon} alt="wbooksIcon" />
      </Link>
    </div>
    <div className={styles.iconsContainer}>
      <NotificationDropdown />
      <img src={addIcon} className={styles.buttonIcon} alt="addIcon" />
      <ProfileDropdownContainer />
    </div>
  </div>
);

export default Navbar;
