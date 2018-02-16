import React, { Component } from 'react';
import ReactSVG from '../../assets/default_book.svg'
import './styles.css'

class Book extends Component {
  render() {
    return (
      <div className='book-container'>
        <div className='book-image'>
          <img src={this.props.imageUrl ? this.props.imageUrl : ReactSVG} className={this.props.imageUrl ? 'book-svg' : 'default-svg'} alt="svg" />
        </div>
        <div className='book-info'>
          <h1 className='book-title'>{this.props.title}</h1>
          <h2 className='book-author'>{this.props.author}</h2>
        </div>
      </div>
    );
  }
}

export default Book;
