import React, { Component } from 'react';
import './styles.css'

class Combobox extends Component {

  handleSelection = event => {
    this.props.callback(event.target.value);
  }

  render() {
    return (
      <div className='combobox-container'>
        <select className='combobox-selector' onChange={this.handleSelection}>
            <option value='' selected disabled hidden>Seleccionar filtro</option>
            <option value='Nombre'>Nombre</option>
            <option value='Autor'>Autor</option>
        </select>
      </div>
    );
  }
}

export default Combobox;
