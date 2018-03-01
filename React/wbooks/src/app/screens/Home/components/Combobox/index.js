import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss'

class Combobox extends Component {

  handleSelection = event => this.props.onSelection(event.target.value);

  render() {
    return (
      <div className={styles.comboboxContainer}>
        <select className={styles.comboboxSelector} onChange={this.handleSelection}>
            <option value='' selected disabled hidden>Seleccionar filtro</option>
            <option value='Nombre'>Nombre</option>
            <option value='Autor'>Autor</option>
        </select>
      </div>
    );
  }
}

Combobox.propTypes = {
  onSelection: PropTypes.func.isRequired
};

export default Combobox;
