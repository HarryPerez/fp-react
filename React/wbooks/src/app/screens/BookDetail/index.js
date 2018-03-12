import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { bookDetailPropType } from '../../../redux/books/proptypes';
import Loader from '../../components/Loader';
import * as rentsActions from '../../../redux/rents/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  componentWillMount = () => this.props.loadBookRents(this.props.match.params.bookId);

  render() {
    return <BookDetail book={this.props.detailedBook} />;
  }
}

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
  isLoading: state.books.isLoading,
  rents: state.rents.rents
});

const mapDispatchToProps = dispatch => ({
  loadBookRents: bookId => dispatch(rentsActions.fetchRents(bookId))
});

BookDetailContainer.propTypes = {
  detailedBook: bookDetailPropType,
  loadBookRents: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      bookId: PropTypes.string.isRequired
    })
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Loader(BookDetailContainer));
