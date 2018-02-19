import React from 'react';

import reactSvg from '../../assets/default_book.svg'

import './styles.css'

const Book = (book) => (
  <div className='book-container'>
    <div className='book-image'>
      <img src={book.imageUrl ? book.imageUrl : reactSvg} className={book.imageUrl ? 'book-svg' : 'default-svg'} alt="svg" />
    </div>
    <div className='book-info'>
      <h1 className='book-title'>{book.title}</h1>
      <h2 className='book-author'>{book.author}</h2>
    </div>
  </div>
);

export default Book;
