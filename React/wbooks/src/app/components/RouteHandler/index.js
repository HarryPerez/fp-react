/* eslint no-shadow: "off" */
/* eslint-env es6 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from '../Navbar';
import * as localstorageService from '../../../services/localstorageService';
import * as booksActions from '../../../redux/books/actions';
import * as sessionActions from '../../../redux/session/actions';

class RouteHandler extends Component {
  componentWillMount = async () => {
    const user = localstorageService.retrieveUserTokenFromLocalStorage();
    if (user) {
      await this.props.loadBooks(user);
      this.props.loadSession();
    }
  };
  isPublicRequest = props => props.location.pathname === '/' || props.location.pathname === '/signup';

  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={props =>
          this.props.isLogged ? (
            this.isPublicRequest(props) ? (
              <Redirect to="/dashboard" />
            ) : (
              <div>
                <Navbar />
                <Component {...props} />
              </div>
            )
          ) : !this.isPublicRequest(props) ? (
            <Redirect to="/" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

const mapStateToProps = state => ({ isLogged: state.session.isLogged, books: state.books.books });

const mapDispatchToProps = dispatch => ({
  loadBooks: user => dispatch(booksActions.fetchBooks(user)),
  loadSession: () => dispatch(sessionActions.loadSession())
});

RouteHandler.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  loadBooks: PropTypes.func.isRequired,
  loadSession: PropTypes.func.isRequired,
  component: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteHandler);
