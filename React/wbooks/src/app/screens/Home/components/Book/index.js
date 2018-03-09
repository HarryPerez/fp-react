import React from 'react';
import { Link } from 'react-router-dom';

import defaultBookIcon from '../../../../assets/default_book.svg';
import { bookPropType } from '../../../../../redux/books/proptypes';

import styles from './styles.scss';

const Book = props => (
  <div className={styles.bookContainer}>
    <div className={styles.bookImage}>
      <Link to={`/books/${props.book.id}`} href={`/books/${props.book.id}`}>
        <img
          src={props.book.image_url || defaultBookIcon}
          className={props.book.image_url ? styles.bookSvg : styles.defaultSvg}
          alt="bookImage"
        />
      </Link>
    </div>
    <div className={styles.bookInfo}>
      <h1 className={styles.bookTitle}>{props.book.title}</h1>
      <h2 className={styles.bookAuthor}>{props.book.author}</h2>
    </div>
  </div>
);

Book.propTypes = bookPropType;

export default Book;
