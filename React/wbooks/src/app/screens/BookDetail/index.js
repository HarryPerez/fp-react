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
    this.props.dispatch(booksActions.getBookDetail(this.props.match.params.bookId, this.props.books));
  }

  render() {
    return <BookDetail isLoading={this.props.isDetailLoading} book={this.props.detailedBook}/>
  }
}

const mapStateToProps = state => (
  { detailedBook: state.books.detailedBook, isDetailLoading: state.books.isDetailLoading, books: state.books.books }
);

export default connect(mapStateToProps)(BookDetailContainer);
