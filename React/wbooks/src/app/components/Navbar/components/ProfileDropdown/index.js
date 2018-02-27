import React, { Component } from 'react';
import { Redirect } from 'react-router';

import profilePicture from '../../../../assets/profile_picture.png';
import localStorageService from '../../../../../services/localstorageService';

import styles from './styles.scss';

class ProfileDropdown extends Component {
  state = { isActive: false, isUserLogged: true };

  handlePictureClick = event => {
    this.setState({ isActive: !this.state.isActive });
  }

  handleSessionClick = event => {
    localStorageService.removeUserAuthentication();
    this.setState({ isUserLogged: false });
  }

  render() {
    if(this.state.isUserLogged){
      if(!this.state.isActive){
        return (
          <div className={styles.dropdownContainer}>
            <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
          </div>
        );
      }else {
        return (
          <div className={styles.dropdownContainer} >
            <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
            <div className={styles.buttonsContainer}>
              <div className={styles.arrowContainer}>
                <div className={styles.dropdownArrow}/>
              </div>
              <div className={styles.profileButton}>
                <h1 className={styles.buttonText}>Perfil</h1>
              </div>
              <div className={styles.profileButton} onClick={this.handleSessionClick}>
                <h1 className={styles.buttonText}>Cerrar sesión</h1>
              </div>
            </div>
          </div>
        );
      }
    }else {
      return <Redirect to='login'/>
    }
  }
}

export default ProfileDropdown;
