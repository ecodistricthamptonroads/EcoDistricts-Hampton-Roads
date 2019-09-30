import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

class ProjectStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  search(item) {
    const lc = item.toLowerCase();
    const filter = this.state.search.toLowerCase();
    return lc.includes(filter);
  }
  render() {
    return (
      <div>
        <br />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Control
              name="search"
              value={this.state.search}
              onChange={this.handleChange}
              type="text"
              placeholder="Search"
            />
          </Form.Group>
        </Form>
        <br />
        <Table>
          <thead>
            <tr>
              <th> Project Name </th>
              <th> Status </th>
            </tr>
          </thead>
          <tbody>
            {this.state.data
              .filter(item => this.search(item.key))
              .map(data1 => {
                return (
                  <tr>
                    <td> {data1.key} </td>
                    <td> {data1.status} </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default ProjectStatus;
