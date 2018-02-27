import React, { Component } from 'react';

import notificationIcon from '../../../../assets/notifications.svg';
import defaultBookIcon from '../../../../assets/default_book.svg';

import styles from './styles.scss';

class NotificationDropdown extends Component {
  state = { isActive: false };

  handlePictureClick = event => {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    if(!this.state.isActive){
      return (
        <div className={styles.dropdownContainer}>
          <div className={styles.iconContainer}>
            <img src={notificationIcon} className={styles.notificationIcon} alt='notificationIcon' onClick={this.handlePictureClick}/>
            <div className={styles.notifContainer}><h1 className={styles.notifText}>1</h1></div>
          </div>
        </div>
      );
    }else{
      return (
        <div className={styles.dropdownContainer}>
          <div className={styles.iconContainer}>
            <img src={notificationIcon} className={styles.notificationIcon} alt='notificationIcon' onClick={this.handlePictureClick}/>
            <div className={styles.notifContainer}><h1 className={styles.notifText}>1</h1></div>
          </div>
          <div className={styles.buttonsContainer}>
            <div className={styles.arrowContainer}>
              <div className={styles.dropdownArrow}/>
            </div>
            <div className={styles.notificationButton}>
              <div className={styles.bookImage}>
                <img src={defaultBookIcon} className={styles.defaultSvg} alt='bookImage' />
              </div>
              <div className={styles.bookDescription}>
                <h1 className={styles.descriptionTitle}>Se encuentra disponible el libro:</h1>
                <h1 className={styles.bookTitle}>Título</h1>
                <h1 className={styles.bookAuthor}>Autor</h1>
              </div>
            </div>
            <div className={styles.notificationButton}>
              <div className={styles.bookImage}>
                <img src={defaultBookIcon} className={styles.defaultSvg} alt='bookImage' />
              </div>
              <div className={styles.bookDescription}>
                <h1 className={styles.descriptionTitle}>Te quedan X días para devolver el libro:</h1>
                <h1 className={styles.bookTitle}>Título</h1>
                <h1 className={styles.bookAuthor}>Autor</h1>
                <h1 className={styles.bookWarning}>Fecha de devolución: xx/xx/xx</h1>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default NotificationDropdown;
