import React, { Component } from 'react';
import PropTypes from 'prop-types';

import searchSvg from '../../assets/search.svg';

import './styles.css';

class SearchInput extends Component {
  state = {value: ''};
  defaultValue = 'Buscar...';

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.onInputChange(event.target.value);
  }

  handleFocus = () => {
    this.setState({ value: '' });
  }

  handleClick = () => {
    this.props.onInputChange(this.state.value);
  }

  render() {
    return (
      <div className='search-container'>
        <input className='search-input input-text' value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} placeholder={this.defaultValue}></input>
        <div className='icon-container'>
          <img src={searchSvg} className='search-icon' onClick={this.handleClick} alt='svg' />
        </div>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onInputChange: PropTypes.func.isRequired
};

export default SearchInput;
