import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import ReactSearchBox from 'react-search-box';
import Table from 'react-bootstrap/Table';

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: 'project1',
          value: 'Project 1',
          status: 'Completed'
        },
        {
          key: 'project2',
          value: 'Project 2',
          status: 'Pending'
        },
        {
          key: 'project3',
          value: 'Project 3',
          status: 'Pending'
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <ReactSearchBox
          placeholder="Search for Project"
          value="doe"
          data={this.data}
          callback={record => console.log(record)}
        />
        <button>Search</button>

        <Table>
          <thead>
            <tr>
              <th> Project Name </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> {this.data.key} </td>
              <td> {this.data.status} </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProjectStatus;
