import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

class AddJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      title: '',
      description: '',
      responsibilities: '',
      requirements: '',
      link: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateFields() {
    this.setState({ notInitial: true });
    return (
      this.validateTitle() &&
      this.validateDescription() &&
      this.validateResponsibilities() &&
      this.validateRequirements() &&
      this.validateLink()
    );
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateDescription() {
    return this.state.description != '';
  }

  validateResponsibilities() {
    return this.state.responsibilities != '';
  }

  validateRequirements() {
    return this.state.requirements != '';
  }

  validateLink() {
    var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return reg.test(this.state.link);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateFields()) {
      let job = {
        title: this.state.title,
        description: this.state.description,
        responsibilities: this.state.responsibilities,
        requirements: this.state.requirements,
        link: this.state.link
      };
      axios.post('/api/job/', job).then(job => {
        console.log(job);
        this.props.newJob(job.data);
      });
      this.setState({
        notInitial: false,
        title: '',
        description: '',
        responsibilities: '',
        requirements: '',
        link: ''
      });
    }
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
              isInvalid={this.state.notInitial && !this.validateTitle()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a title
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Description">
            <Form.Label>Job Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="2"
              name="description"
              onChange={this.handleChange}
              value={this.state.description}
              type="text"
              placeholder="Enter Job Description"
              isInvalid={this.state.notInitial && !this.validateDescription()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a description
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Responsibilities">
            <Form.Label>Job Responsibilities</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              name="responsibilities"
              onChange={this.handleChange}
              value={this.state.responsibilities}
              type="text"
              placeholder="Enter Job Responsibilities"
              isInvalid={
                this.state.notInitial && !this.validateResponsibilities()
              }
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested responsibilities
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Requirements">
            <Form.Label>Job Requirements</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              name="requirements"
              onChange={this.handleChange}
              value={this.state.requirements}
              type="text"
              placeholder="Enter Job Requirements"
              isInvalid={this.state.notInitial && !this.validateRequirements()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested requirements
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Link">
            <Form.Label>Link</Form.Label>
            <Form.Control
              name="link"
              value={this.state.link}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter URL Link to Job"
              isInvalid={this.state.notInitial && !this.validateLink()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a valid url link starting with http
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <button onClick={this.handleSubmit}>Create New Job</button>
      </div>
    );
  }
}

export default AddJob;
