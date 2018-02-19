import React, { Component } from 'react';

import searchSvg from '../../assets/search.svg';

import './styles.css';

class SearchInput extends Component {
  state = {value: ''};

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.callback(event.target.value);
  }

  handleFocus = () => {
    this.setState({ value: '' });
  }

  handleClick = () => {
    this.props.callback(this.state.value);
  }

  render() {
    const defaultValue = 'Buscar...';
    return (
      <div className='search-container'>
        <input className='search-input input-text' value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} placeholder={defaultValue}></input>
        <div className='icon-container'>
          <img src={searchSvg} className='search-icon' onClick={this.handleClick} alt='svg' />
        </div>
      </div>
    );
  }
}

export default SearchInput;
