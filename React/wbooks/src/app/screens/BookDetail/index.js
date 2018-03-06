import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as booksActions from '../../../redux/books/actions';

import BookDetail from './layout.js';

class BookDetailContainer extends Component {
  state = { error: '' };

  componentWillMount = async () => {
    if(!this.props.books){
      await this.props.dispatch(booksActions.fetchBooks());
    }
    this.props.dispatch(booksActions.saveBookDetailId(this.props.match.params.bookId));
  }

  render() {
    return <BookDetail isLoading={this.props.isDetailLoading} book={this.props.detailedBook}/>
  }
}

const getBookDetail = (state) => state.books.books.find((book) => book.id == state.books.detailedBookId)


const mapStateToProps = state => (
  { detailedBook: getBookDetail(state), isDetailLoading: state.books.isDetailLoading, books: state.books.books }
);

export default connect(mapStateToProps)(BookDetailContainer);
