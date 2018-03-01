import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as booksSelectors from '../../../store/books/reducer';

import Home from './layout.js';

class HomeContainer extends Component {
  render() {
    return (
      <Home books={this.props.books}/>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: booksSelectors.getBooks(state)
  };
}

export default connect(mapStateToProps)(HomeContainer);
