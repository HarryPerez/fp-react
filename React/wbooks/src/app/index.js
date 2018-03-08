import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import * as booksActions from '../redux/books/actions';
import * as sessionActions from '../redux/session/actions';
import * as localstorageService from '../services/localstorageService';

import Home from './screens/Home';
import BookDetail from './screens/BookDetail';
import Login from './screens/Login';
import Signup from './screens/Signup';
import RouteHandler from './components/RouteHandler';

import './styles.scss';

class App extends Component {
  componentWillMount = () => {
    const user = localstorageService.retrieveUserTokenFromLocalStorage();
    if (user) {
      this.props.loadSession(user);
      this.props.loadBooks(user);
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteHandler path="/signup" component={Signup} />
          <RouteHandler path="/dashboard" component={Home} />
          <RouteHandler path="/books/:bookId" component={BookDetail} />
          <RouteHandler path="/" component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  isLogged: state.session.isLogged,
  books: state.books.books
});

const mapDispatchToProps = dispatch => ({
  loadBooks: user => dispatch(booksActions.fetchBooks(user)),
  loadSession: user => dispatch(sessionActions.loadSession(user))
});

App.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  loadSession: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
