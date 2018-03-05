import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect'

import * as booksActions from '../../../redux/books/actions';

import Home from './layout.js';

class HomeContainer extends Component {
  render() {
    return (
      <Home isLoading={this.props.isLoading} books={this.props.books} handleFilter={this.handleFilter} filter={this.props.filter} handleFilterParam={this.handleFilterParam}/>
    );
  }
}

const getFilteredBooks = createSelector(
  [state => state.books.filter,
  state => state.books.filterParam,
  state => state.books.books],
  (filter, filterParam, books) => {
    if(!books) return books;
    filter = filter.toLowerCase();
    return books.filter((book) => {
      const bookTitle = book.title.toLowerCase();
      const bookAuthor = book.author.toLowerCase();
      if(filter !== ''){
        if(filterParam === ''){
          return bookTitle.includes(filter) || bookAuthor.toLowerCase().includes(filter);
        }else if(filterParam === 'Nombre'){
          return bookTitle.toLowerCase().includes(filter);
        }else if(filterParam === 'Autor'){
          return bookAuthor.toLowerCase().includes(filter);
        }
      }else {
        return book;
      }
    })
  })

const mapStateToProps = state => (
  { books: getFilteredBooks(state), isLoading: state.books.isLoading }
);

const mapDispatchToProps = dispatch => (
  { componentWillMount: dispatch(booksActions.fetchBooks()),
    handleFilter: filter => booksActions.saveFilter(filter),
    handleFilterParam: filterParam => booksActions.saveFilterParam(filterParam) }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
