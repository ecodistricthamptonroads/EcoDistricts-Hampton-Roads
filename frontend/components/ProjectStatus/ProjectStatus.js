import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import ReactSearchBox from 'react-search-box';
import Table from 'react-bootstrap/Table';

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    data = [
      {
        key: 'project1',
        value: 'Project 1'
      },
      {
        key: 'project2',
        value: 'Project 2'
      },
      {
        key: 'project3',
        value: 'Project 3'
      }
    ];
    // };
  }

  render() {
    return (
      <div>
        <ReactSearchBox
          placeholder="Placeholder"
          value="doe"
          data={this.data}
          callback={record => console.log(record)}
        />
      </div>
    );
  }
}
