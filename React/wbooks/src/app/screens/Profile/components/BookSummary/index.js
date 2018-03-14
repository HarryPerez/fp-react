import React from 'react';
import PropTypes from 'prop-types';

import Book from '../../../../components/Book';

import styles from './styles.scss';

const book = {
  id: '1',
  author: 'autor',
  title: 'titulo'
};

const BookSummary = props => (
  <div className={styles.readContainer}>
    <h1 className={styles.sectionTitle}>{props.title}</h1>
    <div className={styles.booksContainer}>
      <Book book={book} />
      <Book book={book} />
      <Book book={book} />
      <Book book={book} />
    </div>
  </div>
);

BookSummary.propTypes = {
  title: PropTypes.string.isRequired
};

export default BookSummary;
