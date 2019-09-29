import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import NewsCard from './NewsCard';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { deleteIssue } from '../../actions';
import { addArticle } from '../../actions/newsAction';
class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      text: ''
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
    this.props.addArticle({
      title: this.state.title,
      description: this.state.description,
      text: this.state.text
    });
  }
  loggedIn() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="Title"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                type="Description"
                placeholder="Description"
              />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput3">
              <Form.Label>Text</Form.Label>
              <Form.Control
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                type="Text"
                placeholder="Text"
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
        <h1> Hampton Roads News </h1>
        <br />
        {this.props.news.reverse().map(article => {
          return (
            <div>
              <div
                onClick={() => this.props.history.push('/news/' + article.id)}
              >
                <NewsCard
                  src={logo}
                  title={article.title}
                  description={article.description}
                />
              </div>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news,
    loggedIn: state.login.loggedIn
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addArticle: addArticle
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(News);
