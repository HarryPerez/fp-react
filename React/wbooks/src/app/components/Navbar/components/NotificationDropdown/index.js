import React, { Component } from 'react';

import notificationIcon from '../../../../assets/notifications.svg';
import defaultBookIcon from '../../../../assets/default_book.svg';

import Notification from '../Notification/index.js'
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
            <Notification notificiationTitle='Se encuentra disponible el libro:' bookImage={defaultBookIcon} bookTitle='Título' bookAuthor='Autor'/>
            <Notification notificiationTitle='Te quedan X días para devolver el libro:' bookImage={defaultBookIcon} bookTitle='Título' bookAuthor='Autor' bookWarning='Fecha de devolución: xx/xx/xx'/>
          </div>
        </div>
      );
    }
  }
}

export default NotificationDropdown;
