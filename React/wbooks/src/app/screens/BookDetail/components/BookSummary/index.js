import React from 'react';
import PropTypes from 'prop-types';

import './styles.css'

const BookSummary = (book) => (
  <div className='summary-container'>
    <h1 className='summary-title'>
      {book.title}
    </h1>
    <h2 className='summary-author'>
      {book.author}
    </h2>
    <h2 className='summary-edition'>
      {book.year}
    </h2>
    <h2 className='summary-genre'>
      {book.genre}
    </h2>
    <p className='summary-description'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
);

BookSummary.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  year: PropTypes.any.isRequired,
  genre: PropTypes.string.isRequired
};

export default BookSummary;
