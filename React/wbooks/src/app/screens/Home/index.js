import React, { Component } from 'react';
import { connect } from 'react-redux';

import Home from './layout.js';

class HomeContainer extends Component {
  render() {
    return (
      <Home books={this.props.books}/>
    );
  }
}

const mapStateToProps = state => ({
    books: state.books.books
});

export default connect(mapStateToProps)(HomeContainer);
