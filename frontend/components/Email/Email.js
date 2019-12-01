import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { addEmail, getEmails } from '../../actions';
import { connect } from 'react-redux';

class Emails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      email: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  componentDidMount() {
    this.props.getEmails();
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let issue = {
      email: this.state.email
    };
    this.props.addEmail(issue);
    this.setState({
      email: ''
    });
  }
  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  search(item) {
    const lc = item.toLowerCase();
    const filter = this.state.search.toLowerCase();
    return lc.includes(filter);
  }

  loggedIn() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                name="email"
                value={this.state.title}
                onChange={this.handleChange}
                type="email"
                placeholder="Email"
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

  render() {
    return (
      <div>
        {this.loggedIn()}
        <br />
        <Form onSubmit={this.handleSubmit1}>
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
              <th> Email </th>
            </tr>
          </thead>
          <tbody>
            {this.props.emails
              .filter(email => this.search(email.email))
              .map(email => {
                return (
                  <tr>
                    <td> {email.email} </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    emails: state.email.emails,
    loggedIn: state.login.user
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addEmail: addEmail,
    getEmails: getEmails
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Emails);
