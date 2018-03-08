import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as booksActions from '../../../redux/books/actions';

import BookDetail from './layout';

class BookDetailContainer extends Component {
  componentWillMount = () => this.props.getBookDetail(this.props.match.props.bookId);

  render() {
    return <BookDetail isLoading={this.props.isDetailLoading} book={this.props.detailedBook} />;
  }
}

const getBookDetail = state => state.books.books.find(book => book.id === state.books.detailedBookId);

const mapStateToProps = state => ({
  detailedBook: getBookDetail(state),
  isDetailLoading: state.books.isDetailLoading,
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  getBookDetail: bookId => dispatch(booksActions.saveBookDetailId(bookId))
});

BookDetailContainer.propTypes = {
  getBookDetail: PropTypes.func.isRequired,
  isDetailLoading: PropTypes.bool.isRequired,
  match: PropTypes.number.isRequired,
  detailedBook: PropTypes.element.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookDetailContainer);
