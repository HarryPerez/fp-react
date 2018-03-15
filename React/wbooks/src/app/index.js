import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';

import * as booksActions from '../redux/books/actions';
import * as sessionActions from '../redux/session/actions';
import * as rentsActions from '../redux/rents/actions';
import * as localstorageService from '../services/localstorageService';

import Home from './screens/Home';
import BookDetail from './screens/BookDetail';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Profile from './screens/Profile';
import RouteHandler from './components/RouteHandler';

import './styles.scss';

class App extends Component {
  componentWillMount = () => {
    const user = localstorageService.retrieveUserIdFromLocalStorage();
    if (user) {
      this.props.loadSession();
      this.props.loadBooks();
      this.props.loadWishes();
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <RouteHandler path="/signup" component={Signup} />
          <RouteHandler path="/dashboard" component={Home} />
          <RouteHandler path="/books/:bookId" component={BookDetail} />
          <RouteHandler path="/profile/:userId" component={Profile} />
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
  loadBooks: () => dispatch(booksActions.fetchBooks()),
  loadSession: () => dispatch(sessionActions.loadSession()),
  loadWishes: () => dispatch(rentsActions.loadWishes())
});

App.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  loadSession: PropTypes.func.isRequired,
  loadWishes: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
