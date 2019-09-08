import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import ReportIssue from './ReportIssue';
import ViewIssues from './ViewIssues';

class Issue extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ReportIssue />
        <hr />
        <ViewIssues />
      </div>
    );
  }
}

export default Issue;
