import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Form from 'react-bootstrap/Form';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      responsibilities: '',
      requirements: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.newJob({
      title: this.state.title,
      description: this.state.description,
      responsibilities: this.state.responsibilities,
      requirements: this.state.requirements
    });
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group controlId="Title">
            <Form.Label>Job Title</Form.Label>
            <Form.Control
              name="title"
              onChange={this.handleChange}
              value={this.state.title}
              type="text"
              placeholder="Enter Job Title"
            />
          </Form.Group>
          <Form.Group controlId="Description">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              type="text"
              placeholder="Enter Job Description"
            />
          </Form.Group>
          <Form.Group controlId="Responsibilities">
            <Form.Label>Job Responsibilities</Form.Label>
            <Form.Control
              name="responsibilities"
              onChange={this.handleChange}
              value={this.state.responsibilities}
              type="text"
              placeholder="Enter Job Responsibilities"
            />
          </Form.Group>
          <Form.Group controlId="Requirements">
            <Form.Label>Job Requirements</Form.Label>
            <Form.Control
              name="requirements"
              onChange={this.handleChange}
              value={this.state.requirements}
              type="text"
              placeholder="Enter Job Requirements"
            />
          </Form.Group>
        </Form>
        <button onClick={this.handleSubmit}>Create New Job</button>
      </div>
    );
  }
}

export default AddJob;
