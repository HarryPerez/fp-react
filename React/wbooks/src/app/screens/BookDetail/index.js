import React, { Component } from 'react';

import booksJson from '../../../constants/data';
import defaultBook from '../../assets/default_book.svg';
import errorIcon from '../../assets/sad_icon.png';

import BookSummary from './components/BookSummary/index.js';
import Suggestion from './components/Suggestion/index.js';
import NewComment from './components/NewComment/index.js';
import Comment from './components/Comment/index.js';
import styles from './styles.scss';

class BookDetail extends Component {
  state = { book: '', error: '' };
  backTitle = '<Volver';

  componentWillMount() {
    const book = booksJson.filter(book => book.id == this.props.match.params.bookId );
    if(book.length === 1){
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
        <div className={styles.errorContainer}>
          <img src={errorIcon} className={styles.errorImage} alt="error" />
          <div className={styles.errorMessage}>{this.state.error}</div>
        </div>
      );
    };
    const imageUrl = this.state.book && this.state.book.image_url;
    return (
      <div className={styles.bookDetail}>
        <h1 className={styles.backButton}><a className={styles.backLink} href="/dashboard">{this.backTitle}</a></h1>
        <div className={styles.detailContainer}>
          <div className={styles.detailImage}>
            <img src={imageUrl ? imageUrl : defaultBook} className={imageUrl ? styles.detailImage : styles.detailSvg} alt="svg" />
          </div>
          <div className={styles.detailSummary}>
            <BookSummary key={this.state.book.id} title={this.state.book.title} author={this.state.book.author} genre={this.state.book.genre} year={this.state.book.year}/>
            <div className={styles.detailRent}>
              <h1 className={styles.rentTitle}>Alquilar</h1>
            </div>
          </div>
        </div>
        <Suggestion/>
        <h1 className={styles.commentsTitle}>Comentarios</h1>
        <NewComment/>
        <Comment/>
        <Comment/>
      </div>
    );
  }
}

export default BookDetail;
