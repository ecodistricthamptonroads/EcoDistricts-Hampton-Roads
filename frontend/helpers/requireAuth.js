import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

export default function requireAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    componentWillMount() {
      this.checkAuth();
    }

    checkAuth() {
      if (!this.props.user) {
        this.props.history.push(`/`);
      }
    }

    render() {
      return this.props.user ? <Component {...this.props} /> : null;
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.login.loggedIn
    };
  };

  const mapDispatchToProps = (/* dispatch */) => {
    return {};
  };

  return withRouter(
    connect(mapStateToProps, mapDispatchToProps())(AuthenticatedComponent)
  );
}
