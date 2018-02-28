import React, { Component } from 'react';

import styles from './styles.scss'

class Dropdown extends Component {
  render() {
    return <div className={styles.dropdownContainer}>{this.props.children}</div>
  }
}

export default Dropdown;
