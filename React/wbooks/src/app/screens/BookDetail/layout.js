import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultBookIcon from '../../assets/default_book.svg';
import errorIcon from '../../assets/sad_icon.png';
import Loader from '../../components/Loader';

import BookSummary from './components/BookSummary';
import Suggestion from './components/Suggestion';
import NewComment from './components/NewComment';
import Comment from './components/Comment';
import styles from './styles.scss';

class BookDetail extends Component {
  state = { error: '' };
  backTitle = '<Volver';

  render() {
    if (this.state.error) {
      return (
        <div className={styles.errorContainer}>
          <img src={errorIcon} className={styles.errorImage} alt="errorIcon" />
          <div className={styles.errorMessage}>{this.state.error}</div>
        </div>
      );
    }
    const imageUrl = this.props.book && this.props.book.image_url;
    return (
      <div className={styles.bookDetail}>
        <Link className={styles.backLink} to="/dashboard" href="/dashboard">
          {this.backTitle}
        </Link>
        <div className={styles.detailContainer}>
          <div className={styles.detailImage}>
            <img
              src={imageUrl || defaultBookIcon}
              className={imageUrl ? styles.detailImage : styles.detailSvg}
              alt="detailImage"
            />
          </div>
          <div className={styles.detailSummary}>
            <BookSummary
              key={this.props.book.id}
              title={this.props.book.title}
              author={this.props.book.author}
              genre={this.props.book.genre}
              year={this.props.book.year}
            />
            <div className={styles.detailRent}>
              <h1 className={styles.rentTitle}>Alquilar</h1>
            </div>
          </div>
        </div>
        <Suggestion />
        <h1 className={styles.commentsTitle}>Comentarios</h1>
        <NewComment />
        <Comment />
        <Comment />
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.element.isRequired
};

export default Loader(BookDetail);
