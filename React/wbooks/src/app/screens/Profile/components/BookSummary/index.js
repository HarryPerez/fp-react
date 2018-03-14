import React from 'react';
import PropTypes from 'prop-types';

import { bookArrayPropType } from '../../../../../redux/books/proptypes';
import Book from '../../../../components/Book';

import styles from './styles.scss';

const BookSummary = props => (
  <div className={styles.readContainer}>
    <h1 className={styles.sectionTitle}>{props.title}</h1>
    <div className={styles.booksContainer}>{props.books.map(book => <Book key={book.id} book={book} />)}</div>
  </div>
);

BookSummary.propTypes = {
  title: PropTypes.string.isRequired,
  books: bookArrayPropType
};

export default BookSummary;
