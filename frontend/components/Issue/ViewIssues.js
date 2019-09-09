import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Table from 'react-bootstrap/Table';

class ViewIssues extends Component {
  constructor(props) {
    super(props);
  }

  isLoggedInHeader() {
    if(this.props.loggedIn) {
      return (
        <tr>
          <th> Name </th>
          <th> Email </th>
          <th> Category </th>
          <th> Title </th>
          <th> Description </th>
          <th> Date </th>
        </tr>
      )
    } else {
      return (
        <tr>
          <th> Title </th>
          <th> Description </th>
        </tr>
      )
    }
  }

  isLoggedInBody() {

  }

  render() {
    return (
      <Table>
        <thead>
        { this.isLoggedInHeader() }
        </thead>
        <tbody>
          {
            this.props.issues.map(issue => {
              if(this.props.loggedIn) {
                  return (
                    <tr>
                      <td> {issue.name} </td>
                      <td> {issue.email} </td>
                      <td> {issue.type} </td>
                      <td> {issue.title} </td>
                      <td> {issue.description} </td>
                      <td> {issue.date} </td>
                    </tr>
                )
              } else {
                  return (
                    <tr>
                      <td> {issue.title} </td>
                      <td> {issue.description} </td>
                    </tr>
                  )
              }

            })
          }
        </tbody>
      </Table>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn,
    issues: state.form.issues
  }
};

const mapDispatchToProps = (/* dispatch */) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps())(ViewIssues);
