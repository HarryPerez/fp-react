import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import profilePicture from '../../../../assets/profile_picture.png';
import Dropdown from '../Dropdown/';

import styles from './styles.scss';

class ProfileDropdown extends Component {
  state = { isActive: false };

  handlePictureClick = () => this.setState({ isActive: !this.state.isActive });

  render() {
    if (!this.state.isActive) {
      return (
        <div className={styles.dropdownContainer}>
          <button onClick={this.handlePictureClick} className={styles.buttonIcon}>
            <img src={profilePicture} className={styles.profileIcon} alt="profileIcon" />
          </button>
        </div>
      );
    }
    return (
      <div className={styles.dropdownContainer}>
        <button onClick={this.handlePictureClick} className={styles.buttonIcon}>
          <img src={profilePicture} className={styles.profileIcon} alt="profileIcon" />
        </button>
        <div className={styles.profileDropdown}>
          <Dropdown>
            <div className={styles.profileButton}>
              <p className={styles.buttonText}>Perfil</p>
            </div>
            <Link
              to="/"
              href="/"
              onClick={this.props.onSessionClick}
              className={`${styles.profileButton} ${styles.profileLink}`}
            >
              <p className={styles.buttonText}>Cerrar sesión</p>
            </Link>
          </Dropdown>
        </div>
      </div>
    );
  }
}

ProfileDropdown.propTypes = {
  onSessionClick: PropTypes.func.isRequired
};

export default ProfileDropdown;
