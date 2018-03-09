import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { bookDetailPropType } from '../../../redux/books/proptypes';
import Loader from '../../components/Loader';

import BookDetail from './layout';

const BookDetailContainer = props => <BookDetail book={props.detailedBook} />;

const getBook = createSelector(
  [state => state.books.books, (state, props) => props.match.params.bookId],
  (books, bookId) => {
    if (books) {
      return books.find(book => book.id === Number(bookId));
    }
    return null;
  }
);

const mapStateToProps = (state, props) => ({
  books: state.books.books,
  detailedBook: getBook(state, props),
  isLoading: state.books.isLoading
});

BookDetailContainer.propTypes = {
  detailedBook: bookDetailPropType
};

export default connect(mapStateToProps)(Loader(BookDetailContainer));
