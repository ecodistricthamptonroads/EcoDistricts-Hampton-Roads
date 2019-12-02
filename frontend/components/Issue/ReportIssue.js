import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addIssue } from '../../actions/index';
import axios from 'axios';

class ReportIssue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      name: '',
      email: '',
      title: '',
      type: 'Community',
      description: '',
      validated: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validateFields() {
    this.setState({ notInitial: true });
    return (
      this.validateName() &&
      this.validateEmail() &&
      this.validateTitle() &&
      this.validateDescription()
    );
  }

  validateName() {
    return this.state.name.includes(' ');
  }

  validateEmail() {
    var reg = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return reg.test(this.state.email.toLowerCase());
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateDescription() {
    return this.state.description != '';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateFields()) {
      let issue = {
        name: this.state.name,
        email: this.state.email,
        title: this.state.title,
        type: this.state.type,
        description: this.state.description
      };
      this.props.addIssue(issue);
      this.setState({
        notInitial: false,
        name: '',
        email: '',
        title: '',
        type: 'Community',
        description: ''
      });
    }
  }

  render() {
    return (
      <div>
        <br />
        <Form
          noValidate
          validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="First Last"
              isInvalid={this.state.notInitial && !this.validateName()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a first and last name (Include a space)
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="name@example.com"
              isInvalid={this.state.notInitial && !this.validateEmail()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid email
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Issue Type</Form.Label>
            <Form.Control
              name="type"
              defaultValue={'Community'}
              onChange={this.handleChange}
              as="select"
            >
              <option value={'Community'}>Community</option>
              <option value={'Housing'}>Housing</option>
              <option value={'Personal'}>Personal</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              type="text"
              placeholder="Title"
              isInvalid={this.state.notInitial && !this.validateTitle()}
            />
            <Form.Control.Feedback type="invalid">
              Please include a title for your issue
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              as="textarea"
              rows="3"
              isInvalid={this.state.notInitial && !this.validateDescription()}
            />
            <Form.Control.Feedback type="invalid">
              Please enter a description of your issue
            </Form.Control.Feedback>
          </Form.Group>
        </Form>
        <button
          variant="primary"
          type="submit"
          value="submit"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (/*dispatch*/) => {
  return {
    addIssue: addIssue
  };
};

export default connect(null, mapDispatchToProps())(ReportIssue);
