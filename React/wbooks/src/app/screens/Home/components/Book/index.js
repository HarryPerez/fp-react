import React from 'react';
import PropTypes from 'prop-types';

import reactSvg from '../../../../assets/default_book.svg';

import './styles.css'

const Book = props => (
  <div className='book-container'>
    <div className='book-image'>
      <img src={props.imageUrl ? props.imageUrl : reactSvg} className={props.imageUrl ? 'book-svg' : 'default-svg'} alt="svg" />
    </div>
    <div className='book-info'>
      <h1 className='book-title'>{props.title}</h1>
      <h2 className='book-author'>{props.author}</h2>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default Book;
