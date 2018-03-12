import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Button = props => (
  <button className={props.styles} onClick={props.onClick} disabled={props.disabled}>
    <h1 className={styles.title}>{props.title}</h1>
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};
export default Button;
