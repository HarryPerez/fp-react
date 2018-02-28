import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profilePicture from '../../../../assets/profile_picture.png';
import * as localStorageService from '../../../../../services/localstorageService';
import Dropdown from '../Dropdown/index.js';

import styles from './styles.scss';

class ProfileDropdown extends Component {
  state = { isActive: false };

  handlePictureClick = event => {
    this.setState({ isActive: !this.state.isActive });
  }

  handleSessionClick = event => {
    localStorageService.removeUserAuthentication();
  }

  render() {
    if(!this.state.isActive){
      return (
        <Dropdown>
          <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
        </Dropdown>
      );
    }else {
      return (
        <Dropdown>
          <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
          <div className={styles.buttonsContainer}>
            <div className={styles.arrowContainer}>
              <div className={styles.dropdownArrow}/>
            </div>
            <div className={styles.profileButton}>
              <p className={styles.buttonText}>Perfil</p>
            </div>
            <Link to='/' className={`${styles.profileButton} ${styles.profileLink}`} onClick={this.handleSessionClick}>
              <p className={styles.buttonText}>Cerrar sesión</p>
            </Link>
          </div>
        </Dropdown>
      );
    }
  }
}

export default ProfileDropdown;
