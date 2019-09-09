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
    if(!this.props.loggedIn) {
      return <ReportIssue/>
    }
  }
  render() {
    return (
      <div>
        { this.ifLoggedIn() }
        <hr />
        <ViewIssues />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
};

export default connect(mapStateToProps)(Issue);
