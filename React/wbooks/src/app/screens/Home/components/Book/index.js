import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import defaultBook from '../../../../assets/default_book.svg';

import styles from './styles.scss'

const Book = props => (
  <div className={styles.bookContainer}>
    <div className={styles.bookImage}>
      <Link to={'/books/' + props.id}>
        <img src={props.imageUrl ? props.imageUrl : defaultBook} className={props.imageUrl ? styles.bookSvg : styles.defaultSvg} alt='bookImage' />
      </Link>
    </div>
    <div className={styles.bookInfo}>
      <h1 className={styles.bookTitle}>{props.title}</h1>
      <h2 className={styles.bookAuthor}>{props.author}</h2>
    </div>
  </div>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  id: PropTypes.number.isRequired
};

export default Book;
