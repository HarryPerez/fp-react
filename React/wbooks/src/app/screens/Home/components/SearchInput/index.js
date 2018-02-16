import React, { Component } from 'react';
import SearchSVG from '../../assets/search.svg';
import './styles.css';

const defaultValue = 'Buscar...';

class SearchInput extends Component {
  state = {value: ''};

  handleChange = event => {
    this.setState({value: event.target.value});
    this.props.callback(event.target.value);
  }

  handleFocus = event => {
    this.setState({value: ''});
  }

  handleClick = event => {
    this.props.callback(this.state.value);
  }

  render() {
    return (
      <div className='search-container'>
        <input className='search-input input-text' value={this.state.value} onChange={this.handleChange} onFocus={this.handleFocus} placeholder={defaultValue}></input>
        <div className='icon-container'>
          <img src={SearchSVG} className='search-icon' onClick={this.handleClick} alt='svg' />
        </div>
      </div>
    );
  }
}

export default SearchInput;
