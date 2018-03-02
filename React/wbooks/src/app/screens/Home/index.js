import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as booksActions from '../../../redux/books/actions';

import Home from './layout.js';

class HomeContainer extends Component {
  componentDidMount = () => this.props.dispatch(booksActions.fetchBooks());

  handleFilter = filter => this.props.dispatch(booksActions.filter(filter, this.props.filterParam, this.props.books));

  handleFilterParam = filterParam => this.props.dispatch(booksActions.filter(this.props.filter, filterParam, this.props.books));

  render() {
    return (
      <Home isLoading={this.props.isLoading} books={this.props.filteredBooks} handleFilter={this.handleFilter} handleFilterParam={this.handleFilterParam}/>
    );
  }
}

const mapStateToProps = state => (
  { books: state.books.books, isLoading: state.books.isLoading, filter: state.books.filter, filterParam: state.books.filterParam, filteredBooks: state.books.filteredBooks }
);

export default connect(mapStateToProps)(HomeContainer);
