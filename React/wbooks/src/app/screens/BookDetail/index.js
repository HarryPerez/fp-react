import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { bookDetailPropType } from '../../../redux/books/proptypes';
import * as rentsActions from '../../../redux/rents/actions';
import * as booksActions from '../../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  componentWillMount = () => {
    this.props.loadBookRents(this.props.match.params.bookId);
    this.props.loadBookComments(this.props.match.params.bookId);
  };

  render() {
    return (
      <BookDetail
        book={this.props.detailedBook}
        isLoading={this.props.isLoading}
        comments={this.props.comments}
      />
    );
  }
}

const getBook = createSelector(
  [state => state.books.books, (state, props) => props.match.params.bookId],
  (books, bookId) => (books ? books.find(book => book.id === Number(bookId)) : [])
);

const getComments = createSelector(
  [state => state.books.comments],
  comments => (comments && comments.length > 0 ? (comments.length > 3 ? comments.slice(0, 4) : comments) : [])
);

const mapStateToProps = (state, props) => ({
  books: state.books.books,
  detailedBook: getBook(state, props),
  isLoading: state.books.isLoading,
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  loadBookRents: bookId => dispatch(rentsActions.fetchRents(bookId)),
  loadBookComments: bookId => dispatch(booksActions.fetchBookComments(bookId))
});

BookDetailContainer.propTypes = {
  detailedBook: bookDetailPropType,
  loadBookRents: PropTypes.func.isRequired,
  loadBookComments: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      bookId: PropTypes.string.isRequired
    })
  }),
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired
    })
  ),
  isLoading: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);
