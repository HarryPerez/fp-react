import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import * as booksActions from '../../../redux/books/actions';

import Home from './layout';

const HomeContainer = props => (
  <Home books={props.books} handleFilter={props.handleFilter} handleFilterParam={props.handleFilterParam} />
);
const getFilteredBooks = createSelector(
  [state => state.books.filter, state => state.books.filterParam, state => state.books.books],
  (filter, filterParam, books) => {
    if (!books) return books;
    filter = filter.toLowerCase();
    return books.filter(book => {
      const bookTitle = book.title.toLowerCase();
      const bookAuthor = book.author.toLowerCase();
      if (filter !== '') {
        if (filterParam === '') {
          return bookTitle.includes(filter) || bookAuthor.toLowerCase().includes(filter);
        } else if (filterParam === 'Nombre') {
          return bookTitle.toLowerCase().includes(filter);
        } else if (filterParam === 'Autor') {
          return bookAuthor.toLowerCase().includes(filter);
        }
        return book;
      }
      return book;
    });
  }
);

const mapStateToProps = state => ({ books: getFilteredBooks(state), isLoading: state.books.isLoading });

const mapDispatchToProps = dispatch => ({
  handleFilter: filter => dispatch(booksActions.saveFilter(filter)),
  handleFilterParam: filterParam => dispatch(booksActions.saveFilterParam(filterParam))
});

HomeContainer.propTypes = {
  books: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  handleFilterParam: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
