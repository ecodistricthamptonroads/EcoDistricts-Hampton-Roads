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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    let issue = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      type: this.state.type,
      description: this.state.description,
      date: new Date().toLocaleString()
    };
    this.props.addIssue(issue);
    axios.post('/api/issue/', issue).then((issue) => {
      console.log(issue);
      //this.setState({ issues: issue })
    });
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
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Issue Type</Form.Label>
            <Form.Control
              name="type"
              defaultValue={"Community"}
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
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              as="textarea"
              rows="3"
            />
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
