import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { login } from "../../actions/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
    if(this.state.username === 'admin' && this.state.password === 'password') {
      this.props.login({
        username: this.state.username,
      });
      this.props.history.push("/");
    } else {
      alert("incorrect username or password");
      console.log({
        username: this.state.username,
        password: this.state.password
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
              name="username"
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              placeholder="First Last"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="password"
              value={this.state.email}
              onChange={this.handleChange}
              type="password"
              placeholder=""
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
    login: login
  };
};

export default connect(null, mapDispatchToProps())(Login);
