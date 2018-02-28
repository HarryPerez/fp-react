import React, { Component } from 'react';

import styles from './styles.scss'

class Dropdown extends Component {
  render() {
    return (
      <div className={styles.buttonsContainer}>
        <div className={styles.arrowContainer}>
          <div className={styles.dropdownArrow}/>
        </div>
        {this.props.children}
      </div>
  );
  }
}

export default Dropdown;
