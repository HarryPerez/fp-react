import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { bookPropType } from '../../../redux/books/proptypes';
import defaultBookIcon from '../../assets/default_book.svg';
import errorIcon from '../../assets/sad_icon.png';
import Comment from '../../components/Comment';
import Loader from '../../components/Loader';

import BookSummary from './components/BookSummary';
import Suggestion from './components/Suggestion';
import NewComment from './components/NewComment';
import Rent from './components/Rent';
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
            <Rent bookId={this.props.book.id} />
          </div>
        </div>
        <Suggestion />
        <h1 className={styles.commentsTitle}>Comentarios</h1>
        <NewComment />
        <Comment comments={this.props.comments} showTitle={false} />
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: bookPropType,
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  )
};
export default Loader(BookDetail);
