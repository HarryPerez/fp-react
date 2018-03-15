import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { bookArrayPropType } from '../../../../../redux/books/proptypes';
import Book from '../../../../components/Book';

import styles from './styles.scss';

class BookSummary extends Component {
  handleRender = books => books.map(book => <Book key={book.id} book={book} />);

  render() {
    return (
      <div className={styles.readContainer}>
        <h1 className={styles.sectionTitle}>{this.props.title}</h1>
        <div className={styles.booksContainer}>{this.handleRender(this.props.books)}</div>
      </div>
    );
  }
}

BookSummary.propTypes = {
  title: PropTypes.string.isRequired,
  books: bookArrayPropType
};

export default BookSummary;
