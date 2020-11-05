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
      company: '',
      location: '',
      salary: '',
      industry: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateFields() {
    this.setState({ notInitial: true });
    return (
      this.validateTitle() &&
      this.validateDescription() &&
      this.validateCompany() &&
      this.validateLocation() &&
      this.validateSalary() &&
      this.validateIndustry()
    );
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateDescription() {
    return this.state.description != '';
  }

  validateCompany() {
    return this.state.company != '';
  }

  validateLocation() {
    return this.state.location != '';
  }

  validateSalary() {
    return this.state.salary != '';
  }

  validateIndustry() {
    return this.state.industry != '';
  }

  //  validateLink() {
  //    var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  //    return reg.test(this.state.link);
  //  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateFields()) {
      let job = {
        title: this.state.title,
        description: this.state.description,
        company: this.state.company,
        location: this.state.location,
        salary: this.state.salary,
        industry: this.state.industry
      };
      axios.post('/api/job/', job).then(job => {
        console.log(job);
        this.props.newJob(job.data);
      });
      this.setState({
        notInitial: false,
        title: '',
        description: '',
        company: '',
        location: '',
        salary: '',
        industry: ''
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
          <Form.Group controlId="Company">
            <Form.Label>Company</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              name="company"
              onChange={this.handleChange}
              value={this.state.company}
              type="text"
              placeholder="Enter Company"
              isInvalid={this.state.notInitial && !this.validateCompany()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested company
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Location">
            <Form.Label>Job Location</Form.Label>
            <Form.Control
              as="textarea"
              rows="6"
              name="location"
              onChange={this.handleChange}
              value={this.state.location}
              type="text"
              placeholder="Enter Job Location"
              isInvalid={this.state.notInitial && !this.validateLocation()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter the requested location
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Job Salary">
            <Form.Label>Job Salary</Form.Label>
            <Form.Control
              name="salary"
              value={this.state.salary}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Job Salary"
              isInvalid={this.state.notInitial && !this.validateSalary()}
            />
            <Form.Control.Feedback type="invalid">
              Please include the requested salary
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="Job Industry">
            <Form.Label>Job Industry</Form.Label>
            <Form.Control
              name="industry"
              value={this.state.industry}
              onChange={this.handleChange}
              type="text"
              placeholder="Enter Job Industry"
              isInvalid={this.state.notInitial && !this.validateIndustry()}
            />
            <Form.Control.Feedback type="invalid">
              Please include the requested industry
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <button onClick={this.handleSubmit}>Create New Job</button>
      </div>
    );
  }
}

export default AddJob;
