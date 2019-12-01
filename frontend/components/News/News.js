import { Component } from 'react';
import { connect } from 'react-redux';
import React from 'react';
import NewsCard from './NewsCard';
import logo from '../../assets/images/logo.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { addArticle, getArticles } from '../../actions';
import axios from 'axios';

class News extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      text: '',
      author: '',
      image: { logo }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.getNews();
  }

  handleChange(e) {
    if (e.target.name == 'image') {
      this.setState({ [e.target.name]: e.target.files[0] });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
    console.log(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();

    var formData = new FormData();
    formData.append('image', this.state.image);

    axios
      .post('/api/file/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })
      .then(res => {
        let imageId = res.data;
        let news = {
          title: this.state.title,
          author: this.state.author,
          description: this.state.description,
          text: this.state.text,
          image: imageId
        };
        this.props.addArticle(news);

        document.getElementById('imageToUpload').value = '';
        this.setState({
          title: '',
          description: '',
          text: '',
          author: '',
          image: { logo }
        });
      });
  }

  loggedIn() {
    if (this.props.user) {
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
            <Form.Group controlId="exampleForm.ControlInput4">
              <Form.Label>Author</Form.Label>
              <Form.Control
                name="author"
                value={this.state.author}
                onChange={this.handleChange}
                type="text"
                placeholder="Author"
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
            <div>
              Image
              <br />
              <input
                type="file"
                id="imageToUpload"
                onChange={this.handleChange}
                name="image"
              />
            </div>
            <br />
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
        {this.props.news.map(article => {
          return (
            <div>
              <div
                onClick={() => this.props.history.push('/news/' + article._id)}
              >
                <NewsCard
                  src={article.image}
                  title={article.title}
                  description={article.description}
                  author={article.author}
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
    user: state.login.user
  };
};

const mapDispatchToProps = (/* dispatch */) => {
  return {
    addArticle: addArticle,
    getNews: getArticles
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(News);
