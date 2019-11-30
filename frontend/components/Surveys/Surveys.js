import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { addSurvey } from '../../actions';
class Surveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      link: '',
      surveys: [
        {
          ID: 1,
          Title: 'Community Satisfaction Survey',
          Date: '2019-09-22',
          Link:
            'https://docs.google.com/forms/d/1k0P3oD2ztKx7LGavjlNowVT6dawdPOpzk-DHzFH1Etg/edit'
        },
        {
          ID: 2,
          Title: 'Roadside Construction Survey',
          Date: '2019-08-14',
          Link: 'https://www.google.com/'
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(e.target.value);
  }
  handleSubmit(e) {
    e.preventDefault();
    let survey = {
      title: this.state.title,
      link: this.state.link
    };
    this.props.addSurvey(survey);
  }

  form() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="survey.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group controlId="survey.ControlInput2">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                placeholder="Link"
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

  header() {
    let header = Object.keys(this.state.surveys[0]);
    return header.map((key, index) => {
      if (key != 'Link') {
        return <th key={index}>{key}</th>;
      }
    });
  }
  body() {
    return this.state.surveys.map((survey, index) => {
      const { ID, Title, Date, Link } = survey;
      return (
        <tr key={ID}>
          <td>{ID}</td>
          <td>
            <a href={Link}>{Title}</a>
          </td>
          <td>{Date}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        {this.form()}
        <Table>
          <thead>{this.header()}</thead>
          <tbody>{this.body()}</tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveys: state.news.news,
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addSurvey: addSurvey
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Surveys);
