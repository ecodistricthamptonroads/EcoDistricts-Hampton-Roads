import { Component } from 'react';
import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {
  addSurvey,
  getSurveys,
  deleteSurvey,
  updateSurvey
} from '../../actions';
import { connect } from 'react-redux';
class Surveys extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notInitial: false,
      search: '',
      title: '',
      link: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmit1 = this.handleSubmit1.bind(this);
  }

  componentDidMount() {
    this.props.getSurveys();
  }

  validateFields() {
    this.setState({ notInitial: true });
    return this.validateTitle() && this.validateLink() && this.validateStatus();
  }

  validateTitle() {
    return this.state.title != '';
  }

  validateLink() {
    var reg = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
    return reg.test(this.state.link);
  }

  validateStatus() {
    return this.state.status != '';
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();

    if (this.validateFields()) {
      let issue = {
        title: this.state.title,
        link: this.state.link,
        status: this.state.status
      };
      this.props.addSurvey(issue);
      this.setState({
        notInitial: false,
        title: '',
        link: '',
        status: ''
      });
    }
  }
  handleSubmit1(e) {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }
  search(item) {
    item = item || '';
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
              <Form.Label>Survey Name</Form.Label>
              <Form.Control
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter Survey Name"
                isInvalid={this.state.notInitial && !this.validateTitle()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a title
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Link</Form.Label>
              <Form.Control
                name="link"
                value={this.state.link}
                onChange={this.handleChange}
                type="text"
                placeholder="Enter URL Link"
                isInvalid={this.state.notInitial && !this.validateLink()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a valid url link starting with http
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Status</Form.Label>
              <Form.Control
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                type="Description"
                placeholder="Enter Description"
                isInvalid={this.state.notInitial && !this.validateStatus()}
              />
              <Form.Control.Feedback type="invalid">
                Please include a survey description
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
  getSurveysList() {
    return (
      <div>
        <div className="Survey-Feedback">Feedback</div>
        <div className="SurveyList">
          {this.props.surveys
            .filter(survey => this.search(survey.title))
            .map(survey => {
              return (
                <a href={survey.link}>
                  <div
                    key={survey.title + survey.link + Math.random()}
                    className="Survey-elem"
                  >
                    {this.props.loggedIn ? (
                      <div className="Survey-admin">
                        <form
                          className="Survey-update-admin"
                          onSubmit={e => {
                            e.preventDefault();
                            this.props.updateSurvey(survey);
                          }}
                        >
                          <input
                            className="Status-input"
                            name="status"
                            defaultValue={survey.status}
                            onChange={e => (survey.status = e.target.value)}
                          />
                          <input type="submit" value="Update" />
                        </form>

                        <div className="Survey-delete">
                          <button
                            onClick={() => this.props.deleteSurvey(survey)}
                          >
                            X
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="Survey-value"> {survey.status} </div>
                    )}
                  </div>
                </a>
              );
            })}
        </div>
      </div>
    );
  }
  getHeading() {
    return <div className="Survey-Heading-div">Survey</div>;
  }

  getSearch() {
    return (
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
    );
  }

  render() {
    return (
      <div>
        {this.loggedIn()}
        <div className="Survey-Body">
          <br />
          {this.getHeading()}
          <br />
          {this.getSurveysList()}
        </div>
        {this.getSearch()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    surveys: state.surveys.surveys,
    loggedIn: state.login.user
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addSurvey: addSurvey,
    getSurveys: getSurveys,
    deleteSurvey: deleteSurvey,
    updateSurvey: updateSurvey
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Surveys);
