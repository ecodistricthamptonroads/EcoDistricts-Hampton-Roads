import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';

class AdminIssues extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th> Title </th>
            <th> Description </th>
          </tr>
        </thead>
        <tbody>
          {this.props.issues.map(issue => {
            return (
              <tr>
                <td> {issue.title} </td>
                <td> {issue.description} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default AdminIssues;
