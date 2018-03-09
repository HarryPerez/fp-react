import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import Navbar from '../Navbar';

class RouteHandler extends Component {
  isPublicRequest = props => props.location.pathname === '/' || props.location.pathname === '/signup';

  handleRender(Element) {
    const render = props =>
      this.props.isLogged ? (
        this.isPublicRequest(props) ? (
          <Redirect to="/dashboard" />
        ) : (
          <div>
            <Navbar />
            <Element {...props} />
          </div>
        )
      ) : !this.isPublicRequest(props) ? (
        <Redirect to="/" />
      ) : (
        <Element {...props} />
      );
    return render;
  }

  render() {
    const { component: Element, ...rest } = this.props;
    return <Route {...rest} render={this.handleRender(Element)} />;
  }
}

const mapStateToProps = state => ({
  isLogged: state.session.isLogged
});

RouteHandler.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(RouteHandler);
