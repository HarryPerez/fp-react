import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import profilePicture from '../../../../assets/profile_picture.png';
import Dropdown from '../Dropdown/index.js';
import SessionLoader from '../../../SessionLoader/index.js'

import styles from './styles.scss';

class ProfileDropdown extends Component {
  state = { isActive: false };

  handlePictureClick = event => this.setState({ isActive: !this.state.isActive });

  render() {
    if(!this.state.isActive){
      return (
        <div className={styles.dropdownContainer}>
          <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
        </div>
      );
    }else {
      return (
        <div className={styles.dropdownContainer}>
          <img src={profilePicture} className={styles.profileIcon} alt='profileIcon' onClick={this.handlePictureClick}/>
          <div className={styles.profileDropdown}>
            <Dropdown>
              <div className={styles.profileButton}>
                <p className={styles.buttonText}>Perfil</p>
              </div>
              <Link to='/' className={`${styles.profileButton} ${styles.profileLink}`} onClick={this.props.onSessionClick}>
                <p className={styles.buttonText}>Cerrar sesión</p>
              </Link>
            </Dropdown>
          </div>
        </div>
      );
    }
  }
}

export default SessionLoader(ProfileDropdown);
