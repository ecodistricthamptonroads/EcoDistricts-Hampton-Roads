import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { deleteIssue } from '../../actions/index';
import axios from 'axios';

class ViewIssues extends Component {
  constructor(props) {
    super(props);

    this.delete = this.delete.bind(this);
    this.state = { issues: [] };
  }

  componentDidMount() {
    axios.get('/api/issue/').then(issues => {
      this.setState({ issues: issues.data });
    });
  }

  delete(issue) {
    this.props.delete(issue);
  }
  isLoggedInHeader() {
    if (this.props.loggedIn) {
      return (
        <tr>
          <th> Name </th>
          <th> Email </th>
          <th> Category </th>
          <th> Title </th>
          <th> Description </th>
          <th> Date </th>
          <th> Delete? </th>
        </tr>
      );
    } else {
      return (
        <tr>
          <th> Title </th>
          <th> Description </th>
        </tr>
      );
    }
  }

  render() {
    console.log(this.state.issues);
    return (
      <Table>
        <thead>{this.isLoggedInHeader()}</thead>
        <tbody>
          {this.state.issues.map(issue => {
            if (this.props.loggedIn) {
              return (
                <tr>
                  <td> {issue.name} </td>
                  <td> {issue.email} </td>
                  <td> {issue.type} </td>
                  <td> {issue.title} </td>
                  <td> {issue.description} </td>
                  <td> {issue.date} </td>
                  <td>
                    <button onClick={() => this.delete(issue)}>Delete</button>
                  </td>
                </tr>
              );
            } else if (issue.type === 'Community') {
              return (
                <tr>
                  <td> {issue.title} </td>
                  <td> {issue.description} </td>
                </tr>
              );
            }
          })}
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn,
    issues: state.issue.issues
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    delete: deleteIssue
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ViewIssues);
