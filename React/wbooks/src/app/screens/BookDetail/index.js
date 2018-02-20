import React, { Component } from 'react';

import booksJson from '../../../constants/data';
import reactSvg from '../../assets/default_book.svg';
import ErrorIcon from '../../assets/sad_icon.png';

import BookSummary from './components/BookSummary/index.js';
import Suggestion from './components/Suggestion/index.js';
import NewComment from './components/NewComment/index.js';
import Comment from './components/Comment/index.js';
import './styles.css';

class BookDetail extends Component {
  state = { book: '', error: ''};

  componentWillMount() {
    const book = booksJson.filter(book => { return book.id == this.props.match.params.bookId; });
    if(book.length == 1){
      this.setState({ book: book[0] });
    }else if(book.length > 1){
      this.setState({ error: 'Sorry, it was found more than one book with the given id.' });
    }else {
      this.setState({ error: 'Sorry, the book was not found.' });
    }
  }

  render() {
    if(this.state.error){
      return (
        <div className='error-container'>
          <img src={ErrorIcon} className='error-image' alt="error" />
          <div className='error-message'>{this.state.error}</div>
        </div>
      );
    };
    var imageUrl = this.state.book && this.state.book.image_url ? this.state.book.image_url : null;
    return (
      <div className='book-detail'>
        <div className='detail-container'>
          <div className='detail-image'>
            <img src={imageUrl ? imageUrl : reactSvg} className={imageUrl ? 'detail-image' : 'detail-svg'} alt="svg" />
          </div>
          <div className='detail-summary'>
            <BookSummary key={this.state.book.id} title={this.state.book.title} author={this.state.book.author} genre={this.state.book.genre} year={this.state.book.year}/>
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
