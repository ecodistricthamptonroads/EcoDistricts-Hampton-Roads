import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import ReportIssue from './ReportIssue';
import ViewIssues from './ViewIssues';

class Issue extends Component {
  constructor(props) {
    super(props);
  }

  ifLoggedIn() {
    return <ReportIssue />;
  }
  render() {
    return (
      <div>
        {this.ifLoggedIn()}
        <hr />
        <ViewIssues />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.user
  };
};

export default connect(mapStateToProps)(Issue);
