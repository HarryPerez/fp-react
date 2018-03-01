import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import defaultBookIcon from '../../assets/default_book.svg';
import errorIcon from '../../assets/sad_icon.png';
import * as bookService from '../../../services/bookService';

import BookSummary from './components/BookSummary/index.js';
import Suggestion from './components/Suggestion/index.js';
import NewComment from './components/NewComment/index.js';
import Comment from './components/Comment/index.js';
import styles from './styles.scss';

class BookDetail extends Component {
  state = { book: '', error: '' };
  backTitle = '<Volver';

  componentWillMount = async () => {
    await bookService.getBookDetail(this.props.match.params.bookId)
    .then((response) => {this.setState({ book: response.data })})
    .catch((error) => {this.setState({ error: 'Sorry, the book was not found.' })});
  }

  render() {
    if(this.state.error){
      return (
        <div className={styles.errorContainer}>
          <img src={errorIcon} className={styles.errorImage} alt='errorIcon' />
          <div className={styles.errorMessage}>{this.state.error}</div>
        </div>
      );
    };
    if(this.state.book === ''){
      return (
        <div className={styles.bookDetail}>
          <Link className={styles.backLink} to='/dashboard'>{this.backTitle}</Link>
        </div>
      );
    }else {
      const imageUrl = this.state.book && this.state.book.image_url;
      return (
        <div className={styles.bookDetail}>
          <Link className={styles.backLink} to='/dashboard'>{this.backTitle}</Link>
          <div className={styles.detailContainer}>
            <div className={styles.detailImage}>
              <img src={imageUrl || defaultBookIcon} className={imageUrl ? styles.detailImage : styles.detailSvg} alt='detailImage' />
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
}

export default BookDetail;
