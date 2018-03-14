import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Button = props => (
  <button className={props.style} onClick={props.onClick} disabled={props.disabled}>
    <h1 className={styles.title}>{props.title}</h1>
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool.isRequired
};
export default Button;
