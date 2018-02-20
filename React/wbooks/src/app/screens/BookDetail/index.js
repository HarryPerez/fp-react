import React, { Component } from 'react';

import reactSvg from '../../assets/default_book.svg';

import BookSummary from './components/BookSummary/index.js';
import Suggestion from './components/Suggestion/index.js';
import NewComment from './components/NewComment/index.js';
import Comment from './components/Comment/index.js';
import './styles.css';

class BookDetail extends Component {
  render() {
    return (
      <div className='book-detail'>
        <div className='detail-container'>
          <div className='detail-image'>
            <img src={reactSvg} className='detail-svg' alt="svg" />
          </div>
          <div className='detail-summary'>
            <BookSummary/>
            <div className='detail-rent'>
              <h1 className='rent-title'>
                Alquilar
              </h1>
            </div>
          </div>
        </div>
        <Suggestion/>
        <h1 className='comments-title'>
          Comentarios
        </h1>
        <NewComment/>
        <Comment/>
        <Comment/>
      </div>
    );
  }
}

export default BookDetail;
