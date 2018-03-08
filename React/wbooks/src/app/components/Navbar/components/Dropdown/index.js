import React from 'react';

import styles from './styles.scss';

const Dropdown = props => (
  <div className={styles.buttonsContainer}>
    <div className={styles.arrowContainer}>
      <div className={styles.dropdownArrow} />
    </div>
    {props.children}
  </div>
);

export default Dropdown;
