import React, { Component } from 'react';

import defaultBookIcon from '../../../../assets/default_book.svg';
import Dropdown from '../Dropdown';
import Notification from '../Notification';
import NotificationIcon from '../NotificationIcon';

import styles from './styles.scss';

class NotificationDropdown extends Component {
  state = { isActive: false };

  handlePictureClick = () => this.setState(prevState => ({ isActive: !prevState.isActive }));

  render() {
    if (!this.state.isActive) {
      return (
        <div className={styles.dropdownContainer}>
          <NotificationIcon onClick={this.handlePictureClick} />
        </div>
      );
    }
    return (
      <div className={styles.dropdownContainer}>
        <NotificationIcon onClick={this.handlePictureClick} />
        <div className={styles.notificationDropdown}>
          <Dropdown>
            <Notification
              notificiationTitle="Se encuentra disponible el libro:"
              bookImage={defaultBookIcon}
              bookTitle="Título"
              bookAuthor="Autor"
            />
            <Notification
              notificiationTitle="Te quedan X días para devolver el libro:"
              bookImage={defaultBookIcon}
              bookTitle="Título"
              bookAuthor="Autor"
              bookWarning="Fecha de devolución: xx/xx/xx"
            />
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default NotificationDropdown;
